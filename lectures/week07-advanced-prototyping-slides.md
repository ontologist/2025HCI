# Week 7: Advanced Prototyping and Interactive Elements
# 第7週：高度なプロトタイピングとインタラクティブ要素

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Week 7! | 第7週へようこそ！

### Today's Agenda | 今日のアジェンダ
- **From Static to Interactive** | 静的からインタラクティブへ
- **Adding Interactivity to Wireframes** | ワイヤーフレームにインタラクティビティを追加
- **Creating User Flows** | ユーザーフローの作成
- **Transitions and Animations** | トランジションとアニメーション
- **Building Multi-Screen Prototypes** | マルチスクリーンプロトタイプの構築

### Learning Objectives | 学習目標
By the end of today, you will:
今日の終わりまでに、あなたは：
- Transform static wireframes into interactive prototypes | 静的ワイヤーフレームをインタラクティブプロトタイプに変換する
- Create clickable navigation flows between screens | 画面間のクリック可能なナビゲーションフローを作成する
- Design effective transitions and micro-interactions | 効果的なトランジションとマイクロインタラクションをデザインする
- Build a complete multi-screen prototype ready for testing | テスト準備ができた完全なマルチスクリーンプロトタイプを構築する

---

## Slide 2: Recap: Where We Are | 復習：現在地

### Week 6 Accomplishments | 第6週の成果
- ✅ Learned wireframing fundamentals | ワイヤーフレーミングの基礎を学んだ
- ✅ Mastered Figma or Adobe XD basics | FigmaまたはAdobe XDの基礎をマスター
- ✅ Created static wireframes (3-4 screens) | 静的ワイヤーフレームを作成（3-4画面）
- ✅ Established layout and structure | レイアウトと構造を確立

### Week 7: The Next Step | 第7週：次のステップ
**Adding Life to Your Designs | デザインに命を吹き込む**

- Static wireframes → Interactive prototypes | 静的ワイヤーフレーム → インタラクティブプロトタイプ
- Layout → User flows and navigation | レイアウト → ユーザーフローとナビゲーション
- Screens → Connected experiences | 画面 → 接続された体験
- Structure → Behavior | 構造 → 動作

---

## Slide 3: What is an Interactive Prototype? | インタラクティブプロトタイプとは？

### Definition | 定義
An **interactive prototype** is a clickable simulation of your app that demonstrates how users navigate between screens and interact with elements.

**インタラクティブプロトタイプ**は、ユーザーが画面間をナビゲートし要素と相互作用する方法を示す、クリック可能なアプリのシミュレーションです。

### Key Characteristics | 主要特性
- **Clickable** | クリック可能: Buttons, links, and UI elements respond to taps/clicks | ボタン、リンク、UI要素がタップ/クリックに応答
- **Navigation** | ナビゲーション: Users can move between screens | ユーザーは画面間を移動できる
- **Transitions** | トランジション: Screens animate in and out | 画面がアニメーションで入退出
- **Testable** | テスト可能: Can be used in usability testing | ユーザビリティテストで使用可能

### Why Create Interactive Prototypes? | なぜインタラクティブプロトタイプを作成するのか？
- **Validate User Flows** | ユーザーフローを検証: Ensure navigation makes sense | ナビゲーションが理にかなっていることを確認
- **Test with Users** | ユーザーでテスト: Get real feedback before coding | コーディング前に実際のフィードバックを取得
- **Communicate Intent** | 意図を伝える: Show stakeholders how it works | ステークホルダーにどのように機能するかを示す
- **Refine Interactions** | インタラクションを改良: Perfect the experience | 体験を完璧にする

---

## Slide 4: Understanding User Flows | ユーザーフローの理解

### What is a User Flow? | ユーザーフローとは？
A **user flow** is the path a user takes through your app to complete a specific task.

**ユーザーフロー**は、ユーザーが特定のタスクを完了するためにアプリを通って行く経路です。

### Components of a User Flow | ユーザーフローのコンポーネント

#### Entry Point | エントリーポイント
- Where does the user start? | ユーザーはどこから始まるか？
- Onboarding, home screen, notification | オンボーディング、ホーム画面、通知

#### Actions | アクション
- What does the user do? | ユーザーは何をするか？
- Tap, swipe, type, select | タップ、スワイプ、タイプ、選択

#### Decision Points | 決定ポイント
- What choices does the user make? | ユーザーはどのような選択をするか？
- Yes/No, options, paths | はい/いいえ、オプション、パス

#### Exit Point | 終了ポイント
- Where does the flow end? | フローはどこで終わるか？
- Task completed, confirmation screen | タスク完了、確認画面

### Common User Flows | 一般的なユーザーフロー
- **Onboarding** | オンボーディング: Welcome → Login → Tutorial → Home
- **Search** | 検索: Home → Search → Results → Detail
- **Purchase** | 購入: Browse → Add to Cart → Checkout → Confirmation
- **Settings** | 設定: Profile → Settings → Edit → Save

---

## Slide 5: Planning Your Prototype | プロトタイプの計画

### Before You Build | 構築する前に

#### 1. Identify Core User Flows | コアユーザーフローを特定
- What are the most important tasks? | 最も重要なタスクは何か？
- Which flows need testing first? | どのフローを最初にテストする必要があるか？
- Focus on 2-3 key flows | 2-3の主要フローに焦点を当てる

#### 2. Map Out the Journey | ジャーニーをマッピング
- Sketch the flow on paper or whiteboard | 紙またはホワイトボードでフローをスケッチ
- Identify all screens needed | 必要なすべての画面を特定
- Note decision points and branches | 決定ポイントと分岐を記録

#### 3. Consider Edge Cases | エッジケースを考慮
- What if user taps back? | ユーザーが戻るをタップしたら？
- What if there's an error? | エラーがあったら？
- What if content is missing? | コンテンツが欠落していたら？

### Prototyping Strategy | プロトタイピング戦略
- **Start Simple** | シンプルに始める: Basic navigation first | 最初は基本的なナビゲーション
- **Build Incrementally** | 段階的に構築: Add complexity gradually | 徐々に複雑さを追加
- **Test Early** | 早期にテスト: Don't wait for perfection | 完璧を待たない
- **Iterate Often** | 頻繁に反復: Improve based on feedback | フィードバックに基づいて改善

---

## Slide 6: Creating Hotspots and Links | ホットスポットとリンクの作成

### What are Hotspots? | ホットスポットとは？
**Hotspots** are clickable areas on your wireframes that trigger navigation to other screens.

**ホットスポット**は、他の画面へのナビゲーションをトリガーするワイヤーフレーム上のクリック可能な領域です。

### Types of Interactive Elements | インタラクティブ要素のタイプ

#### Buttons | ボタン
- Primary actions (e.g., "Submit", "Next") | 主要アクション（例：「送信」、「次へ」）
- Secondary actions (e.g., "Cancel", "Back") | 二次アクション（例：「キャンセル」、「戻る」）
- Call-to-action buttons | 行動喚起ボタン

#### Navigation Elements | ナビゲーション要素
- Tab bars (bottom navigation) | タブバー（下部ナビゲーション）
- Hamburger menus | ハンバーガーメニュー
- Back buttons and breadcrumbs | 戻るボタンとパンくずリスト

#### Interactive Components | インタラクティブコンポーネント
- Cards that expand | 展開するカード
- List items that open details | 詳細を開くリストアイテム
- Form fields and dropdowns | フォームフィールドとドロップダウン

### In Figma: Creating Connections | Figmaでの接続作成
1. Switch to Prototype mode | プロトタイプモードに切り替え
2. Select an element (button, card, etc.) | 要素を選択（ボタン、カードなど）
3. Drag the blue connector to target screen | 青いコネクタをターゲット画面にドラッグ
4. Set interaction trigger (On Tap, etc.) | インタラクショントリガーを設定（タップ時など）
5. Choose transition animation | トランジションアニメーションを選択

---

## Slide 7: Transition Types | トランジションタイプ

### Understanding Transitions | トランジションの理解
**Transitions** are animations that occur when navigating between screens.

**トランジション**は、画面間を移動する際に発生するアニメーションです。

### Common Transition Types | 一般的なトランジションタイプ

#### Instant | 即座
- **No animation** | アニメーションなし
- **Use for:** Quick actions, minimal distraction | 使用時：素早いアクション、最小限の注意散漫
- **Example:** Tab bar switching | 例：タブバー切り替え

#### Dissolve/Fade | ディゾルブ/フェード
- **Crossfade between screens** | 画面間のクロスフェード
- **Use for:** Modal overlays, subtle changes | 使用時：モーダルオーバーレイ、微妙な変化
- **Example:** Settings panels | 例：設定パネル

#### Slide | スライド
- **Screens slide in from direction** | 画面が方向からスライド
- **Use for:** Sequential flows, hierarchical navigation | 使用時：シーケンシャルフロー、階層的ナビゲーション
- **Example:** Detail views, form steps | 例：詳細ビュー、フォームステップ

#### Push | プッシュ
- **Current screen pushes out, new screen pushes in** | 現在の画面がプッシュアウト、新しい画面がプッシュイン
- **Use for:** Deep navigation hierarchies | 使用時：深いナビゲーション階層
- **Example:** Email inbox → message → reply | 例：メール受信トレイ → メッセージ → 返信

#### Modal | モーダル
- **Screen slides up from bottom** | 画面が下からスライドアップ
- **Use for:** Temporary tasks, interruptions | 使用時：一時的なタスク、中断
- **Example:** Filters, compose message | 例：フィルター、メッセージ作成

---

## Slide 8: Micro-Interactions and Feedback | マイクロインタラクションとフィードバック

### What are Micro-Interactions? | マイクロインタラクションとは？
**Micro-interactions** are small, subtle animations that provide feedback when users interact with elements.

**マイクロインタラクション**は、ユーザーが要素と相互作用する際にフィードバックを提供する、小さく微妙なアニメーションです。

### Types of Micro-Interactions | マイクロインタラクションのタイプ

#### Button States | ボタン状態
- **Hover** | ホバー: Color change, slight scale | 色の変更、わずかな拡大縮小
- **Press** | プレス: Depth effect, color darkening | 深度効果、色の暗化
- **Disabled** | 無効: Grayed out, no interaction | グレーアウト、相互作用なし

#### Loading States | ロード状態
- **Spinners** | スピナー: Circular loading indicators | 円形ロードインジケーター
- **Progress bars** | プログレスバー: Show completion percentage | 完了パーセンテージを表示
- **Skeleton screens** | スケルトン画面: Content placeholder animation | コンテンツプレースホルダーアニメーション

#### Success/Error Feedback | 成功/エラーフィードバック
- **Checkmarks** | チェックマーク: Green confirmation | 緑の確認
- **Error icons** | エラーアイコン: Red warning symbols | 赤い警告シンボル
- **Toast notifications** | トースト通知: Brief message at bottom | 下部の短いメッセージ

### Why Micro-Interactions Matter | なぜマイクロインタラクションが重要か
- **Provide Feedback** | フィードバックを提供: User knows action was registered | ユーザーはアクションが登録されたことを知る
- **Guide Attention** | 注意を導く: Direct user to next step | 次のステップにユーザーを導く
- **Create Delight** | 喜びを創造: Make interface feel alive | インターフェースを生き生きと感じさせる
- **Prevent Errors** | エラーを防ぐ: Show when something can't be done | 何かができないときを示す

---

## Slide 9: Designing Effective Navigation | 効果的なナビゲーションのデザイン

### Navigation Principles | ナビゲーション原則

#### 1. Clarity | 明確性
- **Users should always know where they are** | ユーザーは常にどこにいるかを知るべき
- Show current location in navigation | ナビゲーションで現在の場所を表示
- Use breadcrumbs for deep hierarchies | 深い階層にはパンくずリストを使用
- Clear page titles and headings | 明確なページタイトルと見出し

#### 2. Consistency | 一貫性
- **Navigation elements in same place** | 同じ場所のナビゲーション要素
- Tab bars always at bottom | タブバーは常に下部
- Back buttons always top-left | 戻るボタンは常に左上
- Consistent interaction patterns | 一貫したインタラクションパターン

#### 3. Efficiency | 効率性
- **Minimize taps to reach content** | コンテンツに到達するタップを最小化
- Aim for 3 taps or less to any screen | 任意の画面へ3タップ以下を目指す
- Provide shortcuts for frequent tasks | 頻繁なタスクへのショートカットを提供
- Quick access to home/main sections | ホーム/メインセクションへの迅速なアクセス

#### 4. Forgiveness | 寛容性
- **Allow users to go back** | ユーザーが戻れるようにする
- Always provide back button or gesture | 常に戻るボタンまたはジェスチャーを提供
- Don't trap users in flows | フローでユーザーを捕らえない
- Offer "Cancel" options | 「キャンセル」オプションを提供

---

## Slide 10: Creating Multi-Screen Prototypes | マルチスクリーンプロトタイプの作成

### Building Connected Experiences | 接続された体験の構築

#### Step 1: Prepare Your Screens | 画面を準備
- Ensure all wireframes are complete | すべてのワイヤーフレームが完成していることを確認
- Name screens descriptively | 画面にわかりやすい名前を付ける
- Organize into logical groups | 論理的なグループに整理
- Include all necessary states (empty, loading, error) | 必要なすべての状態を含める（空、ロード中、エラー）

#### Step 2: Add Navigation Hotspots | ナビゲーションホットスポットを追加
- Link buttons to destination screens | ボタンを宛先画面にリンク
- Connect tab bar to respective screens | タブバーをそれぞれの画面に接続
- Add back navigation | 戻るナビゲーションを追加
- Include modal overlays and dismissals | モーダルオーバーレイと解除を含める

#### Step 3: Set Transition Animations | トランジションアニメーションを設定
- Choose appropriate transition for each flow | 各フローに適切なトランジションを選択
- Set transition duration (200-400ms typical) | トランジション期間を設定（通常200-400ms）
- Use easing for natural movement | 自然な動きのためにイージングを使用
- Preview and adjust as needed | 必要に応じてプレビューと調整

#### Step 4: Test the Flow | フローをテスト
- Click through entire prototype | プロトタイプ全体をクリックスルー
- Verify all links work correctly | すべてのリンクが正しく機能することを確認
- Check that navigation makes sense | ナビゲーションが理にかなっていることを確認
- Identify any broken or missing links | 壊れたまたは欠けているリンクを特定

---

## Slide 11: Prototyping Best Practices | プロトタイピングベストプラクティス

### Do's | すべきこと

#### Focus on Key Flows | 主要フローに焦点を当てる
- Don't prototype every possible interaction | すべての可能なインタラクションをプロトタイプ化しない
- Focus on 2-3 critical user flows | 2-3の重要なユーザーフローに焦点を当てる
- Prioritize what you need to test | テストする必要があるものに優先順位を付ける

#### Keep It Simple | シンプルに保つ
- Start with basic navigation | 基本的なナビゲーションから始める
- Add complexity gradually | 徐々に複雑さを追加
- Don't over-animate | 過度にアニメーション化しない

#### Test Early and Often | 早期に頻繁にテスト
- Click through your prototype yourself | 自分でプロトタイプをクリックスルー
- Share with peers for feedback | フィードバックのためにピアと共有
- Identify issues before user testing | ユーザーテスト前に問題を特定

### Don'ts | すべきでないこと

#### Don't Add Every Detail | すべての詳細を追加しない
- Avoid prototyping minor micro-interactions | マイナーなマイクロインタラクションのプロトタイプ化を避ける
- Don't link every element | すべての要素をリンクしない
- Focus on demonstrable flows | 実証可能なフローに焦点を当てる

#### Don't Forget Mobile Gestures | モバイルジェスチャーを忘れない
- Include swipe gestures where appropriate | 適切な場所でスワイプジェスチャーを含める
- Design for one-handed use | 片手使用のためにデザイン
- Consider thumb-friendly zones | 親指に優しいゾーンを考慮

#### Don't Skip Documentation | 文書化をスキップしない
- Annotate complex interactions | 複雑なインタラクションに注釈を付ける
- Explain intended behavior | 意図された動作を説明
- Note any limitations of prototype | プロトタイプの制限を記録

---

## Slide 12: Testing Your Prototype | プロトタイプのテスト

### Self-Testing Checklist | セルフテストチェックリスト

#### Navigation Testing | ナビゲーションテスト
- [ ] Can I navigate to all key screens? | すべての主要画面にナビゲートできるか？
- [ ] Do back buttons work correctly? | 戻るボタンは正しく機能するか？
- [ ] Are tab bars functional? | タブバーは機能するか？
- [ ] Can I return to home screen? | ホーム画面に戻れるか？

#### Flow Testing | フローテスト
- [ ] Can I complete main user tasks? | 主要なユーザータスクを完了できるか？
- [ ] Are transitions smooth and appropriate? | トランジションはスムーズで適切か？
- [ ] Do flows make logical sense? | フローは論理的に理にかなっているか？
- [ ] Are there any dead ends? | 行き止まりはあるか？

#### Interaction Testing | インタラクションテスト
- [ ] Do buttons respond when tapped? | ボタンはタップされたときに応答するか？
- [ ] Are interactive elements clearly clickable? | インタラクティブ要素は明確にクリック可能か？
- [ ] Are transitions at right speed? | トランジションは適切な速度か？
- [ ] Does prototype feel responsive? | プロトタイプは応答性があると感じるか？

### Getting Feedback | フィードバックの取得
- Share prototype link with peers | ピアとプロトタイプリンクを共有
- Ask specific questions about navigation | ナビゲーションについて具体的な質問をする
- Observe where users get confused | ユーザーが混乱する場所を観察
- Document issues and iterate | 問題を文書化して反復

---

## Slide 13: Bot-Guided Prototyping Workflow | ボットガイドプロトタイピングワークフロー

### HCI-101 Bot Support | HCI-101ボットサポート

#### What the Bot Can Help With | ボットが支援できること

**User Flow Guidance | ユーザーフローガイダンス:**
- Suggest logical navigation paths | 論理的なナビゲーションパスを提案
- Identify missing screens in flows | フローで欠けている画面を特定
- Recommend appropriate transitions | 適切なトランジションを推奨
- Validate user journey completeness | ユーザージャーニーの完全性を検証

**Technical Support | 技術サポート:**
- Figma/Adobe XD prototyping feature help | Figma/Adobe XDプロトタイピング機能ヘルプ
- Troubleshoot connection issues | 接続問題のトラブルシューティング
- Animation and transition settings | アニメーションとトランジション設定
- Export and sharing guidance | エクスポートと共有ガイダンス

**Design Critique | デザイン批評:**
- Review navigation logic | ナビゲーションロジックをレビュー
- Assess transition appropriateness | トランジションの適切性を評価
- Identify usability issues in flows | フローのユーザビリティ問題を特定
- Suggest improvements | 改善を提案

### How to Use the Bot | ボットの使い方
1. **Share prototype link or screenshots** | プロトタイプリンクまたはスクリーンショットを共有
2. **Describe your user flows** | ユーザーフローを説明
3. **Ask specific questions** | 具体的な質問をする
4. **Receive feedback and iterate** | フィードバックを受け取り反復

---

## Slide 14: This Week's Activity | 今週のアクティビティ

### Build Interactive Prototype | インタラクティブプロトタイプを構築

#### What You'll Do | やること
1. **Refine Wireframes** | ワイヤーフレームを改良: Incorporate Week 6 feedback | 第6週のフィードバックを組み込む
2. **Plan User Flows** | ユーザーフローを計画: Map 2-3 key journeys | 2-3の主要ジャーニーをマッピング
3. **Add Hotspots** | ホットスポットを追加: Create clickable elements | クリック可能な要素を作成
4. **Set Transitions** | トランジションを設定: Choose appropriate animations | 適切なアニメーションを選択
5. **Test & Iterate** | テストと反復: Validate and improve flows | フローを検証して改善

#### Time Breakdown | 時間配分
- **Planning User Flows** | ユーザーフローの計画: 10 minutes | 10分
- **Adding Interactivity** | インタラクティビティの追加: 30 minutes | 30分
- **Setting Transitions** | トランジションの設定: 10 minutes | 10分
- **Testing Prototype** | プロトタイプのテスト: 10 minutes | 10分
- **Bot Feedback & Iteration** | ボットフィードバックと反復: 10 minutes | 10分
- **Total** | 合計: 70 minutes | 70分

#### Deliverables | 成果物
- **Interactive Prototype** | インタラクティブプロトタイプ: 6-8 connected screens | 6-8つの接続された画面
- **User Flow Diagram** | ユーザーフロー図: Visual map of navigation | ナビゲーションのビジュアルマップ
- **Prototype Link** | プロトタイプリンク: Shareable Figma/XD link | 共有可能なFigma/XDリンク
- **Bot Interaction Log** | ボットインタラクションログ: Screenshots of guidance | ガイダンスのスクリーンショット

---

## Slide 15: Common Prototyping Mistakes | 一般的なプロトタイピングの間違い

### Mistakes to Avoid | 避けるべき間違い

#### 1. Too Many Connections | 接続が多すぎる
- **Problem** | 問題: Linking every possible element | すべての可能な要素をリンク
- **Solution** | 解決策: Focus on 2-3 key user flows | 2-3の主要ユーザーフローに焦点を当てる
- **Why** | 理由: Overwhelming for testing, hard to maintain | テストには圧倒的、維持が困難

#### 2. Inconsistent Transitions | 一貫性のないトランジション
- **Problem** | 問題: Random animations for similar actions | 同様のアクションにランダムなアニメーション
- **Solution** | 解決策: Use same transition for same action type | 同じアクションタイプに同じトランジションを使用
- **Why** | 理由: Creates confusion, feels unprofessional | 混乱を作り出す、プロフェッショナルでないと感じる

#### 3. Missing Back Navigation | 戻るナビゲーションの欠如
- **Problem** | 問題: No way to return to previous screen | 前の画面に戻る方法がない
- **Solution** | 解決策: Always include back button or tab navigation | 常に戻るボタンまたはタブナビゲーションを含める
- **Why** | 理由: Users get trapped, can't explore freely | ユーザーが捕らえられ、自由に探索できない

#### 4. Over-Animation | 過度なアニメーション
- **Problem** | 問題: Too many fancy transitions and effects | 派手なトランジションとエフェクトが多すぎる
- **Solution** | 解決策: Keep animations subtle and purposeful | アニメーションを微妙で目的を持ったものにする
- **Why** | 理由: Slows down interaction, distracts from content | インタラクションを遅くし、コンテンツから注意をそらす

#### 5. Not Testing the Flow | フローをテストしない
- **Problem** | 問題: Assuming navigation works without clicking through | クリックスルーせずにナビゲーションが機能すると仮定
- **Solution** | 解決策: Test every flow yourself before sharing | 共有前にすべてのフローを自分でテスト
- **Why** | 理由: Broken links, dead ends, confusing paths | 壊れたリンク、行き止まり、混乱するパス

---

## Slide 16: Preparing for Usability Testing | ユーザビリティテストの準備

### Next Steps: Week 10-11 | 次のステップ：第10-11週

#### What's Coming | 今後の予定
- **Week 10:** Usability testing fundamentals | 第10週：ユーザビリティテストの基礎
- **Week 11:** Conducting tests and analyzing results | 第11週：テストの実施と結果分析
- Your interactive prototypes will be tested with real users | インタラクティブプロトタイプは実際のユーザーでテスト

#### How Today's Work Helps | 今日の作業がどのように役立つか
- **Clickable prototype** = Ready for user testing | クリック可能なプロトタイプ = ユーザーテスト準備完了
- **Clear user flows** = Specific tasks to test | 明確なユーザーフロー = テストする具体的なタスク
- **Realistic interactions** = More valuable feedback | リアルなインタラクション = より価値のあるフィードバック

### Quality Checklist | 品質チェックリスト
- [ ] All critical screens connected | すべての重要な画面が接続されている
- [ ] Navigation is clear and consistent | ナビゲーションが明確で一貫している
- [ ] Users can complete 2-3 key tasks | ユーザーは2-3の主要タスクを完了できる
- [ ] Transitions are smooth and appropriate | トランジションはスムーズで適切
- [ ] No broken links or dead ends | 壊れたリンクや行き止まりがない

---

## Slide 17: Let's Build! | 構築しましょう！

### Today's Goals | 今日の目標

#### By the End of Class | クラスの終わりまでに
- ✅ Static wireframes transformed into interactive prototype | 静的ワイヤーフレームがインタラクティブプロトタイプに変換
- ✅ 6-8 screens connected with navigation | 6-8つの画面がナビゲーションで接続
- ✅ 2-3 complete user flows working | 2-3の完全なユーザーフローが機能
- ✅ Appropriate transitions applied | 適切なトランジションが適用
- ✅ Prototype tested and ready to share | プロトタイプがテストされ共有準備完了

### Remember | 覚えておいてください
- **Start with basic navigation** | 基本的なナビゲーションから始める: Tab bars and back buttons | タブバーと戻るボタン
- **Test as you build** | 構築しながらテスト: Click through frequently | 頻繁にクリックスルー
- **Keep transitions consistent** | トランジションを一貫性のあるものにする: Same actions, same animations | 同じアクション、同じアニメーション
- **Use the bot for help** | 助けにボットを使用: 24/7 support available | 24時間365日サポート利用可能

### Questions Before We Start? | 始める前に質問はありますか？

**Let's bring your designs to life!**
**デザインに命を吹き込みましょう！**

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
