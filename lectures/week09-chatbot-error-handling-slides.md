# Week 9: AI Chatbot Interaction Design and Error Handling
# 第9週：AIチャットボットインタラクションデザインとエラーハンドリング

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Week 9! | 第9週へようこそ！

### Today's Agenda | 今日のアジェンダ
- **Understanding NLU Limitations** | 自然言語理解の限界を理解する
- **Handling Ambiguity and Confusion** | 曖昧性と混乱の処理
- **Error Recovery Strategies** | エラー回復戦略
- **Fallback Responses and Escalation** | フォールバック応答とエスカレーション
- **Human Handoff Design** | 人間への引き継ぎデザイン
- **Testing Chatbot Conversations** | チャットボット会話のテスト
- **Hands-On: Complete Chatbot Prototype** | ハンズオン：完全なチャットボットプロトタイプ

### Learning Objectives | 学習目標
By the end of today, you will:
今日の終わりまでに、あなたは：
- Understand natural language understanding limitations | 自然言語理解の限界を理解する
- Design effective error recovery strategies | 効果的なエラー回復戦略をデザインする
- Create graceful fallback responses | 優雅なフォールバック応答を作成する
- Know when and how to hand off to humans | 人間への引き継ぎのタイミングと方法を知る
- Build complete chatbot prototypes with error handling | エラーハンドリング付きの完全なチャットボットプロトタイプを構築する

---

## Slide 2: Recap from Week 8 | 第8週の振り返り

### What We Learned Last Week | 先週学んだこと

#### Conversational UI Principles | 会話型UI原則
- Natural language interaction | 自然言語相互作用
- Turn-taking and context awareness | ターンテイキングとコンテキスト認識
- Types of chatbots: rule-based, AI-powered, hybrid | チャットボットのタイプ：ルールベース、AI搭載、ハイブリッド

#### Dialog Design | 対話デザイン
- Clear and concise communication | 明確で簡潔なコミュニケーション
- Conversation flow structure | 会話フロー構造
- Personality and tone guidelines | パーソナリティとトーンガイドライン

### This Week's Focus | 今週の焦点
**Last week:** Design conversations for when things go RIGHT
**先週：** うまくいくときの会話をデザイン

**This week:** Design conversations for when things go WRONG
**今週：** うまくいかないときの会話をデザイン

---

## Slide 3: Why Error Handling Matters | なぜエラーハンドリングが重要なのか

### The Reality of Chatbots | チャットボットの現実

#### Statistics | 統計
- **60-70%** of chatbot interactions encounter some form of misunderstanding
  チャットボットインタラクションの60-70%が何らかの誤解に遭遇
- **30%** of users abandon chatbots after a single failed interaction
  ユーザーの30%が1回の失敗後にチャットボットを放棄
- **Good error handling** can recover 80% of frustrated users
  良いエラーハンドリングは不満を持つユーザーの80%を回復できる

### Common User Frustrations | 一般的なユーザーの不満

**Poor Error Handling | 悪いエラーハンドリング:**
- "I don't understand" (repeated endlessly)
  「理解できません」（無限に繰り返される）
- No guidance on how to fix the problem
  問題を修正する方法のガイダンスなし
- Stuck in loops with no escape
  脱出できないループに閉じ込められる
- No way to reach a human
  人間に到達する方法なし

**Good Error Handling | 良いエラーハンドリング:**
- Clear explanation of what went wrong
  何が間違っていたかの明確な説明
- Specific suggestions for how to proceed
  進め方の具体的な提案
- Alternative paths offered
  代替パスの提供
- Easy escalation to human support
  人間サポートへの簡単なエスカレーション

---

## Slide 4: Understanding NLU Limitations | 自然言語理解の限界を理解する

### What is Natural Language Understanding (NLU)? | 自然言語理解（NLU）とは？

**Definition | 定義:**
NLU is the ability of a computer to understand human language as it is spoken or written. It involves intent recognition, entity extraction, and context understanding.

NLUは、話されたり書かれたりする人間の言語をコンピュータが理解する能力です。意図認識、エンティティ抽出、コンテキスト理解が含まれます。

### Common NLU Challenges | 一般的なNLUの課題

#### 1. Ambiguity | 曖昧性
**Example | 例:**
User: "Can you book me?"
- Book a reservation? | 予約を予約する？
- Book = reserve | Book = 予約する
- Or literally put in a book? | それとも文字通り本に入れる？

#### 2. Homophones and Spelling | 同音異義語とスペリング
**Example | 例:**
"There" vs "their" vs "they're"
"Two" vs "too" vs "to"

#### 3. Slang and Informal Language | スラングと非公式言語
**Example | 例:**
"That's fire!" = That's great!
「それは火だ！」= それは素晴らしい！
"I'm dead" = I'm laughing hard
「私は死んでいる」= 大笑いしている

#### 4. Sarcasm and Irony | 皮肉と皮肉
**Example | 例:**
"Oh great, another delay" (negative, despite "great")
「ああ素晴らしい、また遅延」（「素晴らしい」にもかかわらず否定的）

#### 5. Context-Dependent Meaning | コンテキスト依存の意味
**Example | 例:**
"Apple" = fruit or company?
「Apple」= 果物それとも会社？
Depends on conversation context
会話のコンテキストに依存

#### 6. Multi-Intent Queries | マルチ意図クエリ
**Example | 例:**
"I want to book a flight to Tokyo and check my points balance"
Two intents in one sentence
1つの文に2つの意図

---

## Slide 5: Types of Chatbot Errors | チャットボットエラーのタイプ

### Error Categories | エラーカテゴリー

#### 1. No Match / Intent Not Recognized | マッチなし/意図が認識されない
**What Happened | 何が起こったか:**
Bot doesn't understand what user wants
ボットはユーザーが何を望んでいるか理解していない

**Example | 例:**
User: "I need help with my widget thingy"
Bot: "I don't understand what you're asking for"

#### 2. Partial Match / Ambiguous Intent | 部分的マッチ/曖昧な意図
**What Happened | 何が起こったか:**
Bot recognizes multiple possible intents
ボットは複数の可能な意図を認識

**Example | 例:**
User: "I want to change my account"
- Change account settings?
- Change to a different account type?
- Close account?

#### 3. Missing Required Information | 必要な情報が不足
**What Happened | 何が起こったか:**
Bot understands intent but lacks details
ボットは意図を理解しているが詳細が不足

**Example | 例:**
User: "I want to make a reservation"
Bot needs: date, time, party size, location

#### 4. Invalid Input | 無効な入力
**What Happened | 何が起こったか:**
User provides information in wrong format
ユーザーが間違った形式で情報を提供

**Example | 例:**
Bot asks: "What date? (MM/DD/YYYY)"
User: "next Tuesday"

#### 5. Out of Scope / Capability | スコープ/能力外
**What Happened | 何が起こったか:**
User requests something bot cannot do
ユーザーはボットができないことをリクエスト

**Example | 例:**
User to pizza bot: "Can you book me a flight?"

#### 6. System/Technical Error | システム/技術エラー
**What Happened | 何が起こったか:**
Backend system failure, API down, timeout
バックエンドシステム障害、APIダウン、タイムアウト

**Example | 例:**
Bot: "I'm having trouble connecting to our system right now"

---

## Slide 6: Error Recovery Strategy Framework | エラー回復戦略フレームワーク

### The 4-Step Error Recovery Process | 4ステップエラー回復プロセス

#### Step 1: ACKNOWLEDGE | 認識
Recognize that something went wrong
何かが間違っていたことを認識

**Good Examples | 良い例:**
- "I didn't quite catch that"
- "I'm not sure I understood correctly"
- "Hmm, that's not something I recognize"

**Bad Examples | 悪い例:**
- "Error"
- "Invalid input"
- Silence / no response

#### Step 2: EXPLAIN | 説明
Tell user what the problem is (when possible)
問題が何であるかをユーザーに伝える（可能な場合）

**Good Examples | 良い例:**
- "I need a date in MM/DD/YYYY format"
- "I can only help with order tracking, returns, and product info"
- "I found multiple accounts - which one did you mean?"

**Bad Examples | 悪い例:**
- "I don't understand"
- "That won't work"
- No explanation

#### Step 3: GUIDE | ガイド
Provide specific suggestions for how to proceed
進め方の具体的な提案を提供

**Good Examples | 良い例:**
- "Try saying 'track my order' or 'return an item'"
- "Could you rephrase that question?"
- "Here are some things I can help with: [buttons]"

**Bad Examples | 悪い例:**
- "Try again"
- "Please rephrase"
- No guidance offered

#### Step 4: OFFER ALTERNATIVES | 代替案を提供
Give user options to escape the error
ユーザーにエラーから脱出するオプションを提供

**Good Examples | 良い例:**
- "Would you like to speak with a team member?"
- "Should I start over?"
- "Or you can browse our help center"

**Bad Examples | 悪い例:**
- No alternatives
- Force user to keep trying
- Dead end

---

## Slide 7: Designing Effective Fallback Responses | 効果的なフォールバック応答のデザイン

### What is a Fallback Response? | フォールバック応答とは？

**Definition | 定義:**
A fallback response is what the bot says when it doesn't understand the user's input or cannot fulfill their request.
フォールバック応答は、ボットがユーザーの入力を理解できない、またはリクエストを満たせないときに言うことです。

### Fallback Response Levels | フォールバック応答レベル

#### Level 1: First Fallback (Soft Recovery) | 第1フォールバック（ソフトリカバリ）
**Tone:** Helpful, assume user error or typo
**Example:**
"I didn't quite understand that. Could you rephrase?"
「それを理解できませんでした。言い換えていただけますか？」

"I can help with order tracking, returns, and product questions. What would you like to know about?"
「注文追跡、返品、製品の質問をお手伝いできます。何について知りたいですか？」

#### Level 2: Second Fallback (Offer Guidance) | 第2フォールバック（ガイダンスを提供）
**Tone:** More directive, provide examples
**Example:**
"I'm still not sure what you need. Here are some things I can help with:"
- Track an order
- Start a return
- Find product information
- Talk to a person

「まだ何が必要かわかりません。お手伝いできることは次のとおりです：」
- 注文を追跡
- 返品を開始
- 製品情報を見つける
- 人と話す

#### Level 3: Final Fallback (Escalate) | 最終フォールバック（エスカレート）
**Tone:** Apologetic, offer human handoff
**Example:**
"I apologize, but I'm having trouble understanding what you need. Let me connect you with a team member who can help you better."

「申し訳ありませんが、あなたが必要としているものを理解するのに苦労しています。より良く支援できるチームメンバーにおつなぎします。」

### Fallback Best Practices | フォールバックベストプラクティス

#### ✅ DO | すること
- Vary fallback messages (don't repeat the same one)
  フォールバックメッセージを変える（同じものを繰り返さない）
- Provide concrete examples of what you CAN do
  できることの具体的な例を提供
- Keep tone friendly and apologetic
  フレンドリーで謝罪的なトーンを保つ
- Escalate to human after 2-3 failed attempts
  2-3回の失敗後に人間にエスカレート
- Log failures to improve bot training
  ボットトレーニングを改善するために失敗をログ

#### ❌ DON'T | しないこと
- Say "I don't understand" over and over
  「理解できません」と何度も言う
- Blame the user ("You're not making sense")
  ユーザーを責める（「あなたは意味をなしていません」）
- Give up without offering alternatives
  代替案を提供せずにあきらめる
- Trap users in error loops
  エラーループにユーザーを閉じ込める
- Use technical jargon in error messages
  エラーメッセージで技術用語を使用

---

## Slide 8: Handling Ambiguity and Clarification | 曖昧性の処理と明確化

### When Intent is Unclear | 意図が不明確な場合

#### Strategy: Ask Clarifying Questions | 戦略：明確化質問をする

**Scenario | シナリオ:**
User: "I want to change my account"

**Poor Response | 悪い応答:**
Bot: "I don't understand"

**Good Response | 良い応答:**
Bot: "I can help you change your account. What would you like to update?"
- Account settings (email, password)
- Billing information
- Subscription plan
- Something else

### Disambiguation Patterns | 曖昧性解消パターン

#### Pattern 1: Multiple Choice | パターン1：多肢選択
Present likely options as buttons
可能性の高いオプションをボタンとして提示

**Example:**
"Did you mean:
[Track an order] [Track a shipment] [Check order status]"

#### Pattern 2: Ask-and-Confirm | パターン2：尋ねて確認
Make best guess and ask for confirmation
最善の推測をして確認を求める

**Example:**
"It sounds like you want to track your order. Is that right?"
[Yes, track my order] [No, something else]

#### Pattern 3: Progressive Narrowing | パターン3：段階的な絞り込み
Ask a series of questions to narrow down intent
意図を絞り込むための一連の質問をする

**Example:**
Bot: "What brings you here today?"
User: "I have a problem"
Bot: "Is it about an order, a product, or your account?"
User: "My order"
Bot: "What's the issue with your order?"

---

## Slide 9: Human Handoff Design | 人間への引き継ぎデザイン

### When to Hand Off to a Human | 人間に引き継ぐタイミング

#### Trigger Conditions | トリガー条件

**1. Repeated Failures | 繰り返される失敗**
After 2-3 failed attempts to understand user
ユーザーを理解する2-3回の失敗後

**2. Complex Requests | 複雑なリクエスト**
Issues requiring judgment, empathy, or expertise
判断、共感、または専門知識が必要な問題

**3. Emotional Distress | 感情的苦痛**
User shows frustration, anger, or urgency
ユーザーが不満、怒り、または緊急性を示す

**4. Out of Scope | スコープ外**
Requests clearly beyond bot's capabilities
明らかにボットの能力を超えるリクエスト

**5. User Request | ユーザーリクエスト**
User explicitly asks to speak with a person
ユーザーが明示的に人と話すことを求める

**6. High-Value Transactions | 高価値取引**
Large purchases, sensitive account changes
大規模な購入、機密アカウント変更

### Handoff Best Practices | 引き継ぎベストプラクティス

#### Before Handoff | 引き継ぎ前

**1. Set Expectations | 期待を設定**
Tell user what will happen
何が起こるかをユーザーに伝える

**Example:**
"I'll connect you with a team member who can help. They'll have our conversation history, so you won't need to repeat yourself."

「支援できるチームメンバーにおつなぎします。彼らは会話履歴を持っているので、繰り返す必要はありません。」

**2. Collect Necessary Information | 必要な情報を収集**
Gather details to help the human agent
人間のエージェントを助けるための詳細を収集

**Example:**
"Before I transfer you, may I have:
- Your name
- Order number or account email
- Brief description of the issue"

**3. Provide Wait Time Estimate | 待機時間見積もりを提供**
Be honest about expected wait
予想される待機時間について正直に

**Example:**
"Current wait time is about 5 minutes. Would you like to wait, or should I schedule a callback?"

「現在の待機時間は約5分です。待ちますか、それともコールバックをスケジュールしましょうか？」

#### During Handoff | 引き継ぎ中

**Transfer Context | コンテキストを転送**
- Send conversation transcript to agent
  エージェントに会話トランスクリプトを送信
- Include user information collected
  収集したユーザー情報を含める
- Flag sentiment (frustrated, urgent, etc.)
  センチメントにフラグを立てる（不満、緊急など）

#### Handoff Alternatives | 引き継ぎ代替案

**1. Callback Scheduling | コールバックスケジューリング**
"Our team is busy. Can I schedule a callback within 24 hours?"

**2. Email Support | メールサポート**
"I can create a support ticket. You'll get a response by email within 4 hours."

**3. Knowledge Base | ナレッジベース**
"While you wait, here are some articles that might help: [links]"

---

## Slide 10: Designing for Different Error Scenarios | 異なるエラーシナリオ用のデザイン

### Error Scenario Playbook | エラーシナリオプレイブック

#### Scenario 1: No Match | シナリオ1：マッチなし

**User Input:** "Purple elephant suitcase magic"
**Bot's Understanding:** No recognizable intent

**Response Template:**
1. Acknowledge: "I didn't understand that"
2. Explain: "I'm not sure what you're looking for"
3. Guide: "I can help with [list 3-5 things]"
4. Alternative: "Or tell me in different words what you need"

#### Scenario 2: Ambiguous Intent | シナリオ2：曖昧な意図

**User Input:** "I want to cancel"
**Bot's Understanding:** Cancel what? (order, subscription, appointment?)

**Response Template:**
1. Acknowledge: "I can help you cancel"
2. Explain: "What would you like to cancel?"
3. Guide: [Cancel order] [Cancel subscription] [Cancel appointment]
4. Alternative: "Or describe what you'd like to cancel"

#### Scenario 3: Missing Information | シナリオ3：情報不足

**User Input:** "Where's my order?"
**Bot's Understanding:** Intent clear, but needs order number

**Response Template:**
1. Acknowledge: "I'll help you track your order"
2. Explain: "I need your order number to look it up"
3. Guide: "It's in your confirmation email, starts with #"
4. Alternative: "Don't have it? I can look up by email address"

#### Scenario 4: Invalid Format | シナリオ4：無効な形式

**User Input:** "My phone is 555-HELP"
**Bot Expects:** Numeric phone number

**Response Template:**
1. Acknowledge: "Thanks for providing your phone"
2. Explain: "I need it in number format (digits only)"
3. Guide: "Example: 5551234567"
4. Alternative: "Or skip this step and continue"

#### Scenario 5: Out of Scope | シナリオ5：スコープ外

**User Input:** "Can you file my taxes?"
**Bot Capability:** E-commerce support only

**Response Template:**
1. Acknowledge: "I understand you need help with taxes"
2. Explain: "I'm specialized in [store name] orders and products"
3. Guide: "I can help you with: [list capabilities]"
4. Alternative: "For tax help, try [recommendation or human]"

#### Scenario 6: System Error | シナリオ6：システムエラー

**Situation:** Database timeout, API failure

**Response Template:**
1. Acknowledge: "Oops! Something went wrong on our end"
2. Explain: "I'm having trouble connecting to our system"
3. Guide: "This usually resolves in a few minutes"
4. Alternative: "Try again in 5 minutes, or I can email you when it's fixed"

---

## Slide 11: Error Prevention Strategies | エラー予防戦略

### Proactive Error Prevention | 積極的なエラー予防

#### Strategy 1: Input Validation | 戦略1：入力検証

**Before accepting input, validate format**
入力を受け入れる前に、形式を検証

**Example | 例:**
Bot asks for email
User types: "john@email"
Bot: "Almost! Email needs format: name@domain.com"

#### Strategy 2: Constrained Input | 戦略2：制約入力

**Use buttons/dropdowns to limit options**
オプションを制限するためにボタン/ドロップダウンを使用

**Instead of asking:** "What's your preferred contact method?"
**Use buttons:** [Email] [Phone] [Text]

#### Strategy 3: Auto-Correction | 戦略3：自動修正

**Fix common mistakes automatically**
一般的な間違いを自動的に修正

**Example | 例:**
User types: "ordeer number"
Bot recognizes: "order number" (fixes typo silently)

#### Strategy 4: Progressive Disclosure | 戦略4：段階的開示

**Ask one question at a time**
一度に1つの質問をする

**Poor | 悪い:**
"What's your name, email, phone, and order number?"

**Good | 良い:**
"What's your name?" → "What's your email?" → etc.

#### Strategy 5: Set Clear Expectations | 戦略5：明確な期待を設定

**Tell users what to expect and what you can do**
期待と何ができるかをユーザーに伝える

**Example | 例:**
"Hi! I'm OrderBot. I can:
- Track orders
- Process returns
- Answer product questions
What would you like help with?"

#### Strategy 6: Provide Examples | 戦略6：例を提供

**Show users what good input looks like**
良い入力がどのように見えるかをユーザーに示す

**Example | 例:**
Bot: "What date? (Example: 12/25/2025)"
Bot: "Enter order number (Example: ORD-12345)"

---

## Slide 12: Sentiment Detection and Empathy | センチメント検出と共感

### Recognizing User Frustration | ユーザーの不満を認識

#### Frustration Indicators | 不満インジケーター

**Explicit Complaints | 明示的な苦情:**
- "This is frustrating"
- "This doesn't work"
- "I want to speak to a person"
- "You're not helping"

**Implicit Signals | 暗黙のシグナル:**
- Repeated same request
  同じリクエストを繰り返す
- Short, terse responses
  短く簡潔な応答
- All caps text
  すべて大文字のテキスト
- Profanity or aggressive language
  冒涜的または攻撃的な言語

### Empathetic Response Patterns | 共感的応答パターン

#### When User is Frustrated | ユーザーが不満を持っているとき

**Bad Response | 悪い応答:**
"Please rephrase your question"
「質問を言い換えてください」

**Good Response | 良い応答:**
"I'm sorry this has been frustrating. Let me connect you with a team member who can help you right away."
「これが不満だったことをお詫びします。すぐに支援できるチームメンバーにおつなぎします。」

#### Empathy Language Patterns | 共感言語パターン

**Acknowledgment | 認識:**
- "I understand that's frustrating"
  「それが不満であることを理解しています」
- "I can see why you'd be concerned"
  「あなたが心配する理由がわかります」
- "That sounds difficult"
  「それは難しそうです」

**Apology | 謝罪:**
- "I apologize for the confusion"
  「混乱してすみません」
- "Sorry about that!"
  「それについてすみません！」
- "I'm sorry I couldn't help with that"
  「それを支援できなくてすみません」

**Action | アクション:**
- "Let me fix that for you"
  「それを修正します」
- "I'll make sure you get help"
  「支援を受けられるようにします」
- "Here's what I can do..."
  「これが私ができることです...」

---

## Slide 13: Testing Chatbot Error Handling | チャットボットエラーハンドリングのテスト

### Testing Strategies | テスト戦略

#### 1. Happy Path Testing | ハッピーパステスト
**What:** Test ideal scenarios where everything works
**Example:** User provides all info correctly in expected format

#### 2. Sad Path Testing | サッドパステスト
**What:** Test error scenarios deliberately
**Example:** Provide invalid input, missing info, out-of-scope requests

#### 3. Edge Case Testing | エッジケーステスト
**What:** Test unusual or extreme scenarios
**Example:** Very long input, special characters, multiple intents

### Test Scenarios to Run | 実行するテストシナリオ

#### Basic Error Tests | 基本的なエラーテスト
- [ ] Nonsense input ("asdfghjkl")
- [ ] Empty input (just hit enter)
- [ ] Very long input (paragraph)
- [ ] Special characters (!@#$%^&*)
- [ ] Different languages
- [ ] Typos and misspellings

#### Intent Recognition Tests | 意図認識テスト
- [ ] Ambiguous requests
- [ ] Multiple intents in one sentence
- [ ] Similar but different intents
- [ ] Requests outside bot's scope

#### Context Tests | コンテキストテスト
- [ ] Ask follow-up without context
- [ ] Mid-conversation topic switch
- [ ] Return to previous topic
- [ ] Session timeout and return

#### Information Gathering Tests | 情報収集テスト
- [ ] Provide info in wrong format
- [ ] Skip required fields
- [ ] Provide extra unsolicited info
- [ ] Contradict previous answers

### Usability Testing with Real Users | 実際のユーザーでのユーザビリティテスト

#### What to Observe | 観察すること
- Where do users get confused?
  ユーザーはどこで混乱しますか？
- What errors occur most frequently?
  どのエラーが最も頻繁に発生しますか？
- Do users recover from errors?
  ユーザーはエラーから回復しますか？
- When do users give up?
  ユーザーはいつあきらめますか？

#### Metrics to Track | 追跡する指標
- **Fallback Rate:** % of conversations with fallback
  フォールバック率：フォールバックのある会話の%
- **Resolution Rate:** % of intents successfully completed
  解決率：正常に完了した意図の%
- **Handoff Rate:** % of conversations escalated to human
  引き継ぎ率：人間にエスカレートされた会話の%
- **User Satisfaction:** Post-conversation ratings
  ユーザー満足度：会話後の評価

---

## Slide 14: Integration with Bot Platforms | ボットプラットフォームとの統合

### Popular Chatbot Design Tools | 人気のチャットボットデザインツール

#### No-Code Platforms | ノーコードプラットフォーム

**Botmock**
- Visual conversation flow builder
- Error path design features
- User testing and analytics

**Voiceflow**
- Drag-and-drop interface
- Built-in fallback logic
- Voice and chat support

**Landbot**
- WhatsApp, web chat integration
- Conditional logic for errors
- A/B testing capabilities

**ManyChat**
- Facebook Messenger, Instagram
- Rule-based bot builder
- Easy human handoff

#### Development Platforms | 開発プラットフォーム

**Dialogflow (Google)**
- Advanced NLU
- Intent matching and entities
- Fallback intents built-in

**Microsoft Bot Framework**
- Multi-channel deployment
- Azure integration
- Custom NLU training

**Rasa**
- Open source
- Full control over NLU
- On-premise deployment

### Integration Best Practices | 統合ベストプラクティス

- Design flows first (paper/Figma)
  最初にフローをデザイン（紙/Figma）
- Build in platform incrementally
  プラットフォームで段階的に構築
- Test each conversation path
  各会話パスをテスト
- Collect analytics and iterate
  分析を収集して反復

---

## Slide 15: This Week's Activity | 今週のアクティビティ

### Complete Chatbot Prototype with Error Handling | エラーハンドリング付き完全なチャットボットプロトタイプ

#### Activity Overview (70 minutes) | アクティビティ概要（70分）

**Part 1: Error Scenario Planning (20 minutes) | パート1：エラーシナリオ計画（20分）**
- Review your Week 8 conversation flow
  第8週の会話フローをレビュー
- Identify 5-7 potential error scenarios
  5-7の潜在的なエラーシナリオを特定
- Map error recovery paths
  エラー回復パスをマッピング

**Part 2: Design Error Responses (25 minutes) | パート2：エラー応答のデザイン（25分）**
- Write fallback responses (Level 1, 2, 3)
  フォールバック応答を作成（レベル1、2、3）
- Design clarification dialogs
  明確化ダイアログをデザイン
- Create human handoff flow
  人間引き継ぎフローを作成
- Add empathetic responses
  共感的応答を追加

**Part 3: Build Prototype (25 minutes) | パート3：プロトタイプを構築（25分）**
- Use Botmock, Voiceflow, or similar tool
  Botmock、Voiceflow、または類似ツールを使用
- Build complete conversation flow
  完全な会話フローを構築
- Include happy path AND error paths
  ハッピーパスとエラーパスを含める
- Test with partner
  パートナーとテスト

#### Deliverables | 成果物

**1. Enhanced Conversation Flow Diagram | 強化された会話フロー図**
- Complete happy path from Week 8
  第8週からの完全なハッピーパス
- All error scenarios mapped
  すべてのエラーシナリオをマッピング
- Fallback logic documented
  フォールバックロジックを文書化
- Human handoff triggers defined
  人間引き継ぎトリガーを定義

**2. Error Response Script | エラー応答スクリプト**
- Level 1, 2, 3 fallbacks written
  レベル1、2、3のフォールバックを作成
- Clarification questions
  明確化質問
- Empathetic language examples
  共感的言語の例
- Handoff messages
  引き継ぎメッセージ

**3. Interactive Chatbot Prototype | インタラクティブチャットボットプロトタイプ**
- Built in Botmock/Voiceflow or similar
  Botmock/Voiceflowまたは類似で構築
- Minimum 10-15 conversation turns
  最小10-15の会話ターン
- Demonstrates error handling
  エラーハンドリングを示す
- Includes screenshots/link
  スクリーンショット/リンクを含む

**4. Test Results Documentation | テスト結果文書**
- At least 3 test scenarios run
  少なくとも3つのテストシナリオを実行
- Errors encountered and how bot handled
  遭遇したエラーとボットの処理方法
- User feedback collected
  ユーザーフィードバックを収集
- Improvements identified
  改善を特定

**5. AI Transparency Log | AI透明性ログ**
- All prompts and responses if AI tools used
  AIツールを使用した場合のすべてのプロンプトと応答

**Due:** End of Week 9 | 締め切り：第9週終了時

---

## Slide 16: Assessment Rubric | 評価ルーブリック

### Grading Criteria | 評価基準

#### Conversation Flow (25 points) | 会話フロー（25点）
- **Excellent (23-25):** Complete flow with 5+ error scenarios, clear logic, professional diagram
  優秀（23-25）：5+エラーシナリオを持つ完全なフロー、明確なロジック、プロフェッショナルな図
- **Good (20-22):** 3-4 error scenarios, mostly clear logic
  良い（20-22）：3-4エラーシナリオ、ほぼ明確なロジック
- **Satisfactory (17-19):** 2 error scenarios, basic logic
  満足（17-19）：2エラーシナリオ、基本的なロジック
- **Needs Improvement (<17):** Only happy path or unclear flow
  改善が必要（<17）：ハッピーパスのみまたは不明確なフロー

#### Error Handling Design (25 points) | エラーハンドリングデザイン（25点）
- **Excellent (23-25):** 3-level fallbacks, empathetic responses, human handoff designed
  優秀（23-25）：3レベルのフォールバック、共感的応答、人間引き継ぎがデザイン
- **Good (20-22):** 2-level fallbacks, some empathy, handoff mentioned
  良い（20-22）：2レベルのフォールバック、いくらかの共感、引き継ぎが言及
- **Satisfactory (17-19):** Basic fallbacks, minimal empathy
  満足（17-19）：基本的なフォールバック、最小限の共感
- **Needs Improvement (<17):** Generic error messages only
  改善が必要（<17）：一般的なエラーメッセージのみ

#### Prototype Quality (25 points) | プロトタイプ品質（25点）
- **Excellent (23-25):** Fully interactive, 15+ turns, demonstrates error handling effectively
  優秀（23-25）：完全にインタラクティブ、15+ターン、エラーハンドリングを効果的に示す
- **Good (20-22):** Interactive, 10-14 turns, shows some error handling
  良い（20-22）：インタラクティブ、10-14ターン、いくつかのエラーハンドリングを示す
- **Satisfactory (17-19):** Basic prototype, 8-10 turns
  満足（17-19）：基本的なプロトタイプ、8-10ターン
- **Needs Improvement (<17):** Incomplete or non-functional
  改善が必要（<17）：不完全または機能しない

#### Testing & Documentation (15 points) | テストと文書（15点）
- **Excellent (14-15):** 5+ test scenarios, detailed results, insights
  優秀（14-15）：5+テストシナリオ、詳細な結果、洞察
- **Good (12-13):** 3-4 test scenarios, clear results
  良い（12-13）：3-4テストシナリオ、明確な結果
- **Satisfactory (10-11):** 2 test scenarios documented
  満足（10-11）：2つのテストシナリオを文書化
- **Needs Improvement (<10):** Minimal or no testing
  改善が必要（<10）：最小限またはテストなし

#### AI Transparency (10 points) | AI透明性（10点）
- **Complete (10):** All AI interactions logged with verification
  完全（10）：検証付きですべてのAI相互作用をログ
- **Partial (7-9):** Most AI interactions logged
  部分的（7-9）：ほとんどのAI相互作用をログ
- **Incomplete (<7):** Missing AI documentation
  不完全（<7）：AI文書が不足

**Total: 100 points**

---

## Slide 17: Key Takeaways & Next Steps | 重要なポイントと次のステップ

### Today's Key Takeaways | 今日の主なポイント

1. **Errors are Inevitable** | エラーは避けられない
   60-70% of conversations encounter misunderstandings
   会話の60-70%が誤解に遭遇

2. **4-Step Recovery: Acknowledge, Explain, Guide, Offer Alternatives** | 4ステップ回復：認識、説明、ガイド、代替案を提供
   This framework handles most error scenarios
   このフレームワークはほとんどのエラーシナリオを処理

3. **Progressive Fallbacks** | 段階的フォールバック
   Level 1 (soft) → Level 2 (guided) → Level 3 (escalate)
   レベル1（ソフト）→レベル2（ガイド付き）→レベル3（エスカレート）

4. **Empathy Matters** | 共感が重要
   Recognize frustration and respond with understanding
   不満を認識し、理解をもって応答

5. **Test, Test, Test** | テスト、テスト、テスト
   Error paths need as much testing as happy paths
   エラーパスはハッピーパスと同じくらいテストが必要

### Remember | 覚えておいてください
**Good chatbots anticipate problems and help users recover gracefully.**
**良いチャットボットは問題を予測し、ユーザーが優雅に回復するのを支援します。**

**Errors are opportunities to show empathy and build trust!**
**エラーは共感を示し、信頼を構築する機会です！**

### Looking Ahead | 今後の展望

**Week 10-11:** Usability Testing
**Week 12:** Accessibility
**Week 13:** Finalize projects
**Week 14:** Final presentations

**Your chatbot project should now have:**
- Complete conversation flows (happy paths)
  完全な会話フロー（ハッピーパス）
- Robust error handling (error paths)
  堅牢なエラーハンドリング（エラーパス）
- Defined personality and tone
  定義されたパーソナリティとトーン

**Next:** Test with real users and refine!
**次：** 実際のユーザーでテストして改良！

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
