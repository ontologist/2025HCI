# Week 5 Instructor Notes: Smart Device Interface Design Principles
# 第5週インストラクターノート：スマートデバイスインターフェースデザイン原則

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期
**Duration:** 15-20 minutes lecture + 60-65 minutes hands-on activity | 15-20分講義 + 60-65分ハンズオンアクティビティ

---

## Lecture Overview | 講義概要

### Key Learning Objectives | 主要学習目標
Students will master mobile-first design principles, understand touch interface fundamentals, and apply common mobile UI patterns to create effective smartphone and tablet interfaces.
学生はモバイルファーストデザイン原則をマスターし、タッチインターフェースの基礎を理解し、一般的なモバイルUIパターンを適用して効果的なスマートフォンとタブレットインターフェースを作成する。

### Lecture Flow | 講義の流れ
1. **Introduction** (2 min): The mobile revolution and why it matters | モバイル革命とそれが重要な理由
2. **Mobile-First Philosophy** (4 min): Design approach and principles | デザインアプローチと原則
3. **Touch Interface Fundamentals** (4 min): Fingers vs. cursors, target sizes | 指 vs カーソル、ターゲットサイズ
4. **Responsive Design** (3 min): Adapting to screen sizes | 画面サイズへの適応
5. **Mobile UI Patterns** (5 min): Navigation, forms, feedback | ナビゲーション、フォーム、フィードバック
6. **Activity Preview** (2 min): Sketching mobile interfaces | モバイルインターフェースのスケッチ

---

## Pre-Lecture Setup | 講義前セットアップ

### Technical Preparation | 技術的準備
- [ ] Test bot portal access for mobile design module
- [ ] Print mobile screen templates (iPhone and Android sizes)
- [ ] Prepare mobile device examples to show (smartphones, tablets)
- [ ] Test presentation slides on classroom display
- [ ] Have mobile design pattern examples ready

### Materials to Distribute | 配布する教材
- [ ] Mobile screen templates (various sizes: 320px, 375px, 414px widths)
- [ ] Touch target sizing guide (44x44px grids)
- [ ] Mobile UI pattern library (printed reference)
- [ ] Pencils, pens, markers for sketching
- [ ] Sticky notes for annotations

### Classroom Setup | 教室セットアップ
- [ ] Arrange seating for individual sketching work
- [ ] Set up materials station with templates and drawing tools
- [ ] Ensure students have access to Week 4 personas
- [ ] Prepare wall space for displaying sketches
- [ ] Set up for peer review sessions

---

## Slide-by-Slide Speaking Points | スライド別スピーキングポイント

### Slide 1: Welcome to Mobile Interface Design Week! | モバイルインターフェースデザイン週へようこそ！

#### Instructor Actions | インストラクターのアクション
- **Connect to previous week** | 前週とつなげる: "Last week you created personas and journey maps. Today we design interfaces for them."
- **Show mobile devices** | モバイルデバイスを表示: Hold up smartphones and tablets physically
- **Check understanding** | 理解をチェック: "How many of you use your phone more than desktop?" (Most will raise hands)

#### Key Points to Emphasize | 強調すべき要点
- **Mobile dominance** | モバイルの支配: Not a trend, it's reality
- **Your personas use mobile** | あなたのペルソナはモバイルを使用: Sarah registers on her phone, remember?
- **Different design constraints** | 異なるデザイン制約: Small screens require different thinking

#### Common Questions | よくある質問
- **"Do we still need to design for desktop?"** | 「まだデスクトップのためにデザインする必要がありますか？」
  - **Answer:** Yes, but start with mobile. Mobile-first doesn't mean mobile-only.
- **"What about tablets?"** | 「タブレットについてはどうですか？」
  - **Answer:** Tablets are between phones and desktop - we'll cover responsive design.

---

### Slide 2: The Mobile Revolution | モバイル革命

#### Instructor Actions | インストラクターのアクション
- **Present statistics** | 統計を提示: Emphasize 60%+ mobile traffic
- **Make it personal** | 個人的にする: "Check your own phone screen time - probably 3-5 hours daily"
- **Show real examples** | 実際の例を表示: Websites that work well on mobile vs. poorly

#### Key Points to Emphasize | 強調すべき要点
- **Mobile is primary** | モバイルが主要: For many users, it's their only device
- **Expectations are high** | 期待が高い: Users expect mobile to work as well as desktop
- **Bad mobile = lost users** | 悪いモバイル = ユーザーを失う: 53% abandon sites that take >3 seconds to load

#### Teaching Tips | 指導のヒント
- **Use student data** | 学生データを使用: "How do you register for courses? Check email? Browse social media?"
- **Contrast examples** | 例を対比: Show same website desktop vs. mobile
- **Real-world impact** | 実世界への影響: "Your final project needs excellent mobile experience"

#### Interactive Activity | インタラクティブアクティビティ
- Quick poll: "What device did you use to check this course's syllabus?"
- Show hands: Phone, tablet, laptop, desktop
- Discuss implications for course material delivery

---

### Slide 3: Mobile-First Design Philosophy | モバイルファーストデザイン哲学

#### Instructor Actions | インストラクターのアクション
- **Explain paradigm shift** | パラダイムシフトを説明: Desktop-first is backwards
- **Draw comparison** | 比較を描く: Desktop-first vs. mobile-first approaches
- **Demonstrate constraints** | 制約を実演: Use a phone screen template - "This is all the space you have"

#### Key Points to Emphasize | 強調すべき要点
- **Constraints are good** | 制約は良い: Force you to prioritize what matters
- **Content first** | コンテンツファースト: What do users actually need?
- **Progressive enhancement** | プログレッシブエンハンスメント: Start small, grow to larger screens

#### Teaching Tips | 指導のヒント
- **Use phone analogy** | 電話の類推を使用: "If you had to fit your entire house in one room, what would you keep?"
- **Show before/after** | 前/後を表示: Same design desktop-first vs. mobile-first
- **Emphasize ruthless prioritization** | 無慈悲な優先順位付けを強調: "Everything can't be primary"

#### Common Student Mistakes | 一般的な学生の間違い
- **Trying to fit everything** | すべてを収める試み: Can't shrink desktop to mobile
- **Hiding important features** | 重要な機能を非表示: "Hamburger menu of doom"
- **Desktop thinking on mobile** | モバイルでのデスクトップ思考: Hover states, small text

---

### Slide 4: Touch Interface Fundamentals | タッチインターフェースの基礎

#### Instructor Actions | インストラクターのアクション
- **Physical demonstration** | 物理的実演: Use your finger on screen/template - "See how big it is?"
- **Show minimum sizes** | 最小サイズを表示: Draw 44x44px box - "This is the minimum"
- **Demonstrate thumb zones** | 親指ゾーンを実演: Hold phone, show where thumb can easily reach

#### Key Points to Emphasize | 強調すべき要点
- **44x44px minimum** | 最小44x44px: Apple and Google guidelines - follow them
- **Thumb-friendly placement** | 親指フレンドリーな配置: Bottom center for primary actions
- **No hover states** | ホバー状態なし: Can't show info on hover - must be explicit

#### Teaching Tips | 指導のヒント
- **Interactive demo** | インタラクティブデモ: Have students hold phones, notice what's easy/hard to reach
- **Show bad examples** | 悪い例を表示: Tiny buttons, clustered links
- **Size comparison** | サイズ比較: Mouse cursor (1px point) vs. finger (44px area)

#### Demonstration | 実演
- Draw 44x44px grid on board
- Show how many desktop buttons would be too small
- Demonstrate spacing requirements between targets

---

### Slide 5: Screen Sizes and Responsive Design | 画面サイズとレスポンシブデザイン

#### Instructor Actions | インストラクターのアクション
- **Show device spectrum** | デバイススペクトラムを表示: From smallest phone to desktop
- **Explain breakpoints** | ブレークポイントを説明: Where layout changes
- **Demonstrate fluid layouts** | 流体レイアウトを実演: How content adapts

#### Key Points to Emphasize | 強調すべき要点
- **Many screen sizes** | 多くの画面サイズ: Can't design for just one
- **Fluid not fixed** | 固定ではなく流体: Use percentages, adapt to space
- **Content priority shifts** | コンテンツ優先度がシフト: Secondary features hide or move on small screens

#### Teaching Tips | 指導のヒント
- **Use physical props** | 物理的小道具を使用: Show different sized devices
- **Draw examples** | 例を描く: Same content, 3 screen sizes
- **Emphasize testing** | テストを強調: Must test on real devices

#### Interactive Exercise | インタラクティブな演習
- Show a desktop layout
- Ask: "What stays, what goes on phone?"
- Discuss prioritization decisions

---

### Slide 6: Mobile Navigation Patterns | モバイルナビゲーションパターン

#### Instructor Actions | インストラクターのアクション
- **Show real app examples** | 実際のアプリ例を表示: Instagram (bottom bar), Gmail (hamburger)
- **Demonstrate each pattern** | 各パターンを実演: Physical gestures for swipe, tap
- **Explain trade-offs** | トレードオフを説明: When to use which pattern

#### Key Points to Emphasize | 強調すべき要点
- **Bottom bar most common** | 下部バーが最も一般的: 3-5 main sections
- **Hamburger menu controversial** | ハンバーガーメニューは議論の余地あり: Hides navigation
- **Context matters** | コンテキストが重要: Choose pattern based on app structure

#### Teaching Tips | 指導のヒント
- **Use student phones** | 学生の電話を使用: "Open Instagram - see the bottom bar?"
- **Pros and cons lists** | 長所と短所のリスト: For each pattern type
- **Connect to personas** | ペルソナとつなげる: "Would Sarah find hamburger menu easily?"

#### Demonstration | 実演
- Show 4 navigation patterns on actual apps
- Discuss when each is appropriate
- Have students identify patterns in their favorite apps

---

### Slide 7: Mobile Form Design | モバイルフォームデザイン

#### Instructor Actions | インストラクターのアクション
- **Show painful mobile forms** | 苦痛なモバイルフォームを表示: Bad examples that frustrate
- **Demonstrate good practices** | 良い実践を実演: Single column, large fields, smart keyboards
- **Explain input types** | 入力タイプを説明: Email keyboard, numeric keypad, date pickers

#### Key Points to Emphasize | 強調すべき要点
- **Every field is a burden** | すべてのフィールドが負担: Only ask for essentials
- **Single column layout** | 単一列レイアウト: Easier to scan and complete
- **Appropriate keyboards** | 適切なキーボード: Email, phone, number inputs show right keyboard

#### Teaching Tips | 指導のヒント
- **Live demo on phone** | 電話でライブデモ: Fill out form on your phone, narrate experience
- **Bad example walkthrough** | 悪い例のウォークスルー: Show frustrating form, identify problems
- **Best practice checklist** | ベストプラクティスチェックリスト: Provide reference

#### Common Student Mistakes | 一般的な学生の間違い
- **Multi-column layouts** | 複数列レイアウト: Confusing on mobile
- **Placeholder as label** | ラベルとしてプレースホルダー: Disappears when typing
- **Generic input types** | 一般的な入力タイプ: Not using email/tel/number inputs

---

### Slide 8: Mobile UI Patterns - Lists and Content | モバイルUIパターン - リストとコンテンツ

#### Instructor Actions | インストラクターのアクション
- **Show pattern examples** | パターン例を表示: Vertical lists, grids, carousels
- **Explain when to use each** | いつ使用するかを説明: Context and content type matters
- **Demonstrate interactions** | 相互作用を実演: Swipe actions, pull-to-refresh

#### Key Points to Emphasize | 強調すべき要点
- **Vertical scroll is natural** | 垂直スクロールは自然: Most common pattern
- **Grids for visual content** | 視覚的コンテンツのためのグリッド: Photos, products
- **Accordions save space** | アコーディオンがスペースを節約: Expand/collapse sections

#### Teaching Tips | 指導のヒント
- **Use familiar apps** | 馴染みのあるアプリを使用: Twitter (list), Instagram (grid)
- **Pattern library** | パターンライブラリ: Provide reference with examples
- **Show in context** | コンテキストで表示: Same content, different patterns

---

### Slide 9: Feedback and States | フィードバックと状態

#### Instructor Actions | インストラクターのアクション
- **Emphasize importance** | 重要性を強調: Users must know what's happening
- **Show loading patterns** | ローディングパターンを表示: Spinners, skeleton screens, progress bars
- **Demonstrate button states** | ボタン状態を実演: Default, pressed, disabled, loading

#### Key Points to Emphasize | 強調すべき要点
- **No hover on mobile** | モバイルではホバーなし: Feedback must be explicit
- **Skeleton screens > spinners** | スケルトンスクリーン > スピナー: Feels faster
- **Optimistic UI** | 楽観的UI: Show success immediately, revert if fails

#### Teaching Tips | 指導のヒント
- **Compare experiences** | 体験を比較: Good feedback vs. no feedback
- **Show timing** | タイミングを表示: When to show loading indicators
- **Error handling** | エラー処理: How to help users recover

---

### Slide 10: Typography on Mobile | モバイルでのタイポグラフィ

#### Instructor Actions | インストラクターのアクション
- **Show size comparisons** | サイズ比較を表示: 14px vs. 16px at arm's length
- **Demonstrate readability** | 可読性を実演: Good vs. bad line height, contrast
- **Explain accessibility** | アクセシビリティを説明: Why 16px minimum matters

#### Key Points to Emphasize | 強調すべき要点
- **16px minimum** | 最小16px: 14px is too small for mobile
- **Line height matters** | 行の高さが重要: 1.4-1.6 improves readability
- **Contrast ratios** | コントラスト比: 4.5:1 minimum for text

#### Teaching Tips | 指導のヒント
- **Physical demonstration** | 物理的実演: Hold phone at arm's length, show text sizes
- **Accessibility connection** | アクセシビリティ接続: Good typography helps everyone
- **System fonts** | システムフォント: Fast loading, optimized

---

### Slide 11: Color and Contrast | 色とコントラスト

#### Instructor Actions | インストラクターのアクション
- **Explain sunlight problem** | 日光問題を説明: Mobile used outdoors
- **Show contrast checker** | コントラストチェッカーを表示: Tool for testing ratios
- **Demonstrate dark mode** | ダークモードを実演: Why it's increasingly expected

#### Key Points to Emphasize | 強調すべき要点
- **4.5:1 minimum contrast** | 最小4.5:1コントラスト: For normal text
- **Test in sunlight** | 日光でテスト: What works indoors may fail outdoors
- **Don't rely on color alone** | 色だけに頼らない: Add icons, labels, patterns

#### Teaching Tips | 指導のヒント
- **Use contrast tool** | コントラストツールを使用: Show real-time checking
- **Color blindness** | 色盲: 8% of men affected
- **Dark mode demo** | ダークモードデモ: Show same interface light and dark

---

### Slide 12: Performance and Optimization | パフォーマンスと最適化

#### Instructor Actions | インストラクターのアクション
- **Present speed statistics** | 速度統計を提示: 3 second rule
- **Explain mobile constraints** | モバイル制約を説明: Slower networks, limited data
- **Show optimization strategies** | 最適化戦略を表示: Image compression, code minification

#### Key Points to Emphasize | 強調すべき要点
- **Speed is a feature** | 速度は機能: Not just nice to have
- **Every second counts** | 1秒ごとが重要: Abandonment increases with delay
- **Mobile networks are slow** | モバイルネットワークは遅い: Design for 3G, not just wifi

#### Teaching Tips | 指導のヒント
- **Show load times** | 読み込み時間を表示: Fast vs. slow sites
- **Throttle connection** | 接続をスロットル: Demo how site performs on 3G
- **Optimization tips** | 最適化のヒント: Practical strategies students can use

---

### Slide 13: Accessibility on Mobile | モバイルでのアクセシビリティ

#### Instructor Actions | インストラクターのアクション
- **Emphasize universal benefit** | 普遍的な利益を強調: Accessibility helps everyone
- **Show screen reader demo** | スクリーンリーダーデモを表示: How blind users navigate
- **Explain touch accessibility** | タッチアクセシビリティを説明: Target sizes matter more

#### Key Points to Emphasize | 強調すべき要点
- **Touch targets for accessibility** | アクセシビリティのためのタッチターゲット: 44x44px helps motor impairment
- **Screen reader support** | スクリーンリーダーサポート: Alt text, semantic HTML
- **Respect user preferences** | ユーザー設定を尊重: Text size, reduced motion

#### Teaching Tips | 指導のヒント
- **Screen reader demo** | スクリーンリーダーデモ: Turn on VoiceOver/TalkBack, navigate
- **Accessibility checklist** | アクセシビリティチェックリスト: Provide reference
- **Connect to personas** | ペルソナとつなげる: Some users have disabilities

---

### Slide 14: Mobile Design Process | モバイルデザインプロセス

#### Instructor Actions | インストラクターのアクション
- **Walk through process** | プロセスを歩く: 6 steps from persona to sketch
- **Emphasize iteration** | 反復を強調: First sketch won't be perfect
- **Preview activity** | アクティビティをプレビュー: "You'll do this in 15 minutes"

#### Key Points to Emphasize | 強調すべき要点
- **Start with personas** | ペルソナから始める: Who are you designing for?
- **Prioritize core features** | コア機能に優先順位を付ける: What's essential for mobile?
- **Sketch multiple options** | 複数のオプションをスケッチ: Don't settle for first idea

#### Teaching Tips | 指導のヒント
- **Use Week 4 work** | 週4の作業を使用: Build on personas and scenarios
- **Show example process** | 例のプロセスを表示: Persona → sketch progression
- **Emphasize speed** | 速度を強調: Low-fidelity = fast iteration

---

### Slide 15: Today's Activity Preview | 今日のアクティビティプレビュー

#### Instructor Actions | インストラクターのアクション
- **Build excitement** | 興奮を構築: "Now you'll design real mobile interfaces!"
- **Explain structure** | 構造を説明: 5 steps with bot guidance
- **Show materials** | 教材を表示: Screen templates, drawing tools
- **Set expectations** | 期待を設定: "Low-fidelity sketches, focus on layout"

#### Key Points to Emphasize | 強調すべき要点
- **Paper prototyping** | 紙プロトタイピング: Fast, easy to change
- **Use personas** | ペルソナを使用: Design for Sarah, not yourself
- **Apply mobile patterns** | モバイルパターンを適用: Use what you learned today

#### Teaching Tips | 指導のヒント
- **Reduce anxiety** | 不安を減らす: "You don't need to be an artist"
- **Show example sketches** | 例のスケッチを表示: Low-fidelity is fine
- **Emphasize peer feedback** | ピアフィードバックを強調: Learn from each other

#### Time Management | 時間管理
- **Step 1:** 8 minutes - Persona and scenario review
- **Step 2:** 10 minutes - Information architecture
- **Step 3:** 22 minutes - Low-fidelity sketching
- **Step 4:** 15 minutes - Apply mobile patterns
- **Step 5:** 10 minutes - Peer review and iteration

---

### Slide 16: Key Takeaways | 主要な要点

#### Instructor Actions | インストラクターのアクション
- **Summarize main points** | 主要ポイントをまとめる: Five key principles
- **Connect to real world** | 実世界とつなげる: These apply to professional work
- **Encourage practice** | 練習を奨励: Keep sketching and iterating

#### Key Points to Emphasize | 強調すべき要点
- **Mobile-first is standard** | モバイルファーストは標準: Not optional anymore
- **Touch is different** | タッチは異なる: Design accordingly
- **Patterns exist for a reason** | パターンは理由があって存在: Use them effectively

#### Teaching Tips | 指導のヒント
- **Make it memorable** | 記憶に残るようにする: "44x44, not 14x14"
- **Practical application** | 実用的な応用: Use in final project
- **Open for questions** | 質問をオープン: "Any final questions before we start?"

---

### Slide 17: Looking Ahead | 先を見る

#### Instructor Actions | インストラクターのアクション
- **Preview Week 6** | 週6をプレビュー: Usability testing
- **Connect activities** | アクティビティをつなげる: "Next week you'll test your sketches with users"
- **Build anticipation** | 期待を構築: "See how real users interact with your designs"

#### Key Points to Emphasize | 強調すべき要点
- **Testing validates design** | テストがデザインを検証: Don't skip this step
- **User feedback is gold** | ユーザーフィードバックは金: Find problems early
- **Iterate based on testing** | テストに基づいて反復: Improve continuously

#### Final Encouragement | 最終的な励まし
- "You have the principles and patterns"
- "The bot will guide you through sketching"
- "Let's create mobile interfaces your personas will love!"

---

## Activity Transition | アクティビティ移行

### Before Starting Activity | アクティビティ開始前
1. **Verify bot access** | ボットアクセスを確認: All students logged in to mobile design module
2. **Distribute materials** | 教材を配布: Screen templates, drawing tools
3. **Ensure persona access** | ペルソナアクセスを確保: Students can reference Week 4 work
4. **Quick demo** | クイックデモ: Show how to use screen templates

### During Activity | アクティビティ中
1. **Circulate actively** | 積極的に巡回: Monitor all students
2. **Answer questions** | 質問に答える: But encourage bot use first
3. **Watch for issues** | 問題を監視: Common problems detailed below
4. **Manage time** | 時間を管理: Give warnings at transitions
5. **Take photos** | 写真を撮る: Document student work for sharing

### Common Issues During Activity | アクティビティ中の一般的な問題

#### Issue 1: Students Try to Design for Desktop First | 問題1：学生がデスクトップファーストでデザインしようとする
- **Signs:** Sketches show features that won't fit on mobile
- **Intervention:** "Start with phone screen - what's the ONE most important thing?"
- **Prevention:** Emphasize mobile-first in lecture repeatedly

#### Issue 2: Touch Targets Too Small | 問題2：タッチターゲットが小さすぎる
- **Signs:** Buttons, links smaller than 44x44px
- **Intervention:** "Use your finger - can you comfortably tap this?"
- **Bot Help:** Bot provides touch target sizing grid overlay

#### Issue 3: Too Much Content on One Screen | 問題3：1つの画面にコンテンツが多すぎる
- **Signs:** Cramped, crowded sketches
- **Intervention:** "Divide this into 2-3 screens. What's the hierarchy?"
- **Reminder:** "Mobile = focus. One primary action per screen."

#### Issue 4: Ignoring Thumb Zones | 問題4：親指ゾーンを無視
- **Signs:** Primary actions at top of screen
- **Intervention:** Hold phone: "Where can your thumb reach easily?"
- **Bot Help:** Bot shows thumb reach heatmap

#### Issue 5: No Navigation Pattern | 問題5：ナビゲーションパターンなし
- **Signs:** Can't tell how user moves between screens
- **Intervention:** "How does user get back? Move to next section?"
- **Reminder:** "Choose a navigation pattern - bottom bar, hamburger, etc."

#### Issue 6: Inconsistent with Mobile Conventions | 問題6：モバイル規則と矛盾
- **Signs:** Non-standard patterns, unusual placements
- **Intervention:** "Users expect X here. Why change it?"
- **Bot Help:** Bot validates against platform guidelines

#### Issue 7: Skipping Annotations | 問題7：注釈をスキップ
- **Signs:** Drawings without labels, interaction notes
- **Intervention:** "Add notes - what happens when user taps this?"
- **Reminder:** "These sketches need to communicate to others"

---

## Post-Activity Discussion | アクティビティ後のディスカッション

### Reflection Questions | 振り返り質問
1. **"What was most challenging about mobile-first design?"** | 「モバイルファーストデザインで最も挑戦的だったことは何ですか？」
2. **"How did touch target sizing affect your layouts?"** | 「タッチターゲットサイジングはレイアウトにどのように影響しましたか？」
3. **"Which mobile pattern did you choose and why?"** | 「どのモバイルパターンを選択し、なぜですか？」
4. **"How did peer feedback change your design?"** | 「ピアフィードバックはどのようにデザインを変えましたか？」
5. **"Does your sketch support your persona's goals?"** | 「スケッチはペルソナの目標をサポートしますか？」

### Key Learnings to Reinforce | 強化すべき主要な学び
- **Constraints force focus** | 制約が焦点を強制: Mobile = prioritization
- **Touch is fundamentally different** | タッチは根本的に異なる: Bigger targets, thumb zones
- **Patterns solve common problems** | パターンが一般的な問題を解決: Don't reinvent the wheel
- **Sketching is fast iteration** | スケッチは速い反復: Low-fidelity allows experimentation

### Common Student Insights | 一般的な学生の洞察
- "I had to cut so many features to fit on mobile"
- "Touch targets are way bigger than I expected"
- "Following patterns made design easier"
- "My persona's scenario really guided my decisions"

### Next Week Connection | 来週の接続
- **"Bring your sketches"** | 「スケッチを持参」: We'll test them next week
- **"Think about test tasks"** | 「テストタスクについて考える」: What will you have users try?
- **"Clean up sketches"** | 「スケッチをクリーンアップ」: Make them testable

---

## Assessment Notes | 評価ノート

### What to Look For in Submissions | 提出物で何を見るか

#### Mobile-First Approach | モバイルファーストアプローチ
- **Designed for smallest screen first** | 最小の画面を最初にデザイン: Not desktop shrunk down
- **Core functionality prioritized** | コア機能に優先順位: Essential features prominent
- **Progressive enhancement noted** | プログレッシブエンハンスメント注記: Ideas for larger screens

#### Touch Interface Design | タッチインターフェースデザイン
- **Touch targets 44x44px minimum** | タッチターゲット最小44x44px: Measured and labeled
- **Adequate spacing** | 適切な間隔: Between interactive elements
- **Thumb-friendly placement** | 親指フレンドリーな配置: Primary actions within reach

#### Mobile UI Patterns | モバイルUIパターン
- **Appropriate navigation pattern** | 適切なナビゲーションパターン: Bottom bar, hamburger, etc.
- **Standard content patterns** | 標準コンテンツパターン: Lists, grids, cards used appropriately
- **Clear user flows** | 明確なユーザーフロー: Screen transitions annotated

#### Sketch Quality | スケッチの質
- **3-5 key screens** | 3-5個の主要な画面: Complete user flow
- **Clear annotations** | 明確な注釈: Interactions, states, notes
- **Legible and organized** | 読みやすく整理されている: Easy to understand
- **Uses templates** | テンプレートを使用: Standard screen sizes

#### Persona Alignment | ペルソナの整合性
- **Supports persona goals** | ペルソナの目標をサポート: Addresses user needs
- **Matches scenario context** | シナリオコンテキストと一致: Right device, situation
- **Solves identified pain points** | 特定されたペインポイントを解決: From journey map

#### Bot Interaction Evidence | ボットインタラクション証拠
- **Screenshots** | スクリーンショット: Key bot conversations
- **Template usage** | テンプレート使用: Screen templates, pattern libraries
- **Guidance followed** | ガイダンスに従う: Bot suggestions applied
- **Validation** | 検証: Bot checked design decisions

### Grading Rubric | 評価基準

#### Excellent (90-100%) | 優秀（90-100％）
- Mobile-first approach with clear prioritization
- All touch targets meet 44x44px minimum with proper spacing
- Appropriate mobile patterns consistently applied
- 4-5 detailed screens with complete annotations
- Strong alignment with persona goals and scenarios
- Thoughtful design decisions documented
- Extensive bot interaction evidence

#### Good (80-89%) | 良い（80-89％）
- Mobile-first approach, some prioritization
- Most touch targets meet minimum size requirements
- Mobile patterns used, mostly appropriate
- 3-4 screens with good annotations
- Good alignment with persona
- Design decisions explained
- Good bot interaction evidence

#### Satisfactory (70-79%) | 満足（70-79％）
- Attempts mobile-first, some desktop thinking
- Some touch targets too small
- Basic mobile patterns, some inconsistency
- 2-3 screens with basic annotations
- Acceptable persona alignment
- Some design rationale provided
- Some bot interaction evidence

#### Needs Improvement (<70%) | 改善が必要（<70％）
- Desktop-first approach
- Many touch targets too small
- Limited or inappropriate pattern usage
- Few screens, sparse annotations
- Weak persona connection
- Little design rationale
- Minimal bot interaction

---

## Troubleshooting Guide | トラブルシューティングガイド

### Technical Issues | 技術的問題
- **Bot not loading mobile module** | ボットがモバイルモジュールを読み込まない: Clear cache, try different browser
- **Printing template problems** | テンプレート印刷問題: Have digital versions available
- **No drawing materials** | 描画材料なし: Students can use plain paper, ruler

### Process Issues | プロセスの問題
- **Students stuck on features** | 学生が機能で立ち往生: Guide back to persona needs
- **Can't decide on pattern** | パターンを決められない: Ask about app structure (3 sections? 10+?)
- **Overcomplicated designs** | 過度に複雑なデザイン: Encourage simplification

### Content Issues | コンテンツの問題
- **Desktop-first thinking persists** | デスクトップファースト思考が続く: Physically cover/limit to phone template
- **Touch targets consistently small** | タッチターゲットが一貫して小さい: Provide 44px ruler/template overlay
- **No clear navigation** | 明確なナビゲーションなし: Review navigation patterns slide

---

## Additional Resources for Students | 学生向け追加リソース

### Recommended Reading | 推奨読み物
- **"Mobile First" by Luke Wroblewski** | Luke Wroblewskiの「Mobile First」: The definitive guide
- **Apple Human Interface Guidelines (Mobile)** | Apple Human Interface Guidelines（モバイル）: iOS patterns
- **Material Design Guidelines** | Material Designガイドライン: Android patterns
- **"Don't Make Me Think Mobile" by Steve Krug** | Steve Krugの「Don't Make Me Think Mobile」: Usability basics

### Tools and Templates | ツールとテンプレート
- **Mobile screen templates** | モバイル画面テンプレート: Various device sizes
- **Touch target grids** | タッチターゲットグリッド: 44x44px overlay
- **UI pattern library** | UIパターンライブラリ: Common mobile patterns
- **Contrast checker** | コントラストチェッカー: WebAIM tool

### Practice Opportunities | 練習機会
- **Sketch app interfaces** | アプリインターフェースをスケッチ: Practice with familiar apps
- **Critique mobile sites** | モバイルサイトを批評: Analyze good and bad examples
- **Bot practice** | ボット練習: Use bot for design feedback

---

## Emergency Backup Plans | 緊急バックアッププラン

### If Bot Portal Fails | ボットポータルが失敗した場合
1. Use provided paper templates and pattern libraries
2. Instructor provides verbal guidance for each step
3. Students work in pairs for peer feedback
4. Extend sketching time to compensate

### If No Printing Available | 印刷が利用できない場合
1. Students draw phone rectangles on blank paper
2. Provide dimensions verbally (375px × 667px common)
3. Share digital templates via projector for reference
4. Focus on concepts over perfect sizing

### If Time Runs Short | 時間が不足した場合
1. **Priority:** Complete at least 2-3 key screens
2. **Skip if needed:** Detailed annotations (assign as homework)
3. **Simplify:** Basic user flow, refine later
4. **Extend:** Peer review becomes homework

---

## Week 5 Success Metrics | 週5の成功指標

### Student Engagement Indicators | 学生エンゲージメント指標
- Active participation in sketching
- Thoughtful questions about mobile patterns
- Collaborative peer review
- Productive bot interactions
- Multiple sketch iterations

### Learning Outcome Evidence | 学習成果証拠
- Students explain mobile-first philosophy
- Students apply 44x44px touch target sizing
- Students choose appropriate mobile patterns
- Students create responsive layout concepts
- Students connect designs to personas

### Quality Markers | 質マーカー
- Sketches designed for mobile context
- Touch targets appropriately sized and spaced
- Mobile navigation patterns correctly applied
- Clear user flows with annotations
- Persona goals addressed in design
- Design decisions documented with rationale

---

*End of Instructor Notes*
*インストラクターノート終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
