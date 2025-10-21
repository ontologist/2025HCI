/**
 * Database Connection and Initialization
 * SQLite database for local bot portal
 * 
 * データベース接続と初期化
 * ローカルボットポータル用SQLiteデータベース
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');

class Database {
  constructor() {
    this.db = null;
    this.dbPath = process.env.DB_PATH || './data/hci101_bot.db';
  }

  async initialize() {
    try {
      // Ensure data directory exists
      const dataDir = path.dirname(this.dbPath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // Connect to database
      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          logger.error('Error opening database:', err);
          throw err;
        }
        logger.info('Connected to SQLite database');
      });

      // Enable foreign keys
      await this.run('PRAGMA foreign_keys = ON');
      
      // Create tables
      await this.createTables();
      
      return this.db;
    } catch (error) {
      logger.error('Database initialization failed:', error);
      throw error;
    }
  }

  async createTables() {
    const tables = [
      // Students table
      `CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        language_preference TEXT DEFAULT 'bilingual',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,

      // Bot conversations table
      `CREATE TABLE IF NOT EXISTS conversations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        session_id TEXT NOT NULL,
        message_type TEXT NOT NULL, -- 'user' or 'bot'
        content TEXT NOT NULL,
        metadata TEXT, -- JSON string for additional data
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students (id)
      )`,

      // Student progress table
      `CREATE TABLE IF NOT EXISTS student_progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        week_number INTEGER NOT NULL,
        activity_name TEXT NOT NULL,
        status TEXT DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
        score INTEGER,
        feedback TEXT,
        submitted_at DATETIME,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students (id),
        UNIQUE(student_id, week_number, activity_name)
      )`,

      // Assessments table
      `CREATE TABLE IF NOT EXISTS assessments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        assessment_type TEXT NOT NULL, -- 'quiz', 'interview', 'project'
        title TEXT NOT NULL,
        questions TEXT NOT NULL, -- JSON string
        answers TEXT, -- JSON string
        score INTEGER,
        feedback TEXT,
        status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'graded'
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        completed_at DATETIME,
        FOREIGN KEY (student_id) REFERENCES students (id)
      )`,

      // AI transparency logs table
      `CREATE TABLE IF NOT EXISTS ai_transparency_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        external_ai_service TEXT NOT NULL, -- 'chatgpt', 'claude', 'gemini'
        prompt TEXT NOT NULL,
        response TEXT NOT NULL,
        verification_notes TEXT,
        activity_context TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students (id)
      )`,

      // Bot personality and settings table
      `CREATE TABLE IF NOT EXISTS bot_settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        setting_key TEXT UNIQUE NOT NULL,
        setting_value TEXT NOT NULL,
        description TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`
    ];

    for (const table of tables) {
      await this.run(table);
    }

    // Insert default bot settings
    await this.insertDefaultSettings();
    
    logger.info('Database tables created successfully');
  }

  async insertDefaultSettings() {
    const defaultSettings = [
      {
        key: 'bot_name',
        value: process.env.BOT_NAME || 'HCI-101 Design Mentor',
        description: 'Name of the AI design mentor bot'
      },
      {
        key: 'bot_language',
        value: process.env.BOT_LANGUAGE || 'bilingual',
        description: 'Language preference for bot responses'
      },
      {
        key: 'bot_tone',
        value: process.env.BOT_TONE || 'helpful, encouraging, professional',
        description: 'Tone and personality of the bot'
      },
      {
        key: 'course_name',
        value: process.env.COURSE_NAME || 'HCI-101',
        description: 'Course name and identifier'
      },
      {
        key: 'instructor_name',
        value: process.env.INSTRUCTOR_NAME || 'Yuri Tijerino',
        description: 'Instructor name'
      }
    ];

    for (const setting of defaultSettings) {
      await this.run(
        `INSERT OR IGNORE INTO bot_settings (setting_key, setting_value, description) 
         VALUES (?, ?, ?)`,
        [setting.key, setting.value, setting.description]
      );
    }
  }

  // Database operation methods
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          logger.error('Database run error:', err);
          reject(err);
        } else {
          resolve({ id: this.lastID, changes: this.changes });
        }
      });
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) {
          logger.error('Database get error:', err);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          logger.error('Database all error:', err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          logger.error('Error closing database:', err);
          reject(err);
        } else {
          logger.info('Database connection closed');
          resolve();
        }
      });
    });
  }
}

module.exports = new Database();
