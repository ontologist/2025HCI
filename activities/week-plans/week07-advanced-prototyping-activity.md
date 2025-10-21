# Week 7 Activity: Advanced Prototyping and Interactive Elements
# 第7週アクティビティ：高度なプロトタイピングとインタラクティブ要素

## Activity Information | アクティビティ情報

**Activity Title:** Building Interactive Prototypes with Navigation Flows | ナビゲーションフローを持つインタラクティブプロトタイプを構築
**Duration:** 50-60 minutes | 50-60分
**Learning Objectives Addressed:** Create interactive prototypes with transitions, animations, and multi-screen user flows | トランジション、アニメーション、マルチ画面ユーザーフローを持つインタラクティブプロトタイプを作成する
**Prerequisites:** Week 6 completion - Digital wireframes created in Figma/Adobe XD | 第6週完了 - Figma/Adobe XDでデジタルワイヤーフレームが作成されている

---

## Activity Learning Objectives | アクティビティ学習目標

Students will:
学生は以下ができるようになります：

- Add interactive hotspots and navigation links between wireframe screens | ワイヤーフレーム画面間にインタラクティブホットスポットとナビゲーションリンクを追加する
- Apply appropriate transitions and micro-animations to enhance usability | ユーザビリティを向上させるために適切なトランジションとマイクロアニメーションを適用する
- Create complete user flows for key scenarios from personas | ペルソナからの主要シナリオの完全なユーザーフローを作成する
- Test prototypes to validate interaction design and identify usability issues | インタラクションデザインを検証しユーザビリティ問題を特定するためにプロトタイプをテストする

---

## Prior Lecture Connection | 事前講義とのつながり

**Lecture Concepts:** Adding interactivity, transitions, animations, creating user flows
講義のコンセプト：インタラクティビティの追加、トランジション、アニメーション、ユーザーフローの作成

**Activity Application:** Students transform their static Week 6 wireframes into clickable, interactive prototypes that simulate real app behavior, allowing for user testing and design validation.
アクティビティの適用：学生は第6週の静的ワイヤーフレームを、実際のアプリの動作をシミュレートするクリック可能でインタラクティブなプロトタイプに変換し、ユーザーテストとデザイン検証を可能にします。

---

## Bot Workflow Integration | ボットワークフロー統合

**Bot's Role:** HCI-101 Bot guides prototype interaction design, suggests appropriate transitions, validates user flow completeness, and provides interactive troubleshooting for complex interactions.
ボットの役割：HCI-101ボットはプロトタイプインタラクションデザインをガイドし、適切なトランジションを提案し、ユーザーフローの完全性を検証し、複雑なインタラクションのためのインタラクティブトラブルシューティングを提供します。

**BMAD Workflow Steps:**
1. Bot guides interaction mapping from persona scenarios | ボットがペルソナシナリオからのインタラクションマッピングをガイド
2. Bot provides transition and animation recommendations | ボットがトランジションとアニメーションの推奨事項を提供
3. Bot validates user flow completeness and logic | ボットがユーザーフローの完全性とロジックを検証
4. Bot assists with prototype testing and issue identification | ボットがプロトタイプテストと問題特定を支援
5. Bot offers interaction design patterns for common scenarios | ボットが一般的なシナリオのためのインタラクションデザインパターンを提供

**Bot Portal Interaction Points:**
- Interaction design wizard | インタラクションデザインウィザード
- Transition library and previewer | トランジションライブラリとプレビューアー
- User flow validator | ユーザーフロー検証ツール
- Prototype testing guide | プロトタイプテストガイド
- Animation timing calculator | アニメーションタイミング計算機
- Dead-end detection tool | 行き止まり検出ツール

**Data Captured:**
- Common interaction patterns students use | 学生が使用する一般的なインタラクションパターン
- Transition preferences and effectiveness | トランジションの好みと効果
- User flow complexity metrics | ユーザーフローの複雑さメトリクス
- Prototype testing findings | プロトタイプテスト調査結果
- Common navigation errors | 一般的なナビゲーションエラー

---

## Step-by-Step Instructions | ステップバイステップ指示

### Step 1: Mapping User Flows from Scenarios (10 minutes) | シナリオからのユーザーフローマッピング（10分）

**What Students Do:**
- Review persona scenarios from Week 4 | 第4週からのペルソナシナリオをレビュー
- Identify key user flows to prototype | プロトタイプする主要ユーザーフローを特定
- Map screen-by-screen navigation paths | 画面ごとのナビゲーションパスをマップ

**User Flow Selection:**

Choose 2-3 primary user flows to prototype: | プロトタイプする2-3個の主要ユーザーフローを選択：

**Flow 1: Primary Task (Must Have)** | フロー1：主要タスク（必須）
- The main user goal from persona scenarios | ペルソナシナリオからのメインユーザー目標
- Example flows: | フローの例：
  - Smartphone app: "Search for item → View details → Add to cart → Checkout" | スマートフォンアプリ：「アイテムを検索 → 詳細を表示 → カートに追加 → チェックアウト」
  - Chatbot: "Greet user → Understand query → Provide answer → Gather feedback" | チャットボット：「ユーザーに挨拶 → クエリを理解 → 回答を提供 → フィードバックを収集」
  - Wearable: "Open app → Start workout → Track progress → Save results" | ウェアラブル：「アプリを開く → ワークアウトを開始 → 進捗を追跡 → 結果を保存」

**Flow 2: Secondary Task (Important)** | フロー2：二次タスク（重要）
- Common but not primary action | 一般的だが主要なアクションではない
- Example flows: | フローの例：
  - "Browse categories → Filter results → Save favorite" | 「カテゴリーを閲覧 → 結果をフィルター → お気に入りを保存」
  - "View profile → Edit information → Update settings" | 「プロフィールを表示 → 情報を編集 → 設定を更新」
  - "Access history → View past activity → Share data" | 「履歴にアクセス → 過去のアクティビティを表示 → データを共有」

**Flow 3: Error/Edge Case (Optional but Recommended)** | フロー3：エラー/エッジケース（オプションだが推奨）
- What happens when things go wrong | 問題が発生したときに何が起こるか
- Example flows: | フローの例：
  - "Failed login → Password reset → Email verification" | 「ログイン失敗 → パスワードリセット → メール検証」
  - "Network error → Retry prompt → Offline mode" | 「ネットワークエラー → 再試行プロンプト → オフラインモード」
  - "Empty search results → Suggestions → Alternative search" | 「空の検索結果 → 提案 → 代替検索」

**Flow Mapping Process:**

**Step A: List All Screens in Flow** | フロー内のすべての画面をリスト
For each user flow, write out every screen: | 各ユーザーフローについて、すべての画面を書き出す：
1. Entry point (where flow begins) | エントリーポイント（フローが始まる場所）
2. Decision points (user makes choice) | 決定ポイント（ユーザーが選択する）
3. Action screens (user performs task) | アクション画面（ユーザーがタスクを実行）
4. Confirmation/feedback screens | 確認/フィードバック画面
5. Exit point (flow completes or returns) | 出口ポイント（フローが完了または戻る）

**Step B: Identify Missing Screens** | 欠落している画面を特定
- Compare flow screens to Week 6 wireframes | フロー画面を第6週のワイヤーフレームと比較
- Note which screens need to be created | 作成する必要がある画面をメモ
- Prioritize: Must-have vs. nice-to-have screens | 優先順位付け：必須 vs あると良い画面

**Step C: Map Interactions** | インタラクションをマップ
For each connection between screens, document: | 画面間の各接続について、文書化：
- **Trigger:** What user does (tap button, swipe, input text) | トリガー：ユーザーが何をするか（ボタンをタップ、スワイプ、テキスト入力）
- **Source:** Which element triggers navigation | ソース：ナビゲーションをトリガーする要素
- **Destination:** Which screen appears next | 宛先：次に表示される画面
- **Transition:** How screens change (instant, slide, fade) | トランジション：画面がどのように変化するか（瞬時、スライド、フェード）

**Flow Map Template:**

```
Primary Flow: [Flow Name]
Persona Goal: [What user wants to achieve]

Screen 1: [Screen Name]
  → User Action: [Tap "Search" button]
  → Transition: [Slide from right]
  → Next: Screen 2

Screen 2: [Screen Name]
  → User Action: [Enter search query]
  → Transition: [Fade in]
  → Next: Screen 3

  Alternative Path:
  → User Action: [Tap "Cancel"]
  → Transition: [Slide from left]
  → Next: Screen 1 (back)

Screen 3: [Screen Name]
  → User Action: [Tap item from results]
  → Transition: [Push from right]
  → Next: Screen 4

[Continue for all screens...]

Success Criteria:
- User completes task in X steps
- No dead-ends
- Clear back navigation
- Appropriate feedback provided
```

**Step D: Validate Flow Completeness** | フローの完全性を検証
Check for: | チェック：
- [ ] Clear entry point | 明確なエントリーポイント
- [ ] Logical progression | 論理的な進行
- [ ] Exit strategy (how user finishes or returns) | 出口戦略（ユーザーがどのように完了または戻るか）
- [ ] Back navigation available | 戻るナビゲーション利用可能
- [ ] Alternative paths considered | 代替パスが考慮されている
- [ ] Error states included | エラー状態が含まれている
- [ ] No dead-ends (user can always navigate away) | 行き止まりなし（ユーザーは常にナビゲートできる）

**Bot Guidance:**
- Provides flow mapping templates | フローマッピングテンプレートを提供
- Suggests: "Your persona's main goal is X - which screens support that?" | 提案：「ペルソナの主な目標はXです - どの画面がそれをサポートしますか？」
- Identifies gaps: "How does user get from Screen 2 to Screen 5?" | ギャップを特定：「ユーザーは画面2から画面5にどのように移動しますか？」
- Validates logic: "User taps 'Cancel' - where should they go?" | ロジックを検証：「ユーザーが「キャンセル」をタップ - どこに行くべきですか？」
- Checks completeness: "You're missing a confirmation screen after user submits" | 完全性をチェック：「ユーザーが送信した後の確認画面が欠落しています」

**Expected Output:** Detailed user flow maps for 2-3 key scenarios, with all screens and interactions documented
期待される出力：すべての画面とインタラクションが文書化された2-3個の主要シナリオの詳細なユーザーフローマップ

**Time Allocation:** 10 minutes | 10分

---

### Step 2: Creating Additional Required Screens (12 minutes) | 追加の必要な画面の作成（12分）

**What Students Do:**
- Create any missing screens identified in Step 1 | ステップ1で特定された欠落している画面を作成
- Add alternative states for existing screens | 既存の画面の代替状態を追加
- Ensure all flow paths have necessary screens | すべてのフローパスに必要な画面があることを確認

**Common Missing Screens to Create:**

**1. Transitional/Loading States** | トランジション/ローディング状態
- Loading spinner screen | ローディングスピナー画面
- Progress indicator (for multi-step processes) | 進捗インジケーター（マルチステッププロセス用）
- Splash screen (app launch) | スプラッシュ画面（アプリ起動）

**2. Confirmation Screens** | 確認画面
- Success confirmation: "Item added to cart" | 成功確認：「アイテムがカートに追加されました」
- Action confirmation: "Are you sure you want to delete?" | アクション確認：「削除してもよろしいですか？」
- Completion screen: "Order placed successfully!" | 完了画面：「注文が正常に配置されました！」

**3. Error States** | エラー状態
- Network error: "No internet connection" | ネットワークエラー：「インターネット接続なし」
- Empty states: "No results found" | 空の状態：「結果が見つかりません」
- Form validation errors: "Please enter valid email" | フォーム検証エラー：「有効なメールアドレスを入力してください」

**4. Modal Overlays** | モーダルオーバーレイ
- Dialog boxes for confirmations | 確認用ダイアログボックス
- Bottom sheets for options | オプション用ボトムシート
- Pop-up menus | ポップアップメニュー

**5. Alternative Navigation** | 代替ナビゲーション
- Side drawer/hamburger menu expanded | サイドドロワー/ハンバーガーメニュー展開
- Tab switching variations | タブ切り替えバリエーション
- Search overlay | 検索オーバーレイ

**Screen Creation Process:**

**For Each New Screen:**

**Step A: Duplicate Similar Screen** | 類似画面を複製
- Find most similar existing screen | 最も類似した既存画面を見つける
- Duplicate it (right-click > Duplicate in Figma/XD) | それを複製（右クリック > Figmaで複製/XD）
- Rename clearly: "Home - Loading", "Search - Empty", "Cart - Confirmation" | 明確に名前を変更：「ホーム - ローディング」、「検索 - 空」、「カート - 確認」

**Step B: Modify for State/Purpose** | 状態/目的のために変更
- Change content to reflect new state | 新しい状態を反映するようにコンテンツを変更
- Add/remove elements as needed | 必要に応じて要素を追加/削除
- Keep navigation consistent with other screens | 他の画面と一貫したナビゲーションを保つ

**Step C: Maintain Design System** | デザインシステムを維持
- Use existing components | 既存のコンポーネントを使用
- Follow spacing/typography standards | スペーシング/タイポグラフィ基準に従う
- Keep consistent with Week 6 wireframes | 第6週のワイヤーフレームと一貫性を保つ

**Specific State Examples:**

**Loading State Example:**
- Start with base screen | 基本画面から開始
- Add loading spinner (circle or skeleton screens) | ローディングスピナーを追加（円またはスケルトン画面）
- Optional: Add "Loading..." text | オプション：「読み込み中...」テキストを追加
- Disable interactive elements during loading | ローディング中はインタラクティブ要素を無効にする

**Empty State Example:**
- Show empty state icon or illustration | 空の状態アイコンまたはイラストを表示
- Explanatory text: "No items yet" | 説明テキスト：「まだアイテムがありません」
- Call-to-action: "Start adding items" button | 行動喚起：「アイテムを追加し始める」ボタン

**Error State Example:**
- Error icon (⚠️ or ❌) | エラーアイコン（⚠️または❌）
- Clear error message | 明確なエラーメッセージ
- Action to resolve: "Retry" or "Try again" button | 解決するアクション：「再試行」または「もう一度試す」ボタン
- Alternative path: "Go back" option | 代替パス：「戻る」オプション

**Success Confirmation Example:**
- Success icon (✓) | 成功アイコン（✓）
- Confirmation message | 確認メッセージ
- Next action: "Continue shopping" or "View order" | 次のアクション：「買い物を続ける」または「注文を表示」
- Auto-dismiss or manual close option | 自動消去または手動閉じるオプション

**Modal/Overlay Guidelines:**
- Semi-transparent background (darken main screen) | 半透明の背景（メイン画面を暗くする）
- Centered or bottom-aligned content | 中央または下部揃えのコンテンツ
- Clear dismiss action (X button or "Cancel") | 明確な消去アクション（Xボタンまたは「キャンセル」）
- Appropriate size (not full screen unless necessary) | 適切なサイズ（必要でない限りフルスクリーンではない）

**Quick Creation Tips:**
- Reuse and modify rather than creating from scratch | ゼロから作成するのではなく再利用して変更
- Keep new screens simple - match existing fidelity | 新しい画面をシンプルに保つ - 既存の忠実度に一致
- Focus on states needed for flows, not every possible variation | すべての可能なバリエーションではなくフローに必要な状態に焦点を当てる
- Use components for consistency | 一貫性のためにコンポーネントを使用

**Bot Guidance:**
- Identifies which screens are needed for complete flows | 完全なフローに必要な画面を特定
- Provides templates for common states (loading, error, empty) | 一般的な状態（ローディング、エラー、空）のテンプレートを提供
- Suggests: "Add confirmation screen after user submits form" | 提案：「ユーザーがフォームを送信した後に確認画面を追加」
- Validates state coverage: "What happens if search returns no results?" | 状態カバレッジを検証：「検索が結果を返さない場合はどうなりますか？」
- Ensures consistency: "This error screen should match your design system" | 一貫性を確保：「このエラー画面はデザインシステムに一致する必要があります」

**Expected Output:** All necessary screens created to support complete user flows, including states and variations
期待される出力：状態とバリエーションを含む完全なユーザーフローをサポートするために必要なすべての画面が作成されている

**Time Allocation:** 12 minutes | 12分

---

### Step 3: Adding Interactions and Hotspots (15 minutes) | インタラクションとホットスポットの追加（15分）

**What Students Do:**
- Add clickable hotspots to interactive elements | インタラクティブ要素にクリック可能なホットスポットを追加
- Connect screens based on user flow maps | ユーザーフローマップに基づいて画面を接続
- Configure interaction details and triggers | インタラクション詳細とトリガーを構成

**Prototype Mode Setup:**

**Figma Prototype Setup:**
1. Switch to Prototype tab (right panel) | プロトタイプタブに切り替え（右パネル）
2. Set prototype settings: | プロトタイプ設定を設定：
   - Device: iPhone or Android preset | デバイス：iPhoneまたはAndroidプリセット
   - Starting frame: Usually your home/splash screen | 開始フレーム：通常はホーム/スプラッシュ画面
   - Preview: Shows how prototype will look | プレビュー：プロトタイプがどのように見えるかを表示

**Adobe XD Prototype Setup:**
1. Switch to Prototype mode (top left) | プロトタイプモードに切り替え（左上）
2. Set home artboard: | ホームアートボードを設定：
   - Right-click artboard > "Set as Home Artboard" | 右クリックアートボード > 「ホームアートボードとして設定」
3. Choose device preview | デバイスプレビューを選択

**Adding Interactions:**

**Step A: Identify Interactive Elements** | インタラクティブ要素を特定
On each screen, mark what should be clickable: | 各画面で、クリック可能であるべきものをマーク：
- Buttons (primary and secondary) | ボタン（プライマリおよびセカンダリ）
- Navigation elements (back button, tabs, menu) | ナビゲーション要素（戻るボタン、タブ、メニュー）
- List items or cards | リストアイテムまたはカード
- Icons and links | アイコンとリンク
- Input fields (for showing keyboard/next screen) | 入力フィールド（キーボード/次の画面を表示するため）
- Images (if tappable) | 画像（タップ可能な場合）

**Step B: Create Interaction Connections** | インタラクション接続を作成

**Figma:**
1. Select element to make interactive | インタラクティブにする要素を選択
2. Click "+" in Interactions section (Prototype panel) | インタラクションセクションの「+」をクリック（プロトタイプパネル）
3. Drag connector to destination frame | コネクタを宛先フレームにドラッグ
4. Configure interaction details | インタラクション詳細を構成

**Adobe XD:**
1. Select element | 要素を選択
2. Drag blue arrow handle to destination artboard | 青い矢印ハンドルを宛先アートボードにドラッグ
3. Configure interaction in inspector panel | インスペクターパネルでインタラクションを構成

**Step C: Configure Interaction Settings** | インタラクション設定を構成

For each interaction, set: | 各インタラクションについて、設定：

**1. Trigger** (How interaction starts) | トリガー（インタラクションがどのように開始するか）
- **Tap/Click** (most common) - User taps element | タップ/クリック（最も一般的） - ユーザーが要素をタップ
- **Drag** - User drags element | ドラッグ - ユーザーが要素をドラッグ
- **Hover** (desktop only) - Mouse over element | ホバー（デスクトップのみ） - 要素にマウスオーバー
- **Time delay** - After X milliseconds | 時間遅延 - Xミリ秒後
- **Key/Gamepad** (advanced) | キー/ゲームパッド（高度）

**2. Action** (What happens) | アクション（何が起こるか）
- **Navigate to** - Go to another screen | ナビゲート先 - 別の画面に移動
- **Open overlay** - Show modal on top | オーバーレイを開く - 上にモーダルを表示
- **Close overlay** - Dismiss modal | オーバーレイを閉じる - モーダルを消去
- **Back** - Return to previous screen | 戻る - 前の画面に戻る
- **Scroll to** - Jump to section (Figma) | スクロール先 - セクションにジャンプ（Figma）
- **Swap with** - Replace element (advanced) | 交換 - 要素を置き換える（高度）

**3. Destination** (Where to go) | 宛先（どこに行くか）
- Select target screen/frame | ターゲット画面/フレームを選択
- For overlays: position (center, top, bottom, etc.) | オーバーレイの場合：位置（中央、上、下など）

**4. Transition** (How screens change) | トランジション（画面がどのように変化するか）
- **Instant** - No animation, immediate change | 瞬時 - アニメーションなし、即時変更
- **Dissolve/Fade** - Gradually fade between screens | ディゾルブ/フェード - 画面間を徐々にフェード
- **Slide in/Push** - New screen slides from side | スライドイン/プッシュ - 新しい画面が側面からスライド
- **Move in** - Overlays current screen | 移動イン - 現在の画面にオーバーレイ
- **Smart animate** (Figma) - Animates matching elements | スマートアニメート（Figma） - 一致する要素をアニメート
- **Auto-animate** (XD) - Similar to smart animate | 自動アニメート（XD） - スマートアニメートに類似

**5. Animation Easing** (How transition moves) | アニメーションイージング（トランジションがどのように動くか）
- **Ease out** - Starts fast, ends slow (most common) | イーズアウト - 速く開始、遅く終了（最も一般的）
- **Ease in** - Starts slow, ends fast | イーズイン - 遅く開始、速く終了
- **Ease in-out** - Slow start and end | イーズインアウト - 遅い開始と終了
- **Linear** - Constant speed | リニア - 一定速度

**6. Duration** (How long transition takes) | 期間（トランジションにかかる時間）
- **Instant:** 0ms | 瞬時：0ms
- **Fast:** 200-300ms (quick feedback) | 速い：200-300ms（クイックフィードバック）
- **Standard:** 300-400ms (most transitions) | 標準：300-400ms（ほとんどのトランジション）
- **Slow:** 500-600ms (major changes) | 遅い：500-600ms（主要な変更）
- Avoid very long animations (>800ms feels sluggish) | 非常に長いアニメーションを避ける（>800msは鈍く感じる）

**Common Interaction Patterns:**

**Button Tap Navigation:**
- Trigger: Tap | トリガー：タップ
- Action: Navigate to | アクション：ナビゲート先
- Destination: Next screen | 宛先：次の画面
- Transition: Push from right (300ms, ease out) | トランジション：右からプッシュ（300ms、イーズアウト）

**Back Button:**
- Trigger: Tap | トリガー：タップ
- Action: Back | アクション：戻る
- Transition: Slide from left (300ms, ease out) | トランジション：左からスライド（300ms、イーズアウト）

**Bottom Tab Navigation:**
- Trigger: Tap | トリガー：タップ
- Action: Navigate to | アクション：ナビゲート先
- Destination: Tab's home screen | 宛先：タブのホーム画面
- Transition: Dissolve (200ms) or Instant | トランジション：ディゾルブ（200ms）または瞬時

**Modal/Dialog:**
- Trigger: Tap button | トリガー：ボタンをタップ
- Action: Open overlay | アクション：オーバーレイを開く
- Destination: Modal screen | 宛先：モーダル画面
- Transition: Move in (300ms, ease out) | トランジション：移動イン（300ms、イーズアウト）
- Position: Center | 位置：中央
- Background: Darken (manual click closes) | 背景：暗くする（手動クリックで閉じる）

**List Item Tap:**
- Trigger: Tap | トリガー：タップ
- Action: Navigate to | アクション：ナビゲート先
- Destination: Detail screen | 宛先：詳細画面
- Transition: Push from right (300ms, ease out) | トランジション：右からプッシュ（300ms、イーズアウト）

**Input Field:**
- Trigger: Tap | トリガー：タップ
- Action: Navigate to | アクション：ナビゲート先
- Destination: Same screen with keyboard shown (create variation) | 宛先：キーボードが表示された同じ画面（バリエーションを作成）
- Transition: Instant or Move in keyboard | トランジション：瞬時またはキーボードを移動イン

**Systematic Connection Process:**

Work through each user flow: | 各ユーザーフローを通して作業：
1. Start with Flow 1 (primary task) | フロー1（主要タスク）から開始
2. Add all interactions in order | すべてのインタラクションを順番に追加
3. Test flow by playing prototype | プロトタイプを再生してフローをテスト
4. Fix any broken connections | 壊れた接続を修正
5. Move to Flow 2, then Flow 3 | フロー2に移動、次にフロー3

**Interaction Checklist per Screen:**
- [ ] All buttons have destinations | すべてのボタンに宛先がある
- [ ] Navigation elements connected | ナビゲーション要素が接続されている
- [ ] Back navigation works | 戻るナビゲーションが機能する
- [ ] Tab bar items linked (if applicable) | タブバーアイテムがリンクされている（該当する場合）
- [ ] List items go to detail screens | リストアイテムが詳細画面に移動
- [ ] Input fields show appropriate next step | 入力フィールドが適切な次のステップを表示
- [ ] Error states have recovery paths | エラー状態に回復パスがある
- [ ] Modals can be dismissed | モーダルを消去できる

**Bot Guidance:**
- Provides interaction checklist for each screen type | 各画面タイプのインタラクションチェックリストを提供
- Suggests appropriate transitions: "Use 'Push' for forward navigation, 'Slide' for back" | 適切なトランジションを提案：「前進ナビゲーションには「プッシュ」、戻るには「スライド」を使用」
- Validates connections: "Button leads nowhere - add destination" | 接続を検証：「ボタンがどこにも通じない - 宛先を追加」
- Recommends timing: "300ms is standard for screen transitions" | タイミングを推奨：「画面トランジションには300msが標準」
- Identifies missing interactions: "Tab 3 not connected to any screen" | 欠落しているインタラクションを特定：「タブ3がどの画面にも接続されていない」

**Expected Output:** Fully interactive prototype with all key screens connected and appropriate transitions applied
期待される出力：すべての主要画面が接続され適切なトランジションが適用された完全にインタラクティブなプロトタイプ

**Time Allocation:** 15 minutes | 15分

---

### Step 4: Testing Prototype and Fixing Issues (10 minutes) | プロトタイプのテストと問題の修正（10分）

**What Students Do:**
- Test prototype flows thoroughly | プロトタイプフローを徹底的にテスト
- Identify navigation issues and dead-ends | ナビゲーション問題と行き止まりを特定
- Fix broken connections and improve interactions | 壊れた接続を修正しインタラクションを改善

**Testing Process:**

**Step A: Launch Prototype Preview**

**Figma:**
- Click Play button (▶) in top right | 右上の再生ボタン（▶）をクリック
- Opens in new browser tab | 新しいブラウザタブで開く
- Choose device frame (iPhone, Android) | デバイスフレーム（iPhone、Android）を選択
- Optional: View on actual mobile device (scan QR code or share link) | オプション：実際のモバイルデバイスで表示（QRコードをスキャンまたはリンクを共有）

**Adobe XD:**
- Click Preview button (▶) in top right | 右上のプレビューボタン（▶）をクリック
- Opens in preview window | プレビューウィンドウで開く
- Choose device (desktop or mobile) | デバイス（デスクトップまたはモバイル）を選択
- Can also share link for testing on mobile | モバイルでのテストのためにリンクを共有することもできます

**Step B: Test Each User Flow** | 各ユーザーフローをテスト

For each flow mapped in Step 1: | ステップ1でマップされた各フローについて：

**Flow Testing Checklist:**
1. **Start at beginning** - Launch from correct entry point | 最初から開始 - 正しいエントリーポイントから起動
2. **Follow happy path** - Complete flow without errors | ハッピーパスに従う - エラーなしでフローを完了
3. **Try all buttons** - Tap everything interactive | すべてのボタンを試す - インタラクティブなものすべてをタップ
4. **Test navigation** - Back buttons, tabs, menus | ナビゲーションをテスト - 戻るボタン、タブ、メニュー
5. **Check alternative paths** - Try different routes | 代替パスをチェック - 異なるルートを試す
6. **Test edge cases** - Error flows, empty states | エッジケースをテスト - エラーフロー、空の状態
7. **Verify completion** - Reach intended end point | 完了を確認 - 意図した終点に到達

**Step C: Document Issues Found** | 見つかった問題を文書化

Use this format to track problems: | この形式を使用して問題を追跡：

```
Issue #1: [Description]
Location: [Screen name]
Problem: [What's wrong]
Expected: [What should happen]
Fix: [How to resolve]
Priority: High/Medium/Low
```

**Common Issues to Look For:**

**1. Navigation Issues** | ナビゲーション問題
- **Dead-ends:** Button doesn't go anywhere | 行き止まり：ボタンがどこにも行かない
- **Wrong destination:** Goes to incorrect screen | 間違った宛先：不正な画面に移動
- **No back navigation:** Can't return to previous screen | 戻るナビゲーションなし：前の画面に戻れない
- **Inconsistent navigation:** Back button works differently on each screen | 一貫性のないナビゲーション：戻るボタンが各画面で異なって機能する

**2. Interaction Problems** | インタラクション問題
- **Nothing happens:** Element looks clickable but isn't | 何も起こらない：要素がクリック可能に見えるがそうではない
- **Wrong element responds:** Tapping one thing triggers another | 間違った要素が応答：1つをタップすると別のものがトリガーされる
- **Hotspot too small:** Hard to tap accurately | ホットスポットが小さすぎる：正確にタップするのが難しい
- **Multiple elements overlap:** Unclear which is tappable | 複数の要素が重なる：どれがタップ可能か不明確

**3. Transition Issues** | トランジション問題
- **Wrong transition type:** Slides left when should slide right | 間違ったトランジションタイプ：右にスライドすべきときに左にスライド
- **Too slow:** Animation feels sluggish (>500ms) | 遅すぎる：アニメーションが鈍く感じる（>500ms）
- **Too fast:** Instant when should have transition | 速すぎる：トランジションがあるべきときに瞬時
- **Inconsistent:** Same action uses different transitions | 一貫性がない：同じアクションが異なるトランジションを使用

**4. Flow Logic Issues** | フローロジック問題
- **Missing screens:** Gap in flow, jump from A to C without B | 画面の欠落：フローのギャップ、Bなしで Aから Cにジャンプ
- **Circular loops:** User stuck in repeating screens | 循環ループ：繰り返し画面でユーザーが立ち往生
- **No exit:** Can't leave modal or complete flow | 出口なし：モーダルを離れることができないまたはフローを完了できない
- **Illogical order:** Steps don't make sense | 非論理的な順序：ステップが意味をなさない

**5. State Issues** | 状態問題
- **Missing states:** No loading or error screens | 状態の欠落：ローディングまたはエラー画面なし
- **Wrong state shown:** Error state when should show success | 間違った状態が表示される：成功を表示すべきときにエラー状態
- **No feedback:** Action completes without confirmation | フィードバックなし：確認なしでアクションが完了

**Step D: Fix Issues** | 問題を修正

**Fixing Navigation:**
- Go back to edit mode | 編集モードに戻る
- Select element with problem | 問題のある要素を選択
- In Prototype panel, fix destination or add connection | プロトタイプパネルで宛先を修正または接続を追加
- Re-test to verify fix | 修正を確認するために再テスト

**Fixing Interactions:**
- Check if element has interaction added | 要素にインタラクションが追加されているかをチェック
- Verify trigger type is correct (Tap for mobile) | トリガータイプが正しいか確認（モバイル用タップ）
- Ensure destination is set | 宛先が設定されていることを確認
- Test hotspot size (select to see blue overlay) | ホットスポットサイズをテスト（選択して青いオーバーレイを表示）

**Fixing Transitions:**
- Select interaction connection | インタラクション接続を選択
- Change transition type | トランジションタイプを変更
- Adjust duration (try 300ms as standard) | 期間を調整（標準として300msを試す）
- Change easing to ease-out | イージングをイーズアウトに変更
- Preview again | 再度プレビュー

**Fixing Flow Logic:**
- Review flow map from Step 1 | ステップ1からのフローマップをレビュー
- Create missing screens | 欠落している画面を作成
- Add proper exit paths | 適切な出口パスを追加
- Ensure all modals have close buttons | すべてのモーダルに閉じるボタンがあることを確認

**Step E: Retest After Fixes** | 修正後に再テスト
- Run through flows again | フローを再度実行
- Verify all issues resolved | すべての問題が解決されたことを確認
- Check that fixes didn't break other connections | 修正が他の接続を壊さなかったことをチェック
- Test on mobile device if possible (more realistic) | 可能であればモバイルデバイスでテスト（よりリアル）

**Testing Tips:**
- Test like a real user - don't just click in order | 実際のユーザーのようにテスト - 順番にクリックするだけではない
- Try unexpected actions (random taps, going back) | 予期しないアクションを試す（ランダムなタップ、戻る）
- Ask someone else to test (fresh perspective) | 他の誰かにテストを依頼（新鮮な視点）
- Take notes while testing - easy to forget issues | テスト中にメモを取る - 問題を忘れやすい
- Fix high-priority issues first (blocking flows) | 優先度の高い問題を最初に修正（フローをブロック）

**Bot Guidance:**
- Provides testing checklist and common issues guide | テストチェックリストと一般的な問題ガイドを提供
- Analyzes prototype: "Found 3 dead-ends and 2 missing back buttons" | プロトタイプを分析：「3つの行き止まりと2つの欠落している戻るボタンが見つかりました」
- Suggests fixes: "Add back navigation to Screen 4" | 修正を提案：「画面4に戻るナビゲーションを追加」
- Validates after fixes: "All primary flows now complete" | 修正後に検証：「すべての主要フローが完了しました」
- Offers usability feedback: "This transition feels too slow - reduce to 300ms" | ユーザビリティフィードバックを提供：「このトランジションは遅すぎると感じる - 300msに減らす」

**Expected Output:** Fully tested and debugged prototype with all flows working correctly and issues resolved
期待される出力：すべてのフローが正しく機能し問題が解決された完全にテストおよびデバッグされたプロトタイプ

**Time Allocation:** 10 minutes | 10分

---

### Step 5: Documentation and Sharing Setup (8 minutes) | 文書化と共有セットアップ（8分）

**What Students Do:**
- Document interaction design decisions | インタラクションデザイン決定を文書化
- Create prototype demonstration guide | プロトタイプデモンストレーションガイドを作成
- Set up sharing links for usability testing (Week 10) | ユーザビリティテスト（第10週）用の共有リンクをセットアップ

**Interaction Documentation:**

Create document covering: | カバーする文書を作成：

**1. User Flow Summary** | ユーザーフロー概要

For each flow: | 各フローについて：

```
Flow Name: [Primary Task Flow]
User Goal: [What user wants to achieve]
Persona: [Which persona this serves]

Steps:
1. Screen: [Home]
   Action: [Tap "Search" button]
   Result: [Navigate to Search screen]

2. Screen: [Search]
   Action: [Enter query and tap "Go"]
   Result: [Navigate to Results screen]

3. Screen: [Results]
   Action: [Tap item from list]
   Result: [Navigate to Detail screen]

[Continue for all steps...]

Success Criteria:
- User completes task in X steps
- Average completion time: Y seconds
- No confusion points
- Clear feedback at each step
```

**2. Interaction Design Rationale** | インタラクションデザイン根拠

Explain key decisions: | 主要な決定を説明：

**Transition Choices:** | トランジション選択：
- Why specific transitions were chosen | なぜ特定のトランジションが選択されたか
- "Used 'Push from right' for forward navigation to match iOS conventions" | 「iOS規則に一致させるために前進ナビゲーションに「右からプッシュ」を使用」
- "Dissolve transition for tab switching (faster, less disruptive)" | 「タブ切り替えのディゾルブトランジション（より速く、より少ない中断）」

**Navigation Patterns:** | ナビゲーションパターン：
- Why certain navigation was chosen | なぜ特定のナビゲーションが選択されたか
- "Back button on all screens for easy return" | 「簡単な戻りのためにすべての画面に戻るボタン」
- "Bottom tabs always visible for quick section switching" | 「迅速なセクション切り替えのために常に表示される下部タブ」

**Animation Timing:** | アニメーションタイミング：
- Duration choices and reasoning | 期間の選択と理由
- "300ms standard - balances speed and visual clarity" | 「300ms標準 - 速度と視覚的明確さのバランス」
- "200ms for tab switches - feels more responsive" | 「タブスイッチには200ms - より応答性が高く感じる」

**State Management:** | 状態管理：
- How different states are handled | 異なる状態がどのように処理されるか
- "Loading states with spinners for data fetching" | 「データ取得用のスピナー付きローディング状態」
- "Empty states guide users to take action" | 「空の状態がユーザーをアクションに導く」
- "Error states always provide recovery option" | 「エラー状態は常に回復オプションを提供」

**3. Known Limitations** | 既知の制限

Be honest about prototype constraints: | プロトタイプの制約について正直に：
- "Actual typing not functional - tapping input shows next screen" | 「実際のタイピングは機能しない - 入力をタップすると次の画面が表示される」
- "Search results are static - not dynamic based on query" | 「検索結果は静的 - クエリに基づいて動的ではない」
- "Some edge cases not prototyped (e.g., network timeout)" | 「いくつかのエッジケースはプロトタイプされていない（例：ネットワークタイムアウト）」
- "Scrolling limited - only showing key content" | 「スクロールが制限されている - 主要なコンテンツのみを表示」

**4. Next Steps** | 次のステップ
- What will be refined for Week 10 usability testing | 第10週のユーザビリティテストのために何が洗練されるか
- Additional screens or states needed | 必要な追加の画面または状態
- Interactions to improve | 改善するインタラクション

**Prototype Demonstration Guide:**

Create simple guide for testing: | テスト用のシンプルなガイドを作成：

```
HOW TO USE THIS PROTOTYPE
このプロトタイプの使用方法

Starting Point:
The prototype starts at [Home screen].
プロトタイプは[ホーム画面]から開始します。

Primary Tasks to Try:
試す主要タスク：

Task 1: [Task name]
1. [Step-by-step instructions]
2. [What to tap/do]
3. [Expected result]

Task 2: [Task name]
1. [Instructions...]

Navigation Tips:
- Tap the back arrow to return to previous screen
  前の画面に戻るには戻る矢印をタップ
- Bottom tabs switch between main sections
  下部タブでメインセクションを切り替え
- Not all elements are interactive - focus on main flow
  すべての要素がインタラクティブではありません - メインフローに焦点を当てる

Known Limitations:
- Text input is simulated (tap field to continue)
  テキスト入力はシミュレートされています（続行するにはフィールドをタップ）
- Some buttons are placeholder only
  いくつかのボタンはプレースホルダーのみ
```

**Sharing Setup:**

**Figma Sharing:**
1. Click Share button (top right) | 共有ボタンをクリック（右上）
2. Set link permissions: | リンク権限を設定：
   - "Anyone with the link can view" | 「リンクを持つ人は誰でも閲覧可能」
   - Enable "Allow viewers to access prototypes" | 「閲覧者がプロトタイプにアクセスすることを許可」を有効にする
3. Copy prototype link (not edit link) | プロトタイプリンクをコピー（編集リンクではない）
4. Test link in incognito/private browser | シークレット/プライベートブラウザでリンクをテスト
5. Optional: Generate QR code for mobile testing | オプション：モバイルテスト用QRコードを生成

**Adobe XD Sharing:**
1. Click Share button (top right) | 共有ボタンをクリック（右上）
2. Create public link | パブリックリンクを作成
3. Settings: | 設定：
   - Enable "Prototype" | 「プロトタイプ」を有効にする
   - Enable "Comments" for feedback | フィードバックのために「コメント」を有効にする
   - Choose device preview | デバイスプレビューを選択
4. Copy and share link | リンクをコピーして共有
5. Can also share to mobile app | モバイルアプリにも共有可能

**Export Options:**

For submission: | 提出用：

**Video Walkthrough (Recommended):**
- Record screen while demonstrating prototype | プロトタイプをデモンストレーションしながら画面を記録
- Show key flows in action | 主要なフローをアクションで表示
- Narrate what's happening (optional) | 何が起こっているかをナレーション（オプション）
- Tools: QuickTime (Mac), Xbox Game Bar (Windows), or Figma/XD screen record | ツール：QuickTime（Mac）、Xbox Game Bar（Windows）、またはFigma/XD画面記録
- Length: 2-3 minutes covering main flows | 長さ：メインフローをカバーする2-3分

**PDF Export (Alternative):**
- Export all screens as PDF | すべての画面をPDFとしてエクスポート
- Include annotations showing connections | 接続を示す注釈を含める
- Less ideal than interactive prototype | インタラクティブプロトタイプほど理想的ではない

**Submit:**
- Shareable prototype link (primary) | 共有可能なプロトタイプリンク（主要）
- Documentation (PDF/Word) | 文書化（PDF/Word）
- Video walkthrough (if created) | ビデオウォークスルー（作成した場合）
- AI transparency log (if applicable) | AI透明性ログ（該当する場合）

**Bot Guidance:**
- Provides documentation templates | 文書化テンプレートを提供
- Reviews documentation for completeness | 完全性のために文書化をレビュー
- Helps generate demonstration guide | デモンストレーションガイドの生成を支援
- Assists with sharing settings | 共有設定を支援
- Validates that prototype link works | プロトタイプリンクが機能することを検証

**Expected Output:** Complete documentation, demonstration guide, and shareable prototype link ready for Week 10 usability testing
期待される出力：第10週のユーザビリティテストの準備ができた完全な文書化、デモンストレーションガイド、共有可能なプロトタイプリンク

**Time Allocation:** 8 minutes | 8分

---

## Materials & Resources | 教材とリソース

**Software/Tools:**
- Figma (free account) OR Adobe XD (free) | Figma（無料アカウント）またはAdobe XD（無料）
- HCI-101 Bot portal access | HCI-101ボットポータルアクセス
- Week 6 wireframe files | 第6週のワイヤーフレームファイル
- Screen recording software (QuickTime, Xbox Game Bar) | 画面記録ソフトウェア（QuickTime、Xbox Game Bar）
- Mobile device for testing (optional but recommended) | テスト用モバイルデバイス（オプションだが推奨）
- Optional: External AI chatbots (ChatGPT, Claude, Gemini) | オプション：外部AIチャットボット（ChatGPT、Claude、Gemini）

**Files/Datasets:**
- Week 4 persona scenarios | 第4週のペルソナシナリオ
- Week 6 digital wireframes | 第6週のデジタルワイヤーフレーム
- User flow templates | ユーザーフローテンプレート
- Interaction pattern library | インタラクションパターンライブラリ
- Transition timing guide | トランジションタイミングガイド
- Prototype testing checklist | プロトタイプテストチェックリスト
- Documentation templates | 文書化テンプレート
- AI transparency log template | AI透明性ログテンプレート

**Reference Materials:**
- Figma prototyping documentation | Figmaプロトタイピング文書
- Adobe XD interaction design guide | Adobe XDインタラクションデザインガイド
- Material Design motion guidelines | Material Designモーションガイドライン
- iOS Human Interface Guidelines - animations | iOSヒューマンインターフェースガイドライン - アニメーション
- Transition timing best practices | トランジションタイミングベストプラクティス

---

## AI Chatbot Usage for Activity | アクティビティのためのAIチャットボット使用

**Appropriate AI Assistance:**
- Understanding prototyping features in Figma/XD | Figma/XDのプロトタイピング機能の理解
- Learning about transition types and when to use them | トランジションタイプとそれらをいつ使用するかについての学習
- Getting examples of user flow structures | ユーザーフロー構造の例を取得
- Writing interaction documentation | インタラクション文書化の執筆
- Troubleshooting prototype issues | プロトタイプ問題のトラブルシューティング
- Understanding animation timing principles | アニメーションタイミング原則の理解

**REQUIRED Documentation:**
1. **Share all prompts used** | 使用したすべてのプロンプトを共有
   - Example: "What transition should I use for navigating back to previous screen?"

2. **Share all AI responses** | すべてのAI応答を共有
   - Copy complete explanations and recommendations

3. **Document verification process** | 検証プロセスを文書化
   - Did you test the AI's transition recommendations?
   - Were animation timings appropriate?
   - Did you verify interaction patterns work well?

4. **Check for hallucinations** | 幻覚をチェック
   - Did AI describe non-existent Figma/XD features?
   - Were transition types accurate?
   - Did you validate best practices with official guidelines?

---

## Activity Deliverables | アクティビティ成果物

**What to Submit:**

1. **Interactive Prototype (required) | インタラクティブプロトタイプ（必須）**
   - Fully functional prototype with all interactions | すべてのインタラクションを持つ完全に機能するプロトタイプ
   - 2-3 complete user flows implemented | 実装された2-3個の完全なユーザーフロー
   - Appropriate transitions and animations | 適切なトランジションとアニメーション
   - All screens from Week 6 plus additional states | 第6週からのすべての画面と追加の状態
   - Format: Shareable link (Figma/XD) | 形式：共有可能なリンク（Figma/XD）

2. **User Flow Documentation (required) | ユーザーフロー文書（必須）**
   - Detailed maps of all prototyped flows | すべてのプロトタイプされたフローの詳細なマップ
   - Screen-by-screen interaction descriptions | 画面ごとのインタラクション説明
   - Flow diagrams or written descriptions | フロー図または書かれた説明
   - Format: Document (PDF/Word, 2-3 pages) | 形式：文書（PDF/Word、2-3ページ）

3. **Interaction Design Rationale (required) | インタラクションデザイン根拠（必須）**
   - Justification for transition choices | トランジション選択の正当化
   - Navigation pattern decisions | ナビゲーションパターンの決定
   - Animation timing rationale | アニメーションタイミングの根拠
   - Known limitations documented | 文書化された既知の制限
   - Connection to persona scenarios | ペルソナシナリオへの接続
   - Format: Document (PDF/Word, 2-3 pages) | 形式：文書（PDF/Word、2-3ページ）

4. **Prototype Demonstration Guide (required) | プロトタイプデモンストレーションガイド（必須）**
   - How to use prototype | プロトタイプの使用方法
   - Key tasks to try | 試す主要タスク
   - Navigation instructions | ナビゲーション指示
   - Format: Document (PDF/Word, 1 page) or included in XD/Figma | 形式：文書（PDF/Word、1ページ）またはXD/Figmaに含まれる

5. **Video Walkthrough (optional but recommended) | ビデオウォークスルー（オプションだが推奨）**
   - 2-3 minute demonstration of key flows | 主要フローの2-3分のデモンストレーション
   - Shows prototype in action | アクションのプロトタイプを表示
   - Format: MP4, MOV, or YouTube link | 形式：MP4、MOV、またはYouTubeリンク

6. **AI Transparency Log (if applicable) | AI透明性ログ（該当する場合）**
   - All external AI prompts and responses | すべての外部AIプロンプトと応答
   - Verification documentation | 検証文書
   - Format: Use provided template | 形式：提供されたテンプレートを使用

**Submission Format:**
- Submit via course portal | コースポータル経由で提出
- File naming: Week07_YourName_InteractivePrototype | ファイル命名：Week07_あなたの名前_InteractivePrototype

**Deadline:** End of Week 7 | 第7週末まで

---

## Assessment Criteria | 評価基準

**Completion Criteria (10 points total):**

- **User Flow Implementation (3 points) | ユーザーフロー実装（3ポイント）**
  - 2-3 complete user flows prototyped | 2-3個の完全なユーザーフローがプロトタイプされている
  - Flows aligned with persona scenarios | ペルソナシナリオと整合したフロー
  - All necessary screens included | すべての必要な画面が含まれている
  - Alternative paths and error states addressed | 代替パスとエラー状態が対処されている
  - No dead-ends or broken navigation | 行き止まりまたは壊れたナビゲーションなし

- **Interaction Quality (3 points) | インタラクション品質（3ポイント）**
  - All interactive elements properly connected | すべてのインタラクティブ要素が適切に接続されている
  - Appropriate transitions chosen for context | コンテキストに適切なトランジションが選択されている
  - Animation timing feels natural (200-400ms) | アニメーションタイミングが自然に感じる（200-400ms）
  - Navigation patterns consistent | ナビゲーションパターンが一貫している
  - Touch targets easily tappable | タッチターゲットが簡単にタップ可能
  - Prototype tested and debugged | プロトタイプがテストされデバッグされている

- **Technical Execution (2 points) | 技術的実行（2ポイント）**
  - Proper use of Figma/XD prototype features | Figma/XDプロトタイプ機能の適切な使用
  - States and variations created correctly | 状態とバリエーションが正しく作成されている
  - Modals and overlays configured properly | モーダルとオーバーレイが適切に構成されている
  - Prototype shareable link works correctly | プロトタイプ共有可能リンクが正しく機能する
  - Demonstration guide clear and helpful | デモンストレーションガイドが明確で役立つ

- **Documentation and Rationale (2 points) | 文書化と根拠（2ポイント）**
  - User flows clearly documented | ユーザーフローが明確に文書化されている
  - Design decisions well-justified | デザイン決定が十分に正当化されている
  - Connection to research and personas | 調査とペルソナへの接続
  - Limitations acknowledged | 制限が認識されている
  - Complete AI transparency log if AI used | AIを使用した場合の完全なAI透明性ログ

**Quality Expectations:**
- Prototype feels cohesive and intentional | プロトタイプがまとまりがあり意図的に感じる
- Interactions enhance rather than distract | インタラクションが気を散らすのではなく強化する
- Ready for usability testing in Week 10 | 第10週のユーザビリティテストの準備ができている
- Demonstrates clear progression from Week 6 wireframes | 第6週のワイヤーフレームからの明確な進行を示す
- Bilingual submissions welcome (either EN or JA is acceptable) | バイリンガル提出歓迎（ENまたはJAのいずれかが受け入れられます）

---

## Common Issues & Solutions | 一般的な問題と解決策

**Problem 1: Prototype connections not working | プロトタイプ接続が機能しない**
- **Solution:** Check that you're selecting the correct element (not container). In Prototype panel, verify trigger is "Tap" for mobile. Ensure destination screen exists and is named. Try deleting connection and recreating. Test in preview mode - edit mode doesn't show interactions. Check if element is behind another layer (bring to front). | 正しい要素（コンテナではない）を選択していることを確認。プロトタイプパネルで、モバイル用のトリガーが「タップ」であることを確認。宛先画面が存在し名前が付けられていることを確認。接続を削除して再作成を試みる。プレビューモードでテスト - 編集モードはインタラクションを表示しない。要素が別のレイヤーの後ろにあるかをチェック（前面に移動）。
- **Bot Assistance:** Bot diagnoses connection issues and provides step-by-step fixes | ボットは接続問題を診断しステップバイステップの修正を提供

**Problem 2: Too many screens to create - running out of time | 作成する画面が多すぎる - 時間不足**
- **Solution:** Prioritize! Focus on one complete primary flow rather than multiple incomplete flows. For error states, create just 1-2 key examples rather than every possible error. Use screen states/variations instead of creating entirely new screens. Reuse existing screens where possible (e.g., same success message for different actions). Remember: quality over quantity. Better to have 1 polished flow than 3 broken ones. | 優先順位付け！複数の不完全なフローではなく、1つの完全な主要フローに焦点を当てる。エラー状態については、すべての可能なエラーではなく1-2個の主要な例のみを作成。完全に新しい画面を作成する代わりに画面状態/バリエーションを使用。可能な場合は既存の画面を再利用（例：異なるアクションに対して同じ成功メッセージ）。覚えておく：量より質。3つの壊れたものより1つの洗練されたフローの方が良い。
- **Bot Assistance:** Bot helps prioritize which screens are essential vs. nice-to-have | ボットはどの画面が必須かあると良いかを優先順位付けするのを助ける

**Problem 3: Transitions feel wrong or awkward | トランジションが間違っているまたはぎこちないと感じる**
- **Solution:** Follow platform conventions: Push/Slide from right for forward navigation, Slide from left for back navigation. Use Dissolve for tab switching. Keep duration 300ms (standard). Use ease-out easing (most natural). Avoid instant transitions for major screen changes. Test on actual mobile device if possible - feels different than desktop. When in doubt, use "Push" transition at 300ms with ease-out. | プラットフォーム規則に従う：前進ナビゲーションには右からプッシュ/スライド、戻るナビゲーションには左からスライド。タブ切り替えにはディゾルブを使用。期間を300ms（標準）に保つ。イーズアウトイージング（最も自然）を使用。主要な画面変更には瞬時トランジションを避ける。可能であれば実際のモバイルデバイスでテスト - デスクトップとは異なって感じる。疑わしい場合は、イーズアウトで300msの「プッシュ」トランジションを使用。
- **Bot Assistance:** Bot provides transition recommendations based on navigation type | ボットはナビゲーションタイプに基づいてトランジション推奨事項を提供

**Problem 4: User flow has gaps or logic errors | ユーザーフローにギャップまたはロジックエラーがある**
- **Solution:** Map flow on paper first before prototyping. Walk through flow manually: "User starts at A, taps B, sees C, then what?" Check every screen has both entry and exit. Ask: "How does user get here?" and "Where can user go from here?" Test flow by following persona scenario step-by-step. Get someone else to test - they'll find gaps you missed. | プロトタイピングの前にまず紙でフローをマップ。フローを手動で歩く：「ユーザーはAから開始、Bをタップ、Cを見る、それから何？」すべての画面にエントリーと出口の両方があることをチェック。尋ねる：「ユーザーはどのようにここに到達しますか？」と「ユーザーはここからどこに行けますか？」ペルソナシナリオをステップバイステップで追ってフローをテスト。他の誰かにテストしてもらう - あなたが見逃したギャップを見つけるでしょう。
- **Bot Assistance:** Bot validates flow logic and identifies missing connections | ボットはフローロジックを検証し欠落している接続を特定

**Problem 5: Prototype too complex - hard to test | プロトタイプが複雑すぎる - テストが困難**
- **Solution:** Simplify! Remove non-essential branches. Focus on happy path first, add error paths later. Create linear flow before adding complexity. Document flow clearly so testers know what to do. Consider creating multiple smaller prototypes (one per flow) rather than one giant prototype. Use starting frame feature to jump to specific flows for testing. | 簡略化！必須でない分岐を削除。最初にハッピーパスに焦点を当て、後でエラーパスを追加。複雑さを追加する前に線形フローを作成。テスターが何をすべきかを知るようにフローを明確に文書化。1つの巨大なプロトタイプではなく、複数の小さなプロトタイプ（フローごとに1つ）を作成することを検討。テストのために特定のフローにジャンプするために開始フレーム機能を使用。
- **Bot Assistance:** Bot suggests simplification strategies and flow prioritization | ボットは簡略化戦略とフロー優先順位付けを提案

**Problem 6: Animations too slow or too fast | アニメーションが遅すぎるまたは速すぎる**
- **Solution:** Standard timing: 300ms for most transitions. Faster (200ms) for tab switches or minor changes. Slower (400-500ms) only for major transformations. Never use >600ms - feels sluggish. Test timing: count "one-thousand-one" = 1 second, adjust accordingly. Remember mobile users want speed. When in doubt, 300ms is safe. | 標準タイミング：ほとんどのトランジションには300ms。タブスイッチまたは小さな変更には速く（200ms）。主要な変換にのみ遅く（400-500ms）。>600msは決して使用しない - 鈍く感じる。タイミングをテスト：「one-thousand-one」をカウント = 1秒、それに応じて調整。モバイルユーザーは速度を望んでいることを覚えておく。疑わしい場合、300msは安全。
- **Bot Assistance:** Bot provides timing calculator and recommendations | ボットはタイミング計算機と推奨事項を提供

**When to Ask for Help:**
- Prototype connections repeatedly not working | プロトタイプ接続が繰り返し機能しない
- User flow logic confusing or incomplete | ユーザーフローロジックが混乱しているまたは不完全
- Transitions feel wrong but unsure why | トランジションが間違っていると感じるが理由がわからない
- Missing screens but unsure what's needed | 画面が欠落しているが何が必要かわからない
- Prototype too complex to manage | プロトタイプが複雑すぎて管理できない

**How to Ask:**
- During class time: Raise hand or ask instructor | クラス時間中：手を挙げるか、インストラクターに尋ねる
- Outside class: Email instructor or use course forum | クラス外：インストラクターにメールまたはコースフォーラムを使用
- Use bot for prototyping troubleshooting and guidance | プロトタイピングトラブルシューティングとガイダンスにはボットを使用
- Share prototype link with bot for testing and feedback | テストとフィードバックのためにプロトタイプリンクをボットと共有

---

**Activity Designed for HCI-101 Course**
**HCI-101コース用に設計されたアクティビティ**

*Developer: Yuri Tijerino*
