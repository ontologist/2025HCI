/**
 * HCI Bot Portal - Server
 * Copyright (c) 2025 Yuri Tijerino. All rights reserved.
 */

// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const Anthropic = require('@anthropic-ai/sdk');
const yaml = require('js-yaml');
const fs = require('fs').promises;

// Configuration
const PORT = process.env.PORT || 3010;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: ANTHROPIC_API_KEY
});

// Database initialization
let db;

async function initializeDatabase() {
    db = await open({
        filename: path.join(__dirname, '../data/bot-portal.db'),
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            name TEXT,
            role TEXT DEFAULT 'student',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS conversations (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            title TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS messages (
            id TEXT PRIMARY KEY,
            conversation_id TEXT NOT NULL,
            role TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            metadata TEXT,
            FOREIGN KEY (conversation_id) REFERENCES conversations(id)
        );

        CREATE TABLE IF NOT EXISTS analytics (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            conversation_id TEXT,
            event_type TEXT NOT NULL,
            event_data TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE INDEX IF NOT EXISTS idx_conversations_user_id ON conversations(user_id);
        CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
        CREATE INDEX IF NOT EXISTS idx_analytics_user_id ON analytics(user_id);
    `);

    console.log('Database initialized');
}

// Load bot configuration
let botConfig;

async function loadBotConfig() {
    try {
        const configPath = path.join(__dirname, '../../bot-config/hci-bot-config.yaml');
        const configFile = await fs.readFile(configPath, 'utf8');
        botConfig = yaml.load(configFile);
        console.log('Bot configuration loaded');
    } catch (error) {
        console.error('Failed to load bot configuration:', error);
        process.exit(1);
    }
}

// Middleware: Authenticate JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// === Authentication Routes === //

// POST /api/auth/register
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        // Validate email domain (Kwansei Gakuin University)
        if (!email.endsWith('@kwansei.ac.jp')) {
            return res.status(400).json({ error: 'Must use university email address' });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Create user
        const userId = generateId();
        await db.run(
            'INSERT INTO users (id, email, password_hash, name) VALUES (?, ?, ?, ?)',
            [userId, email, passwordHash, name]
        );

        // Generate token
        const token = jwt.sign({ id: userId, email }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            token,
            user: { id: userId, email, name }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            token,
            user: { id: user.id, email: user.email, name: user.name }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

// GET /api/auth/verify
app.get('/api/auth/verify', authenticateToken, async (req, res) => {
    try {
        const user = await db.get('SELECT id, email, name, role FROM users WHERE id = ?', [req.user.id]);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ error: 'Verification failed' });
    }
});

// === Conversation Routes === //

// GET /api/conversations
app.get('/api/conversations', authenticateToken, async (req, res) => {
    try {
        const conversations = await db.all(
            'SELECT * FROM conversations WHERE user_id = ? ORDER BY updated_at DESC',
            [req.user.id]
        );

        res.json(conversations);
    } catch (error) {
        console.error('Failed to load conversations:', error);
        res.status(500).json({ error: 'Failed to load conversations' });
    }
});

// POST /api/conversations
app.post('/api/conversations', authenticateToken, async (req, res) => {
    try {
        const { title } = req.body;
        const conversationId = generateId();

        await db.run(
            'INSERT INTO conversations (id, user_id, title) VALUES (?, ?, ?)',
            [conversationId, req.user.id, title || 'New Conversation']
        );

        const conversation = await db.get('SELECT * FROM conversations WHERE id = ?', [conversationId]);

        res.json(conversation);
    } catch (error) {
        console.error('Failed to create conversation:', error);
        res.status(500).json({ error: 'Failed to create conversation' });
    }
});

// GET /api/conversations/:id/messages
app.get('/api/conversations/:id/messages', authenticateToken, async (req, res) => {
    try {
        const messages = await db.all(
            `SELECT m.* FROM messages m
             JOIN conversations c ON m.conversation_id = c.id
             WHERE c.id = ? AND c.user_id = ?
             ORDER BY m.timestamp ASC`,
            [req.params.id, req.user.id]
        );

        res.json(messages);
    } catch (error) {
        console.error('Failed to load messages:', error);
        res.status(500).json({ error: 'Failed to load messages' });
    }
});

// POST /api/conversations/:id/messages
app.post('/api/conversations/:id/messages', authenticateToken, async (req, res) => {
    try {
        const { content, attachments } = req.body;
        const conversationId = req.params.id;

        // Verify conversation ownership
        const conversation = await db.get(
            'SELECT * FROM conversations WHERE id = ? AND user_id = ?',
            [conversationId, req.user.id]
        );

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        // Save user message
        const userMessageId = generateId();
        await db.run(
            'INSERT INTO messages (id, conversation_id, role, content) VALUES (?, ?, ?, ?)',
            [userMessageId, conversationId, 'user', content]
        );

        // Get conversation history
        const history = await db.all(
            'SELECT role, content FROM messages WHERE conversation_id = ? ORDER BY timestamp ASC',
            [conversationId]
        );

        // Generate bot response
        const botResponse = await generateBotResponse(history, botConfig);

        // Save bot message
        const botMessageId = generateId();
        await db.run(
            'INSERT INTO messages (id, conversation_id, role, content) VALUES (?, ?, ?, ?)',
            [botMessageId, conversationId, 'assistant', botResponse]
        );

        // Update conversation timestamp
        await db.run(
            'UPDATE conversations SET updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [conversationId]
        );

        // Log analytics
        await logAnalytics(req.user.id, conversationId, 'message_sent', { content_length: content.length });

        const botMessage = await db.get('SELECT * FROM messages WHERE id = ?', [botMessageId]);

        res.json(botMessage);
    } catch (error) {
        console.error('Failed to send message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// GET /api/conversations/export
app.get('/api/conversations/export', authenticateToken, async (req, res) => {
    try {
        const conversations = await db.all(
            `SELECT c.*, m.id as message_id, m.role, m.content, m.timestamp
             FROM conversations c
             LEFT JOIN messages m ON c.id = m.conversation_id
             WHERE c.user_id = ?
             ORDER BY c.created_at DESC, m.timestamp ASC`,
            [req.user.id]
        );

        // Group by conversation
        const grouped = conversations.reduce((acc, row) => {
            if (!acc[row.id]) {
                acc[row.id] = {
                    id: row.id,
                    title: row.title,
                    created_at: row.created_at,
                    messages: []
                };
            }
            if (row.message_id) {
                acc[row.id].messages.push({
                    role: row.role,
                    content: row.content,
                    timestamp: row.timestamp
                });
            }
            return acc;
        }, {});

        const exportData = Object.values(grouped);

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename=conversations.json');
        res.json(exportData);
    } catch (error) {
        console.error('Export failed:', error);
        res.status(500).json({ error: 'Export failed' });
    }
});

// === Bot Response Generation === //
async function generateBotResponse(history, config) {
    try {
        const systemPrompt = config.llm_configuration.system_prompt_template;

        const response = await anthropic.messages.create({
            model: config.llm_configuration.model,
            max_tokens: config.llm_configuration.max_tokens,
            temperature: config.llm_configuration.temperature,
            system: systemPrompt,
            messages: history.map(msg => ({
                role: msg.role === 'assistant' ? 'assistant' : 'user',
                content: msg.content
            }))
        });

        return response.content[0].text;
    } catch (error) {
        console.error('Failed to generate bot response:', error);
        return 'I apologize, but I encountered an error. Please try again. | 申し訳ありませんが、エラーが発生しました。もう一度お試しください。';
    }
}

// === Analytics === //
async function logAnalytics(userId, conversationId, eventType, eventData) {
    try {
        await db.run(
            'INSERT INTO analytics (id, user_id, conversation_id, event_type, event_data) VALUES (?, ?, ?, ?, ?)',
            [generateId(), userId, conversationId, eventType, JSON.stringify(eventData)]
        );
    } catch (error) {
        console.error('Failed to log analytics:', error);
    }
}

// === Utilities === //
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// === WebSocket Server === //
const server = app.listen(PORT, () => {
    console.log(`HCI Bot Portal server running on http://localhost:${PORT}`);
});

const wss = new WebSocket.Server({ server, path: '/api/bot/ws' });

wss.on('connection', (ws, req) => {
    console.log('WebSocket client connected');

    // Authenticate via query parameter
    const token = new URL(req.url, `http://${req.headers.host}`).searchParams.get('token');

    if (!token) {
        ws.close(1008, 'Token required');
        return;
    }

    let user;
    try {
        user = jwt.verify(token, JWT_SECRET);
    } catch (error) {
        ws.close(1008, 'Invalid token');
        return;
    }

    ws.on('message', async (data) => {
        try {
            const message = JSON.parse(data);

            if (message.type === 'message') {
                // Send typing indicator
                ws.send(JSON.stringify({ type: 'typing', isTyping: true }));

                // Get conversation history
                const history = await db.all(
                    'SELECT role, content FROM messages WHERE conversation_id = ? ORDER BY timestamp ASC',
                    [message.conversationId]
                );

                // Add user message to history
                history.push({ role: 'user', content: message.content });

                // Save user message
                await db.run(
                    'INSERT INTO messages (id, conversation_id, role, content) VALUES (?, ?, ?, ?)',
                    [generateId(), message.conversationId, 'user', message.content]
                );

                // Generate bot response
                const botResponse = await generateBotResponse(history, botConfig);

                // Save bot message
                const botMessageId = generateId();
                await db.run(
                    'INSERT INTO messages (id, conversation_id, role, content) VALUES (?, ?, ?, ?)',
                    [botMessageId, message.conversationId, 'assistant', botResponse]
                );

                // Send bot response
                const botMessage = await db.get('SELECT * FROM messages WHERE id = ?', [botMessageId]);
                ws.send(JSON.stringify({ type: 'message', message: botMessage }));

                // Stop typing indicator
                ws.send(JSON.stringify({ type: 'typing', isTyping: false }));
            }
        } catch (error) {
            console.error('WebSocket message error:', error);
            ws.send(JSON.stringify({ type: 'error', message: 'Failed to process message' }));
        }
    });

    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

// === Initialize Server === //
async function start() {
    await initializeDatabase();
    await loadBotConfig();
    console.log('Bot portal ready');
}

start().catch(error => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
