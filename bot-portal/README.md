# HCI-101 Bot Portal - Local Setup
# HCI-101ボットポータル - ローカルセットアップ

## Overview | 概要

This is a local bot portal that runs on your PC, allowing students to interact with the HCI-101 AI design mentor without requiring external hosting.

これは、外部ホスティングを必要とせずに、学生がHCI-101 AIデザインメンターと相互作用できる、PC上で動作するローカルボットポータルです。

## Architecture | アーキテクチャ

```
Frontend (React) → Backend (Node.js) → AI Service (OpenAI/Claude) → Local Database (SQLite)
```

## Prerequisites | 前提条件

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key or Claude API key
- Modern web browser

## Quick Start | クイックスタート

### 1. Install Dependencies
```bash
cd bot-portal
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env
# Edit .env with your API keys
```

### 3. Initialize Database
```bash
npm run db:init
```

### 4. Start the Application
```bash
npm run dev
```

### 5. Access the Portal
Open your browser to: http://localhost:3000

## Features | 機能

- **Student Authentication** | 学生認証
- **AI Chat Interface** | AIチャットインターフェース
- **Design Thinking Workflows** | デザイン思考ワークフロー
- **Assessment System** | 評価システム
- **Progress Tracking** | 進捗追跡
- **Bilingual Support** | バイリンガルサポート

## Configuration | 設定

See `config/` directory for detailed configuration options.

詳細な設定オプションについては、`config/`ディレクトリを参照してください。