# Week 5: Smart Device Interface Design Principles
# 第5週：スマートデバイスインターフェースデザイン原則

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Mobile Interface Design Week! | モバイルインターフェースデザイン週へようこそ！

### Today's Focus | 今日の焦点
**From Personas to Mobile-First Interfaces**
**ペルソナからモバイルファーストインターフェースへ**

Last week: Personas, journey maps, and scenarios | 先週：ペルソナ、ジャーニーマップ、シナリオ
This week: Design principles for smart devices | 今週：スマートデバイスのためのデザイン原則

### Today's Agenda | 今日のアジェンダ
- **Mobile-First Design Philosophy** | モバイルファーストデザイン哲学: Why mobile matters | なぜモバイルが重要か
- **Touch Interface Principles** | タッチインターフェース原則: Designing for fingers | 指のためのデザイン
- **Responsive Design Fundamentals** | レスポンシブデザイン基礎: Adapting to screen sizes | 画面サイズへの適応
- **Mobile UI Patterns** | モバイルUIパターン: Navigation, forms, and feedback | ナビゲーション、フォーム、フィードバック
- **Hands-On Sketching Workshop** | ハンズオンスケッチワークショップ: Paper prototypes | 紙プロトタイプ

### Learning Objectives | 学習目標
By the end of today, you will:
今日の終わりまでに、あなたは：
- Understand and apply mobile-first design principles | モバイルファーストデザイン原則を理解し適用する
- Design touch-friendly interfaces with appropriate target sizes | 適切なターゲットサイズでタッチフレンドリーなインターフェースをデザインする
- Create responsive layouts that adapt to different screen sizes | 異なる画面サイズに適応するレスポンシブレイアウトを作成する
- Apply common mobile UI patterns effectively | 一般的なモバイルUIパターンを効果的に適用する
- Sketch mobile interfaces for your personas | ペルソナのためのモバイルインターフェースをスケッチする

---

## Slide 2: The Mobile Revolution | モバイル革命

### Mobile-First Is Not Optional | モバイルファーストはオプションではない

**The world has gone mobile** | 世界はモバイルになった

### Key Statistics | 主要統計
- **60%+ of web traffic** is from mobile devices | 60%以上のウェブトラフィックがモバイルデバイスから
- **Smartphone penetration:** 85% in developed countries | スマートフォン普及率：先進国で85%
- **Mobile-first users:** Never or rarely use desktop | モバイルファーストユーザー：デスクトップを使用しないまたはまれに使用
- **Average daily mobile usage:** 3-5 hours | 平均毎日のモバイル使用：3-5時間
- **Mobile commerce:** 70%+ of online purchases | モバイルコマース：オンライン購入の70%以上

### Why Mobile-First Design? | なぜモバイルファーストデザイン？
- **Users expect it** | ユーザーが期待: Mobile experience must be excellent, not just "okay" | モバイル体験は「まあまあ」ではなく優れている必要がある
- **Constraints breed creativity** | 制約が創造性を生む: Limited screen space forces prioritization | 限られた画面スペースが優先順位付けを強制
- **Progressive enhancement** | プログレッシブエンハンスメント: Start with core experience, enhance for larger screens | コア体験から始め、より大きな画面のために強化
- **Performance matters** | パフォーマンスが重要: Mobile users on slower connections need fast experiences | 遅い接続のモバイルユーザーは速い体験を必要とする
- **Accessibility benefits** | アクセシビリティの利点: Touch-friendly design helps everyone | タッチフレンドリーデザインがすべての人を助ける

---

## Slide 3: Mobile-First Design Philosophy | モバイルファーストデザイン哲学

### What Is Mobile-First? | モバイルファーストとは？

**Design and build for mobile devices first, then enhance for larger screens**
**最初にモバイルデバイスのためにデザインし構築し、その後より大きな画面のために強化する**

### Traditional Approach (Desktop-First) | 従来のアプローチ（デスクトップファースト）
- Design full-featured desktop site | フル機能のデスクトップサイトをデザイン
- "Shrink" it to fit mobile | モバイルに合うように「縮小」
- Features get cut or hidden | 機能が切り取られるまたは非表示になる
- Result: Poor mobile experience | 結果：悪いモバイル体験

### Mobile-First Approach | モバイルファーストアプローチ
- **Start with core functionality** | コア機能から始める: What's absolutely essential? | 絶対に不可欠なものは何か？
- **Design for smallest screen** | 最小の画面のためにデザイン: Every pixel counts | すべてのピクセルが重要
- **Prioritize ruthlessly** | 無慈悲に優先順位を付ける: Only include what users really need | ユーザーが本当に必要とするものだけを含める
- **Progressive enhancement** | プログレッシブエンハンスメント: Add features as screen size increases | 画面サイズが増加するにつれて機能を追加
- **Result:** Great experience everywhere | 結果：どこでも素晴らしい体験

### Core Principles | コア原則
1. **Content first** | コンテンツファースト: Focus on what users need most | ユーザーが最も必要とするものに焦点を当てる
2. **Simplicity** | シンプルさ: Remove everything that's not essential | 不可欠でないすべてを削除
3. **Touch-friendly** | タッチフレンドリー: Design for fingers, not mouse cursor | マウスカーソルではなく指のためのデザイン
4. **Performance** | パフォーマンス: Fast load times are critical | 速い読み込み時間が重要
5. **Thumb-first design** | 親指ファーストデザイン: Place key actions within thumb reach | 主要なアクションを親指の届く範囲に配置

---

## Slide 4: Touch Interface Fundamentals | タッチインターフェースの基礎

### Designing for Fingers, Not Cursors | カーソルではなく指のためのデザイン

**Touch is fundamentally different from mouse interaction**
**タッチはマウスインタラクションと根本的に異なる**

### Mouse vs. Touch | マウス vs タッチ
**Mouse/Trackpad** | マウス/トラックパッド
- Precise pixel-level control | 正確なピクセルレベルの制御
- Hover states possible | ホバー状態が可能
- Right-click for context menus | コンテキストメニューのために右クリック
- Small targets (10x10px) acceptable | 小さなターゲット（10x10px）が許容される

**Touch** | タッチ
- Finger is 44-48px wide minimum | 指は最小44-48px幅
- No hover - all interactions are taps | ホバーなし - すべての相互作用はタップ
- Long-press for context | コンテキストのための長押し
- Finger obscures target | 指がターゲットを覆う

### Target Size Guidelines | ターゲットサイズガイドライン
- **Minimum touch target:** 44x44 points (Apple), 48x48dp (Google) | 最小タッチターゲット：44x44ポイント（Apple）、48x48dp（Google）
- **Recommended:** 48-56px for important actions | 推奨：重要なアクションのために48-56px
- **Spacing between targets:** At least 8px | ターゲット間の間隔：少なくとも8px
- **Small text links:** Increase padding to meet minimum size | 小さなテキストリンク：最小サイズを満たすためにパディングを増やす
- **Primary actions:** Make even larger (60-70px) | 主要なアクション：さらに大きくする（60-70px）

### Touch Zones | タッチゾーン
**One-Handed Phone Use** | 片手での電話使用
- **Easy to reach:** Bottom center (thumb zone) | 届きやすい：下部中央（親指ゾーン）
- **Stretch zone:** Top and opposite corners | ストレッチゾーン：上部と反対のコーナー
- **Hard to reach:** Top opposite corner | 届きにくい：上部反対のコーナー

**Design Implication:** Place primary actions in thumb zone
**デザインの意味：** 親指ゾーンに主要なアクションを配置

---

## Slide 5: Screen Sizes and Responsive Design | 画面サイズとレスポンシブデザイン

### The Device Landscape | デバイスランドスケープ

**Design must work across a spectrum of screen sizes**
**デザインは画面サイズのスペクトラム全体で機能する必要がある**

### Common Screen Sizes | 一般的な画面サイズ
- **Small phones:** 320-375px width (iPhone SE, small Android) | 小型電話：320-375px幅（iPhone SE、小型Android）
- **Standard phones:** 375-414px width (iPhone 12-15, most Android) | 標準電話：375-414px幅（iPhone 12-15、ほとんどのAndroid）
- **Large phones:** 414-480px width (iPhone Pro Max, large Android) | 大型電話：414-480px幅（iPhone Pro Max、大型Android）
- **Tablets (portrait):** 768-834px width (iPad) | タブレット（縦）：768-834px幅（iPad）
- **Tablets (landscape):** 1024-1112px width | タブレット（横）：1024-1112px幅
- **Desktop:** 1280px+ width | デスクトップ：1280px以上幅

### Responsive Design Principles | レスポンシブデザイン原則

#### 1. Fluid Layouts | 流体レイアウト
- Use percentages, not fixed pixels | 固定ピクセルではなくパーセンテージを使用
- Content adapts to available space | コンテンツが利用可能なスペースに適応
- Flexible grids | 柔軟なグリッド

#### 2. Flexible Images | 柔軟な画像
- Images scale with container | 画像がコンテナとともにスケール
- Responsive images for different resolutions | 異なる解像度のためのレスポンシブ画像
- Lazy loading for performance | パフォーマンスのための遅延読み込み

#### 3. Media Queries | メディアクエリ
- CSS rules based on screen size | 画面サイズに基づくCSSルール
- Breakpoints at key sizes | 主要なサイズでのブレークポイント
- Adapt layout, not just scale | スケールだけでなくレイアウトを適応

#### 4. Content Priority | コンテンツ優先度
- Most important content first | 最も重要なコンテンツを最初に
- Progressive disclosure | プログレッシブディスクロージャー
- Hide or collapse secondary content on small screens | 小さな画面でセカンダリコンテンツを非表示または折りたたむ

---

## Slide 6: Mobile Navigation Patterns | モバイルナビゲーションパターン

### Navigation on Small Screens | 小さな画面でのナビゲーション

**Navigation must be accessible yet not dominate the screen**
**ナビゲーションはアクセス可能でありながら画面を支配しない必要がある**

### Common Navigation Patterns | 一般的なナビゲーションパターン

#### 1. Bottom Tab Bar (Most Common) | 下部タブバー（最も一般的）
**When to use:** 3-5 primary sections, frequent switching
**いつ使用：** 3-5個の主要セクション、頻繁な切り替え
- **Pros:** Always visible, easy thumb access, clear current location | 常に見える、簡単な親指アクセス、明確な現在の場所
- **Cons:** Takes up screen space, limited to 5 items | 画面スペースを占める、5項目に制限
- **Examples:** Instagram, Twitter, iOS Apps | Instagram、Twitter、iOSアプリ

#### 2. Hamburger Menu (Hidden Navigation) | ハンバーガーメニュー（非表示ナビゲーション）
**When to use:** Many navigation options, infrequent navigation changes
**いつ使用：** 多くのナビゲーションオプション、まれなナビゲーション変更
- **Pros:** Saves screen space, can hold many items | 画面スペースを節約、多くの項目を保持できる
- **Cons:** Hidden = lower discoverability, requires extra tap | 非表示 = 低い発見可能性、余分なタップが必要
- **Best practice:** Combine with bottom bar for hybrid approach | ハイブリッドアプローチのために下部バーと組み合わせる

#### 3. Top Navigation Bar | 上部ナビゲーションバー
**When to use:** Single-level navigation, 2-4 main options
**いつ使用：** 単一レベルのナビゲーション、2-4個の主要オプション
- **Pros:** Standard pattern, clear hierarchy | 標準パターン、明確な階層
- **Cons:** Harder to reach with thumb | 親指で届きにくい
- **Common use:** Settings, back navigation, search | 設定、戻るナビゲーション、検索

#### 4. Swipe Gestures | スワイプジェスチャー
**When to use:** Sequential content, galleries, stories
**いつ使用：** 連続コンテンツ、ギャラリー、ストーリー
- **Pros:** Natural, efficient, full screen content | 自然、効率的、フルスクリーンコンテンツ
- **Cons:** Not discoverable, hard to learn | 発見可能ではない、学習が難しい
- **Best practice:** Provide visual hints (arrows, dots) | ビジュアルヒントを提供（矢印、ドット）

---

## Slide 7: Mobile Form Design | モバイルフォームデザイン

### Forms Are Painful on Mobile | モバイルではフォームが苦痛

**Every field is a burden - minimize input required**
**すべてのフィールドが負担 - 必要な入力を最小限にする**

### Form Design Principles | フォームデザイン原則

#### 1. Minimize Input | 入力を最小化
- **Only ask for essential information** | 必須情報のみを尋ねる: Every field reduces completion rate | すべてのフィールドが完了率を減らす
- **Smart defaults** | スマートデフォルト: Pre-fill when possible | 可能な場合は事前入力
- **Use device capabilities** | デバイス機能を使用: Location, camera, contacts | 位置、カメラ、連絡先
- **Single-column layout** | 単一列レイアウト: Easier to scan and complete | スキャンして完了しやすい

#### 2. Appropriate Input Types | 適切な入力タイプ
- **Email fields:** Show email keyboard (@, .com) | 電子メールフィールド：電子メールキーボードを表示（@、.com）
- **Phone numbers:** Numeric keypad | 電話番号：数字キーパッド
- **Dates:** Date picker, not text input | 日付：日付ピッカー、テキスト入力ではない
- **Selections:** Dropdowns, radio buttons, checkboxes | 選択：ドロップダウン、ラジオボタン、チェックボックス
- **Large text:** Multi-line text area | 大きなテキスト：複数行テキストエリア

#### 3. Labels and Instructions | ラベルと指示
- **Label above field** | フィールドの上にラベル: Always visible, not inside field | 常に見える、フィールド内ではない
- **Clear instructions** | 明確な指示: Explain format requirements upfront | 形式要件を事前に説明
- **Inline validation** | インライン検証: Immediate feedback as user types | ユーザーが入力するときの即座のフィードバック
- **Error messages** | エラーメッセージ: Specific, helpful, next to field | 具体的、役立つ、フィールドの隣

#### 4. Touch-Friendly Form Controls | タッチフレンドリーフォームコントロール
- **Large input fields:** 44px minimum height | 大きな入力フィールド：44px最小高さ
- **Adequate spacing:** 16px between fields | 適切な間隔：フィールド間16px
- **Large tap targets:** Checkboxes, radio buttons at least 44px | 大きなタップターゲット：チェックボックス、ラジオボタン少なくとも44px
- **Submit button:** Primary, large, clear label | 送信ボタン：プライマリ、大きい、明確なラベル

---

## Slide 8: Mobile UI Patterns - Lists and Content | モバイルUIパターン - リストとコンテンツ

### Displaying Content Effectively | コンテンツを効果的に表示

**Mobile screens are small - every pixel matters**
**モバイル画面は小さい - すべてのピクセルが重要**

### List Patterns | リストパターン

#### 1. Vertical Scrolling List (Most Common) | 垂直スクロールリスト（最も一般的）
- **When to use:** Feed, inbox, search results | フィード、受信トレイ、検索結果
- **Design tips:** | デザインのヒント：
  - Card-based design for separation | 分離のためのカードベースデザイン
  - Thumbnail + title + brief description | サムネイル + タイトル + 簡単な説明
  - Swipe actions (archive, delete) | スワイプアクション（アーカイブ、削除）
  - Infinite scroll or pagination | 無限スクロールまたはページネーション
  - Pull-to-refresh | プルトゥリフレッシュ

#### 2. Grid Layout | グリッドレイアウト
- **When to use:** Photos, products, visual browsing | 写真、製品、視覚的ブラウジング
- **Design tips:** | デザインのヒント：
  - 2-3 columns on phone, more on tablet | 電話では2-3列、タブレットではもっと
  - Consistent aspect ratios | 一貫したアスペクト比
  - Adequate spacing between items | 項目間の適切な間隔
  - Responsive grid (adapts to orientation) | レスポンシブグリッド（向きに適応）

#### 3. Horizontal Scrolling Carousel | 水平スクロールカルーセル
- **When to use:** Categories, featured items, stories | カテゴリ、注目項目、ストーリー
- **Design tips:** | デザインのヒント：
  - Show partial next item (hints at more content) | 次の項目の一部を表示（より多くのコンテンツのヒント）
  - Pagination dots or indicators | ページネーションドットまたはインジケーター
  - Swipe-friendly spacing | スワイプフレンドリーな間隔
  - Avoid auto-advance (users control) | 自動前進を避ける（ユーザーがコントロール）

#### 4. Expandable/Collapsible Sections (Accordion) | 拡張可能/折りたたみ可能セクション（アコーディオン）
- **When to use:** FAQs, settings, long content sections | FAQ、設定、長いコンテンツセクション
- **Design tips:** | デザインのヒント：
  - Clear expand/collapse indicators (+ / -) | 明確な展開/折りたたみインジケーター（+ / -）
  - Show one or multiple sections at a time | 一度に1つまたは複数のセクションを表示
  - Smooth animations | スムーズなアニメーション
  - Save scroll position | スクロール位置を保存

---

## Slide 9: Feedback and States | フィードバックと状態

### Users Need to Know What's Happening | ユーザーは何が起こっているかを知る必要がある

**Mobile users can't see hover states - feedback must be explicit**
**モバイルユーザーはホバー状態を見ることができない - フィードバックは明示的である必要がある**

### Loading States | 読み込み状態

#### 1. Skeleton Screens | スケルトンスクリーン
- **What:** Placeholder content shapes while loading | 何：読み込み中のプレースホルダーコンテンツ形状
- **Why better than spinners:** Shows content structure, feels faster | スピナーより良い理由：コンテンツ構造を表示、より速く感じる
- **Example:** Facebook, LinkedIn content loading | 例：Facebook、LinkedInコンテンツ読み込み

#### 2. Progress Indicators | 進行状況インジケーター
- **Indeterminate spinner:** Unknown duration (searching, loading) | 不確定スピナー：不明な期間（検索、読み込み）
- **Progress bar:** Known duration (uploading, downloading) | 進行状況バー：既知の期間（アップロード、ダウンロード）
- **Estimated time:** "About 30 seconds remaining" | 推定時間：「約30秒残り」

#### 3. Optimistic UI | 楽観的UI
- **Show success immediately** | すぐに成功を表示: Update UI before server confirms | サーバーが確認する前にUIを更新
- **Revert if fails** | 失敗した場合は元に戻す: Show error and undo | エラーと元に戻すを表示
- **Example:** Like button, send message | 例：いいねボタン、メッセージを送信

### Button States | ボタンの状態
- **Default:** Resting state | 既定：静止状態
- **Pressed:** Visual feedback when tapped | 押された：タップされたときの視覚的フィードバック
- **Disabled:** Grayed out, not tappable | 無効：グレー表示、タップできない
- **Loading:** Spinner inside button | 読み込み中：ボタン内のスピナー

### Error Handling | エラー処理
- **Inline errors:** Next to field that has problem | インラインエラー：問題があるフィールドの隣
- **Toast messages:** Brief notifications at bottom | トーストメッセージ：下部の簡単な通知
- **Error screens:** Full-page when critical failure | エラー画面：重大な障害の場合はフルページ
- **Retry actions:** Give users way to fix problem | 再試行アクション：ユーザーに問題を修正する方法を与える

---

## Slide 10: Typography on Mobile | モバイルでのタイポグラフィ

### Readability Is Critical | 可読性が重要

**Text must be readable at arm's length on small screens**
**テキストは小さな画面で腕の長さで読みやすい必要がある**

### Font Size Guidelines | フォントサイズガイドライン
- **Body text:** 16px minimum (14px is too small) | 本文テキスト：16px最小（14pxは小さすぎる）
- **Headings:** 24-32px for primary headings | 見出し：主要な見出しのために24-32px
- **Small text:** 12-14px for captions, labels (use sparingly) | 小さなテキスト：キャプション、ラベルのために12-14px（控えめに使用）
- **Button text:** 16-18px, bold or medium weight | ボタンテキスト：16-18px、太字または中程度の重さ
- **Line height:** 1.4-1.6 for body text (improves readability) | 行の高さ：本文テキストのために1.4-1.6（可読性を向上）

### Typography Best Practices | タイポグラフィのベストプラクティス
- **Contrast:** 4.5:1 minimum for body text | コントラスト：本文テキストのために最小4.5:1
- **Line length:** 50-75 characters per line (on larger screens) | 行の長さ：1行あたり50-75文字（より大きな画面で）
- **Font choice:** System fonts load fastest, web fonts add weight | フォントの選択：システムフォントが最速で読み込まれ、ウェブフォントは重量を追加
- **Hierarchy:** Clear visual distinction between heading levels | 階層：見出しレベル間の明確な視覚的区別
- **Avoid long paragraphs:** Break into shorter chunks | 長い段落を避ける：より短いチャンクに分割

---

## Slide 11: Color and Contrast | 色とコントラスト

### Designing for Various Lighting Conditions | さまざまな照明条件のためのデザイン

**Mobile devices are used in bright sunlight and dark rooms**
**モバイルデバイスは明るい日光と暗い部屋で使用される**

### Contrast Requirements | コントラスト要件
- **Normal text (16px+):** 4.5:1 minimum contrast ratio | 通常のテキスト（16px以上）：最小4.5:1コントラスト比
- **Large text (18px+ or 14px+ bold):** 3:1 minimum | 大きなテキスト（18px以上または14px以上太字）：最小3:1
- **UI elements:** 3:1 (buttons, icons, borders) | UI要素：3:1（ボタン、アイコン、境界線）
- **Test in sunlight:** What looks good indoors may be invisible outdoors | 日光でテスト：屋内で良く見えるものは屋外では見えないかもしれない

### Color Usage | 色の使用
- **Don't rely on color alone** | 色だけに頼らない: Add icons, text, or patterns | アイコン、テキスト、またはパターンを追加
- **Accessible palette** | アクセス可能なパレット: Test for color blindness (8% of men) | 色盲をテスト（男性の8%）
- **Primary action color** | 主要なアクション色: Consistent throughout app | アプリ全体で一貫
- **Error = red, success = green, warning = yellow** | エラー = 赤、成功 = 緑、警告 = 黄色: Standard conventions | 標準規則

### Dark Mode | ダークモード
- **Increasingly expected** | ますます期待される: Reduce eye strain in low light | 低光での目の疲れを軽減
- **True black vs. dark gray** | 真の黒 vs ダークグレー: Pure black can cause smearing on OLED | 純粋な黒はOLEDで汚れを引き起こす可能性がある
- **Desaturated colors** | 彩度の低い色: Bright colors are harsh in dark mode | 明るい色はダークモードで厳しい
- **Test both modes** | 両方のモードをテスト: Design should work in light and dark | デザインはライトとダークで機能する必要がある

---

## Slide 12: Performance and Optimization | パフォーマンスと最適化

### Speed Is a Feature | 速度は機能

**Every second of delay = higher abandonment rate**
**遅延の1秒ごと = より高い放棄率**

### Why Performance Matters | なぜパフォーマンスが重要か
- **User expectation:** Pages should load in under 3 seconds | ユーザー期待：ページは3秒以内に読み込まれるべき
- **Mobile networks:** Often slower and less reliable than wifi | モバイルネットワーク：wifiよりも遅くて信頼性が低いことが多い
- **Data costs:** Users on limited data plans | データコスト：制限付きデータプランのユーザー
- **Battery impact:** Heavy pages drain battery faster | バッテリーへの影響：重いページがバッテリーをより速く消耗

### Optimization Strategies | 最適化戦略

#### 1. Image Optimization | 画像最適化
- **Compress images:** Tools like ImageOptim, TinyPNG | 画像を圧縮：ImageOptim、TinyPNGのようなツール
- **Responsive images:** Serve appropriate size for screen | レスポンシブ画像：画面に適したサイズを提供
- **Lazy loading:** Load images as user scrolls | 遅延読み込み：ユーザーがスクロールするときに画像を読み込む
- **Use modern formats:** WebP is smaller than JPEG | 最新の形式を使用：WebPはJPEGより小さい

#### 2. Minimize Code | コードを最小化
- **Remove unused code:** Don't load what you don't need | 使用していないコードを削除：必要ないものを読み込まない
- **Minify CSS/JS:** Remove whitespace and comments | CSS/JSを最小化：空白とコメントを削除
- **Code splitting:** Load only what's needed for current page | コード分割：現在のページに必要なもののみを読み込む

#### 3. Reduce Requests | リクエストを減らす
- **Combine files:** Fewer HTTP requests | ファイルを結合：より少ないHTTPリクエスト
- **Cache assets:** Store files locally for repeat visits | アセットをキャッシュ：リピート訪問のためにローカルにファイルを保存
- **CDN usage:** Serve from servers closer to users | CDN使用：ユーザーに近いサーバーから提供

---

## Slide 13: Accessibility on Mobile | モバイルでのアクセシビリティ

### Design for Everyone | すべての人のためにデザイン

**Accessibility benefits all users, not just those with disabilities**
**アクセシビリティはすべてのユーザーに利益をもたらし、障害を持つ人だけではない**

### Mobile Accessibility Principles | モバイルアクセシビリティ原則

#### 1. Touch Targets | タッチターゲット
- **44x44px minimum** | 最小44x44px: Already covered, but critical for accessibility | すでにカバーされているが、アクセシビリティにとって重要
- **Adequate spacing** | 適切な間隔: Prevent accidental taps | 偶発的なタップを防ぐ
- **One-handed operation** | 片手操作: Important actions in thumb zone | 親指ゾーンの重要なアクション

#### 2. Screen Reader Support | スクリーンリーダーサポート
- **Alt text for images** | 画像の代替テキスト: Describe what image shows | 画像が何を示しているかを説明
- **Semantic HTML** | セマンティックHTML: Proper heading hierarchy, buttons, links | 適切な見出し階層、ボタン、リンク
- **Labeled form fields** | ラベル付きフォームフィールド: Clear association between label and input | ラベルと入力の間の明確な関連
- **Meaningful link text** | 意味のあるリンクテキスト: Not "click here," but "Download report" | 「ここをクリック」ではなく「レポートをダウンロード」

#### 3. Text and Contrast | テキストとコントラスト
- **Minimum contrast ratios** | 最小コントラスト比: 4.5:1 for text, 3:1 for UI | テキストのために4.5:1、UIのために3:1
- **Resizable text** | サイズ変更可能なテキスト: Support user font size preferences | ユーザーフォントサイズの好みをサポート
- **Don't disable zoom** | ズームを無効にしない: Users should be able to zoom in | ユーザーはズームインできるべき

#### 4. Motion and Animations | モーションとアニメーション
- **Respect reduced motion** | 減少したモーションを尊重: Some users get dizzy from animations | 一部のユーザーはアニメーションからめまいを得る
- **Provide controls** | コントロールを提供: Pause/stop auto-playing content | 自動再生コンテンツを一時停止/停止
- **Avoid flashing** | 点滅を避ける: Can trigger seizures | 発作を引き起こす可能性がある

---

## Slide 14: Mobile Design Process | モバイルデザインプロセス

### From Idea to Interface | アイデアからインターフェースへ

**How to approach mobile interface design systematically**
**モバイルインターフェースデザインに体系的にアプローチする方法**

### Step-by-Step Process | ステップバイステッププロセス

#### Step 1: Review Your Personas and Scenarios | ペルソナとシナリオをレビュー
- **Who are you designing for?** | 誰のためにデザインしている？: Reference your Week 4 personas | 週4のペルソナを参照
- **What are they trying to do?** | 彼らは何をしようとしている？: Focus on primary user goals | 主要なユーザー目標に焦点を当てる
- **What context?** | どのコンテキスト？: Mobile, on-the-go, time constraints | モバイル、外出中、時間制約

#### Step 2: Identify Core Functionality | コア機能を特定
- **What's essential?** | 何が不可欠？: Must-have features for mobile experience | モバイル体験のための必須機能
- **What can wait?** | 何が待つことができる？: Features for larger screens | より大きな画面のための機能
- **Prioritize ruthlessly** | 無慈悲に優先順位を付ける: Mobile = focus | モバイル = 焦点

#### Step 3: Sketch Information Architecture | 情報アーキテクチャをスケッチ
- **How many screens?** | いくつの画面？: Map out user flow | ユーザーフローをマップ
- **Navigation structure** | ナビゲーション構造: How do users move between screens? | ユーザーは画面間をどのように移動するか？
- **Content hierarchy** | コンテンツ階層: What's most important on each screen? | 各画面で最も重要なものは何か？

#### Step 4: Sketch Interface Layouts (Today's Activity!) | インターフェースレイアウトをスケッチ（今日のアクティビティ！）
- **Low-fidelity first** | 低忠実度最初: Paper sketches, rough wireframes | 紙のスケッチ、大まかなワイヤーフレーム
- **Multiple iterations** | 複数の反復: Try different approaches | 異なるアプローチを試す
- **Focus on layout** | レイアウトに焦点を当てる: Not visual design yet | まだビジュアルデザインではない

#### Step 5: Apply Mobile Patterns | モバイルパターンを適用
- **Navigation:** Bottom bar, hamburger, tabs? | ナビゲーション：下部バー、ハンバーガー、タブ？
- **Content display:** List, grid, cards? | コンテンツ表示：リスト、グリッド、カード？
- **Input:** Forms, buttons, touch targets | 入力：フォーム、ボタン、タッチターゲット

#### Step 6: Test and Refine | テストして洗練
- **Thumb test:** Can you reach key actions? | 親指テスト：主要なアクションに到達できますか？
- **Scenario walkthrough:** Does it support user goals? | シナリオウォークスルー：ユーザー目標をサポートしますか？
- **Peer feedback** | ピアフィードバック: Get input from classmates | クラスメートから入力を得る

---

## Slide 15: Today's Activity Preview | 今日のアクティビティプレビュー

### Hands-On Mobile Interface Sketching Workshop | ハンズオンモバイルインターフェーススケッチワークショップ

**Sketch mobile interfaces for your personas using paper prototypes**
**紙プロトタイプを使用してペルソナのためのモバイルインターフェースをスケッチ**

### Activity Structure | アクティビティ構造

#### Step 1: Persona and Scenario Review (8 min) | ペルソナとシナリオレビュー（8分）
- Review your Week 4 personas | 週4のペルソナをレビュー
- Select primary mobile scenario | 主要なモバイルシナリオを選択
- Identify core tasks to support | サポートするコアタスクを特定
- Bot helps you focus on mobile-first features | ボットがモバイルファースト機能に焦点を当てるのを助ける

#### Step 2: Information Architecture (10 min) | 情報アーキテクチャ（10分）
- Map user flow through screens | 画面を通じてユーザーフローをマップ
- Define navigation structure | ナビゲーション構造を定義
- Identify content for each screen | 各画面のコンテンツを特定
- Bot provides IA templates | ボットがIAテンプレートを提供

#### Step 3: Low-Fidelity Sketching (22 min) | 低忠実度スケッチ（22分）
- Sketch 3-5 key screens on paper | 紙に3-5個の主要な画面をスケッチ
- Use mobile screen templates (provided) | モバイル画面テンプレートを使用（提供）
- Focus on layout and content placement | レイアウトとコンテンツ配置に焦点を当てる
- Apply touch target sizing | タッチターゲットサイジングを適用
- Include navigation elements | ナビゲーション要素を含める

#### Step 4: Apply Mobile Patterns (15 min) | モバイルパターンを適用（15分）
- Refine sketches with mobile UI patterns | モバイルUIパターンでスケッチを洗練
- Add interaction annotations | 相互作用注釈を追加
- Show touch gestures and transitions | タッチジェスチャーと遷移を表示
- Bot validates pattern usage | ボットがパターン使用を検証

#### Step 5: Peer Review and Iteration (10 min) | ピアレビューと反復（10分）
- Exchange sketches with partner | パートナーとスケッチを交換
- Walkthrough scenario using sketches | スケッチを使用してシナリオをウォークスルー
- Get feedback on usability | ユーザビリティのフィードバックを得る
- Make refinements | 改善を行う

### Materials Needed | 必要な教材
- Paper or printable mobile screen templates | 紙または印刷可能なモバイル画面テンプレート
- Pencils, pens, markers | 鉛筆、ペン、マーカー
- Sticky notes for annotations | 注釈のための付箋
- Your Week 4 personas and scenarios | 週4のペルソナとシナリオ

### Bot Support | ボットサポート
- Mobile screen templates | モバイル画面テンプレート
- UI pattern library | UIパターンライブラリ
- Touch target sizing guide | タッチターゲットサイジングガイド
- Sketching tips and best practices | スケッチのヒントとベストプラクティス
- Design critique framework | デザイン批評フレームワーク

---

## Slide 16: Key Takeaways | 主要な要点

### Remember These Mobile Design Principles | これらのモバイルデザイン原則を覚えておく

**1. Mobile-First Is Essential** | モバイルファーストは不可欠
- Start with smallest screen, enhance for larger | 最小の画面から始め、より大きいために強化
- Constraints force prioritization | 制約が優先順位付けを強制
- Focus on core functionality | コア機能に焦点を当てる

**2. Touch Is Different from Mouse** | タッチはマウスと異なる
- Minimum 44x44px touch targets | 最小44x44pxタッチターゲット
- Design for thumb reach | 親指の届く範囲のためのデザイン
- No hover states - explicit feedback | ホバー状態なし - 明示的なフィードバック

**3. Responsive Design Adapts** | レスポンシブデザインが適応
- Fluid layouts, flexible images | 流体レイアウト、柔軟な画像
- Content priority shifts with screen size | コンテンツ優先度が画面サイズとともにシフト
- Breakpoints at key device sizes | 主要なデバイスサイズでのブレークポイント

**4. Navigation Must Be Clear** | ナビゲーションは明確である必要がある
- Choose appropriate pattern (bottom bar, hamburger, tabs) | 適切なパターンを選択（下部バー、ハンバーガー、タブ）
- Always visible or easily accessible | 常に見えるまたは簡単にアクセス可能
- Current location always clear | 現在の場所は常に明確

**5. Performance and Accessibility Matter** | パフォーマンスとアクセシビリティが重要
- Fast load times critical on mobile | モバイルでは速い読み込み時間が重要
- Design for all users, all conditions | すべてのユーザー、すべての条件のためのデザイン
- Test on real devices in real contexts | 実際のコンテキストで実際のデバイスでテスト

---

## Slide 17: Looking Ahead | 先を見る

### Next Week: Usability Testing and Evaluation | 来週：ユーザビリティテストと評価

**Testing your designs with real users**
**実際のユーザーでデザインをテスト**

### What's Coming | 来るもの
- **Usability testing methods** | ユーザビリティテスト方法: How to test interfaces with users | ユーザーとインターフェースをテストする方法
- **Think-aloud protocol** | シンクアラウドプロトコル: Getting insights during testing | テスト中に洞察を得る
- **Identifying usability issues** | ユーザビリティ問題の特定: What to look for | 何を探すか
- **Analyzing test results** | テスト結果の分析: From observations to improvements | 観察から改善へ
- **Hands-on testing** | ハンズオンテスト: Test your mobile sketches with users | ユーザーとモバイルスケッチをテスト

### Your Work This Week | 今週のあなたの作業
1. Refine your mobile interface sketches | モバイルインターフェーススケッチを洗練
2. Document design decisions and rationale | デザイン決定と根拠を文書化
3. Create complete user flow (all screens) | 完全なユーザーフローを作成（すべての画面）
4. Apply mobile design principles checklist | モバイルデザイン原則チェックリストを適用
5. Prepare sketches for usability testing next week | 来週のユーザビリティテストのためにスケッチを準備

### Questions? | 質問はありますか？

**Ready to design mobile interfaces?**
**モバイルインターフェースをデザインする準備はできていますか？**

**Grab your paper and pencils - let's sketch interfaces that work on the devices your personas actually use!**
**紙と鉛筆を手に取り - ペルソナが実際に使用するデバイスで機能するインターフェースをスケッチしましょう！**

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
