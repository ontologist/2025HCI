# Week 10: Usability Testing Fundamentals
# 第10週：ユーザビリティテストの基礎

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Week 10! | 第10週へようこそ！

### Today's Agenda | 今日のアジェンダ
- **What is Usability Testing?** | ユーザビリティテストとは？
- **Types of Testing Methods** | テスト方法の種類
- **Planning and Preparing Tests** | テストの計画と準備
- **Think-Aloud Protocol** | シンクアラウドプロトコル
- **Usability Metrics** | ユーザビリティメトリクス
- **Hands-On Practice** | ハンズオン実践

### Learning Objectives | 学習目標
By the end of today, you will:
今日の終わりまでに、あなたは：
- Understand different types of usability testing methods | さまざまなユーザビリティテスト方法を理解する
- Create comprehensive test plans with tasks and success criteria | タスクと成功基準を含む包括的なテスト計画を作成する
- Apply the think-aloud protocol effectively | シンクアラウドプロトコルを効果的に適用する
- Measure usability using standard metrics | 標準的なメトリクスを使用してユーザビリティを測定する

---

## Slide 2: What is Usability Testing? | ユーザビリティテストとは？

### Definition | 定義
**Usability Testing** is the process of evaluating a product or interface by testing it with representative users to identify usability problems, gather qualitative and quantitative data, and determine user satisfaction.

**ユーザビリティテスト**は、代表的なユーザーでテストすることによって製品またはインターフェースを評価し、ユーザビリティの問題を特定し、定性的および定量的データを収集し、ユーザー満足度を判断するプロセスです。

### Why Test? | なぜテストするのか？
- **Validate Design Decisions** | デザイン決定を検証: Ensure your design solves real user problems | デザインが実際のユーザーの問題を解決することを確認
- **Identify Issues Early** | 問題を早期に特定: Fix problems before launch | 起動前に問題を修正
- **Improve User Experience** | ユーザー体験を改善: Make interfaces more usable and satisfying | インターフェースをより使いやすく満足できるものにする
- **Reduce Development Costs** | 開発コストを削減: Cheaper to fix issues in testing than after launch | 起動後よりもテスト中に問題を修正する方が安い

### Key Principle | 重要な原則
**You are NOT the user!** | **あなたはユーザーではありません！**
Designers' assumptions don't always match real user behavior and needs.
デザイナーの仮定は常に実際のユーザーの行動とニーズと一致するわけではありません。

---

## Slide 3: Types of Usability Testing | ユーザビリティテストの種類

### Moderated Testing | 司会付きテスト

#### In-Person Moderated | 対面司会付き
- **What:** Researcher observes user in same location | 研究者が同じ場所でユーザーを観察
- **Pros:** Rich insights, can probe deeper, observe body language | 豊富な洞察、より深く探ることができる、ボディランゲージを観察
- **Cons:** Time-consuming, limited to local participants | 時間がかかる、地元の参加者に限定
- **Best For:** Early prototypes, complex interfaces | 初期プロトタイプ、複雑なインターフェース

#### Remote Moderated | リモート司会付き
- **What:** Researcher guides user via video call | 研究者がビデオ通話でユーザーをガイド
- **Pros:** Wider participant pool, natural environment testing | より広い参加者プール、自然環境でのテスト
- **Cons:** Technical issues possible, harder to observe | 技術的問題が可能、観察が困難
- **Best For:** Distributed teams, mobile interfaces | 分散チーム、モバイルインターフェース

### Unmoderated Testing | 司会なしテスト

#### Remote Unmoderated | リモート司会なし
- **What:** Users complete tasks independently with recorded sessions | ユーザーが録画されたセッションで独立してタスクを完了
- **Pros:** Fast, scalable, lower cost, no scheduling conflicts | 高速、スケーラブル、低コスト、スケジュールの競合なし
- **Cons:** No probing, can't clarify confusion, may miss context | 探ることができない、混乱を明確化できない、コンテキストを見逃す可能性
- **Best For:** Large sample sizes, quantitative metrics | 大規模サンプルサイズ、定量的メトリクス

---

## Slide 4: Choosing the Right Testing Method | 適切なテスト方法の選択

### Decision Framework | 決定フレームワーク

#### Use Moderated Testing When: | 司会付きテストを使用する場合：
- You need deep qualitative insights | 深い定性的洞察が必要
- Testing early prototypes or concepts | 初期プロトタイプまたはコンセプトをテスト
- Complex tasks requiring guidance | ガイダンスが必要な複雑なタスク
- Small number of participants (5-8 users) | 少数の参加者（5-8人のユーザー）
- Budget allows for researcher time | 予算が研究者の時間を許可

#### Use Unmoderated Testing When: | 司会なしテストを使用する場合：
- You need quantitative metrics at scale | 規模で定量的メトリクスが必要
- Testing simple, well-defined tasks | シンプルで明確に定義されたタスクをテスト
- Participants are geographically dispersed | 参加者が地理的に分散している
- Large sample size needed (20+ users) | 大規模サンプルサイズが必要（20人以上のユーザー）
- Limited time and budget | 限られた時間と予算

### Nielsen's Rule: 5 Users | ニールセンの法則：5人のユーザー
Testing with **5 users** typically uncovers **85% of usability problems**.
**5人のユーザー**でテストすると、通常**85%のユーザビリティ問題**を発見します。

---

## Slide 5: The Usability Test Plan | ユーザビリティテスト計画

### Essential Components | 必須コンポーネント

#### 1. Test Objectives | テスト目的
- What do you want to learn? | 何を学びたいですか？
- What design questions need answers? | どのデザイン質問に答える必要がありますか？
- What specific features are you testing? | どの特定の機能をテストしていますか？

#### 2. Participant Criteria | 参加者基準
- Who are your target users? | ターゲットユーザーは誰ですか？
- Demographics (age, tech experience, etc.) | 人口統計（年齢、技術経験など）
- How many participants? | 何人の参加者？
- Screening questions to find right users | 適切なユーザーを見つけるためのスクリーニング質問

#### 3. Test Tasks | テストタスク
- Realistic scenarios users would perform | ユーザーが実行する現実的なシナリオ
- Clear start and end points | 明確な開始点と終了点
- Measurable success criteria | 測定可能な成功基準
- 5-8 tasks per session (max) | セッションあたり5-8タスク（最大）

#### 4. Test Environment | テスト環境
- Location (in-person or remote) | 場所（対面またはリモート）
- Equipment and software needed | 必要な機器とソフトウェア
- Recording tools (screen capture, video) | 録画ツール（画面キャプチャ、ビデオ）
- Prototype or product version | プロトタイプまたは製品バージョン

#### 5. Metrics to Collect | 収集するメトリクス
- Task success rate | タスク成功率
- Time on task | タスク時間
- Error rate | エラー率
- Subjective satisfaction | 主観的満足度

---

## Slide 6: Creating Effective Test Tasks | 効果的なテストタスクの作成

### Task Writing Best Practices | タスク作成のベストプラクティス

#### ✅ Good Task Characteristics | 良いタスクの特性
- **Realistic:** Based on real user goals | リアル：実際のユーザー目標に基づく
- **Specific:** Clear what user needs to accomplish | 具体的：ユーザーが達成する必要があることが明確
- **Scenario-Based:** Provides context | シナリオベース：コンテキストを提供
- **Measurable:** Success/failure clearly defined | 測定可能：成功/失敗が明確に定義
- **Independent:** Each task stands alone | 独立：各タスクが単独で成立

#### Good Task Examples | 良いタスクの例

**Fitness App:**
"You want to track your morning run. Start a running session and record 30 minutes of activity."
「朝のランニングを追跡したい。ランニングセッションを開始し、30分のアクティビティを記録してください。」

**E-commerce App:**
"You need to buy a birthday gift for your friend. Find a book about Japanese culture under 2000 yen and add it to your cart."
「友人の誕生日プレゼントを買う必要があります。2000円未満の日本文化に関する本を見つけてカートに追加してください。」

#### ❌ Bad Task Examples | 悪いタスクの例

**Too Vague:**
"Use the app to do something with running."
「アプリを使用してランニングで何かをする。」

**Leading/Biased:**
"Click the green 'Start Run' button to begin tracking."
「緑の「ランニング開始」ボタンをクリックして追跡を開始する。」

---

## Slide 7: The Think-Aloud Protocol | シンクアラウドプロトコル

### What is Think-Aloud? | シンクアラウドとは？

**Think-Aloud** is a method where users verbalize their thoughts, feelings, and actions while using an interface.

**シンクアラウド**は、ユーザーがインターフェースを使用している間に、考え、感情、行動を声に出す方法です。

### Benefits | 利点
- **Reveals Mental Models** | メンタルモデルを明らかに: Understand how users think about the interface | ユーザーがインターフェースについてどう考えているかを理解
- **Identifies Confusion** | 混乱を特定: Hear when users are unsure or frustrated | ユーザーが不確かまたはフラストレーションを感じているときを聞く
- **Exposes Expectations** | 期待を露呈: Learn what users expect vs. what happens | ユーザーが何を期待するか対何が起こるかを学ぶ
- **Provides Rich Data** | 豊富なデータを提供: Qualitative insights beyond metrics | メトリクスを超えた定性的洞察

### How to Facilitate | 促進方法

#### Instructions for Participants | 参加者への指示
- "Please think out loud as you complete the tasks." | 「タスクを完了する際に声に出して考えてください。」
- "Tell me what you're looking for, what you're thinking, and what you're trying to do." | 「何を探しているか、何を考えているか、何をしようとしているかを教えてください。」
- "There are no wrong answers - we're testing the design, not you." | 「間違った答えはありません - デザインをテストしており、あなたをテストしているのではありません。」

#### Moderator Prompts | モデレーターのプロンプト
- "What are you thinking?" | 「何を考えていますか？」
- "What do you expect to happen?" | 「何が起こると予想しますか？」
- "Why did you choose that option?" | 「なぜそのオプションを選びましたか？」
- **Avoid leading questions!** | 誘導質問を避ける！

---

## Slide 8: Usability Metrics - Quantitative Data | ユーザビリティメトリクス - 定量的データ

### Core Usability Metrics | コアユーザビリティメトリクス

#### 1. Task Success Rate | タスク成功率

**Formula:** (Number of successfully completed tasks / Total number of task attempts) × 100
**計算式：**（正常に完了したタスク数 / タスク試行総数）× 100

**What it measures:** Whether users can complete tasks
**測定内容：** ユーザーがタスクを完了できるかどうか

**Success Criteria:**
- **Binary:** Complete success or complete failure | 完全な成功または完全な失敗
- **Partial Credit:** Level of completion (0%, 50%, 100%) | 完了レベル（0%、50%、100%）

**Good Benchmark:** >78% success rate for most interfaces
**良いベンチマーク：** ほとんどのインターフェースで78%以上の成功率

#### 2. Time on Task | タスク時間

**What it measures:** How long it takes users to complete tasks
**測定内容：** ユーザーがタスクを完了するのにかかる時間

**How to measure:** Start timing when task begins, stop when successfully completed
**測定方法：** タスク開始時に計時開始、正常完了時に停止

**Analysis:**
- **Average time:** Mean time across all participants | すべての参加者の平均時間
- **Outliers:** Identify unusually long times (confusion points) | 異常に長い時間を特定（混乱ポイント）

**Note:** Faster isn't always better - consider accuracy and satisfaction
**注：** 速いことが常に良いわけではありません - 正確性と満足度を考慮

#### 3. Error Rate | エラー率

**Formula:** (Number of errors / Total number of task attempts) × 100
**計算式：**（エラー数 / タスク試行総数）× 100

**Types of Errors:**
- **Slips:** Unintentional mistakes (wrong button tap) | 意図しない間違い（間違ったボタンタップ）
- **Mistakes:** Wrong actions based on misunderstanding | 誤解に基づく間違った行動

**What to track:**
- Error frequency per task | タスクごとのエラー頻度
- Error recovery time | エラー回復時間
- Severity of errors | エラーの重大度

---

## Slide 9: Usability Metrics - Qualitative Data | ユーザビリティメトリクス - 定性的データ

#### 4. Subjective Satisfaction | 主観的満足度

**System Usability Scale (SUS)** | システムユーザビリティスケール（SUS）

A standardized 10-item questionnaire measuring perceived usability.
認知されたユーザビリティを測定する標準化された10項目のアンケート。

**Sample SUS Questions:**
1. I think that I would like to use this system frequently. | このシステムを頻繁に使用したいと思います。
2. I found the system unnecessarily complex. | システムが不必要に複雑だと感じました。
3. I thought the system was easy to use. | システムは使いやすいと思いました。
4. I would imagine that most people would learn to use this system very quickly. | ほとんどの人がこのシステムを非常に速く学べると想像します。

**Scoring:** 5-point scale (Strongly Disagree to Strongly Agree)
**スコアリング：** 5段階スケール（強く同意しないから強く同意する）

**SUS Score Interpretation:**
- **80+** = Excellent | 優秀
- **70-79** = Good | 良い
- **60-69** = Fair | まあまあ
- **<60** = Needs Improvement | 改善が必要

#### Post-Task Questions | タスク後の質問
- "How difficult was this task?" (1-5 scale) | 「このタスクはどのくらい難しかったですか？」（1-5スケール）
- "How confident are you that you completed the task correctly?" | 「タスクを正しく完了したと確信していますか？」
- "What was most frustrating about this experience?" | 「この体験で最もフラストレーションを感じたことは何ですか？」

---

## Slide 10: Preparing for Testing Sessions | テストセッションの準備

### Pre-Test Preparation Checklist | テスト前準備チェックリスト

#### Materials to Prepare | 準備する資料
- [ ] **Test plan document** | テスト計画文書
- [ ] **Task scenarios (printed or digital)** | タスクシナリオ（印刷またはデジタル）
- [ ] **Consent forms** | 同意書
- [ ] **Pre-test questionnaire** (demographics, experience) | 事前アンケート（人口統計、経験）
- [ ] **Post-test questionnaire** (SUS, satisfaction) | 事後アンケート（SUS、満足度）
- [ ] **Data recording sheets** | データ記録シート
- [ ] **Prototype or product** (fully functional) | プロトタイプまたは製品（完全に機能）

#### Technical Setup | 技術的セットアップ
- [ ] **Screen recording software** | 画面録画ソフトウェア
- [ ] **Audio recording equipment** | 音声録音機器
- [ ] **Camera** (if recording participant) | カメラ（参加者を録画する場合）
- [ ] **Backup devices** | バックアップデバイス
- [ ] **Test environment** (quiet, comfortable) | テスト環境（静か、快適）

#### Moderator Preparation | モデレーター準備
- [ ] **Practice test script** | テストスクリプトの練習
- [ ] **Rehearse think-aloud prompts** | シンクアラウドプロンプトのリハーサル
- [ ] **Know prototype thoroughly** | プロトタイプを完全に把握
- [ ] **Prepare neutral responses** | 中立的な応答を準備
- [ ] **Plan time buffer between sessions** | セッション間のタイムバッファを計画

---

## Slide 11: Conducting the Test Session | テストセッションの実施

### Session Structure (60 minutes typical) | セッション構造（通常60分）

#### Introduction (5 minutes) | 導入（5分）
- Welcome participant and build rapport | 参加者を歓迎し、信頼関係を構築
- Explain purpose of test | テストの目的を説明
- Review consent form and privacy | 同意書とプライバシーをレビュー
- Explain think-aloud protocol | シンクアラウドプロトコルを説明
- Emphasize: "We're testing the design, not you" | 強調：「デザインをテストしており、あなたではありません」

#### Pre-Test Questions (5 minutes) | テスト前質問（5分）
- Collect demographic information | 人口統計情報を収集
- Assess relevant experience level | 関連する経験レベルを評価
- Set baseline expectations | ベースライン期待を設定

#### Task Scenarios (35-40 minutes) | タスクシナリオ（35-40分）
- Present tasks one at a time | 一度に1つずつタスクを提示
- Observe and take notes | 観察してメモを取る
- Prompt think-aloud if participant goes silent | 参加者が沈黙した場合にシンクアラウドを促す
- Avoid helping unless participant is stuck | 参加者が行き詰まらない限り助けを避ける
- Record metrics (time, success, errors) | メトリクスを記録（時間、成功、エラー）

#### Post-Test Questions (10 minutes) | テスト後質問（10分）
- Administer SUS questionnaire | SUSアンケートを実施
- Ask about overall experience | 全体的な体験について尋ねる
- Probe specific observations | 特定の観察を探る
- Ask for suggestions and improvements | 提案と改善を求める

#### Debrief (5 minutes) | デブリーフ（5分）
- Thank participant | 参加者に感謝
- Answer any questions | 質問に答える
- Provide incentive if applicable | 該当する場合はインセンティブを提供

---

## Slide 12: Moderator Best Practices | モデレーターのベストプラクティス

### Do's and Don'ts | すべきこととすべきでないこと

#### ✅ DO: | すべきこと：
- **Stay neutral** | 中立を保つ: Don't show approval or disapproval | 承認または不承認を示さない
- **Listen actively** | 積極的に聞く: Pay attention to what users say and do | ユーザーが言うことと行うことに注意を払う
- **Observe body language** | ボディランゲージを観察: Frustration, confusion, satisfaction | フラストレーション、混乱、満足
- **Take detailed notes** | 詳細なメモを取る: Record observations, quotes, behaviors | 観察、引用、行動を記録
- **Let users struggle briefly** | ユーザーを少し苦労させる: See how they problem-solve | どのように問題を解決するかを見る
- **Ask open-ended questions** | オープンエンドの質問をする: "What are you thinking?" | 「何を考えていますか？」

#### ❌ DON'T: | すべきでないこと：
- **Lead the user** | ユーザーを誘導: "Click the button on the top right..." | 「右上のボタンをクリック...」
- **Defend the design** | デザインを擁護: "Well, that feature is meant to..." | 「その機能は...を意図しています」
- **Interrupt too quickly** | 早く中断しすぎる: Give users time to think | ユーザーに考える時間を与える
- **Make assumptions** | 仮定をする: Ask follow-up questions | フォローアップ質問をする
- **Show frustration** | フラストレーションを示す: Stay patient and supportive | 忍耐強くサポート的に

### Neutral Responses | 中立的な応答
- "What do you expect to see?" | 「何が表示されると予想しますか？」
- "Tell me more about that." | 「それについてもっと教えてください。」
- "Why did you choose that option?" | 「なぜそのオプションを選びましたか？」
- "What are you looking for?" | 「何を探していますか？」

---

## Slide 13: Recording and Documenting Findings | 調査結果の記録と文書化

### What to Capture | キャプチャするもの

#### Quantitative Data | 定量的データ
- Task success/failure for each participant | 各参加者のタスク成功/失敗
- Time to complete each task | 各タスクを完了する時間
- Number and type of errors | エラーの数と種類
- Number of attempts before success | 成功前の試行回数
- SUS scores and ratings | SUSスコアと評価

#### Qualitative Data | 定性的データ
- Participant quotes (verbatim) | 参加者の引用（逐語）
- Observed behaviors and body language | 観察された行動とボディランゲージ
- Confusion points and pain points | 混乱ポイントとペインポイント
- Positive reactions and delight moments | ポジティブな反応と喜びの瞬間
- Feature requests and suggestions | 機能リクエストと提案

### Note-Taking Methods | メモ取り方法

#### Real-Time Observation Sheet | リアルタイム観察シート
```
Participant ID: P01
Task: Find and purchase a book under 2000 yen

Time Started: 10:35 AM
Time Ended: 10:42 AM
Total Time: 7 minutes

Success: ✓ Partial (added to cart but didn't complete checkout)

Observations:
- Struggled to find search filter (2 min)
- "Where is the price filter?" (quote)
- Clicked on wrong category initially
- Smiled when found book
- Confused by checkout button location

Errors: 2 (wrong category, missed filter)
```

---

## Slide 14: Common Usability Issues to Watch For | 注意すべき一般的なユーザビリティ問題

### Navigation Issues | ナビゲーション問題
- **Can't find features** | 機能が見つからない: Users don't know where to look | ユーザーがどこを見るべきかわからない
- **Unclear labels** | 不明確なラベル: Button/menu text is ambiguous | ボタン/メニューテキストが曖昧
- **Broken information architecture** | 壊れた情報アーキテクチャ: Illogical grouping of features | 機能の非論理的なグループ化

### Interaction Issues | インタラクション問題
- **Unresponsive elements** | 応答しない要素: Users don't know if tap/click worked | タップ/クリックが機能したかユーザーがわからない
- **Unclear affordances** | 不明確なアフォーダンス: Can't tell what's clickable | クリック可能なものがわからない
- **Inconsistent patterns** | 一貫性のないパターン: Similar actions work differently | 類似のアクションが異なる動作

### Content Issues | コンテンツ問題
- **Too much text** | テキストが多すぎる: Users don't read long paragraphs | ユーザーは長い段落を読まない
- **Jargon or unclear language** | 専門用語または不明確な言語: Technical terms confuse users | 技術用語がユーザーを混乱させる
- **Missing information** | 情報不足: Users need more context | ユーザーにはより多くのコンテキストが必要

### Visual Design Issues | ビジュアルデザイン問題
- **Poor contrast** | コントラストが悪い: Hard to read text | テキストが読みにくい
- **Small touch targets** | 小さいタッチターゲット: Buttons too small to tap accurately | ボタンが小さすぎて正確にタップできない
- **Visual hierarchy problems** | ビジュアル階層問題: Can't tell what's important | 何が重要かわからない

### Error Handling Issues | エラーハンドリング問題
- **Unclear error messages** | 不明確なエラーメッセージ: Users don't know what went wrong | 何が間違ったかユーザーがわからない
- **No recovery path** | 回復パスがない: Can't undo or fix mistakes | 元に戻すまたは間違いを修正できない
- **Silent failures** | サイレント失敗: No feedback when action fails | アクションが失敗したときにフィードバックがない

---

## Slide 15: Ethics and Participant Care | 倫理と参加者ケア

### Ethical Considerations | 倫理的考慮事項

#### Informed Consent | インフォームドコンセント
- Explain purpose of study | 研究の目的を説明
- Describe what participants will do | 参加者が何をするかを説明
- Explain data collection and use | データ収集と使用を説明
- Obtain written consent | 書面による同意を取得
- Allow participants to withdraw anytime | 参加者がいつでも撤退できるようにする

#### Privacy and Confidentiality | プライバシーと機密性
- Anonymize participant data | 参加者データを匿名化
- Store recordings securely | 録画を安全に保存
- Only share data with authorized team | 承認されたチームのみとデータを共有
- Delete data when no longer needed | 不要になったらデータを削除

#### Participant Comfort | 参加者の快適さ
- Create welcoming environment | 歓迎的な環境を作成
- Make clear there are no wrong answers | 間違った答えはないことを明確にする
- Allow breaks if needed | 必要に応じて休憩を許可
- Respect participant's time | 参加者の時間を尊重
- Provide incentive or compensation | インセンティブまたは補償を提供

### Building Trust | 信頼の構築
- Be warm and approachable | 温かく親しみやすい
- Thank participants sincerely | 参加者に心から感謝
- Explain how their feedback helps | フィードバックがどのように役立つかを説明
- Follow up if you promised results | 結果を約束した場合はフォローアップ

---

## Slide 16: Today's Activity Preview | 今日のアクティビティプレビュー

### Hands-On Activity (60 minutes) | ハンズオンアクティビティ（60分）

#### Part 1: Create Usability Test Plan (25 minutes) | パート1：ユーザビリティテスト計画の作成（25分）
- Define test objectives for your project | プロジェクトのテスト目的を定義
- Identify participant criteria | 参加者基準を特定
- Write 5 realistic test tasks | 5つの現実的なテストタスクを記述
- Define success criteria for each task | 各タスクの成功基準を定義
- Plan metrics to collect | 収集するメトリクスを計画

#### Part 2: Practice Think-Aloud Testing (25 minutes) | パート2：シンクアラウドテストの実践（25分）
- Pair up with a classmate | クラスメートとペアを組む
- Take turns: one moderator, one participant | 交代：1人のモデレーター、1人の参加者
- Test each other's prototypes | お互いのプロトタイプをテスト
- Practice think-aloud protocol | シンクアラウドプロトコルを実践
- Record observations and metrics | 観察とメトリクスを記録

#### Part 3: Debrief and Reflection (10 minutes) | パート3：デブリーフと振り返り（10分）
- Discuss what you learned | 学んだことを議論
- Identify usability issues discovered | 発見されたユーザビリティ問題を特定
- Bot-guided reflection on testing experience | テスト体験に関するボットガイド付き振り返り

### Deliverable | 成果物
- **Usability Test Plan** (with tasks, criteria, metrics) | ユーザビリティテスト計画（タスク、基準、メトリクス付き）
- **Practice Test Notes** (observations from peer testing) | 実践テストノート（ピアテストからの観察）

---

## Slide 17: Key Takeaways | 重要なポイント

### Remember | 覚えておいてください

#### 1. Test Early and Often | 早くそして頻繁にテスト
- Don't wait until design is "perfect" | デザインが「完璧」になるまで待たない
- Testing reveals issues you can't predict | テストは予測できない問題を明らかにする
- Iterate based on real user feedback | 実際のユーザーフィードバックに基づいて反復

#### 2. You Are NOT the User | あなたはユーザーではありません
- Your assumptions may be wrong | あなたの仮定は間違っているかもしれません
- Users think and behave differently | ユーザーは異なる考えと行動をします
- Test with representative users | 代表的なユーザーでテスト

#### 3. Small Sample, Big Insights | 小さいサンプル、大きい洞察
- 5 users uncover 85% of problems | 5人のユーザーが85%の問題を発見
- Quality over quantity | 量より質
- Focus on patterns across participants | 参加者間のパターンに焦点

#### 4. Both Metrics Matter | 両方のメトリクスが重要
- **Quantitative:** What happened (success rates, time) | 何が起こったか（成功率、時間）
- **Qualitative:** Why it happened (observations, quotes) | なぜ起こったか（観察、引用）
- Combine for complete picture | 完全な絵のために組み合わせる

### Next Week | 来週
**Week 11: Analyzing Results and Prioritizing Issues**
We'll learn how to make sense of test data and turn findings into actionable design improvements.

**第11週：結果分析と問題の優先順位付け**
テストデータを理解し、調査結果を実行可能なデザイン改善に変える方法を学びます。

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
