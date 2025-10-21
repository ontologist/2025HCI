/**
 * HCI Bot Portal - Client-Side Application
 * Copyright (c) 2025 Yuri Tijerino. All rights reserved.
 */

// Configuration
const API_BASE_URL = 'http://localhost:3011/api';
const WS_URL = 'ws://localhost:3011/api/bot/ws';

// State Management
const state = {
    user: null,
    currentConversation: null,
    conversations: [],
    messages: [],
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'en',
    accessibility: localStorage.getItem('accessibility') || 'normal',
    isTyping: false,
    socket: null
};

// DOM Elements
const elements = {
    loginScreen: document.getElementById('loginScreen'),
    chatScreen: document.getElementById('chatScreen'),
    ssoLoginBtn: document.getElementById('ssoLoginBtn'),
    emailLoginForm: document.getElementById('emailLoginForm'),
    logoutBtn: document.getElementById('logoutBtn'),
    userName: document.getElementById('userName'),
    userInfo: document.getElementById('userInfo'),
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    languageToggle: document.getElementById('languageToggle'),
    languageIcon: document.getElementById('languageIcon'),
    languageText: document.getElementById('languageText'),
    accessibilityToggle: document.getElementById('accessibilityToggle'),
    messagesContainer: document.getElementById('messagesContainer'),
    messageForm: document.getElementById('messageForm'),
    messageInput: document.getElementById('messageInput'),
    sendBtn: document.getElementById('sendBtn'),
    typingIndicator: document.getElementById('typingIndicator'),
    welcomeMessage: document.getElementById('welcomeMessage'),
    conversationList: document.getElementById('conversationList'),
    newChatBtn: document.getElementById('newChatBtn'),
    exportBtn: document.getElementById('exportBtn'),
    attachBtn: document.getElementById('attachBtn'),
    fileInput: document.getElementById('fileInput'),
    quickActionBtns: document.querySelectorAll('.quick-action-btn')
};

// === Initialization === //
function init() {
    // Apply saved preferences
    applyTheme(state.theme);
    applyAccessibility(state.accessibility);

    // Check for existing session
    checkSession();

    // Setup event listeners
    setupEventListeners();

    // Auto-resize textarea
    setupAutoResize();
}

// === Session Management === //
async function checkSession() {
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                state.user = data.user;
                showChatScreen();
                connectWebSocket();
                loadConversations();
            } else {
                localStorage.removeItem('authToken');
                showLoginScreen();
            }
        } catch (error) {
            console.error('Session verification failed:', error);
            showLoginScreen();
        }
    } else {
        showLoginScreen();
    }
}

async function login(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('authToken', data.token);
            state.user = data.user;
            showChatScreen();
            connectWebSocket();
            loadConversations();
        } else {
            const error = await response.json();
            showError(error.message || 'Login failed | ログインに失敗しました');
        }
    } catch (error) {
        console.error('Login error:', error);
        showError('Connection error | 接続エラー');
    }
}

function logout() {
    localStorage.removeItem('authToken');
    if (state.socket) {
        state.socket.close();
    }
    state.user = null;
    state.conversations = [];
    state.messages = [];
    state.currentConversation = null;
    showLoginScreen();
}

// === WebSocket Connection === //
function connectWebSocket() {
    const token = localStorage.getItem('authToken');
    state.socket = new WebSocket(`${WS_URL}?token=${token}`);

    state.socket.onopen = () => {
        console.log('WebSocket connected');
    };

    state.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        handleWebSocketMessage(data);
    };

    state.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    state.socket.onclose = () => {
        console.log('WebSocket disconnected');
        // Attempt to reconnect after 5 seconds
        setTimeout(() => {
            if (state.user) {
                connectWebSocket();
            }
        }, 5000);
    };
}

function handleWebSocketMessage(data) {
    switch (data.type) {
        case 'message':
            addMessage(data.message);
            break;
        case 'typing':
            showTypingIndicator(data.isTyping);
            break;
        case 'error':
            showError(data.message);
            break;
        default:
            console.log('Unknown message type:', data.type);
    }
}

// === Screen Navigation === //
function showLoginScreen() {
    elements.loginScreen.classList.add('active');
    elements.chatScreen.classList.remove('active');
    elements.userInfo.style.display = 'none';
}

function showChatScreen() {
    elements.loginScreen.classList.remove('active');
    elements.chatScreen.classList.add('active');
    elements.userInfo.style.display = 'flex';
    elements.userName.textContent = state.user?.name || state.user?.email;
}

// === Conversations === //
async function loadConversations() {
    try {
        const response = await fetch(`${API_BASE_URL}/conversations`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });

        if (response.ok) {
            state.conversations = await response.json();
            renderConversations();

            // Load most recent conversation or create new one
            if (state.conversations.length > 0) {
                loadConversation(state.conversations[0].id);
            } else {
                createNewConversation();
            }
        }
    } catch (error) {
        console.error('Failed to load conversations:', error);
    }
}

function renderConversations() {
    elements.conversationList.innerHTML = state.conversations.map(conv => `
        <div class="conversation-item ${conv.id === state.currentConversation?.id ? 'active' : ''}"
             data-conversation-id="${conv.id}">
            <div class="conversation-title">${conv.title || 'New Conversation | 新しい会話'}</div>
            <div class="conversation-date">${formatDate(conv.updated_at)}</div>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.dataset.conversationId;
            loadConversation(id);
        });
    });
}

async function createNewConversation() {
    try {
        const response = await fetch(`${API_BASE_URL}/conversations`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'New Conversation | 新しい会話'
            })
        });

        if (response.ok) {
            const conversation = await response.json();
            state.conversations.unshift(conversation);
            state.currentConversation = conversation;
            state.messages = [];
            renderConversations();
            renderMessages();
            elements.welcomeMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Failed to create conversation:', error);
    }
}

async function loadConversation(conversationId) {
    try {
        const response = await fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });

        if (response.ok) {
            state.messages = await response.json();
            state.currentConversation = state.conversations.find(c => c.id === conversationId);
            renderConversations();
            renderMessages();

            // Hide welcome message if there are messages
            elements.welcomeMessage.style.display = state.messages.length === 0 ? 'block' : 'none';
        }
    } catch (error) {
        console.error('Failed to load conversation:', error);
    }
}

// === Messages === //
function renderMessages() {
    elements.messagesContainer.innerHTML = state.messages.map(msg => createMessageHTML(msg)).join('');
    scrollToBottom();
}

function createMessageHTML(message) {
    const isBot = message.role === 'assistant';
    const avatar = isBot ? '🤖' : '👤';
    const author = isBot ? 'HCI Assistant | HCIアシスタント' : state.user?.name || 'You | あなた';

    return `
        <div class="message ${isBot ? 'bot' : 'user'}">
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <div class="message-header">
                    <span class="message-author">${author}</span>
                    <span class="message-time">${formatTime(message.timestamp)}</span>
                </div>
                <div class="message-body">
                    ${formatMessageContent(message.content)}
                </div>
            </div>
        </div>
    `;
}

function addMessage(message) {
    state.messages.push(message);
    elements.messagesContainer.insertAdjacentHTML('beforeend', createMessageHTML(message));
    elements.welcomeMessage.style.display = 'none';
    scrollToBottom();
    showTypingIndicator(false);
}

async function sendMessage(content, attachments = []) {
    if (!content.trim() && attachments.length === 0) return;

    // Add user message immediately
    const userMessage = {
        role: 'user',
        content: content,
        timestamp: new Date().toISOString()
    };
    addMessage(userMessage);

    // Clear input
    elements.messageInput.value = '';
    elements.messageInput.style.height = 'auto';

    // Show typing indicator
    showTypingIndicator(true);

    try {
        // Send via WebSocket if connected, otherwise use HTTP
        if (state.socket && state.socket.readyState === WebSocket.OPEN) {
            state.socket.send(JSON.stringify({
                type: 'message',
                conversationId: state.currentConversation.id,
                content: content,
                attachments: attachments
            }));
        } else {
            // Fallback to HTTP
            const response = await fetch(`${API_BASE_URL}/conversations/${state.currentConversation.id}/messages`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: content,
                    attachments: attachments
                })
            });

            if (response.ok) {
                const botMessage = await response.json();
                addMessage(botMessage);
            } else {
                showError('Failed to send message | メッセージの送信に失敗しました');
                showTypingIndicator(false);
            }
        }
    } catch (error) {
        console.error('Failed to send message:', error);
        showError('Connection error | 接続エラー');
        showTypingIndicator(false);
    }
}

function showTypingIndicator(show) {
    state.isTyping = show;
    elements.typingIndicator.style.display = show ? 'flex' : 'none';
    if (show) {
        scrollToBottom();
    }
}

// === UI Utilities === //
function formatMessageContent(content) {
    // Simple markdown-like formatting
    return content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Today | 今日';
    if (days === 1) return 'Yesterday | 昨日';
    if (days < 7) return `${days} days ago | ${days}日前`;
    return date.toLocaleDateString();
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
    if (document.getElementById('autoScrollEnabled')?.checked !== false) {
        elements.messagesContainer.scrollTop = elements.messagesContainer.scrollHeight;
    }
}

function showError(message) {
    // Simple error notification (can be enhanced with toast notifications)
    alert(message);
}

// === Theme and Preferences === //
function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (elements.themeIcon) {
        elements.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

function applyAccessibility(mode) {
    state.accessibility = mode;
    document.documentElement.setAttribute('data-accessibility', mode);
    localStorage.setItem('accessibility', mode);
}

function toggleAccessibility() {
    const newMode = state.accessibility === 'normal' ? 'high-contrast' : 'normal';
    applyAccessibility(newMode);
}

// === Export Functionality === //
async function exportConversations() {
    try {
        const response = await fetch(`${API_BASE_URL}/conversations/export`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `hci-bot-conversations-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    } catch (error) {
        console.error('Failed to export conversations:', error);
        showError('Export failed | エクスポートに失敗しました');
    }
}

// === Event Listeners === //
function setupEventListeners() {
    // Login
    elements.ssoLoginBtn?.addEventListener('click', () => {
        // In production, this would redirect to SSO provider
        alert('SSO login would redirect to university authentication | SSO ログインは大学認証にリダイレクトします');
    });

    elements.emailLoginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        login({
            email: formData.get('email'),
            password: formData.get('password')
        });
    });

    elements.logoutBtn?.addEventListener('click', logout);

    // Theme and preferences
    elements.themeToggle?.addEventListener('click', toggleTheme);
    elements.accessibilityToggle?.addEventListener('click', toggleAccessibility);

    // Messaging
    elements.messageForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = elements.messageInput.value.trim();
        if (content) {
            sendMessage(content);
        }
    });

    // Quick actions
    elements.quickActionBtns?.forEach(btn => {
        btn.addEventListener('click', () => {
            const prompt = btn.dataset.prompt;
            elements.messageInput.value = prompt;
            elements.messageInput.focus();
        });
    });

    // Conversations
    elements.newChatBtn?.addEventListener('click', createNewConversation);
    elements.exportBtn?.addEventListener('click', exportConversations);

    // File attachment
    elements.attachBtn?.addEventListener('click', () => {
        elements.fileInput?.click();
    });

    elements.fileInput?.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle file upload (implement as needed)
            console.log('File selected:', file.name);
            // TODO: Implement file upload
        }
    });

    // Keyboard shortcuts
    elements.messageInput?.addEventListener('keydown', (e) => {
        // Send on Ctrl/Cmd + Enter
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            elements.messageForm?.dispatchEvent(new Event('submit'));
        }
    });
}

function setupAutoResize() {
    elements.messageInput?.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 150) + 'px';
    });
}

// === Initialize Application === //
document.addEventListener('DOMContentLoaded', init);

// Development helper: Auto-login for testing
if ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
    window.location.search.includes('dev=true')) {
    console.log('Development mode: Auto-login enabled');
    setTimeout(() => {
        if (!state.user) {
            // Mock login for development
            state.user = { id: 'dev-user', name: 'Dev User', email: 'dev@kwansei.ac.jp' };
            localStorage.setItem('authToken', 'dev-token');
            showChatScreen();
            loadConversations();
        }
    }, 500);
}
