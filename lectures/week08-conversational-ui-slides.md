# Week 8: Conversational UI and Chatbot Design Fundamentals
# 第8週：会話型UIとチャットボットデザインの基礎

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Week 8! | 第8週へようこそ！

### Today's Agenda | 今日のアジェンダ
- **Introduction to Conversational UI** | 会話型UI入門
- **Types of Chatbots and Use Cases** | チャットボットのタイプとユースケース
- **Dialog Design Principles** | 対話デザイン原則
- **Personality and Tone in Chatbots** | チャットボットのパーソナリティとトーン
- **Conversation Flow Mapping** | 会話フローマッピング
- **Hands-On Activity: Analyze Chatbots** | ハンズオンアクティビティ：チャットボット分析

### Learning Objectives | 学習目標
By the end of today, you will:
今日の終わりまでに、あなたは：
- Understand conversational UI principles and design patterns | 会話型UIの原則とデザインパターンを理解する
- Identify different types of chatbots and their use cases | チャットボットのさまざまなタイプとユースケースを特定する
- Design effective dialog flows for user conversations | ユーザー会話用の効果的な対話フローをデザインする
- Create chatbot personality and tone guidelines | チャットボットのパーソナリティとトーンガイドラインを作成する

---

## Slide 2: What is Conversational UI? | 会話型UIとは？

### Definition | 定義
**Conversational User Interface (CUI)** is an interface that enables users to interact with computers using natural language through text or voice, mimicking human-to-human conversation.

**会話型ユーザーインターフェース（CUI）**は、ユーザーがテキストまたは音声を使用して自然言語でコンピュータと相互作用できるインターフェースで、人間同士の会話を模倣します。

### Key Characteristics | 主要特性
- **Natural Language** | 自然言語: Users communicate in everyday language | ユーザーは日常言語でコミュニケーション
- **Turn-Taking** | ターンテイキング: Back-and-forth conversation flow | 双方向の会話フロー
- **Context Awareness** | コンテキスト認識: Remembers previous interactions | 以前の相互作用を記憶
- **Intent Recognition** | 意図認識: Understands what users want | ユーザーが望むものを理解

### Why Conversational UI Matters | なぜ会話型UIが重要なのか
- **Accessibility** | アクセシビリティ: Natural way for everyone to interact | 誰もが相互作用できる自然な方法
- **Efficiency** | 効率性: Quick answers without navigation | ナビゲーションなしで素早い回答
- **Availability** | 可用性: 24/7 instant support | 24時間365日の即座のサポート
- **Scalability** | スケーラビリティ: Handle multiple users simultaneously | 複数ユーザーを同時に処理

---

## Slide 3: Evolution of Conversational Interfaces | 会話型インターフェースの進化

### Historical Timeline | 歴史的タイムライン

#### 1960s-1990s: Early AI Chatbots | 1960年代-1990年代：初期のAIチャットボット
- **ELIZA (1966)** | ELIZA（1966）: First chatbot, simulated psychotherapist | 最初のチャットボット、心理療法士をシミュレート
- **Rule-Based Systems** | ルールベースシステム: Pattern matching and scripted responses | パターンマッチングとスクリプト応答
- **Limited Understanding** | 限定的理解: Could only handle predefined scenarios | 事前定義されたシナリオのみ処理可能

#### 2000s-2010s: Voice Assistants Era | 2000年代-2010年代：音声アシスタント時代
- **Siri (2011)** | Siri（2011）: First mainstream voice assistant | 最初の主流音声アシスタント
- **Google Assistant** | Googleアシスタント: Multi-platform integration | マルチプラットフォーム統合
- **Alexa & Cortana** | AlexaとCortana: Smart home and desktop integration | スマートホームとデスクトップ統合

#### 2015-Present: AI-Powered Chatbots | 2015年-現在：AI搭載チャットボット
- **Machine Learning** | 機械学習: Natural language understanding | 自然言語理解
- **ChatGPT & Claude** | ChatGPTとClaude: Advanced conversational AI | 高度な会話型AI
- **Specialized Bots** | 専門ボット: Customer service, healthcare, education | カスタマーサービス、ヘルスケア、教育

---

## Slide 4: Types of Chatbots | チャットボットのタイプ

### 1. Rule-Based Chatbots | ルールベースチャットボット

**Characteristics | 特性:**
- Follow predefined decision trees | 事前定義された決定木に従う
- Button-based interactions | ボタンベースの相互作用
- Limited flexibility | 柔軟性が限定的
- Predictable responses | 予測可能な応答

**Best For | 最適な用途:**
- FAQ and simple queries | FAQと単純なクエリ
- Order tracking | 注文追跡
- Appointment booking | 予約予約

**Example | 例:** Pizza ordering bot, library hours bot | ピザ注文ボット、図書館時間ボット

### 2. AI-Powered Chatbots | AI搭載チャットボット

**Characteristics | 特性:**
- Natural language processing | 自然言語処理
- Learning from interactions | 相互作用から学習
- Handle complex queries | 複雑なクエリを処理
- Contextual understanding | コンテキスト理解

**Best For | 最適な用途:**
- Customer support | カスタマーサポート
- Personal assistants | パーソナルアシスタント
- Educational tutoring | 教育指導

**Example | 例:** ChatGPT, Google Assistant, customer service bots | ChatGPT、Googleアシスタント、カスタマーサービスボット

### 3. Hybrid Chatbots | ハイブリッドチャットボット

**Characteristics | 特性:**
- Combine rules and AI | ルールとAIを組み合わせる
- Structured paths with flexibility | 柔軟性を持つ構造化パス
- Human handoff capability | 人間への引き継ぎ機能

**Best For | 最適な用途:**
- E-commerce support | eコマースサポート
- Banking services | 銀行サービス
- Healthcare triage | ヘルスケアトリアージ

---

## Slide 5: Common Chatbot Use Cases | 一般的なチャットボットユースケース

### Customer Service & Support | カスタマーサービスとサポート
- **24/7 Availability** | 24時間365日の可用性: Instant responses to common questions | 一般的な質問への即座の応答
- **Ticket Creation** | チケット作成: Route complex issues to human agents | 複雑な問題を人間のエージェントにルーティング
- **Order Status** | 注文ステータス: Track shipments and returns | 出荷と返品を追跡
- **Example** | 例: Amazon customer service bot, airline support bots | Amazonカスタマーサービスボット、航空会社サポートボット

### E-Commerce & Sales | eコマースと販売
- **Product Recommendations** | 製品推奨: Personalized shopping assistance | パーソナライズされたショッピング支援
- **Cart Management** | カート管理: Add items, checkout support | アイテム追加、チェックアウトサポート
- **Promotions** | プロモーション: Share deals and discounts | お得情報と割引を共有
- **Example** | 例: Sephora Virtual Artist, H&M chatbot | Sephora Virtual Artist、H&Mチャットボット

### Education & Learning | 教育と学習
- **Tutoring Assistance** | 指導支援: Answer student questions | 学生の質問に答える
- **Course Navigation** | コースナビゲーション: Help find resources | リソースを見つける支援
- **Study Reminders** | 学習リマインダー: Personalized study schedules | パーソナライズされた学習スケジュール
- **Example** | 例: Duolingo bot, university information bots | Duolingoボット、大学情報ボット

### Healthcare & Wellness | ヘルスケアとウェルネス
- **Symptom Checking** | 症状チェック: Preliminary health assessments | 予備的健康評価
- **Appointment Scheduling** | 予約スケジューリング: Book doctor visits | 医師の診察予約
- **Medication Reminders** | 薬物リマインダー: Track prescriptions | 処方箋を追跡
- **Example** | 例: Ada Health, Babylon Health | Ada Health、Babylon Health

### Banking & Finance | 銀行と金融
- **Account Inquiries** | アカウント問い合わせ: Check balances, transactions | 残高、取引を確認
- **Money Transfers** | 送金: Quick payment processing | 迅速な支払い処理
- **Financial Advice** | 財務アドバイス: Budgeting tips and insights | 予算のヒントと洞察
- **Example** | 例: Bank of America's Erica, Capital One's Eno | Bank of AmericaのErica、Capital OneのEno

---

## Slide 6: Dialog Design Principles | 対話デザイン原則

### 1. Be Clear and Concise | 明確で簡潔に

**Principle | 原則:**
Use simple, direct language. Avoid jargon and complex sentences.
シンプルで直接的な言語を使用。専門用語や複雑な文を避ける。

**Bad Example | 悪い例:**
"We are currently experiencing a high volume of requests and your query will be processed in the order received."
「現在、大量のリクエストを経験しており、クエリは受信順に処理されます。」

**Good Example | 良い例:**
"I'm helping other customers right now. I'll be with you in about 2 minutes!"
「今、他のお客様を支援しています。約2分後にお答えします！」

### 2. Set Clear Expectations | 明確な期待を設定

**Principle | 原則:**
Tell users what the bot can and cannot do upfront.
ボットができることとできないことを最初にユーザーに伝える。

**Example | 例:**
"Hi! I can help you with order tracking, product information, and store hours. For returns, I'll connect you with a team member."
「こんにちは！注文追跡、製品情報、店舗時間についてお手伝いできます。返品については、チームメンバーにおつなぎします。」

### 3. Provide Guidance | ガイダンスを提供

**Principle | 原則:**
Offer suggestions, examples, and quick reply buttons.
提案、例、クイック返信ボタンを提供。

**Example | 例:**
"What would you like to do today?"
- Track my order
- Browse products
- Check store hours
- Talk to a person

### 4. Confirm Understanding | 理解を確認

**Principle | 原則:**
Repeat or summarize user requests before taking action.
アクションを実行する前にユーザーリクエストを繰り返すまたは要約。

**Example | 例:**
"Great! Let me track your order #12345. Is that correct?"
「素晴らしい！注文番号12345を追跡します。それで正しいですか？」

### 5. Handle Errors Gracefully | エラーを優雅に処理

**Principle | 原則:**
Acknowledge confusion and offer alternatives or human handoff.
混乱を認識し、代替案や人間への引き継ぎを提供。

**Example | 例:**
"I didn't quite understand that. Could you rephrase, or would you like to speak with a team member?"
「それを理解できませんでした。言い換えていただけますか、それともチームメンバーと話したいですか？」

---

## Slide 7: Conversation Flow Structure | 会話フロー構造

### Basic Conversation Flow Components | 基本会話フローコンポーネント

#### 1. Greeting | 挨拶
**Purpose | 目的:** Welcome user and set expectations
**Example | 例:**
"Hi! I'm your campus assistant bot. I can help you find classes, check library hours, or navigate campus. What can I help you with today?"

#### 2. Intent Identification | 意図識別
**Purpose | 目的:** Understand what user wants to accomplish
**Example | 例:**
User: "I need to find the library"
Bot: "I'll help you locate the library. Are you looking for directions or opening hours?"

#### 3. Information Gathering | 情報収集
**Purpose | 目的:** Collect necessary details to fulfill request
**Example | 例:**
Bot: "Which library? Main Library or Science Library?"
User: "Main Library"

#### 4. Action & Response | アクションと応答
**Purpose | 目的:** Provide answer or complete task
**Example | 例:**
Bot: "The Main Library is on Central Campus, Building 5. It's open 8am-10pm today. Would you like directions?"

#### 5. Confirmation & Follow-Up | 確認とフォローアップ
**Purpose | 目的:** Ensure satisfaction and offer additional help
**Example | 例:**
Bot: "Did that answer your question? Is there anything else I can help you with?"

#### 6. Closure | クロージング
**Purpose | 目的:** End conversation politely
**Example | 例:**
Bot: "Great! Have a wonderful day. Come back anytime you need help!"

---

## Slide 8: Designing Conversation Flows | 会話フローのデザイン

### Happy Path vs. Alternative Paths | ハッピーパスと代替パス

#### Happy Path (Ideal Scenario) | ハッピーパス（理想的なシナリオ）
**Definition | 定義:** The straightforward, successful conversation flow
**Example | 例:**
1. User: "What time does the library close?"
2. Bot: "The Main Library closes at 10pm today. Can I help with anything else?"
3. User: "No, thanks!"
4. Bot: "You're welcome! Have a great day!"

#### Alternative Paths (Edge Cases) | 代替パス（エッジケース）
**Scenarios | シナリオ:**
- **Clarification Needed | 明確化が必要:** "Which library do you mean?"
- **Missing Information | 情報不足:** "I need your student ID to check your account"
- **Out of Scope | 範囲外:** "I can't help with that, but I can connect you with..."
- **Error Recovery | エラー回復:** "I didn't understand. Could you try again?"

### Flow Mapping Tools | フローマッピングツール
- **Flowcharts** | フローチャート: Visual decision trees | ビジュアル決定木
- **Conversation Maps** | 会話マップ: User journey through dialog | 対話を通じたユーザージャーニー
- **Tools** | ツール: Botmock, Voiceflow, Miro, Lucidchart | Botmock、Voiceflow、Miro、Lucidchart

---

## Slide 9: Personality and Tone in Chatbots | チャットボットのパーソナリティとトーン

### Why Personality Matters | なぜパーソナリティが重要なのか

**Builds Trust** | 信頼を構築: Consistent personality makes bot feel reliable
一貫したパーソナリティがボットを信頼できる感じにする

**Creates Connection** | つながりを作る: Users engage more with personable bots
個性的なボットとユーザーはより多く関わる

**Brand Alignment** | ブランド整合性: Bot represents company values
ボットは企業の価値を代表する

**Differentiates Experience** | 体験を差別化: Stand out from generic bots
一般的なボットから際立つ

### Personality Dimensions | パーソナリティの次元

#### 1. Formal vs. Casual | フォーマル vs カジュアル
**Formal | フォーマル:**
"Good afternoon. How may I assist you today?"
「こんにちは。本日はどのようにお手伝いできますか？」

**Casual | カジュアル:**
"Hey there! What can I help you with?"
「やあ！何をお手伝いできますか？」

#### 2. Professional vs. Friendly | プロフェッショナル vs フレンドリー
**Professional | プロフェッショナル:**
"I'll process your request immediately."
「すぐにリクエストを処理します。」

**Friendly | フレンドリー:**
"I'm on it! Give me just a sec."
「やります！ちょっと待ってね。」

#### 3. Serious vs. Playful | シリアス vs 遊び心
**Serious | シリアス:**
"Your account balance is $523.45."
「アカウント残高は$523.45です。」

**Playful | 遊び心:**
"You've got $523.45 in the bank! Nice!"
「銀行に$523.45あります！いいね！」

### Matching Personality to Context | コンテキストにパーソナリティを合わせる

**Healthcare Bot | ヘルスケアボット:**
Empathetic, calm, professional
共感的、落ち着いた、プロフェッショナル

**Banking Bot | 銀行ボット:**
Trustworthy, formal, efficient
信頼できる、フォーマル、効率的

**E-commerce Bot | eコマースボット:**
Friendly, helpful, enthusiastic
フレンドリー、助けになる、熱心

**Student Services Bot | 学生サービスボット:**
Approachable, encouraging, supportive
親しみやすい、励ます、サポート的

---

## Slide 10: Writing Effective Bot Responses | 効果的なボット応答の作成

### Response Writing Best Practices | 応答作成ベストプラクティス

#### 1. Use Active Voice | 能動態を使用
**Passive (Avoid) | 受動態（避ける）:**
"Your order has been shipped."
「注文は発送されました。」

**Active (Better) | 能動態（より良い）:**
"We shipped your order!"
「注文を発送しました！」

#### 2. Be Specific and Actionable | 具体的で実行可能に
**Vague | 曖昧:**
"Your request will be handled soon."
「リクエストはまもなく処理されます。」

**Specific | 具体的:**
"I'll have an answer for you in 2 minutes."
「2分後に回答します。」

#### 3. Show Empathy | 共感を示す
**Without Empathy | 共感なし:**
"Your payment failed. Try again."
「支払いが失敗しました。もう一度お試しください。」

**With Empathy | 共感あり:**
"Oh no! Your payment didn't go through. Let's try another method together."
「あらら！支払いが通りませんでした。一緒に別の方法を試しましょう。」

#### 4. Provide Options | オプションを提供
**Single Path | 単一パス:**
"I can't help with that."
「それについては支援できません。」

**Multiple Options | 複数オプション:**
"I can't help with that directly, but I can:
- Connect you with a team member
- Send you helpful resources
- Schedule a callback
What would work best for you?"

#### 5. Use Conversational Language | 会話的言語を使用
**Robotic | ロボット的:**
"Request acknowledged. Processing initiated."
「リクエスト確認。処理開始。」

**Conversational | 会話的:**
"Got it! Let me look that up for you."
「了解！調べてみます。」

---

## Slide 11: Button vs. Free Text Input | ボタン vs 自由テキスト入力

### When to Use Buttons | ボタンを使用するタイミング

**Advantages | 利点:**
- Clear, limited options | 明確で限定的なオプション
- Prevent user errors | ユーザーエラーを防ぐ
- Faster interaction | より速い相互作用
- Guide conversation flow | 会話フローをガイド

**Best For | 最適な用途:**
- Multiple choice questions | 多肢選択質問
- Confirmation (Yes/No) | 確認（はい/いいえ）
- Menu navigation | メニューナビゲーション
- Common actions | 一般的なアクション

**Example | 例:**
"What would you like to do?"
[Track Order] [Return Item] [Contact Support]

### When to Use Free Text | 自由テキストを使用するタイミング

**Advantages | 利点:**
- Flexible, natural input | 柔軟で自然な入力
- Handles complex queries | 複雑なクエリを処理
- User feels heard | ユーザーが聞かれていると感じる
- Collects detailed information | 詳細な情報を収集

**Best For | 最適な用途:**
- Open-ended questions | オープンエンドの質問
- Description requests | 説明リクエスト
- Feedback collection | フィードバック収集
- Custom queries | カスタムクエリ

**Example | 例:**
"Please describe the issue you're experiencing."
[Text input box]

### Hybrid Approach (Recommended) | ハイブリッドアプローチ（推奨）

**Strategy | 戦略:**
Offer buttons for common paths, with option for free text
一般的なパス用のボタンを提供、自由テキストのオプション付き

**Example | 例:**
"How can I help you today?"
[Check Order] [Product Info] [Store Hours]
[Other - Type your question]

---

## Slide 12: Context and Memory in Conversations | 会話のコンテキストとメモリ

### Types of Context | コンテキストのタイプ

#### 1. Session Context | セッションコンテキスト
**Definition | 定義:** Information within current conversation
**Example | 例:**
User: "I want to order pizza"
Bot: "What size?" (remembers they want pizza)
User: "Large"
Bot: "What toppings for your large pizza?" (remembers size)

#### 2. User Context | ユーザーコンテキスト
**Definition | 定義:** Information about the user across sessions
**Example | 例:**
Bot: "Welcome back, Sarah! Would you like your usual order?"
ボット：「おかえりなさい、サラ！いつもの注文でいいですか？」

#### 3. Environmental Context | 環境コンテキスト
**Definition | 定義:** External factors affecting conversation
**Example | 例:**
- Time of day: "Good morning!" vs "Good evening!"
- Location: "The nearest store to you is..."
- Device: Mobile vs desktop experience

### Memory Best Practices | メモリベストプラクティス

#### Reference Previous Exchanges | 以前のやり取りを参照
**Example | 例:**
"Earlier you mentioned you're interested in laptops. Would you like to continue looking at those?"
「以前、ラップトップに興味があるとおっしゃいました。それらを引き続き見たいですか？」

#### Avoid Asking Twice | 二度尋ねるのを避ける
**Bad | 悪い:**
Bot: "What's your email?"
User: "sarah@email.com"
...later in conversation...
Bot: "What's your email?"

**Good | 良い:**
Bot confirms at end: "I'll send the confirmation to sarah@email.com"

#### Handle Session Breaks | セッション中断を処理
**Example | 例:**
"Welcome back! We were discussing your order for a large pepperoni pizza. Would you like to continue?"
「お帰りなさい！大きなペパロニピザの注文について話していました。続けますか？」

---

## Slide 13: Chatbot Design Patterns | チャットボットデザインパターン

### Common Design Patterns | 一般的なデザインパターン

#### 1. Menu-Based Pattern | メニューベースパターン
**Use Case | ユースケース:** Guided navigation through options
**Example | 例:**
Bot: "Main Menu - Select an option:"
1. Account Services
2. Product Information
3. Technical Support
4. Billing Questions

#### 2. Question-Answer Pattern | 質問-回答パターン
**Use Case | ユースケース:** Direct information retrieval
**Example | 例:**
User: "What are your business hours?"
Bot: "We're open Monday-Friday 9am-6pm, Saturday 10am-4pm, closed Sunday."

#### 3. Form-Fill Pattern | フォーム記入パターン
**Use Case | ユースケース:** Collecting multiple data points
**Example | 例:**
Bot: "Let me book your appointment. I need a few details:"
- "What date works for you?" → [Date picker]
- "Preferred time?" → [Morning/Afternoon/Evening]
- "Reason for visit?" → [Text input]

#### 4. Guided Troubleshooting Pattern | ガイド付きトラブルシューティングパターン
**Use Case | ユースケース:** Step-by-step problem solving
**Example | 例:**
Bot: "Let's fix your connection issue together."
- "Is your device plugged in?" → Yes/No
- "Can you see any lights?" → Yes/No
- "What color are they?" → [Options]

#### 5. Recommendation Pattern | 推奨パターン
**Use Case | ユースケース:** Personalized suggestions
**Example | 例:**
Bot: "Based on your preferences, I recommend these laptops:"
- HP Pavilion ($799) - Best for students
- MacBook Air ($999) - Best for creatives
- Dell XPS ($1299) - Best for performance

---

## Slide 14: Accessibility in Conversational UI | 会話型UIのアクセシビリティ

### Designing Accessible Chatbots | アクセシブルなチャットボットのデザイン

#### 1. Support Multiple Input Methods | 複数の入力方法をサポート
- **Text Input** | テキスト入力: Keyboard typing | キーボード入力
- **Voice Input** | 音声入力: Speech-to-text | 音声からテキスト
- **Buttons/Quick Replies** | ボタン/クイック返信: Click or tap | クリックまたはタップ

#### 2. Provide Clear Visual Hierarchy | 明確なビジュアル階層を提供
- **Message Grouping** | メッセージグループ化: User vs bot messages distinct | ユーザーとボットのメッセージを区別
- **Timestamps** | タイムスタンプ: When messages were sent | メッセージ送信時刻
- **Read Indicators** | 既読インジケーター: Show message status | メッセージステータスを表示

#### 3. Screen Reader Compatibility | スクリーンリーダー互換性
- **Alt Text for Images** | 画像の代替テキスト: Describe visual content | ビジュアルコンテンツを説明
- **Semantic HTML** | セマンティックHTML: Proper markup | 適切なマークアップ
- **ARIA Labels** | ARIAラベル: Accessibility attributes | アクセシビリティ属性

#### 4. Adjustable Text and Contrast | 調整可能なテキストとコントラスト
- **Font Sizing** | フォントサイズ設定: User can increase/decrease | ユーザーが増減可能
- **High Contrast Mode** | ハイコントラストモード: Better visibility | より良い可視性
- **Color Independence** | 色の独立性: Don't rely only on color | 色だけに頼らない

#### 5. Timing and Pace | タイミングとペース
- **No Time Pressure** | 時間的プレッシャーなし: Allow time to respond | 応答する時間を許可
- **Adjustable Speed** | 調整可能な速度: Control response rate | 応答速度を制御
- **Session Persistence** | セッション持続: Save progress | 進捗を保存

---

## Slide 15: This Week's Activity | 今週のアクティビティ

### Chatbot Analysis and Conversation Flow Design | チャットボット分析と会話フローデザイン

#### Part 1: Analyze Existing Chatbots (30 minutes) | パート1：既存のチャットボット分析（30分）

**What You'll Do | やること:**
1. **Test Real Chatbots** | 実際のチャットボットをテスト: Interact with 2-3 chatbots (examples provided)
2. **Analyze Design** | デザインを分析:
   - What type of chatbot? (rule-based, AI, hybrid)
   - What's the personality/tone?
   - How does it handle errors?
   - What works well? What doesn't?
3. **Document Findings** | 調査結果を文書化: Note patterns and best practices

**Example Chatbots to Test | テストする例のチャットボット:**
- Customer service: Sephora, H&M, Amazon
- Banking: Bank of America (Erica)
- Education: Duolingo
- General: ChatGPT, Claude

#### Part 2: Design Conversation Flows (40 minutes) | パート2：会話フローのデザイン（40分）

**What You'll Do | やること:**
1. **Choose a Use Case** | ユースケースを選択:
   - Campus information bot
   - Student services assistant
   - Library helper
   - Course registration guide
   - Or create your own!

2. **Map Conversation Flow** | 会話フローをマッピング:
   - Draw flow diagram on paper or digital tool
   - Include: Greeting → Intent → Information gathering → Response → Closure
   - Design happy path AND error scenarios

3. **Define Personality** | パーソナリティを定義:
   - Tone: Formal/Casual?
   - Style: Professional/Friendly?
   - Example responses showing personality

**Bot Integration | ボット統合:**
HCI-101 Bot will provide conversation flow templates and feedback on your designs.

#### Deliverables | 成果物
- **Chatbot Analysis Report** | チャットボット分析レポート: 2-3 pages documenting findings
- **Conversation Flow Diagram** | 会話フロー図: Visual map of your chatbot design
- **Personality Guidelines** | パーソナリティガイドライン: 1 page defining bot character and tone
- **Bot Interaction Screenshots** | ボットインタラクションスクリーンショット: Evidence of HCI-101 Bot guidance
- **AI Transparency Log** | AI透明性ログ: If external AI tools used

**Due | 締め切り:** End of Week 8 | 第8週終了時

---

## Slide 16: Looking Ahead to Week 9 | 第9週の予告

### Next Week: AI Chatbot Error Handling | 来週：AIチャットボットエラーハンドリング

**Topics We'll Cover | カバーするトピック:**
- **Natural Language Understanding Limitations** | 自然言語理解の限界
- **Handling Ambiguity and Confusion** | 曖昧性と混乱の処理
- **Error Recovery Strategies** | エラー回復戦略
- **Fallback Responses and Human Handoff** | フォールバック応答と人間への引き継ぎ
- **Testing Chatbot Conversations** | チャットボット会話のテスト

**Preparation | 準備:**
Think about times when chatbots didn't understand you. What went wrong? How could it be improved?
チャットボットがあなたを理解しなかった時について考えてください。何が間違っていましたか？どのように改善できますか？

---

## Slide 17: Key Takeaways | 重要なポイント

### Today's Main Points | 今日の主なポイント

1. **Conversational UI is Natural** | 会話型UIは自然: Enables users to interact in everyday language
   ユーザーが日常言語で相互作用できる

2. **Different Chatbot Types** | 異なるチャットボットタイプ: Rule-based, AI-powered, and hybrid serve different purposes
   ルールベース、AI搭載、ハイブリッドは異なる目的を果たす

3. **Dialog Design is Critical** | 対話デザインは重要: Clear structure, helpful guidance, graceful error handling
   明確な構造、役立つガイダンス、優雅なエラーハンドリング

4. **Personality Matters** | パーソナリティが重要: Consistent tone builds trust and engagement
   一貫したトーンが信頼とエンゲージメントを構築

5. **Context is King** | コンテキストが王様: Remember what users said to create natural conversations
   ユーザーが言ったことを覚えて自然な会話を作る

### Remember | 覚えておいてください
**Good chatbots feel like helpful conversations, not interrogations.**
**良いチャットボットは尋問ではなく、役立つ会話のように感じます。**

**Design with empathy, test with real users, iterate based on feedback!**
**共感を持ってデザインし、実際のユーザーでテストし、フィードバックに基づいて反復してください！**

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
