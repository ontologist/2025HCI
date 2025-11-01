# Week 9 Lecture: Instructor Notes and Speaking Points
# 第9週講義：インストラクターノートとスピーキングポイント

**Course:** HCI-101 - Introduction to Human-Computer Interaction
**コース：** HCI-101 - ヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Duration:** 15-20 minutes
**Target Audience:** Undergraduate students, no programming experience required

---

## Pre-Lecture Setup | 講義前セットアップ

### Technical Preparation | 技術的準備
- [ ] Prepare examples of chatbots with error scenarios
- [ ] Test bot portal access for error handling templates
- [ ] Set up Botmock/Voiceflow demo accounts for students
- [ ] Prepare error scenario examples to demonstrate
- [ ] Have flowcharting tools ready (digital or paper)
- [ ] Test presentation slides on classroom display

### Materials to Distribute | 配布する教材
- [ ] Error scenario worksheet
- [ ] Fallback response template
- [ ] Human handoff design guide
- [ ] Testing checklist
- [ ] Activity instructions and deliverables checklist
- [ ] Assessment rubric
- [ ] AI transparency log template

### Classroom Setup | 教室セットアップ
- [ ] Ensure students can access chatbot design tools
- [ ] Prepare for bilingual presentation (English/Japanese)
- [ ] Set up for hands-on prototyping activity
- [ ] Have error handling examples visible
- [ ] Prepare backup materials for technical issues

---

## Slide-by-Slide Speaking Points | スライド別スピーキングポイント

### Slide 1: Welcome to Week 9! | 第9週へようこそ！

#### Opening (2 minutes) | オープニング（2分）

**English Speaking Points:**
- "Welcome to Week 9! This is the second and final week of our chatbot module."
- "Last week, we learned how to design conversations when everything goes right. This week, we focus on what happens when things go wrong - and trust me, things go wrong a lot!"
- "Research shows that 60-70% of chatbot interactions encounter some form of misunderstanding. So error handling isn't optional - it's essential."
- "Today you'll learn how to design robust error handling, create effective fallback responses, and know when to hand off to a human."
- "By the end of class, you'll have a complete chatbot prototype with full error handling - ready to test and potentially use in your final project."

**Japanese Speaking Points:**
- "第9週へようこそ！これはチャットボットモジュールの2週目で最終週です。"
- "先週は、すべてがうまくいくときの会話をデザインする方法を学びました。今週は、物事がうまくいかないときに何が起こるかに焦点を当てます - そして、物事は頻繁にうまくいきません！"
- "調査によると、チャットボットインタラクションの60-70%が何らかの誤解に遭遇します。したがって、エラーハンドリングはオプションではありません - 必須です。"
- "今日は、堅牢なエラーハンドリングをデザインし、効果的なフォールバック応答を作成し、人間への引き継ぎのタイミングを知る方法を学びます。"
- "クラスの終わりまでに、完全なエラーハンドリングを備えた完全なチャットボットプロトタイプができあがります - テストして最終プロジェクトで使用する準備ができています。"

**Key Points to Emphasize:**
- This builds directly on Week 8 content
- Error handling is what separates good bots from bad bots
- Practical skill applicable to final project
- Today's activity is the most complex yet - completing a full prototype

---

### Slide 2: Recap from Week 8 | 第8週の振り返り

#### Quick Review (2 minutes) | クイックレビュー（2分）

**English Speaking Points:**
- "Let's quickly recap what we learned last week to set the foundation."
- "We covered conversational UI principles - natural language interaction, turn-taking, context awareness."
- "We learned about three types of chatbots: rule-based (simple decision trees), AI-powered (natural language processing), and hybrid (combination of both)."
- "We designed conversation flows with clear structure: greeting, intent identification, information gathering, response, and closure."
- "And we defined chatbot personality and tone to create engaging interactions."
- "This week, we're adding the missing piece: what happens when users don't follow the happy path."

**Japanese Speaking Points:**
- "先週学んだことを素早く振り返って基礎を設定しましょう。"
- "会話型UI原則をカバーしました - 自然言語相互作用、ターンテイキング、コンテキスト認識。"
- "3つのタイプのチャットボットについて学びました：ルールベース（シンプルな決定木）、AI搭載（自然言語処理）、ハイブリッド（両方の組み合わせ）。"
- "明確な構造で会話フローをデザインしました：挨拶、意図識別、情報収集、応答、クロージング。"
- "そして、魅力的な相互作用を作成するためにチャットボットのパーソナリティとトーンを定義しました。"
- "今週は、欠けている部分を追加します：ユーザーがハッピーパスに従わない場合に何が起こるか。"

**Interactive Element:**
- "Who completed their Week 8 conversation flow? How many of you designed error scenarios already?"
- "Today we'll make those error scenarios robust and complete."

---

### Slide 3: Why Error Handling Matters | なぜエラーハンドリングが重要なのか

#### Statistics and Reality (3 minutes) | 統計と現実（3分）

**English Speaking Points:**
- "Here are some sobering statistics about chatbots. 60-70% of interactions encounter misunderstandings. That's more than half!"
- "30% of users abandon chatbots after just one failed interaction. One mistake, and you've lost them."
- "But here's the good news: good error handling can recover 80% of frustrated users. That's huge!"
- "Look at the examples on the slide. Poor error handling says 'I don't understand' repeatedly with no guidance. It traps users in loops. There's no way to reach a human."
- "Good error handling explains what went wrong, suggests how to proceed, offers alternatives, and provides easy escalation to human support."
- "The difference between a successful bot and a failed one often comes down to how well it handles errors."

**Japanese Speaking Points:**
- "チャットボットについてのいくつかの厳しい統計があります。インタラクションの60-70%が誤解に遭遇します。それは半分以上です！"
- "ユーザーの30%が1回の失敗後にチャットボットを放棄します。1つの間違いで、彼らを失います。"
- "しかし、良いニュースがあります：良いエラーハンドリングは不満を持つユーザーの80%を回復できます。それは大きいです！"
- "スライドの例を見てください。悪いエラーハンドリングはガイダンスなしで「理解できません」を繰り返し言います。ユーザーをループに閉じ込めます。人間に到達する方法はありません。"
- "良いエラーハンドリングは何が間違っていたかを説明し、進め方を提案し、代替案を提供し、人間サポートへの簡単なエスカレーションを提供します。"
- "成功したボットと失敗したボットの違いは、エラーをどれだけうまく処理するかによることが多いです。"

**Real-World Example:**
- Share a personal frustrating chatbot experience
- Show a video clip of bad chatbot error handling (if available)
- Demonstrate a good error handling example

**Discussion Prompt:**
- "What's the most frustrating chatbot experience you've had? What went wrong?"
- "Have you ever experienced a chatbot that handled errors well? What did it do?"

---

### Slide 4: Understanding NLU Limitations | 自然言語理解の限界を理解する

#### NLU Challenges (4 minutes) | NLUの課題（4分）

**English Speaking Points:**
- "To design good error handling, you first need to understand why chatbots fail. It comes down to Natural Language Understanding limitations."
- "NLU is the ability to understand human language - intent recognition, entity extraction, context understanding. But it's far from perfect."
- "Let's look at six common challenges. First, ambiguity. 'Can you book me?' - does that mean make a reservation, or literally put someone in a book? Context matters."
- "Homophones and spelling: 'there,' 'their,' 'they're' sound the same but mean different things. Bots can get confused."
- "Slang and informal language: 'That's fire!' doesn't mean something is burning - it means it's great. Bot training data may not include current slang."
- "Sarcasm and irony: 'Oh great, another delay' sounds positive ('great') but is actually negative. Very hard for bots to detect."
- "Context-dependent meaning: 'Apple' could be a fruit or a company. You need conversation context to know which."
- "Multi-intent queries: 'I want to book a flight to Tokyo and check my points balance' - two different intents in one sentence. Bots need to handle both."

**Japanese Speaking Points:**
- "良いエラーハンドリングをデザインするには、まずチャットボットが失敗する理由を理解する必要があります。それは自然言語理解の限界に帰着します。"
- "NLUは人間の言語を理解する能力です - 意図認識、エンティティ抽出、コンテキスト理解。しかし、完璧にはほど遠いです。"
- "6つの一般的な課題を見てみましょう。第一に、曖昧性。「Can you book me?」- それは予約を作ることを意味するのか、それとも文字通り誰かを本に入れることを意味するのか？コンテキストが重要です。"
- "同音異義語とスペリング：「there」、「their」、「they're」は同じように聞こえますが、異なる意味を持ちます。ボットは混乱する可能性があります。"
- "スラングと非公式言語：「That's fire!」は何かが燃えていることを意味しません - それは素晴らしいことを意味します。ボットトレーニングデータには現在のスラングが含まれていない可能性があります。"
- "皮肉と皮肉：「Oh great, another delay」は肯定的（「great」）に聞こえますが、実際には否定的です。ボットが検出するのは非常に難しいです。"
- "コンテキスト依存の意味：「Apple」は果物または会社である可能性があります。どちらかを知るには会話のコンテキストが必要です。"
- "マルチ意図クエリ：「I want to book a flight to Tokyo and check my points balance」- 1つの文に2つの異なる意図。ボットは両方を処理する必要があります。"

**Teaching Strategy:**
- For each challenge, provide 2-3 examples
- Ask students to identify which type of challenge certain phrases represent
- Emphasize that designers must anticipate these issues

---

### Slide 5: Types of Chatbot Errors | チャットボットエラーのタイプ

#### Error Taxonomy (4 minutes) | エラー分類（4分）

**English Speaking Points:**
- "Now let's categorize the types of errors you'll encounter. There are six main types."
- "Type 1: No Match - the bot has no idea what the user wants. Example: 'I need help with my widget thingy' - too vague."
- "Type 2: Partial Match or Ambiguous Intent - the bot sees multiple possible meanings. 'I want to change my account' - change settings? Change account type? Close it?"
- "Type 3: Missing Required Information - bot understands intent but lacks details. 'I want to make a reservation' - needs date, time, location, party size."
- "Type 4: Invalid Input - user provides information in wrong format. Bot asks for MM/DD/YYYY, user says 'next Tuesday.'"
- "Type 5: Out of Scope - user requests something the bot can't do. Asking a pizza bot to book a flight."
- "Type 6: System/Technical Error - backend failure, API down, timeout. Not a user error, but still needs handling."
- "Understanding these types helps you design specific error responses for each situation."

**Japanese Speaking Points:**
- "では、遭遇するエラーのタイプを分類しましょう。6つの主なタイプがあります。"
- "タイプ1：マッチなし - ボットはユーザーが何を望んでいるかわかりません。例：「I need help with my widget thingy」- 曖昧すぎます。"
- "タイプ2：部分的マッチまたは曖昧な意図 - ボットは複数の可能な意味を見ています。「I want to change my account」- 設定を変更？アカウントタイプを変更？閉じる？"
- "タイプ3：必要な情報が不足 - ボットは意図を理解していますが詳細が不足しています。「I want to make a reservation」- 日付、時間、場所、人数が必要です。"
- "タイプ4：無効な入力 - ユーザーが間違った形式で情報を提供します。ボットはMM/DD/YYYYを求め、ユーザーは「next Tuesday」と言います。"
- "タイプ5：スコープ外 - ユーザーはボットができないことをリクエストします。ピザボットにフライトを予約するよう頼む。"
- "タイプ6：システム/技術エラー - バックエンド障害、APIダウン、タイムアウト。ユーザーエラーではありませんが、処理が必要です。"
- "これらのタイプを理解することで、各状況の特定のエラー応答をデザインできます。"

**Visual Aid:**
- Walk through each error type with the examples on the slide
- For each, briefly discuss what the bot should do

---

### Slide 6: Error Recovery Strategy Framework | エラー回復戦略フレームワーク

#### The 4-Step Process (5 minutes) | 4ステッププロセス（5分）

**English Speaking Points:**
- "Here's the framework that will solve most of your error handling challenges: the 4-step error recovery process."
- "Step 1: ACKNOWLEDGE. Recognize that something went wrong. Good examples: 'I didn't quite catch that,' 'I'm not sure I understood correctly.' Bad examples: just 'Error' or silence."
- "Step 2: EXPLAIN. Tell the user what the problem is, when possible. 'I need a date in MM/DD/YYYY format' is helpful. Just 'I don't understand' is not."
- "Step 3: GUIDE. Provide specific suggestions for how to proceed. 'Try saying track my order or return an item' gives direction. 'Try again' does not."
- "Step 4: OFFER ALTERNATIVES. Give the user options to escape the error. 'Would you like to speak with a team member?' or 'Should I start over?' provides an exit."
- "This framework works for almost every error scenario. Acknowledge, Explain, Guide, Offer Alternatives. Remember it as AEGO."
- "The key is being helpful, not blaming the user. Never say 'You're not making sense' - say 'I'm having trouble understanding.'"

**Japanese Speaking Points:**
- "エラーハンドリングの課題のほとんどを解決するフレームワークを紹介します：4ステップエラー回復プロセス。"
- "ステップ1：認識。何かが間違っていたことを認識します。良い例：「それを理解できませんでした」、「正しく理解したか確信がありません」。悪い例：「エラー」だけまたは沈黙。"
- "ステップ2：説明。可能な場合、問題が何であるかをユーザーに伝えます。「MM/DD/YYYY形式の日付が必要です」は役立ちます。「理解できません」だけは役立ちません。"
- "ステップ3：ガイド。進め方の具体的な提案を提供します。「注文を追跡するか、アイテムを返品すると言ってみてください」は方向を示します。「もう一度試してください」は示しません。"
- "ステップ4：代替案を提供。エラーから脱出するオプションをユーザーに提供します。「チームメンバーと話したいですか？」または「最初からやり直しましょうか？」は出口を提供します。"
- "このフレームワークはほぼすべてのエラーシナリオで機能します。認識、説明、ガイド、代替案を提供。AEGOとして覚えてください。"
- "鍵は、ユーザーを責めずに役立つことです。「あなたは意味をなしていません」と決して言わないでください - 「理解するのに苦労しています」と言ってください。"

**Demonstration:**
- Walk through a bad error response and transform it using the 4 steps
- Example: "Error" → "I didn't catch that [acknowledge]. I need your order number to help [explain]. It's in your confirmation email [guide]. Or I can connect you with support [alternative]."

---

### Slide 7: Designing Effective Fallback Responses | 効果的なフォールバック応答のデザイン

#### 3-Level Fallback Strategy (4 minutes) | 3レベルフォールバック戦略（4分）

**English Speaking Points:**
- "Fallback responses are what the bot says when it doesn't understand. The key is to have progressive levels."
- "Level 1 is the soft recovery - first time the bot doesn't understand. Be helpful, assume maybe a typo or unclear phrasing. 'I didn't quite understand that. Could you rephrase?'"
- "Level 2 is more directive - second failure. Provide concrete examples and guidance. 'I'm still not sure what you need. Here are some things I can help with:' and show buttons."
- "Level 3 is the final fallback - third strike. Be apologetic and escalate to human. 'I apologize, but I'm having trouble understanding. Let me connect you with a team member.'"
- "The key best practices: vary your messages, don't repeat the same fallback. Provide concrete examples of what you CAN do. Keep tone friendly. Escalate after 2-3 failures. Log failures to improve training."
- "What NOT to do: Don't say 'I don't understand' over and over. Don't blame the user. Don't trap them in loops. Don't give up without offering alternatives."

**Japanese Speaking Points:**
- "フォールバック応答は、ボットが理解しないときに言うことです。鍵は段階的なレベルを持つことです。"
- "レベル1はソフトリカバリ - ボットが理解しない最初の時。役立つようにし、タイプミスや不明確な表現かもしれないと仮定します。「それを理解できませんでした。言い換えていただけますか？」"
- "レベル2はより指示的 - 2回目の失敗。具体的な例とガイダンスを提供します。「まだ何が必要かわかりません。お手伝いできることは次のとおりです：」とボタンを表示します。"
- "レベル3は最終フォールバック - 3回目のストライク。謝罪し、人間にエスカレートします。「申し訳ありませんが、理解するのに苦労しています。チームメンバーにおつなぎします。」"
- "鍵となるベストプラクティス：メッセージを変える、同じフォールバックを繰り返さない。できることの具体的な例を提供。フレンドリーなトーンを保つ。2-3回の失敗後にエスカレート。トレーニングを改善するために失敗をログ。"
- "しないこと：「理解できません」と何度も言わない。ユーザーを責めない。ループに閉じ込めない。代替案を提供せずにあきらめない。"

**Example Walkthrough:**
- Show a conversation where Level 1, 2, then 3 fallbacks are triggered
- Demonstrate how each level increases in directiveness and helpfulness

---

### Slide 8: Handling Ambiguity and Clarification | 曖昧性の処理と明確化

#### Disambiguation Strategies (3 minutes) | 曖昧性解消戦略（3分）

**English Speaking Points:**
- "When intent is unclear, don't just give up. Use clarification strategies."
- "Pattern 1: Multiple Choice. Present likely options as buttons. 'Did you mean: Track an order, Track a shipment, or Check order status?'"
- "Pattern 2: Ask-and-Confirm. Make your best guess and ask for confirmation. 'It sounds like you want to track your order. Is that right?' Then provide Yes/No buttons."
- "Pattern 3: Progressive Narrowing. Ask a series of questions to narrow down intent. 'What brings you here?' → 'I have a problem' → 'Is it about an order, product, or account?' → 'My order' → 'What's the issue?'"
- "The key is never leaving users stuck. Always provide a way forward, even if it's asking for clarification."

**Japanese Speaking Points:**
- "意図が不明確な場合、あきらめないでください。明確化戦略を使用します。"
- "パターン1：多肢選択。可能性の高いオプションをボタンとして提示します。「次のいずれかですか：注文を追跡、出荷を追跡、注文ステータスを確認？」"
- "パターン2：尋ねて確認。最善の推測をして確認を求めます。「注文を追跡したいようです。それで正しいですか？」次にはい/いいえボタンを提供します。"
- "パターン3：段階的な絞り込み。意図を絞り込むための一連の質問をします。「何があなたをここに連れてきましたか？」→「問題があります」→「注文、製品、アカウントについてですか？」→「私の注文」→「何が問題ですか？」"
- "鍵は、ユーザーを行き詰まらせないことです。明確化を求めることであっても、常に前進する方法を提供します。"

---

### Slide 9: Human Handoff Design | 人間への引き継ぎデザイン

#### When and How to Escalate (4 minutes) | エスカレートのタイミングと方法（4分）

**English Speaking Points:**
- "Knowing when to hand off to a human is crucial. There are six trigger conditions:"
- "1. Repeated failures - after 2-3 failed attempts to understand the user, escalate."
- "2. Complex requests requiring judgment, empathy, or expertise the bot doesn't have."
- "3. Emotional distress - if the user is frustrated, angry, or shows urgency, connect them to a human."
- "4. Out of scope - requests clearly beyond the bot's capabilities."
- "5. User request - if they explicitly ask to speak with a person, honor it immediately."
- "6. High-value transactions - large purchases or sensitive account changes should involve humans."
- "Before handoff: set expectations about what will happen, collect necessary information to help the agent, provide wait time estimates."
- "During handoff: transfer conversation transcript, include user information, flag sentiment (frustrated, urgent)."
- "Offer alternatives: callback scheduling if wait is long, email support for non-urgent issues, knowledge base articles while they wait."

**Japanese Speaking Points:**
- "人間への引き継ぎのタイミングを知ることは重要です。6つのトリガー条件があります："
- "1. 繰り返される失敗 - ユーザーを理解する2-3回の失敗後、エスカレート。"
- "2. ボットが持っていない判断、共感、専門知識が必要な複雑なリクエスト。"
- "3. 感情的苦痛 - ユーザーが不満、怒り、または緊急性を示す場合、人間につなげます。"
- "4. スコープ外 - 明らかにボットの能力を超えるリクエスト。"
- "5. ユーザーリクエスト - 人と話すことを明示的に求める場合、すぐに尊重します。"
- "6. 高価値取引 - 大規模な購入または機密アカウント変更には人間が関与すべきです。"
- "引き継ぎ前：何が起こるかについて期待を設定し、エージェントを助けるために必要な情報を収集し、待機時間見積もりを提供します。"
- "引き継ぎ中：会話トランスクリプトを転送し、ユーザー情報を含め、センチメント（不満、緊急）にフラグを立てます。"
- "代替案を提供：待機が長い場合はコールバックスケジューリング、緊急でない問題にはメールサポート、待っている間はナレッジベース記事。"

**Real-World Example:**
- Show a good handoff example: "I'll connect you with a team member. They'll have our conversation history. Current wait is 5 minutes. Would you like to wait or schedule a callback?"

---

### Slide 10-13: Error Scenarios & Prevention (4 minutes total)

**Teaching Points for Slides 10-13:**
- Walk through each error scenario on slide 10 using the response template
- For slide 11 (error prevention), emphasize proactive design
- For slide 12 (sentiment detection), discuss empathy language
- For slide 13 (testing), provide practical test scenario examples

**Key Message:**
"Good error handling starts with prevention, includes empathetic responses, and requires thorough testing with real scenarios."

---

### Slide 14: Integration with Bot Platforms | ボットプラットフォームとの統合

#### Platform Overview (2 minutes) | プラットフォーム概要（2分）

**English Speaking Points:**
- "For today's activity, you'll use no-code platforms to build your prototype."
- "Popular options include Botmock, Voiceflow, Landbot, and ManyChat. All have free tiers."
- "These platforms have built-in fallback logic, error handling features, and testing tools."
- "Best practice: design your flows on paper or in Figma first, then build incrementally in the platform."
- "Test each conversation path as you build it. Don't wait until the end."

**Platform Recommendations:**
- Botmock: Best for conversation flow visualization
- Voiceflow: Great drag-and-drop interface
- Landbot: Good for web chat integration
- Simple flowchart tools work too (Miro, Lucidchart)

---

### Slide 15: This Week's Activity | 今週のアクティビティ

#### Activity Introduction (3 minutes) | アクティビティ紹介（3分）

**English Speaking Points:**
- "Now for the main event - building your complete chatbot prototype with error handling."
- "This activity has three parts over 70 minutes. Part 1: Error Scenario Planning (20 min). Review your Week 8 flow, identify 5-7 potential errors, map recovery paths."
- "Part 2: Design Error Responses (25 min). Write 3-level fallback responses, design clarification dialogs, create handoff flow, add empathetic language."
- "Part 3: Build Prototype (25 min). Use Botmock, Voiceflow, or similar tool to build the complete flow including happy path AND error paths. Then test with a partner."
- "Your deliverables include: enhanced conversation flow diagram, error response script, interactive prototype, test results documentation, and AI transparency log."
- "This is the most complex activity yet, but you have all the knowledge you need. The HCI-101 Bot will provide templates and guidance."

**Japanese Speaking Points:**
- "では、メインイベント - エラーハンドリング付きの完全なチャットボットプロトタイプの構築です。"
- "このアクティビティには70分にわたる3つのパートがあります。パート1：エラーシナリオ計画（20分）。第8週のフローをレビューし、5-7の潜在的なエラーを特定し、回復パスをマッピングします。"
- "パート2：エラー応答のデザイン（25分）。3レベルのフォールバック応答を作成し、明確化ダイアログをデザインし、引き継ぎフローを作成し、共感的言語を追加します。"
- "パート3：プロトタイプを構築（25分）。Botmock、Voiceflow、または類似ツールを使用して、ハッピーパスとエラーパスを含む完全なフローを構築します。次にパートナーとテストします。"
- "成果物には、強化された会話フロー図、エラー応答スクリプト、インタラクティブプロトタイプ、テスト結果文書、AI透明性ログが含まれます。"
- "これは最も複雑なアクティビティですが、必要なすべての知識があります。HCI-101ボットはテンプレートとガイダンスを提供します。"

**Transition to Activity:**
- "You have 70 minutes. Work efficiently, help each other, and don't hesitate to ask questions."
- "This prototype will be valuable for your final project - make it good!"

---

### Slide 16: Assessment Rubric | 評価ルーブリック

#### Grading Criteria (1 minute) | 評価基準（1分）

**English Speaking Points:**
- "Let's quickly review how you'll be graded."
- "Conversation Flow (25 pts): We're looking for 5+ error scenarios with clear logic and professional diagrams."
- "Error Handling Design (25 pts): 3-level fallbacks, empathetic responses, and human handoff strategy."
- "Prototype Quality (25 pts): Fully interactive with 15+ turns, demonstrating effective error handling."
- "Testing & Documentation (15 pts): At least 5 test scenarios with detailed results."
- "AI Transparency (10 pts): Complete documentation of all AI tool usage."
- "Total is 100 points. This is a significant assignment, so put in the effort!"

---

### Slide 17: Key Takeaways & Next Steps | 重要なポイントと次のステップ

#### Closing (2 minutes) | クロージング（2分）

**English Speaking Points:**
- "Let's recap the key takeaways from today."
- "Errors are inevitable - 60-70% of conversations encounter them. Design for failure, not just success."
- "Use the 4-step recovery process: Acknowledge, Explain, Guide, Offer Alternatives."
- "Progressive fallbacks are your friend: soft recovery → guided help → escalation to human."
- "Empathy matters. Recognize frustration and respond with understanding, not blame."
- "Test, test, test. Error paths need as much testing as happy paths."
- "Remember: good chatbots anticipate problems and help users recover gracefully. Errors are opportunities to show empathy and build trust."
- "Next week, we move into usability testing - you'll test your prototypes with real users."
- "Your chatbot should now be nearly complete: happy paths, error paths, personality, and tone. Just needs refinement based on user feedback."

**Japanese Speaking Points:**
- "今日の重要なポイントを要約しましょう。"
- "エラーは避けられません - 会話の60-70%がそれらに遭遇します。成功だけでなく、失敗のためにデザインします。"
- "4ステップ回復プロセスを使用します：認識、説明、ガイド、代替案を提供。"
- "段階的フォールバックはあなたの友達です：ソフトリカバリ → ガイド付きヘルプ → 人間へのエスカレーション。"
- "共感が重要です。不満を認識し、非難ではなく理解をもって応答します。"
- "テスト、テスト、テスト。エラーパスはハッピーパスと同じくらいテストが必要です。"
- "覚えておいてください：良いチャットボットは問題を予測し、ユーザーが優雅に回復するのを支援します。エラーは共感を示し、信頼を構築する機会です。"
- "来週、ユーザビリティテストに移ります - 実際のユーザーでプロトタイプをテストします。"
- "チャットボットはほぼ完成しているはずです：ハッピーパス、エラーパス、パーソナリティ、トーン。ユーザーフィードバックに基づく改良だけが必要です。"

**Final Encouragement:**
- "You've learned the hardest part of chatbot design today. Now go build something amazing!"
- "Remember: the best learning comes from doing. Make mistakes, learn from them, iterate!"

---

## Post-Lecture Activities | 講義後アクティビティ

### Immediate Next Steps | 即座の次のステップ
1. **Distribute Activity Materials**
   - Error scenario worksheet
   - Fallback response templates
   - Platform access guides
   - Deliverables checklist

2. **Set Up Activity**
   - Ensure students can access design platforms
   - Verify HCI-101 Bot portal working
   - Provide flowcharting tool access

3. **Circulate and Support**
   - Help with error scenario identification
   - Guide fallback response writing
   - Assist with platform tool usage
   - Monitor progress and time

### Common Issues to Watch For | 注意すべき一般的な問題
- **Scope Too Large:** Students try to handle every possible error
- **Generic Responses:** Fallbacks too similar, not progressive
- **Platform Confusion:** Technical difficulties with tools
- **Time Management:** Not enough time for Part 3

### Support Strategies | サポート戦略
- **Prioritization:** Help students focus on most important errors first
- **Response Templates:** Provide examples to speed up writing
- **Platform Demos:** Quick mini-tutorials on tools
- **Pair Programming:** Encourage students to help each other

---

## Assessment and Feedback | 評価とフィードバック

### During Activity | アクティビティ中
- **Monitor Progress:** Check that error scenarios are realistic
- **Provide Guidance:** Help refine fallback responses
- **Answer Questions:** Clarify expectations
- **Encourage Testing:** Push students to test error paths

### Deliverables Review Criteria | 成果物レビュー基準

**Conversation Flow Diagram:**
- Includes happy path from Week 8
- Maps 5+ realistic error scenarios
- Shows clear recovery paths
- Professional visualization

**Error Response Script:**
- 3 distinct fallback levels
- Empathetic language
- Specific guidance in responses
- Clear handoff triggers

**Interactive Prototype:**
- Minimum 10-15 conversation turns
- Demonstrates error handling effectively
- Includes both happy and error paths
- Link/screenshots provided

**Test Results:**
- At least 3-5 test scenarios
- Documents errors encountered
- Shows how bot handled errors
- Identifies improvements

### Feedback Focus | フィードバックフォーカス
- **Praise Thoroughness:** Comprehensive error coverage
- **Guide Refinement:** More empathetic language
- **Connect Forward:** Preview usability testing
- **Portfolio Quality:** Encourage professional presentation

---

## Emergency Procedures | 緊急手順

### Technical Issues | 技術的問題
- **Platform Down:** Have alternative (paper prototyping)
- **No Internet:** Provide offline activity option
- **Tool Access Problems:** Share accounts or use alternatives

### Student Issues | 学生の問題
- **Overwhelming Complexity:** Help prioritize core errors
- **Lack of Ideas:** Brainstorm error scenarios together
- **Time Shortage:** Allow extension or reduce scope

### Time Management | 時間管理
- **Running Short:** Focus on Part 2 (error responses)
- **Finished Early:** Add more error scenarios
- **Need Extension:** Allow submission by end of week

---

*End of Instructor Notes*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
