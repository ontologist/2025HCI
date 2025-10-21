/**
 * AI Service
 * Handles communication with AI services (OpenAI, Claude, etc.)
 * 
 * AIサービス
 * AIサービス（OpenAI、Claudeなど）との通信を処理
 */

const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');
const logger = require('../utils/logger');

class AIService {
  constructor() {
    this.openai = null;
    this.anthropic = null;
    this.primaryService = this.initializeServices();
  }

  initializeServices() {
    // Initialize OpenAI if API key is provided
    if (process.env.OPENAI_API_KEY) {
      this.openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      logger.info('OpenAI service initialized');
    }

    // Initialize Anthropic if API key is provided
    if (process.env.ANTHROPIC_API_KEY) {
      this.anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });
      logger.info('Anthropic service initialized');
    }

    // Determine primary service
    if (this.openai) return 'openai';
    if (this.anthropic) return 'anthropic';
    
    throw new Error('No AI service configured. Please set OPENAI_API_KEY or ANTHROPIC_API_KEY');
  }

  async generateResponse(message, history = [], context = {}) {
    try {
      const systemPrompt = this.buildSystemPrompt(context);
      const conversationHistory = this.formatHistory(history);
      
      if (this.primaryService === 'openai') {
        return await this.generateOpenAIResponse(systemPrompt, conversationHistory, message);
      } else if (this.primaryService === 'anthropic') {
        return await this.generateAnthropicResponse(systemPrompt, conversationHistory, message);
      }
    } catch (error) {
      logger.error('AI service error:', error);
      throw error;
    }
  }

  buildSystemPrompt(context) {
    const basePrompt = `You are the HCI-101 Design Mentor, an AI assistant helping students learn Human-Computer Interaction and design thinking. You are helpful, encouraging, and professional.

Key characteristics:
- You provide guidance on HCI principles, design thinking, and interface design
- You support both English and Japanese communication (bilingual)
- You encourage hands-on learning and practical application
- You help students understand user-centered design principles
- You guide students through design processes and methodologies

Current context:
- Course: HCI-101 - Introduction to Human-Computer Interaction
- Instructor: Yuri Tijerino
- Focus: Smart devices and AI chatbot interfaces
- Approach: 80% hands-on activities, 20% lecture
- Tools: Figma, Adobe XD, no-code platforms

When responding:
1. Be encouraging and supportive
2. Provide specific, actionable guidance
3. Use examples from real-world interfaces
4. Ask clarifying questions when needed
5. Support both English and Japanese as requested
6. Focus on practical, hands-on learning

${context.activityType ? `Current activity: ${context.activityType}` : ''}
${context.weekNumber ? `Week: ${context.weekNumber}` : ''}
${context.isGreeting ? 'This is a greeting message for a new session.' : ''}`;

    return basePrompt;
  }

  formatHistory(history) {
    return history.map(msg => ({
      role: msg.message_type === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));
  }

  async generateOpenAIResponse(systemPrompt, history, message) {
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ];

    const response = await this.openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      messages: messages,
      max_tokens: 1000,
      temperature: 0.7,
    });

    return {
      content: response.choices[0].message.content,
      metadata: {
        model: response.model,
        usage: response.usage,
        service: 'openai'
      }
    };
  }

  async generateAnthropicResponse(systemPrompt, history, message) {
    const messages = [
      ...history,
      { role: 'user', content: message }
    ];

    const response = await this.anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      system: systemPrompt,
      messages: messages,
    });

    return {
      content: response.content[0].text,
      metadata: {
        model: response.model,
        usage: response.usage,
        service: 'anthropic'
      }
    };
  }

  // Specialized methods for different types of interactions
  async generateGreeting(activityType, weekNumber) {
    const greetingMessages = {
      'interface-analysis': `Hello! I'm your HCI-101 Design Mentor. I'm here to help you analyze interfaces and understand what makes good design. 

Let's start by exploring some smart device interfaces you use daily. What interfaces would you like to analyze today? Remember, we're looking for both good and bad examples to learn from.

こんにちは！HCI-101デザインメンターです。インターフェースを分析し、良いデザインの要素を理解するお手伝いをします。

日常的に使用するスマートデバイスインターフェースを探索してみましょう。今日はどのインターフェースを分析したいですか？学習のために良い例と悪い例の両方を探しています。`,

      'design-thinking': `Welcome to the Design Thinking process! I'll guide you through each step: Empathize, Define, Ideate, Prototype, and Test.

Let's start with understanding your users. Who are you designing for? What problems are you trying to solve?

デザイン思考プロセスへようこそ！共感、定義、発想、試作、テストの各ステップをガイドします。

ユーザーを理解することから始めましょう。誰のためにデザインしていますか？どのような問題を解決しようとしていますか？`,

      'default': `Hello! I'm your HCI-101 Design Mentor. I'm excited to help you learn about Human-Computer Interaction and design thinking.

What would you like to work on today? I can help with:
- Interface analysis and critique
- Design thinking processes
- HCI principles and concepts
- Prototype feedback
- Project guidance

こんにちは！HCI-101デザインメンターです。ヒューマンコンピュータインタラクションとデザイン思考の学習をお手伝いできることを嬉しく思います。

今日は何に取り組みたいですか？以下のことをサポートできます：
- インターフェース分析と批評
- デザイン思考プロセス
- HCI原則とコンセプト
- プロトタイプフィードバック
- プロジェクトガイダンス`
    };

    return {
      content: greetingMessages[activityType] || greetingMessages.default,
      metadata: {
        type: 'greeting',
        activityType: activityType,
        weekNumber: weekNumber,
        service: this.primaryService
      }
    };
  }

  async provideDesignFeedback(designDescription, context) {
    const feedbackPrompt = `Please provide constructive feedback on this design: ${designDescription}

Consider:
- HCI principles (usability, learnability, accessibility)
- User-centered design
- Design patterns and best practices
- Specific improvement suggestions

Be encouraging but honest about areas for improvement.`;

    return await this.generateResponse(feedbackPrompt, [], context);
  }

  async explainHCIConcept(concept, level = 'beginner') {
    const explanationPrompt = `Explain the HCI concept "${concept}" for a ${level} level student. 

Include:
- Clear definition
- Real-world examples
- Why it matters in interface design
- How to apply it in practice

Make it practical and engaging.`;

    return await this.generateResponse(explanationPrompt, [], { type: 'concept_explanation' });
  }
}

// Create singleton instance
const aiService = new AIService();

// Export functions for use in routes
async function generateBotResponse(message, history = [], context = {}) {
  // Handle special cases
  if (context.isGreeting) {
    return await aiService.generateGreeting(context.activityType, context.weekNumber);
  }

  return await aiService.generateResponse(message, history, context);
}

async function provideDesignFeedback(designDescription, context) {
  return await aiService.provideDesignFeedback(designDescription, context);
}

async function explainHCIConcept(concept, level = 'beginner') {
  return await aiService.explainHCIConcept(concept, level);
}

module.exports = {
  generateBotResponse,
  provideDesignFeedback,
  explainHCIConcept,
  aiService
};
