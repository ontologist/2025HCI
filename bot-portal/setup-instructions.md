# HCI-101 Bot Portal - Local Setup Instructions
# HCI-101ボットポータル - ローカルセットアップ手順

## Quick Setup Guide | クイックセットアップガイド

### Prerequisites | 前提条件
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **AI API Key** (OpenAI or Anthropic)
- **Modern web browser** (Chrome, Firefox, Safari)

### Step 1: Install Dependencies | ステップ1：依存関係のインストール

```bash
# Navigate to bot-portal directory
cd bot-portal

# Install server dependencies
npm install

# Install client dependencies (if using React frontend)
cd client
npm install
cd ..
```

### Step 2: Configure Environment | ステップ2：環境設定

```bash
# Copy environment template
cp env.example .env

# Edit .env file with your settings
# You need to set at least one AI API key:
# - OPENAI_API_KEY=your_openai_key_here
# - ANTHROPIC_API_KEY=your_anthropic_key_here
```

**Required Environment Variables:**
- `OPENAI_API_KEY` OR `ANTHROPIC_API_KEY` (at least one)
- `JWT_SECRET` (generate a random string)
- `SESSION_SECRET` (generate a random string)

### Step 3: Initialize Database | ステップ3：データベースの初期化

```bash
# Create database and tables
npm run db:init

# (Optional) Seed with sample data
npm run db:seed
```

### Step 4: Start the Application | ステップ4：アプリケーションの開始

```bash
# Start both server and client (development mode)
npm run dev

# Or start server only
npm run server
```

### Step 5: Access the Portal | ステップ5：ポータルにアクセス

Open your browser to: **http://localhost:3000**

## Detailed Setup | 詳細セットアップ

### AI Service Configuration | AIサービス設定

#### Option A: OpenAI
1. Get API key from [OpenAI Platform](https://platform.openai.com/)
2. Add to `.env`: `OPENAI_API_KEY=sk-your-key-here`
3. Set model: `OPENAI_MODEL=gpt-4` (or gpt-3.5-turbo for lower cost)

#### Option B: Anthropic (Claude)
1. Get API key from [Anthropic Console](https://console.anthropic.com/)
2. Add to `.env`: `ANTHROPIC_API_KEY=sk-ant-your-key-here`
3. Set model: `ANTHROPIC_MODEL=claude-3-sonnet-20240229`

### Database Configuration | データベース設定

The portal uses SQLite for local storage:
- Database file: `./data/hci101_bot.db`
- Tables: students, conversations, progress, assessments, ai_logs
- Automatic backup recommended

### Security Configuration | セキュリティ設定

Generate secure secrets:
```bash
# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate session secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add to `.env`:
```
JWT_SECRET=your_generated_jwt_secret
SESSION_SECRET=your_generated_session_secret
```

## Usage Instructions | 使用手順

### For Instructors | インストラクター向け

1. **Start the portal** before class
2. **Create student accounts** or provide registration link
3. **Monitor conversations** through admin interface
4. **Review AI transparency logs** for academic integrity

### For Students | 学生向け

1. **Register account** with student ID and email
2. **Access bot portal** at http://localhost:3000
3. **Start new session** for each activity
4. **Document AI interactions** for transparency

### Bot Interaction Features | ボットインタラクション機能

- **Design Thinking Guidance** | デザイン思考ガイダンス
- **Interface Analysis Support** | インターフェース分析サポート
- **HCI Concept Explanation** | HCIコンセプト説明
- **Assessment Assistance** | 評価支援
- **Bilingual Communication** | バイリンガルコミュニケーション

## Troubleshooting | トラブルシューティング

### Common Issues | 一般的な問題

#### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in .env
PORT=3001
```

#### Database Connection Error
```bash
# Check database file permissions
ls -la data/

# Recreate database
rm data/hci101_bot.db
npm run db:init
```

#### AI Service Error
- Verify API key is correct
- Check API quota/billing
- Try different model if available

#### Frontend Not Loading
```bash
# Rebuild client
cd client
npm run build
cd ..
```

### Log Files | ログファイル

Check logs for errors:
- Server logs: `./logs/hci101_bot.log`
- Error logs: `./logs/error.log`
- Console output for development mode

### Performance Optimization | パフォーマンス最適化

For better performance:
- Use SSD storage for database
- Increase Node.js memory: `node --max-old-space-size=4096 server.js`
- Enable compression in production
- Use PM2 for process management

## Production Deployment | 本番デプロイ

### For Classroom Use | 教室使用向け

1. **Use dedicated machine** with stable internet
2. **Set up automatic startup** (systemd service)
3. **Configure firewall** to allow local network access
4. **Set up monitoring** and logging
5. **Regular backups** of database

### Security Considerations | セキュリティ考慮事項

- Change default secrets
- Use HTTPS in production
- Implement rate limiting
- Regular security updates
- Monitor for abuse

## Support | サポート

### Getting Help | ヘルプの取得

1. **Check logs** for error messages
2. **Verify configuration** in .env file
3. **Test AI API** connectivity
4. **Contact instructor** for course-specific issues

### Development | 開発

To modify or extend the portal:
- Server code: `./routes/`, `./services/`, `./database/`
- Client code: `./client/src/`
- Configuration: `./config/`

## File Structure | ファイル構造

```
bot-portal/
├── server.js                 # Main server file
├── package.json              # Dependencies
├── .env                      # Environment variables
├── database/
│   └── connection.js         # Database setup
├── routes/
│   ├── auth.js              # Authentication
│   ├── bot.js               # Bot interactions
│   └── students.js          # Student management
├── services/
│   └── aiService.js         # AI integration
├── utils/
│   └── logger.js            # Logging utility
├── client/                  # React frontend (optional)
├── data/                    # SQLite database
└── logs/                    # Log files
```

---

**Ready to start!** Follow the quick setup guide above to get your local bot portal running.

**準備完了！** 上記のクイックセットアップガイドに従って、ローカルボットポータルを起動してください。
