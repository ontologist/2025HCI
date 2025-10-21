/**
 * Bot Routes
 * API endpoints for AI design mentor interactions
 * 
 * ボットルート
 * AIデザインメンター相互作用用APIエンドポイント
 */

const express = require('express');
const router = express.Router();
const db = require('../database/connection');
const logger = require('../utils/logger');
const { authenticateToken } = require('../middleware/auth');
const { generateBotResponse } = require('../services/aiService');

// Get bot information and personality
router.get('/info', async (req, res) => {
  try {
    const settings = await db.all('SELECT * FROM bot_settings');
    const botInfo = {};
    
    settings.forEach(setting => {
      botInfo[setting.setting_key] = setting.setting_value;
    });

    res.json({
      success: true,
      data: {
        name: botInfo.bot_name,
        language: botInfo.bot_language,
        tone: botInfo.bot_tone,
        course: botInfo.course_name,
        instructor: botInfo.instructor_name,
        capabilities: [
          'Design thinking guidance',
          'HCI concept explanation',
          'Interface analysis',
          'Prototype feedback',
          'Assessment support',
          'Bilingual communication'
        ]
      }
    });
  } catch (error) {
    logger.error('Error getting bot info:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get bot information',
      ja: 'ボット情報の取得に失敗しました'
    });
  }
});

// Send message to bot and get response
router.post('/chat', authenticateToken, async (req, res) => {
  try {
    const { message, sessionId, context } = req.body;
    const studentId = req.user.id;

    if (!message || !sessionId) {
      return res.status(400).json({
        success: false,
        error: 'Message and session ID are required',
        ja: 'メッセージとセッションIDが必要です'
      });
    }

    // Save user message to database
    await db.run(
      'INSERT INTO conversations (student_id, session_id, message_type, content, metadata) VALUES (?, ?, ?, ?, ?)',
      [studentId, sessionId, 'user', message, JSON.stringify({ context })]
    );

    // Get conversation history for context
    const history = await db.all(
      'SELECT message_type, content, created_at FROM conversations WHERE student_id = ? AND session_id = ? ORDER BY created_at DESC LIMIT 10',
      [studentId, sessionId]
    );

    // Generate bot response
    const botResponse = await generateBotResponse(message, history, context);

    // Save bot response to database
    await db.run(
      'INSERT INTO conversations (student_id, session_id, message_type, content, metadata) VALUES (?, ?, ?, ?, ?)',
      [studentId, sessionId, 'bot', botResponse.content, JSON.stringify(botResponse.metadata)]
    );

    res.json({
      success: true,
      data: {
        message: botResponse.content,
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
        metadata: botResponse.metadata
      }
    });

  } catch (error) {
    logger.error('Error in bot chat:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process message',
      ja: 'メッセージの処理に失敗しました'
    });
  }
});

// Get conversation history
router.get('/conversations/:sessionId', authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params;
    const studentId = req.user.id;

    const conversations = await db.all(
      'SELECT message_type, content, created_at, metadata FROM conversations WHERE student_id = ? AND session_id = ? ORDER BY created_at ASC',
      [studentId, sessionId]
    );

    res.json({
      success: true,
      data: conversations
    });

  } catch (error) {
    logger.error('Error getting conversation history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get conversation history',
      ja: '会話履歴の取得に失敗しました'
    });
  }
});

// Get all sessions for a student
router.get('/sessions', authenticateToken, async (req, res) => {
  try {
    const studentId = req.user.id;

    const sessions = await db.all(
      `SELECT DISTINCT session_id, MIN(created_at) as started_at, MAX(created_at) as last_activity
       FROM conversations 
       WHERE student_id = ? 
       GROUP BY session_id 
       ORDER BY last_activity DESC`,
      [studentId]
    );

    res.json({
      success: true,
      data: sessions
    });

  } catch (error) {
    logger.error('Error getting sessions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get sessions',
      ja: 'セッションの取得に失敗しました'
    });
  }
});

// Start new session
router.post('/sessions', authenticateToken, async (req, res) => {
  try {
    const { activityType, weekNumber } = req.body;
    const studentId = req.user.id;
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create initial bot greeting
    const greeting = await generateBotResponse(
      'Start new session',
      [],
      { activityType, weekNumber, isGreeting: true }
    );

    // Save greeting to database
    await db.run(
      'INSERT INTO conversations (student_id, session_id, message_type, content, metadata) VALUES (?, ?, ?, ?, ?)',
      [studentId, sessionId, 'bot', greeting.content, JSON.stringify(greeting.metadata)]
    );

    res.json({
      success: true,
      data: {
        sessionId: sessionId,
        greeting: greeting.content,
        metadata: greeting.metadata
      }
    });

  } catch (error) {
    logger.error('Error starting new session:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to start new session',
      ja: '新しいセッションの開始に失敗しました'
    });
  }
});

// Get design thinking workflow steps
router.get('/workflows/:workflowType', authenticateToken, async (req, res) => {
  try {
    const { workflowType } = req.params;
    
    const workflows = {
      'design-thinking': {
        name: 'Design Thinking Process',
        steps: [
          {
            id: 'empathize',
            name: 'Empathize',
            description: 'Understand your users through research and observation',
            activities: ['User interviews', 'Surveys', 'Observations', 'Persona creation']
          },
          {
            id: 'define',
            name: 'Define',
            description: 'Clearly articulate the problem you are trying to solve',
            activities: ['Problem statement', 'User needs analysis', 'Success criteria']
          },
          {
            id: 'ideate',
            name: 'Ideate',
            description: 'Generate many ideas without judgment',
            activities: ['Brainstorming', 'Sketching', 'Concept development']
          },
          {
            id: 'prototype',
            name: 'Prototype',
            description: 'Build quick, low-cost versions to test ideas',
            activities: ['Paper prototypes', 'Wireframes', 'Interactive prototypes']
          },
          {
            id: 'test',
            name: 'Test',
            description: 'Test with real users and iterate based on feedback',
            activities: ['Usability testing', 'User feedback', 'Design iteration']
          }
        ]
      },
      'interface-analysis': {
        name: 'Interface Analysis Framework',
        steps: [
          {
            id: 'select',
            name: 'Select Interfaces',
            description: 'Choose 2-3 interfaces to analyze',
            activities: ['Mobile apps', 'Web interfaces', 'Smart device interfaces']
          },
          {
            id: 'observe',
            name: 'Observe and Document',
            description: 'Take screenshots and note first impressions',
            activities: ['Screenshot capture', 'Initial observations', 'User task identification']
          },
          {
            id: 'analyze',
            name: 'Analyze Design',
            description: 'Apply HCI principles to identify strengths and weaknesses',
            activities: ['Usability evaluation', 'Accessibility check', 'Design pattern analysis']
          },
          {
            id: 'reflect',
            name: 'Reflect and Improve',
            description: 'Document learnings and suggest improvements',
            activities: ['Key insights', 'Improvement suggestions', 'Design principles application']
          }
        ]
      }
    };

    const workflow = workflows[workflowType];
    if (!workflow) {
      return res.status(404).json({
        success: false,
        error: 'Workflow not found',
        ja: 'ワークフローが見つかりません'
      });
    }

    res.json({
      success: true,
      data: workflow
    });

  } catch (error) {
    logger.error('Error getting workflow:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get workflow',
      ja: 'ワークフローの取得に失敗しました'
    });
  }
});

module.exports = router;
