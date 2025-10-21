# Week 5 Activity: Smart Device Interface Design Principles
# 第5週アクティビティ：スマートデバイスインターフェースデザイン原則

## Activity Information | アクティビティ情報

**Activity Title:** Analyzing and Sketching Mobile Interface Designs | モバイルインターフェースデザインの分析とスケッチ
**Duration:** 40-60 minutes | 40-60分
**Learning Objectives Addressed:** Apply mobile-first design principles and understand touch interactions | モバイルファーストデザイン原則を適用し、タッチインタラクションを理解する
**Prerequisites:** Week 4 completion - Personas and requirements defined | 第4週完了 - ペルソナと要件が定義されている

---

## Activity Learning Objectives | アクティビティ学習目標

Students will:
学生は以下ができるようになります：

- Apply mobile-first and responsive design principles to interface layouts | インターフェースレイアウトにモバイルファーストとレスポンシブデザイン原則を適用する
- Design touch-friendly interactions considering finger size and gestures | 指のサイズとジェスチャーを考慮してタッチフレンドリーなインタラクションをデザインする
- Adapt interfaces for different screen sizes and device contexts | 異なる画面サイズとデバイスコンテキストに対してインターフェースを適応させる
- Create paper sketches following established mobile design patterns | 確立されたモバイルデザインパターンに従って紙のスケッチを作成する

---

## Prior Lecture Connection | 事前講義とのつながり

**Lecture Concepts:** Mobile-first design, touch interactions, screen size considerations, responsive design basics
講義のコンセプト：モバイルファーストデザイン、タッチインタラクション、画面サイズの考慮事項、レスポンシブデザインの基礎

**Activity Application:** Students analyze popular mobile apps to identify design patterns, then apply those principles by sketching initial interface designs for their final projects on paper.
アクティビティの適用：学生は人気のモバイルアプリを分析してデザインパターンを特定し、その後、紙に最終プロジェクトの初期インターフェースデザインをスケッチすることでそれらの原則を適用します。

---

## Bot Workflow Integration | ボットワークフロー統合

**Bot's Role:** HCI-101 Bot provides mobile design pattern library, analyzes student sketches for mobile usability, and offers design critiques and improvement suggestions.
ボットの役割：HCI-101ボットはモバイルデザインパターンライブラリを提供し、モバイルユーザビリティのために学生のスケッチを分析し、デザイン批評と改善提案を提供します。

**BMAD Workflow Steps:**
1. Bot guides analysis of existing mobile app patterns | ボットが既存のモバイルアプリパターンの分析をガイド
2. Bot provides mobile design principles and best practices | ボットがモバイルデザイン原則とベストプラクティスを提供
3. Bot offers touch target sizing and gesture guidelines | ボットがタッチターゲットのサイジングとジェスチャーガイドラインを提供
4. Bot reviews sketches for mobile usability issues | ボットがモバイルユーザビリティ問題のためにスケッチをレビュー
5. Bot validates designs against mobile heuristics | ボットがモバイルヒューリスティックに対してデザインを検証

**Bot Portal Interaction Points:**
- Mobile pattern library explorer | モバイルパターンライブラリエクスプローラー
- Touch target size validator | タッチターゲットサイズバリデーター
- Design critique assistant | デザイン批評アシスタント
- Responsive breakpoint guide | レスポンシブブレークポイントガイド
- Gesture interaction catalog | ジェスチャーインタラクションカタログ

**Data Captured:**
- Student understanding of mobile design patterns | モバイルデザインパターンの学生の理解
- Quality of initial sketches | 初期スケッチの品質
- Common mobile usability mistakes | 一般的なモバイルユーザビリティの間違い
- Design pattern preferences | デザインパターンの好み

---

## Step-by-Step Instructions | ステップバイステップ指示

### Step 1: Mobile App Pattern Analysis (13 minutes) | モバイルアプリパターン分析（13分）

**What Students Do:**
- Select 3-4 popular mobile apps relevant to project type: | プロジェクトタイプに関連する3-4個の人気のモバイルアプリを選択：
  - For smart device interfaces: productivity apps, social media, e-commerce | スマートデバイスインターフェース用：生産性アプリ、ソーシャルメディア、Eコマース
  - For chatbot interfaces: messaging apps, AI assistants, customer service bots | チャットボットインターフェース用：メッセージングアプリ、AIアシスタント、カスタマーサービスボット
- Analyze each app using bot's mobile heuristics framework: | ボットのモバイルヒューリスティックフレームワークを使用して各アプリを分析：

**Mobile Design Principles to Identify:**

1. **Navigation Patterns** | ナビゲーションパターン
   - Tab bar (bottom tabs for main sections) | タブバー（メインセクションの下部タブ）
   - Hamburger menu (hidden menu in corner) | ハンバーガーメニュー（コーナーに隠されたメニュー)
   - Bottom sheet (modal sliding from bottom) | ボトムシート（下からスライドするモーダル）
   - Gesture-based (swipe navigation) | ジェスチャーベース（スワイプナビゲーション）

2. **Touch Targets & Spacing** | タッチターゲットとスペーシング
   - Button sizes (minimum 44x44 pixels) | ボタンサイズ（最小44x44ピクセル）
   - Spacing between tappable elements | タップ可能な要素間のスペーシング
   - Thumb-reach zones (easy vs hard to reach) | 親指到達ゾーン（到達しやすい vs 到達しにくい）

3. **Content Hierarchy** | コンテンツ階層
   - Visual weight of primary vs secondary actions | 主要 vs 二次アクションの視覚的重み
   - Typography sizing for mobile reading | モバイル読書用のタイポグラフィサイジング
   - Use of white space | 余白の使用

4. **Input Methods** | 入力方法
   - Keyboard optimization (number pads for phone input) | キーボード最適化（電話入力用の数字パッド）
   - Voice input options | 音声入力オプション
   - Smart defaults and autofill | スマートデフォルトと自動入力

5. **Feedback & Affordances** | フィードバックと手がかり
   - Button press states (visual feedback) | ボタンプレス状態（視覚的フィードバック）
   - Loading indicators | ローディングインジケーター
   - Clear affordances (what's tappable?) | 明確な手がかり（何がタップ可能？）

6. **Gestures** | ジェスチャー
   - Swipe actions (delete, archive) | スワイプアクション（削除、アーカイブ）
   - Pull-to-refresh | プルして更新
   - Pinch-to-zoom | ピンチしてズーム
   - Long-press menus | 長押しメニュー

- Document findings in comparison table: | 比較表で調査結果を文書化：

| Pattern | App 1 | App 2 | App 3 | Best Practice? |
|---------|-------|-------|-------|----------------|
| Navigation | Bottom tabs | Hamburger | Bottom tabs | Bottom tabs for main features |
| Primary button size | 48px | 44px | 52px | 44px minimum |
| Key gesture | Swipe left to delete | Pull-to-refresh | Pinch-to-zoom | Context-dependent |

- Take screenshots highlighting effective design decisions | 効果的なデザイン決定を強調するスクリーンショットを撮る
- Note what works well vs what frustrates | 何がうまく機能するか vs 何がフラストレーションを引き起こすかをメモ

**Bot Guidance:**
- Provides mobile heuristics checklist | モバイルヒューリスティックチェックリストを提供
- Asks: "Where are the primary actions located? Are they in thumb-reach zone?" | 尋ねる：「主要なアクションはどこにありますか？親指到達ゾーンにありますか？」
- Points out patterns: "This app uses bottom tabs - notice how main features are always accessible" | パターンを指摘：「このアプリは下部タブを使用 - メイン機能が常にアクセス可能であることに注意」
- Explains why: "Bottom navigation works better than top because thumbs naturally rest there" | なぜかを説明：「下部ナビゲーションは親指が自然にそこに休むため上部より良く機能する」

**Expected Output:** Mobile pattern analysis with screenshots and comparison table
期待される出力：スクリーンショットと比較表を伴うモバイルパターン分析

**Time Allocation:** 13 minutes | 13分

---

### Step 2: Mobile Design Principles Application (10 minutes) | モバイルデザイン原則の適用（10分）

**What Students Do:**
- Review project requirements from Week 4 | 第4週からのプロジェクト要件をレビュー
- Decide on platform focus: smartphone (iOS/Android), tablet, wearable, or multi-platform | プラットフォームフォーカスを決定：スマートフォン（iOS/Android）、タブレット、ウェアラブル、またはマルチプラットフォーム
- Apply mobile design principles to project context: | プロジェクトコンテキストにモバイルデザイン原則を適用：

**Design Decisions to Make:**

1. **Screen Size Strategy** | 画面サイズ戦略
   - Primary target: smartphone (4.7-6.7 inch) | 主要ターゲット：スマートフォン（4.7-6.7インチ）
   - Secondary: tablet (7-13 inch) | 二次：タブレット（7-13インチ）
   - Responsive approach or separate layouts? | レスポンシブアプローチまたは別のレイアウト？

2. **Navigation Architecture** | ナビゲーションアーキテクチャ
   - How many main sections? (3-5 is optimal for tabs) | メインセクションはいくつ？（タブには3-5が最適）
   - Bottom tabs, side drawer, or hybrid? | 下部タブ、サイドドロワー、またはハイブリッド？
   - How deep is the hierarchy? | 階層はどれくらい深い？

3. **Primary Interactions** | 主要なインタラクション
   - What's the main user action? | 主要なユーザーアクションは何ですか？
   - Where should it be positioned? (thumb-friendly) | どこに配置すべき？（親指フレンドリー）
   - What gestures make sense? | どのジェスチャーが意味をなしますか？

4. **Content Prioritization** | コンテンツ優先順位付け
   - What must be visible immediately? | すぐに表示されなければならないものは何？
   - What can be hidden/collapsed? | 何を隠す/折りたたむことができますか？
   - How to handle dense information on small screens? | 小さな画面で密度の高い情報をどのように処理しますか？

5. **Input Optimization** | 入力最適化
   - Minimize typing where possible | 可能な限りタイピングを最小化
   - Use smart defaults and selections | スマートデフォルトと選択を使用
   - Voice input appropriate? | 音声入力は適切？

6. **Context Considerations** | コンテキストの考慮事項
   - Usage environment (one-handed, on-the-go, seated) | 使用環境（片手、外出中、着席）
   - Connection quality assumptions | 接続品質の仮定
   - Interruptions and resumability | 中断と再開可能性

- Document decisions with rationale: | 根拠を伴う決定を文書化：
  "Using bottom tab navigation because users need quick access to 4 main features, and persona research showed primarily one-handed smartphone use during commute."

- Create mobile design requirements list: | モバイルデザイン要件リストを作成：
  - Touch targets minimum 44x44px | タッチターゲット最小44x44px
  - Primary action in bottom 1/3 of screen | 主要なアクションは画面の下部1/3に
  - Maximum 3 taps to key features | 主要機能まで最大3タップ
  - Works in portrait orientation | 縦向きで動作
  - Readable at arm's length | 腕の長さで読める

**Bot Guidance:**
- Provides decision frameworks and trade-offs | 決定フレームワークとトレードオフを提供
- Asks: "Your persona uses this while commuting - does that affect your navigation choice?" | 尋ねる：「ペルソナは通勤中にこれを使用 - それはナビゲーションの選択に影響しますか？」
- Validates against best practices: "5 tabs is the maximum - consider grouping" | ベストプラクティスに対して検証：「5タブが最大 - グループ化を検討」
- Connects to research: "Your user interviews mentioned wanting fast access - how does your design address that?" | 調査に接続：「ユーザーインタビューは速いアクセスを望むと言及 - デザインはそれにどのように対処しますか？」

**Expected Output:** Mobile design decisions document with rationale and requirements
期待される出力：根拠と要件を伴うモバイルデザイン決定文書

**Time Allocation:** 10 minutes | 10分

---

### Step 3: Paper Sketching - Core Screens (20 minutes) | 紙スケッチ - コア画面（20分）

**What Students Do:**
- Gather sketching materials: paper (phone-sized template if available), pens/pencils | スケッチ材料を集める：紙（可能であれば電話サイズのテンプレート）、ペン/鉛筆
- Sketch 4-6 core screens for your interface: | インターフェースの4-6個のコア画面をスケッチ：

**Typical Screen Set:**
1. **Home/Dashboard Screen** | ホーム/ダッシュボード画面
   - Main entry point | メインエントリーポイント
   - Key information at a glance | 一目で主要情報
   - Navigation access | ナビゲーションアクセス
   - Primary action prominent | 目立つ主要アクション

2. **Main Task Screen** | メインタスク画面
   - The primary user goal from scenarios | シナリオからの主要なユーザー目標
   - Input fields or content display | 入力フィールドまたはコンテンツ表示
   - Progress indicators if multi-step | マルチステップの場合は進捗インジケーター
   - Clear next action | 明確な次のアクション

3. **Search/Browse Screen** | 検索/閲覧画面
   - Finding information or items | 情報またはアイテムを見つける
   - Filters or sorting options | フィルターまたはソートオプション
   - Results display | 結果表示

4. **Detail/Content Screen** | 詳細/コンテンツ画面
   - In-depth information | 詳細情報
   - Related actions | 関連アクション
   - Back navigation | 戻るナビゲーション

5. **User Profile/Settings** | ユーザープロフィール/設定
   - Account information | アカウント情報
   - Preferences | 設定
   - Secondary features | 二次機能

6. **Confirmation/Success State** | 確認/成功状態
   - Feedback after completing action | アクション完了後のフィードバック
   - Next steps | 次のステップ

**Sketching Guidelines:**
- Use device frame to show screen boundaries | デバイスフレームを使用して画面境界を表示
- Indicate touch targets with clear boundaries | 明確な境界でタッチターゲットを示す
- Label interactive elements | インタラクティブ要素にラベルを付ける
- Show navigation clearly | ナビゲーションを明確に表示
- Annotate with notes: | ノートで注釈：
  - "User can swipe left to delete" | 「ユーザーは左にスワイプして削除できる」
  - "Button 48px tall for easy tapping" | 「簡単にタップするために48px高のボタン」
  - "Search bar always visible at top" | 「検索バーは常に上部に表示」
- Don't worry about visual design - focus on layout and function | ビジュアルデザインを心配しない - レイアウトと機能に焦点を当てる
- Use boxes for images, lines for text, buttons clearly marked | 画像には箱、テキストには線、ボタンには明確なマーク

**Mobile-Specific Considerations:**
- Status bar space at top | 上部のステータスバースペース
- Safe zones (avoid notch areas) | セーフゾーン（ノッチエリアを避ける）
- Bottom navigation bar space (iOS/Android system UI) | 下部ナビゲーションバースペース（iOS/Androidシステム UI）
- One-handed reachability | 片手到達可能性
- Text size readable without zooming | ズームせずに読めるテキストサイズ

**Bot Guidance:**
- Provides sketch templates and examples | スケッチテンプレートと例を提供
- Suggests: "Start with home screen - what does user see first?" | 提案：「ホーム画面から始める - ユーザーは最初に何を見ますか？」
- Reviews sketches: "Is that button large enough for fingers? (minimum 44px)" | スケッチをレビュー：「そのボタンは指に十分な大きさですか？（最小44px）」
- Asks: "How does user navigate from this screen to that screen?" | 尋ねる：「ユーザーはこの画面からその画面にどのようにナビゲートしますか？」
- Validates completeness: "You need a way to get back - add back button or gesture" | 完全性を検証：「戻る方法が必要 - 戻るボタンまたはジェスチャーを追加」

**Expected Output:** 4-6 annotated paper sketches of core screens
期待される出力：コア画面の4-6個の注釈付き紙スケッチ

**Time Allocation:** 20 minutes | 20分

---

### Step 4: Touch Interaction Flow Mapping (10 minutes) | タッチインタラクションフローマッピング（10分）

**What Students Do:**
- Map user flows between sketched screens | スケッチされた画面間のユーザーフローをマップ
- Document all interactions with touch-specific details: | タッチ固有の詳細を伴うすべてのインタラクションを文書化：

**Interaction Flow Components:**

1. **Navigation Flows** | ナビゲーションフロー
   - Draw arrows between screens showing navigation paths | ナビゲーションパスを示す画面間に矢印を描く
   - Label each transition with trigger: | 各遷移をトリガーでラベル付け：
     - "Tap 'Search' button" | 「検索」ボタンをタップ
     - "Swipe left on item" | アイテムで左にスワイプ
     - "Long-press to open menu" | メニューを開くために長押し
   - Note directionality: forward, back, sideways | 方向性をメモ：前、後ろ、横

2. **Gestures Documentation** | ジェスチャー文書
   - List all gestures used: | 使用されるすべてのジェスチャーをリスト：
     - Tap | タップ
     - Double-tap | ダブルタップ
     - Long-press | 長押し
     - Swipe (left/right/up/down) | スワイプ（左/右/上/下）
     - Drag | ドラッグ
     - Pinch (zoom) | ピンチ（ズーム）
     - Pull-to-refresh | プルして更新
   - Explain what each gesture does | 各ジェスチャーが何をするかを説明
   - Ensure gestures are discoverable | ジェスチャーが発見可能であることを確認

3. **Primary Task Flow** | 主要タスクフロー
   - Map complete flow for key scenario from Week 4 | 第4週からの主要シナリオの完全なフローをマップ
   - Count steps: how many taps/actions to complete task? | ステップをカウント：タスクを完了するのに何タップ/アクション？
   - Goal: minimize to 3-5 steps for primary tasks | 目標：主要タスクを3-5ステップに最小化
   - Identify potential friction points | 潜在的な摩擦ポイントを特定

4. **Error Prevention & Recovery** | エラー予防と回復
   - Confirmation for destructive actions | 破壊的なアクションの確認
   - Undo capabilities | 元に戻す機能
   - Clear error states | 明確なエラー状態
   - Exit paths from dead ends | 行き止まりからの出口パス

5. **Alternative Paths** | 代替パス
   - How can users achieve same goal differently? | ユーザーは同じ目標を異なって達成できますか？
   - Shortcuts for experienced users | 経験豊富なユーザーのショートカット
   - Voice command alternatives (if applicable) | 音声コマンドの代替（該当する場合）

- Create visual flow diagram or written flow description | 視覚的なフロー図または書かれたフロー説明を作成
- Test flow against persona scenarios: does it match their needs? | ペルソナシナリオに対してフローをテスト：彼らのニーズと一致しますか？
- Count total interactions for key tasks - is it efficient? | 主要タスクの総インタラクションをカウント - 効率的ですか？

**Bot Guidance:**
- Provides flow mapping template | フローマッピングテンプレートを提供
- Asks: "What happens if user makes mistake at step 3?" | 尋ねる：「ユーザーがステップ3で間違いを犯したらどうなりますか？」
- Validates efficiency: "7 taps to complete registration - can you reduce it?" | 効率を検証：「登録を完了するために7タップ - それを減らせますか？」
- Checks discoverability: "Will users know they can swipe here?" | 発見可能性をチェック：「ユーザーはここでスワイプできることを知っていますか？」
- Suggests improvements: "Consider adding quick action on long-press" | 改善を提案：「長押しでクイックアクションを追加することを検討」

**Expected Output:** Interaction flow map showing navigation paths and gesture details
期待される出力：ナビゲーションパスとジェスチャーの詳細を示すインタラクションフローマップ

**Time Allocation:** 10 minutes | 10分

---

### Step 5: Design Rationale Documentation (7 minutes) | デザイン根拠文書化（7分）

**What Students Do:**
- Write design rationale document explaining key decisions: | 主要な決定を説明するデザイン根拠文書を作成：

**Design Rationale Template:**

**1. Overall Approach** | 全体的なアプローチ
- Platform choice (smartphone, tablet, wearable) and why | プラットフォーム選択（スマートフォン、タブレット、ウェアラブル）と理由
- Primary use context from persona research | ペルソナ調査からの主要な使用コンテキスト
- Mobile-first design philosophy applied | 適用されたモバイルファーストデザイン哲学

**2. Navigation Decision** | ナビゲーション決定
- Navigation pattern chosen (bottom tabs, drawer, etc.) | 選択されたナビゲーションパターン（下部タブ、ドロワーなど）
- Why this pattern vs alternatives | なぜこのパターン vs 代替
- How it supports user goals | それがユーザー目標をどのようにサポートするか

**3. Layout Priorities** | レイアウト優先事項
- What's most prominent and why | 何が最も目立つか、なぜか
- Content hierarchy decisions | コンテンツ階層の決定
- Connection to user needs from Week 4 | 第4週からのユーザーニーズとの接続

**4. Touch Interaction Rationale** | タッチインタラクション根拠
- Why specific gestures were chosen | なぜ特定のジェスチャーが選択されたか
- How touch targets meet 44px minimum | タッチターゲットが44px最小をどのように満たすか
- One-handed usability considerations | 片手ユーザビリティの考慮事項

**5. Mobile Best Practices Applied** | 適用されたモバイルベストプラクティス
- Which patterns from Step 1 analysis influenced design | ステップ1分析からのどのパターンがデザインに影響したか
- How research findings shaped decisions | 調査結果が決定をどのように形成したか
- Trade-offs made and why | なされたトレードオフと理由

**6. Accessibility Considerations** | アクセシビリティの考慮事項
- Text size and contrast | テキストサイズとコントラスト
- Touch target spacing | タッチターゲットスペーシング
- Screen reader compatibility planned | 計画されたスクリーンリーダー互換性

**7. Next Steps** | 次のステップ
- What needs refinement in Week 6 digital wireframes | 第6週のデジタルワイヤーフレームで何を洗練する必要があるか
- Questions or uncertainties to explore | 探索する質問または不確実性
- Features to prototype first | 最初にプロトタイプする機能

- Include references to: | への参照を含める：
  - Persona needs | ペルソナのニーズ
  - Journey map pain points | ジャーニーマップのペインポイント
  - Mobile app analysis findings | モバイルアプリ分析の調査結果
  - Week 4 requirements | 第4週の要件

- Photograph paper sketches | 紙のスケッチを撮影
- Compile all materials for submission | 提出用にすべての資料を編集
- Complete AI transparency log if used | 使用した場合AI透明性ログを完成

**Bot Guidance:**
- Provides rationale template | 根拠テンプレートを提供
- Asks: "Why did you choose bottom tabs instead of hamburger menu?" | 尋ねる：「なぜハンバーガーメニューの代わりに下部タブを選択しましたか？」
- Ensures connection: "Link this decision to your persona's needs" | 接続を確保：「この決定をペルソナのニーズにリンク」
- Validates completeness: "Add reasoning for your gesture choices" | 完全性を検証：「ジェスチャーの選択の理由を追加」
- Confirms traceability: "Good - I can see how this addresses the pain point from journey map" | トレーサビリティを確認：「良い - これがジャーニーマップからのペインポイントにどのように対処するかがわかります」

**Expected Output:** Complete design rationale document with justifications for all major decisions
期待される出力：すべての主要な決定の正当化を伴う完全なデザイン根拠文書

**Time Allocation:** 7 minutes | 7分

---

## Materials & Resources | 教材とリソース

**Software/Tools:**
- HCI-101 Bot portal access | HCI-101ボットポータルアクセス
- Paper and pencils/pens for sketching | スケッチ用の紙と鉛筆/ペン
- Mobile device for app analysis | アプリ分析用モバイルデバイス
- Phone template printouts (optional) | 電話テンプレートプリントアウト（オプション）
- Ruler for measuring (optional) | 測定用定規（オプション）
- Camera/phone for photographing sketches | スケッチを撮影するカメラ/電話
- Optional: External AI chatbots (ChatGPT, Claude, Gemini) | オプション：外部AIチャットボット（ChatGPT、Claude、Gemini）

**Files/Datasets:**
- Week 4 personas and requirements | 第4週のペルソナと要件
- Mobile design pattern library | モバイルデザインパターンライブラリ
- Touch target sizing guide | タッチターゲットサイジングガイド
- Phone/tablet sketch templates | 電話/タブレットスケッチテンプレート
- Mobile heuristics checklist | モバイルヒューリスティックチェックリスト
- Design rationale template | デザイン根拠テンプレート
- AI transparency log template | AI透明性ログテンプレート

**Reference Materials:**
- Apple Human Interface Guidelines (iOS) | Apple ヒューマンインターフェースガイドライン（iOS）
- Material Design guidelines (Android) | Material Designガイドライン（Android）
- Mobile design patterns catalog | モバイルデザインパターンカタログ
- Touch gesture library | タッチジェスチャーライブラリ
- Responsive design breakpoints guide | レスポンシブデザインブレークポイントガイド

---

## AI Chatbot Usage for Activity | アクティビティのためのAIチャットボット使用

**Appropriate AI Assistance:**
- Understanding mobile design patterns and principles | モバイルデザインパターンと原則の理解
- Brainstorming layout alternatives | レイアウト代替案のブレインストーミング
- Writing design rationale explanations | デザイン根拠説明の執筆
- Learning about platform-specific guidelines (iOS/Android) | プラットフォーム固有のガイドライン（iOS/Android）について学ぶ
- Getting examples of touch interaction patterns | タッチインタラクションパターンの例を取得

**REQUIRED Documentation:**
1. **Share all prompts used** | 使用したすべてのプロンプトを共有
   - Example: "What are best practices for bottom navigation on mobile apps?"

2. **Share all AI responses** | すべてのAI応答を共有
   - Copy complete AI explanations and suggestions

3. **Document verification process** | 検証プロセスを文書化
   - Did you verify AI suggestions against official design guidelines?
   - Were recommended touch target sizes accurate?
   - Did you validate patterns with actual app examples?

4. **Check for hallucinations** | 幻覚をチェック
   - Did the AI cite non-existent design guidelines?
   - Were sizing recommendations accurate (44px minimum)?
   - Did you verify gesture conventions are standard?

---

## Activity Deliverables | アクティビティ成果物

**What to Submit:**

1. **Mobile Pattern Analysis (required) | モバイルパターン分析（必須）**
   - Analysis of 3-4 mobile apps | 3-4個のモバイルアプリの分析
   - Comparison table of patterns identified | 特定されたパターンの比較表
   - Screenshots highlighting key patterns | 主要なパターンを強調するスクリーンショット
   - Best practices identified | 特定されたベストプラクティス
   - Format: Document with images (PDF/Word, 2-3 pages) | 形式：画像付き文書（PDF/Word、2-3ページ）

2. **Mobile Design Decisions Document (required) | モバイルデザイン決定文書（必須）**
   - Platform and navigation choices with rationale | 根拠を伴うプラットフォームとナビゲーションの選択
   - Mobile-specific requirements list | モバイル固有の要件リスト
   - Context considerations from personas | ペルソナからのコンテキストの考慮事項
   - Format: Document (PDF/Word, 1-2 pages) | 形式：文書（PDF/Word、1-2ページ）

3. **Paper Sketches (required) | 紙スケッチ（必須）**
   - 4-6 core screen sketches | 4-6個のコア画面スケッチ
   - Clear annotations and labels | 明確な注釈とラベル
   - Touch targets and interactive elements marked | タッチターゲットとインタラクティブ要素がマークされている
   - Photographed or scanned clearly | 明確に撮影またはスキャンされている
   - Format: High-quality photos/scans (JPG/PNG/PDF) | 形式：高品質の写真/スキャン（JPG/PNG/PDF）

4. **Interaction Flow Map (required) | インタラクションフローマップ（必須）**
   - Navigation paths between screens | 画面間のナビゲーションパス
   - Gesture documentation | ジェスチャー文書
   - Primary task flow | 主要タスクフロー
   - Format: Diagram or written description | 形式：図または書かれた説明

5. **Design Rationale (required) | デザイン根拠（必須）**
   - Justification for major design decisions | 主要なデザイン決定の正当化
   - Connection to persona needs and research | ペルソナのニーズと調査への接続
   - Mobile best practices applied | 適用されたモバイルベストプラクティス
   - Next steps identified | 特定された次のステップ
   - Format: Document (PDF/Word, 2-3 pages) | 形式：文書（PDF/Word、2-3ページ）

6. **AI Transparency Log (if applicable) | AI透明性ログ（該当する場合）**
   - All external AI prompts and responses | すべての外部AIプロンプトと応答
   - Verification documentation | 検証文書
   - Format: Use provided template | 形式：提供されたテンプレートを使用

**Submission Format:**
- Submit via course portal | コースポータル経由で提出
- File naming: Week05_YourName_MobileDesign | ファイル命名：Week05_あなたの名前_MobileDesign

**Deadline:** End of Week 5 | 第5週末まで

---

## Assessment Criteria | 評価基準

**Completion Criteria (10 points total):**

- **Pattern Analysis Quality (2 points) | パターン分析品質（2ポイント）**
  - Analyzed 3-4 mobile apps thoroughly | 3-4個のモバイルアプリを徹底的に分析
  - Identified relevant patterns with examples | 例を伴う関連するパターンを特定
  - Screenshots clearly highlight design decisions | スクリーンショットがデザイン決定を明確に強調
  - Best practices documented | ベストプラクティスが文書化されている

- **Mobile Design Decisions (2 points) | モバイルデザイン決定（2ポイント）**
  - Platform and navigation choices justified | プラットフォームとナビゲーションの選択が正当化されている
  - Decisions aligned with persona needs | ペルソナのニーズと整合した決定
  - Mobile-specific requirements clear | モバイル固有の要件が明確
  - Context considerations addressed | コンテキストの考慮事項が対処されている

- **Sketch Quality (4 points) | スケッチ品質（4ポイント）**
  - 4-6 core screens sketched | 4-6個のコア画面がスケッチされている
  - Clear layout and element placement | 明確なレイアウトと要素配置
  - Touch targets appropriately sized (44px+) | タッチターゲットが適切にサイズされている（44px+）
  - Annotations explain functionality | 注釈が機能を説明
  - Interaction flow documented | インタラクションフローが文書化されている
  - One-handed usability considered | 片手ユーザビリティが考慮されている

- **Design Rationale & AI Transparency (2 points) | デザイン根拠とAI透明性（2ポイント）**
  - Clear justification for decisions | 決定の明確な正当化
  - Connections to research and personas | 調査とペルソナへの接続
  - Mobile best practices applied | モバイルベストプラクティスが適用されている
  - Complete AI transparency log if AI used | AIを使用した場合の完全なAI透明性ログ

**Quality Expectations:**
- Sketches demonstrate understanding of mobile constraints | スケッチがモバイル制約の理解を示す
- Design decisions are user-centered, not arbitrary | デザイン決定がユーザー中心であり、恣意的でない
- Clear evolution from research to design | 調査からデザインへの明確な進化
- Professional documentation suitable for design handoff | デザインハンドオフに適したプロフェッショナルな文書化
- Bilingual submissions welcome (either EN or JA is acceptable) | バイリンガル提出歓迎（ENまたはJAのいずれかが受け入れられます）

---

## Common Issues & Solutions | 一般的な問題と解決策

**Problem 1: Sketches too detailed or taking too long | スケッチが詳細すぎるか時間がかかりすぎる**
- **Solution:** This is low-fidelity paper sketching - keep it simple! Use boxes for images, lines for text, simple shapes for buttons. Don't draw pixel-perfect designs. Focus on layout and functionality, not visual design. 5 minutes per screen maximum. Speed is important - you'll refine digitally next week. | これは低忠実度の紙スケッチです - シンプルに保つ！画像には箱、テキストには線、ボタンには単純な形を使用。ピクセル完璧なデザインを描かない。視覚デザインではなく、レイアウトと機能に焦点を当てる。画面あたり最大5分。速度が重要 - 来週デジタルで洗練する。
- **Bot Assistance:** Bot reminds about appropriate fidelity level and provides timing guidance | ボットは適切な忠実度レベルについて思い出させ、タイミングガイダンスを提供

**Problem 2: Touch targets too small in sketches | スケッチでタッチターゲットが小さすぎる**
- **Solution:** Remember 44x44 pixel minimum (about 7-9mm). On paper, that's roughly the size of your pinky fingernail. If using phone template, buttons should be clearly visible. Add annotation: "Button 48px tall." Test by actually touching your sketch with your finger - can you accurately hit it? Increase spacing between tappable elements. | 44x44ピクセルの最小値を覚えておく（約7-9mm）。紙の上で、それはあなたの小指の爪のサイズくらいです。電話テンプレートを使用している場合、ボタンは明確に見える必要があります。注釈を追加：「ボタン48px高」。スケッチを指で実際に触ってテスト - 正確にヒットできますか？タップ可能な要素間のスペーシングを増やす。
- **Bot Assistance:** Bot reviews sketches for touch target sizing violations | ボットはタッチターゲットサイジング違反のためにスケッチをレビュー

**Problem 3: Too many features crammed on one screen | 1つの画面に詰め込まれた機能が多すぎる**
- **Solution:** Mobile screens are small - prioritize ruthlessly. What's the ONE main thing users do here? That should dominate. Secondary actions can be in menus or sub-screens. Use progressive disclosure - show basics first, details on demand. Remember: less is more on mobile. Review your persona's key goals - does this screen support them without overwhelming? | モバイル画面は小さい - 容赦なく優先順位付け。ユーザーがここでする1つの主要なことは何ですか？それが支配するべきです。二次アクションはメニューまたはサブ画面にあることができます。段階的開示を使用 - 基本を最初に表示、詳細は要求に応じて。覚えておく：モバイルでは少ないほど多い。ペルソナの主要な目標をレビュー - この画面は圧倒することなくそれらをサポートしますか？
- **Bot Assistance:** Bot helps prioritize features and suggests progressive disclosure | ボットは機能を優先順位付けし、段階的開示を提案するのを助ける

**Problem 4: Navigation unclear or hard to understand | ナビゲーションが不明確または理解しにくい**
- **Solution:** Draw flow arrows between sketches showing how screens connect. Label each arrow with the action ("tap button," "swipe left"). Create a simple flow diagram. Test it: can you trace a path from home to completing key task? Are there dead ends? Can users get back? Consider adding bottom tab bar visible on all screens for constant access to main sections. | スケッチ間にフロー矢印を描いて画面がどのように接続するかを示す。各矢印にアクション（「ボタンをタップ」、「左にスワイプ」）でラベルを付ける。シンプルなフロー図を作成。テスト：ホームから主要タスクを完了するパスをトレースできますか？行き止まりはありますか？ユーザーは戻ることができますか？メインセクションへの常時アクセスのためにすべての画面に表示される下部タブバーの追加を検討。
- **Bot Assistance:** Bot validates navigation completeness and suggests improvements | ボットはナビゲーションの完全性を検証し、改善を提案

**Problem 5: Gestures not discoverable or intuitive | ジェスチャーが発見可能または直感的でない**
- **Solution:** Rely on standard gestures users already know (swipe, tap, long-press). Don't invent new gestures. Provide visual hints: show swipe handles, use animation to demonstrate. Always offer tap alternatives for advanced gestures. Document how users will learn about gestures (tutorial, tooltips, visual cues). Test: would your persona discover this gesture? | ユーザーがすでに知っている標準ジェスチャーに依存する（スワイプ、タップ、長押し）。新しいジェスチャーを発明しない。視覚的なヒントを提供：スワイプハンドルを表示、アニメーションを使用してデモンストレーション。高度なジェスチャーには常にタップの代替を提供。ユーザーがジェスチャーについてどのように学ぶかを文書化（チュートリアル、ツールチップ、視覚的手がかり）。テスト：ペルソナはこのジェスチャーを発見しますか？
- **Bot Assistance:** Bot checks gesture discoverability and suggests alternatives | ボットはジェスチャーの発見可能性をチェックし、代替を提案

**Problem 6: Design doesn't reflect mobile best practices from analysis | デザインが分析からのモバイルベストプラクティスを反映していない**
- **Solution:** Review your Step 1 pattern analysis. Which patterns did you identify as effective? Intentionally apply them. In your design rationale, explicitly reference which analyzed apps influenced your decisions. Don't reinvent the wheel - use proven patterns. If deviating from standards, document why (better for your specific users). | ステップ1パターン分析をレビュー。どのパターンを効果的として特定しましたか？意図的にそれらを適用。デザイン根拠で、どの分析されたアプリがあなたの決定に影響したかを明示的に参照。車輪を再発明しない - 実証されたパターンを使用。標準から逸脱する場合、なぜかを文書化（特定のユーザーにとってより良い）。
- **Bot Assistance:** Bot cross-references designs against patterns identified in analysis | ボットは分析で特定されたパターンに対してデザインを相互参照

**When to Ask for Help:**
- Unsure if touch targets are appropriately sized | タッチターゲットが適切にサイズされているか不明
- Navigation flow feels confusing | ナビゲーションフローが混乱している感じ
- Too much/too little information on screens | 画面に情報が多すぎる/少なすぎる
- Need mobile pattern examples or guidance | モバイルパターンの例またはガイダンスが必要

**How to Ask:**
- During class time: Raise hand or ask instructor | クラス時間中：手を挙げるか、インストラクターに尋ねる
- Outside class: Email instructor or use course forum | クラス外：インストラクターにメールまたはコースフォーラムを使用
- Use bot for pattern library and design validation | パターンライブラリとデザイン検証にはボットを使用
- Share sketches with bot for mobile heuristic review | モバイルヒューリスティックレビューのためにスケッチをボットと共有

---

**Activity Designed for HCI-101 Course**
**HCI-101コース用に設計されたアクティビティ**

*Developer: Yuri Tijerino*
