# HCI-101: Introduction to Human-Computer Interaction
# HCI-101：ヒューマンコンピュータインタラクション入門

**Course Focus:** Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース焦点：** スマートデバイスとAIチャットボットの時代におけるヒューマンコンピュータインタラクション

**Institution:** Kwansei Gakuin University, School of Policy Studies, Department of Applied Informatics
**機関：** 関西学院大学 総合政策学部 メディア情報学科

**Semester:** Fall 2025
**学期：** 2025年秋学期

---

## Course Overview | コース概要

This course explores the principles and practices of Human-Computer Interaction (HCI) in the modern context of smart devices, AI chatbots, and emerging technologies. Students will learn to design, prototype, and evaluate user interfaces through hands-on projects.

このコースでは、スマートデバイス、AIチャットボット、新興技術の現代的な文脈における、ヒューマンコンピュータインタラクション（HCI）の原理と実践を探求します。学生は、ハンズオンプロジェクトを通じて、ユーザーインターフェースの設計、プロトタイピング、評価を学びます。

---

## Course Development Method | コース開発方法

This course was created using the **BMad Method** with the **bmad-botedu Expansion Pack**, an agentic framework for educational course development with bot integration.

このコースは、ボット統合を伴う教育コース開発のためのエージェントフレームワークである **BMadメソッド** と **bmad-botedu拡張パック** を使用して作成されました。

---

## Repository Structure | リポジトリ構造

```
2025HCI/
├── .bmad-core/              # BMad framework
├── bot-portal/              # Bot portal web application
│   ├── public/              # Frontend (HTML, CSS, JS)
│   ├── server/              # Backend API server
│   └── data/                # Database storage
├── bot-config/              # Bot configuration & knowledge base
├── curriculum/              # Course curriculum
├── activities/              # Weekly activities
├── assessments/             # Assessment materials
├── lectures/                # Lecture materials
├── docs/                    # Documentation
└── README.md               # This file
```

---

## Key Features | 主要機能

- **Hands-On Pedagogy:** 20% lecture, 80% hands-on activities
- **Bot-Enhanced Learning:** 24/7 AI assistant support
- **No-Code/Low-Code Approach:** Accessible to non-programmers
- **Real-World Projects:** Smart device and chatbot interfaces
- **Bilingual Support:** English | Japanese materials
- **Project-Based Assessment:** No final exam

---

## Getting Started | はじめに

### For Students | 学生向け

**Access the Bot Portal | ボットポータルにアクセス:**

1. Navigate to the bot portal directory:
   ```bash
   cd bot-portal
   npm install
   npm start
   ```

2. Open your browser: `http://localhost:3010`

3. Login with your @kwansei.ac.jp email

4. Start learning with your 24/7 AI assistant!

📖 **Full Guide:** See `docs/BOT-PORTAL-GUIDE.md`

### For Instructors | インストラクター向け

See `docs/GETTING-STARTED.md` for course development instructions.

コース開発の手順については、`docs/GETTING-STARTED.md`を参照してください。

---

## Bot Portal Features | ボットポータル機能

🤖 **24/7 AI Learning Assistant**
- Powered by Claude 3.5 Sonnet
- Course-specific knowledge base
- Bilingual support (EN | JA)
- Socratic teaching method

💬 **Interactive Chat Interface**
- Real-time messaging
- Conversation history
- File attachments
- Export conversations

📊 **Learning Analytics**
- Progress tracking
- Activity monitoring
- Engagement metrics
- Data-driven insights

🎨 **Accessible Design**
- WCAG AA compliant
- Light/dark themes
- High contrast mode
- Keyboard navigation

📚 **Documentation:**
- [Bot Portal README](bot-portal/README.md)
- [Quick Start Guide](docs/BOT-PORTAL-GUIDE.md)
- [Bot Configuration](bot-config/hci-bot-config.yaml)
- [Open Source Ollama Bot Research](docs/OPENSOURCE-OLLAMA-BOT-RESEARCH.md)

---

**Developer:** Yuri Tijerino
**Framework:** BMad Method with bmad-botedu Expansion Pack
**License:** Educational Use
