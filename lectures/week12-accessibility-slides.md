# Week 12: Accessibility and Inclusive Design
# 第12週：アクセシビリティと包括的デザイン

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Week 12! | 第12週へようこそ！

### Accessibility and Inclusive Design | アクセシビリティと包括的デザイン

**Today's Focus:**
Designing interfaces that work for everyone, including people with disabilities
すべての人、障害を持つ人々を含めて機能するインターフェースをデザインする

**Why This Matters:**
- 15% of world population has some form of disability | 世界人口の15%が何らかの障害を持つ
- Accessibility benefits everyone, not just disabled users | アクセシビリティはすべての人に利益をもたらす
- It's the right thing to do – and often the law | それは正しいこと – そしてしばしば法律

**Learning Objectives | 学習目標:**
By the end of today, you will:
- Understand accessibility principles and WCAG standards | アクセシビリティ原則とWCAG基準を理解する
- Design for diverse abilities (visual, motor, cognitive) | 多様な能力（視覚、運動、認知）のためにデザインする
- Use accessibility testing tools | アクセシビリティテストツールを使用する
- Audit and improve your prototypes | プロトタイプを監査し改善する

---

## Slide 2: What is Accessibility? | アクセシビリティとは？

### Definition | 定義

**Accessibility** means designing products, devices, services, and environments so that people with disabilities can use them.

**アクセシビリティ**とは、障害を持つ人々が使用できるように製品、デバイス、サービス、環境をデザインすることを意味します。

### The Four Principles of Accessibility | アクセシビリティの4つの原則

**POUR Framework:**

**P - Perceivable | 知覚可能**
- Information and UI components must be presentable to users in ways they can perceive
- ユーザーが知覚できる方法で情報とUIコンポーネントを提示する必要がある

**O - Operable | 操作可能**
- UI components and navigation must be operable
- UIコンポーネントとナビゲーションは操作可能でなければならない

**U - Understandable | 理解可能**
- Information and operation of UI must be understandable
- 情報とUIの操作は理解可能でなければならない

**R - Robust | 堅牢**
- Content must be robust enough to work with current and future technologies
- コンテンツは現在および将来の技術で動作するのに十分堅牢でなければならない

### Why POUR Matters | POURが重要な理由
These principles form the foundation of WCAG (Web Content Accessibility Guidelines)
これらの原則はWCAG（ウェブコンテンツアクセシビリティガイドライン）の基礎を形成します

---

## Slide 3: Types of Disabilities | 障害の種類

### Understanding Diverse Needs | 多様なニーズの理解

**1. Visual Impairments | 視覚障害**
- **Blindness:** Cannot see at all | 全く見えない
- **Low Vision:** Partial sight | 部分的な視力
- **Color Blindness:** Cannot distinguish certain colors | 特定の色を区別できない
- **Cataracts, Glaucoma:** Age-related conditions | 年齢関連の状態

**Impact on Design:**
- Need screen readers | スクリーンリーダーが必要
- Require high contrast | 高コントラストが必要
- Keyboard navigation essential | キーボードナビゲーションが不可欠

**2. Motor/Physical Disabilities | 運動/身体障害**
- **Limited fine motor control:** Difficulty with precise movements | 精密な動きが困難
- **Tremors:** Shaking or unsteady hands | 震えまたは不安定な手
- **Paralysis:** Cannot use certain limbs | 特定の肢を使用できない
- **Arthritis:** Painful joints | 痛みを伴う関節

**Impact on Design:**
- Large touch targets needed (minimum 44×44 px) | 大きなタッチターゲットが必要
- Keyboard-only navigation | キーボードのみのナビゲーション
- Voice control support | 音声制御サポート

**3. Auditory Disabilities | 聴覚障害**
- **Deafness:** Cannot hear | 聞こえない
- **Hard of hearing:** Partial hearing loss | 部分的な聴覚喪失

**Impact on Design:**
- Captions for video/audio | ビデオ/オーディオのキャプション
- Visual alerts instead of audio | オーディオの代わりに視覚的アラート
- Text alternatives for sound | 音声のテキスト代替

**4. Cognitive Disabilities | 認知障害**
- **Dyslexia:** Reading difficulties | 読書困難
- **ADHD:** Attention challenges | 注意力の課題
- **Memory impairments:** Difficulty remembering | 記憶困難
- **Autism:** Sensory sensitivities | 感覚過敏

**Impact on Design:**
- Clear, simple language | 明確でシンプルな言語
- Consistent layouts | 一貫したレイアウト
- Avoid flashing/moving content | 点滅/移動コンテンツを避ける
- Provide clear instructions | 明確な指示を提供

---

## Slide 4: WCAG 2.1 Guidelines Overview | WCAG 2.1ガイドライン概要

### Three Conformance Levels | 3つの適合レベル

**Level A (Minimum):**
- Basic accessibility features | 基本的なアクセシビリティ機能
- Must meet these to avoid major barriers | 主要な障壁を避けるためにこれらを満たす必要がある
- Example: Text alternatives for images | 例：画像のテキスト代替

**Level AA (Recommended):**
- Addresses major accessibility barriers | 主要なアクセシビリティ障壁に対処
- Legal requirement in many countries | 多くの国で法的要件
- Example: Minimum color contrast ratio of 4.5:1 | 例：4.5:1の最小色コントラスト比

**Level AAA (Highest):**
- Highest level of accessibility | 最高レベルのアクセシビリティ
- Not always achievable for all content | すべてのコンテンツで常に達成可能ではない
- Example: Color contrast ratio of 7:1 | 例：7:1の色コントラスト比

### Target for Your Projects | プロジェクトの目標
**Aim for Level AA compliance** – this is the industry standard and legal requirement in many regions
**レベルAA準拠を目指す** - これは業界標準であり、多くの地域で法的要件です

---

## Slide 5: Visual Accessibility Principles | 視覚アクセシビリティ原則

### 1. Color Contrast | 色のコントラスト

**WCAG Requirements:**
- **Normal text:** Minimum 4.5:1 contrast ratio (AA) | 通常のテキスト：最小4.5:1のコントラスト比
- **Large text (18pt+):** Minimum 3:1 contrast ratio (AA) | 大きなテキスト（18pt+）：最小3:1のコントラスト比
- **UI components:** Minimum 3:1 contrast ratio | UIコンポーネント：最小3:1のコントラスト比

**Why This Matters:**
- Low contrast is hard to read for everyone | 低コントラストはすべての人にとって読みにくい
- Essential for users with low vision or color blindness | 弱視または色覚異常のユーザーにとって不可欠
- Improves readability in bright sunlight | 明るい日光での読みやすさを改善

**Common Mistakes:**
- ❌ Light gray text (#999) on white background (#FFF) = 2.8:1 (FAILS)
- ❌ Yellow text on white background
- ✅ Dark gray text (#555) on white background = 8.6:1 (PASSES)

**Testing Tools:**
- WebAIM Contrast Checker
- Chrome DevTools Accessibility Panel
- Figma Contrast Plugin

### 2. Don't Rely on Color Alone | 色だけに頼らない

**Bad Example:**
"Fields in red are required"
Only users who can see red will know which fields are required
赤で表示されたフィールドのみが必須と知る

**Good Example:**
"Required fields are marked with a red asterisk (*)"
Color + symbol + text label
色 + シンボル + テキストラベル

**Use Multiple Indicators:**
- Color + Icons
- Color + Text labels
- Color + Patterns/Textures

### 3. Text Alternatives for Images | 画像のテキスト代替

**Alt Text Guidelines:**
- Describe the content and function | コンテンツと機能を説明
- Be concise but descriptive | 簡潔で説明的
- Don't start with "image of..." | 「...の画像」で始めない
- Decorative images: Use empty alt="" | 装飾的な画像：空のalt=""を使用

**Examples:**
- ❌ Bad: "logo"
- ✅ Good: "Acme Corporation logo"
- ❌ Bad: "Image of a person clicking a button"
- ✅ Good: "Click the submit button to send your form"

---

## Slide 6: Motor Accessibility Principles | 運動アクセシビリティ原則

### 1. Touch Target Size | タッチターゲットサイズ

**Minimum Size Requirements:**
- **WCAG 2.1:** Minimum 44×44 pixels | 最小44×44ピクセル
- **Apple iOS:** Minimum 44×44 points | 最小44×44ポイント
- **Android Material:** Minimum 48×48 dp | 最小48×48 dp

**Why This Matters:**
- Easier to tap for users with tremors or limited dexterity | 震えまたは限られた器用さを持つユーザーにとってタップしやすい
- Reduces accidental taps | 誤ったタップを減らす
- Better for everyone, especially on mobile | すべての人、特にモバイルでより良い

**Common Mistakes:**
- ❌ Small icons (24×24 px) without padding
- ❌ Text links too close together
- ✅ Adequately sized buttons with spacing

### 2. Keyboard Navigation | キーボードナビゲーション

**All Interactive Elements Must Be:**
- Keyboard accessible | キーボードアクセス可能
- Have visible focus indicators | 可視フォーカスインジケーターを持つ
- Follow logical tab order | 論理的なタブ順序に従う

**Keyboard Shortcuts:**
- **Tab:** Move forward through interactive elements | インタラクティブ要素を前方に移動
- **Shift + Tab:** Move backward | 後方に移動
- **Enter/Space:** Activate buttons/links | ボタン/リンクをアクティブ化
- **Arrow keys:** Navigate within components (menus, sliders) | コンポーネント内をナビゲート

**Focus Indicators:**
- Must be clearly visible | 明確に見える必要がある
- Default browser focus outline is often too subtle | デフォルトのブラウザフォーカスアウトラインはしばしば控えめすぎる
- Design custom focus states with high contrast | 高コントラストのカスタムフォーカス状態をデザイン

**Test Your Design:**
Unplug your mouse and try to use your interface with keyboard only
マウスを外して、キーボードのみでインターフェースを使用してみてください

### 3. Avoid Time Limits | 時間制限を避ける

**Problem:**
Timed interactions exclude users who need more time
タイムインタラクションは時間が必要なユーザーを排除する

**Solutions:**
- Allow users to extend time limits | ユーザーに時間制限の延長を許可
- Provide option to turn off time limits | 時間制限をオフにするオプションを提供
- Don't use automatic timeouts for critical tasks | 重要なタスクに自動タイムアウトを使用しない

---

## Slide 7: Cognitive Accessibility Principles | 認知アクセシビリティ原則

### 1. Use Clear, Simple Language | 明確でシンプルな言語を使用

**Guidelines:**
- Short sentences and paragraphs | 短い文と段落
- Common words over jargon | 専門用語よりも一般的な言葉
- Active voice over passive | 受動態よりも能動態
- Define technical terms | 技術用語を定義

**Example:**
- ❌ Complex: "Utilize the search functionality to locate desired content"
- ✅ Simple: "Use search to find what you need"

### 2. Consistent Layout and Navigation | 一貫したレイアウトとナビゲーション

**Consistency Helps:**
- Users learn your interface faster | ユーザーがインターフェースをより早く学習
- Reduces cognitive load | 認知負荷を減らす
- Prevents confusion | 混乱を防ぐ

**Apply Consistently:**
- Navigation placement | ナビゲーションの配置
- Button styles and positions | ボタンのスタイルと位置
- Color meanings | 色の意味
- Icon usage | アイコンの使用

### 3. Avoid Flashing and Moving Content | 点滅と移動コンテンツを避ける

**Danger:**
- Can trigger seizures in people with photosensitive epilepsy | 光感受性てんかんの人々の発作を引き起こす可能性
- Distracting for users with ADHD | ADHDのユーザーにとって気が散る

**WCAG Guidelines:**
- No more than 3 flashes per second | 1秒あたり3回以下の点滅
- Provide option to pause/stop animations | アニメーションを一時停止/停止するオプションを提供
- Don't auto-play videos with sound | 音声付きビデオを自動再生しない

### 4. Provide Clear Error Messages and Instructions | 明確なエラーメッセージと指示を提供

**Good Error Messages:**
- Explain what went wrong | 何が間違っていたかを説明
- Tell user how to fix it | 修正方法をユーザーに伝える
- Use clear, non-technical language | 明確で非技術的な言語を使用

**Example:**
- ❌ Bad: "Error 404: Invalid input"
- ✅ Good: "Email address is missing. Please enter your email address in the format: name@example.com"

---

## Slide 8: Assistive Technologies | 支援技術

### Screen Readers | スクリーンリーダー

**What They Do:**
Read on-screen content aloud to users who are blind or have low vision
盲目または弱視のユーザーに画面上のコンテンツを音声で読み上げる

**Popular Screen Readers:**
- **JAWS** (Windows) - Most popular paid option
- **NVDA** (Windows) - Free and open source
- **VoiceOver** (macOS/iOS) - Built into Apple devices
- **TalkBack** (Android) - Built into Android devices

**Design Implications:**
- Use semantic HTML (headings, lists, buttons) | セマンティックHTMLを使用
- Provide text alternatives for images | 画像のテキスト代替を提供
- Ensure logical reading order | 論理的な読み取り順序を確保
- Use ARIA labels when needed | 必要に応じてARIAラベルを使用

### Screen Magnifiers | 画面拡大鏡

**What They Do:**
Enlarge portions of the screen for users with low vision
弱視のユーザーのために画面の一部を拡大する

**Examples:**
- **ZoomText** (Windows)
- **Zoom** (macOS built-in)
- **Browser zoom** (All browsers)

**Design Implications:**
- Design should work at 200% zoom | デザインは200%ズームで動作する必要がある
- Text should reflow, not get cut off | テキストは再フローし、切り取られるべきではない
- Don't use fixed pixel sizes | 固定ピクセルサイズを使用しない

### Voice Control | 音声制御

**What It Does:**
Allows users to control devices with voice commands
ユーザーが音声コマンドでデバイスを制御できるようにする

**Examples:**
- **Dragon NaturallySpeaking** (Windows)
- **Voice Control** (iOS/macOS)
- **Voice Access** (Android)

**Design Implications:**
- All interactive elements need visible labels | すべてのインタラクティブ要素には可視ラベルが必要
- Icon-only buttons are problematic | アイコンのみのボタンは問題がある
- Ensure keyboard accessibility | キーボードアクセシビリティを確保

### Switch Controls | スイッチ制御

**What They Do:**
Allow users with severe motor disabilities to control devices using switches
重度の運動障害を持つユーザーがスイッチを使用してデバイスを制御できるようにする

**Design Implications:**
- Sequential navigation must work perfectly | 順次ナビゲーションは完璧に動作する必要がある
- Clear focus indicators essential | 明確なフォーカスインジケーターが不可欠
- Avoid time-based interactions | 時間ベースのインタラクションを避ける

---

## Slide 9: Accessibility Testing Tools | アクセシビリティテストツール

### Automated Testing Tools | 自動テストツール

**1. WAVE (Web Accessibility Evaluation Tool)**
- Browser extension | ブラウザ拡張機能
- Highlights accessibility issues visually | アクセシビリティ問題を視覚的に強調
- Free to use | 無料で使用可能
- **URL:** wave.webaim.org

**2. axe DevTools**
- Browser extension for Chrome/Firefox | Chrome/Firefox用ブラウザ拡張機能
- Detailed issue reports | 詳細な問題レポート
- Provides fix suggestions | 修正提案を提供
- **Free version available**

**3. Lighthouse (Chrome DevTools)**
- Built into Chrome browser | Chromeブラウザに組み込み
- Accessibility audit as part of performance testing | パフォーマンステストの一部としてのアクセシビリティ監査
- Generates scores and recommendations | スコアと推奨事項を生成
- **Free and built-in**

**4. Color Contrast Analyzers | 色コントラストアナライザー**
- **WebAIM Contrast Checker:** webaim.org/resources/contrastchecker
- **Figma Plugin:** Stark or A11y - Color Contrast Checker
- **Adobe XD Plugin:** Contrast Checker

### Manual Testing Methods | 手動テスト方法

**1. Keyboard-Only Navigation**
- Unplug your mouse | マウスを外す
- Navigate entire interface with Tab, Shift+Tab, Enter, Arrow keys | Tab、Shift+Tab、Enter、矢印キーで全体のインターフェースをナビゲート
- Check: Can you reach everything? Are focus indicators visible? | すべてに到達できますか？フォーカスインジケーターは見えますか？

**2. Screen Reader Testing**
- **macOS:** Enable VoiceOver (Cmd + F5)
- **Windows:** Download NVDA (free)
- **iOS:** Enable VoiceOver in Settings
- **Android:** Enable TalkBack in Settings
- Listen to your interface – does it make sense? | インターフェースを聞く – 意味がありますか？

**3. Zoom Testing**
- Zoom browser to 200% | ブラウザを200%にズーム
- Check: Does content reflow? Is anything cut off? | コンテンツは再フローしますか？何かが切り取られていますか？
- Can you still use all features? | すべての機能をまだ使用できますか？

**4. Color Blindness Simulation**
- Use browser extensions like "Colorblinding" | 「Colorblinding」のようなブラウザ拡張機能を使用
- Check if information is conveyed without color alone | 色だけなしで情報が伝えられるかを確認

---

## Slide 10: Common Accessibility Issues and Fixes | 一般的なアクセシビリティ問題と修正

### Issue 1: Low Color Contrast | 問題1：低い色コントラスト

**Problem:**
Light gray text (#999999) on white background (#FFFFFF)
Contrast ratio: 2.85:1 – FAILS WCAG AA (needs 4.5:1)

**Fix:**
Use darker gray (#595959) on white background
Contrast ratio: 7.5:1 – PASSES WCAG AA

**How to Test:**
Use WebAIM Contrast Checker or browser DevTools

### Issue 2: Missing Alt Text | 問題2：altテキストの欠落

**Problem:**
`<img src="logo.png">` – Screen readers can't describe the image

**Fix:**
`<img src="logo.png" alt="Acme Corporation logo">`

**For Decorative Images:**
`<img src="decorative-line.png" alt="">` – Empty alt tells screen readers to skip

### Issue 3: Small Touch Targets | 問題3：小さなタッチターゲット

**Problem:**
Button is 32×32 pixels – too small for users with motor disabilities

**Fix:**
Increase to minimum 44×44 pixels with adequate spacing

### Issue 4: No Keyboard Access | 問題4：キーボードアクセスなし

**Problem:**
Custom dropdown built with `<div>` elements – keyboard can't access

**Fix:**
Use semantic HTML `<select>` or add proper keyboard event handlers and ARIA

### Issue 5: Poor Focus Indicators | 問題5：不十分なフォーカスインジケーター

**Problem:**
Default browser focus outline removed with CSS: `outline: none`

**Fix:**
Provide custom focus state with high contrast border or background

### Issue 6: Auto-Playing Content | 問題6：自動再生コンテンツ

**Problem:**
Video auto-plays with sound – distracting and inaccessible

**Fix:**
Don't auto-play, or provide pause/stop controls prominently

---

## Slide 11: ARIA (Accessible Rich Internet Applications) | ARIA概要

### What is ARIA? | ARIAとは？

**ARIA** adds accessibility information to HTML elements when semantic HTML isn't enough.
**ARIA**は、セマンティックHTMLが十分でない場合にHTML要素にアクセシビリティ情報を追加します。

### When to Use ARIA | ARIAを使用する場合

**First Rule of ARIA:**
"Don't use ARIA if you can use semantic HTML instead"
「代わりにセマンティックHTMLを使用できる場合は、ARIAを使用しないでください」

**Use ARIA When:**
- Building custom widgets (tabs, modals, carousels) | カスタムウィジェットを構築する場合
- Semantic HTML doesn't exist for your use case | ユースケースにセマンティックHTMLが存在しない
- Adding dynamic content that screen readers need to know about | スクリーンリーダーが知る必要がある動的コンテンツを追加する

### Common ARIA Attributes | 一般的なARIA属性

**aria-label:**
Provides accessible name for elements
要素にアクセス可能な名前を提供
```html
<button aria-label="Close dialog">X</button>
```

**aria-labelledby:**
References another element for the label
ラベルの別の要素を参照
```html
<h2 id="dialog-title">Confirm Delete</h2>
<div role="dialog" aria-labelledby="dialog-title">...</div>
```

**aria-describedby:**
Provides additional description
追加の説明を提供
```html
<input aria-describedby="password-hint">
<span id="password-hint">Must be 8+ characters</span>
```

**aria-live:**
Announces dynamic content changes
動的コンテンツの変更をアナウンス
```html
<div aria-live="polite">3 items in cart</div>
```

**aria-hidden:**
Hides decorative content from screen readers
装飾的なコンテンツをスクリーンリーダーから隠す
```html
<span aria-hidden="true">⭐</span>
```

---

## Slide 12: Inclusive Design vs. Accessibility | 包括的デザイン vs アクセシビリティ

### What's the Difference? | 違いは何ですか？

**Accessibility:**
- Focuses on people with disabilities | 障害を持つ人々に焦点を当てる
- Compliance with standards (WCAG) | 基準への準拠（WCAG）
- Technical requirements | 技術的要件

**Inclusive Design:**
- Considers full range of human diversity | 人間の多様性の全範囲を考慮
- Proactive approach from the start | 最初から積極的なアプローチ
- Benefits everyone, not just disabled users | 障害のあるユーザーだけでなくすべての人に利益をもたらす

### Examples of Inclusive Design Benefiting Everyone | すべての人に利益をもたらす包括的デザインの例

**1. Curb Cuts (Sidewalk Ramps) | 縁石カット（歩道スロープ）**
- **Originally for:** Wheelchair users | 車椅子ユーザー
- **Also helps:** Parents with strollers, delivery workers, travelers with luggage | ベビーカーの親、配達作業員、荷物を持つ旅行者

**2. Closed Captions | クローズドキャプション**
- **Originally for:** Deaf and hard-of-hearing users | 聴覚障害者
- **Also helps:** People in noisy environments, language learners, people who prefer reading | 騒がしい環境の人々、言語学習者、読書を好む人々

**3. Voice Control | 音声制御**
- **Originally for:** Users with motor disabilities | 運動障害のあるユーザー
- **Also helps:** Drivers, people cooking, multitaskers | ドライバー、料理をしている人、マルチタスカー

**4. Dark Mode | ダークモード**
- **Originally for:** Users with light sensitivity | 光過敏のユーザー
- **Also helps:** Everyone using devices at night | 夜にデバイスを使用するすべての人

**5. Large Touch Targets | 大きなタッチターゲット**
- **Originally for:** Users with motor disabilities | 運動障害のあるユーザー
- **Also helps:** Everyone on mobile devices, people in motion | モバイルデバイスのすべての人、動いている人

---

## Slide 13: Accessibility in Smart Devices and AI | スマートデバイスとAIにおけるアクセシビリティ

### Mobile Accessibility | モバイルアクセシビリティ

**Built-in Accessibility Features:**

**iOS:**
- VoiceOver (screen reader) | VoiceOver（スクリーンリーダー）
- Voice Control | 音声制御
- Zoom and Magnifier | ズームと拡大鏡
- Display Accommodations (color filters, reduce motion) | ディスプレイ調整（カラーフィルター、モーション削減）

**Android:**
- TalkBack (screen reader) | TalkBack（スクリーンリーダー）
- Voice Access | 音声アクセス
- Magnification | 拡大
- Color correction and inversion | 色補正と反転

**Design Considerations for Mobile:**
- Touch targets minimum 44×44 px | タッチターゲット最小44×44 px
- Support both portrait and landscape | 縦向きと横向きの両方をサポート
- Don't rely on gestures alone (provide alternatives) | ジェスチャーだけに頼らない（代替を提供）
- Test with device accessibility features enabled | デバイスのアクセシビリティ機能を有効にしてテスト

### Chatbot and Conversational UI Accessibility | チャットボットと会話UIアクセシビリティ

**Challenges:**
- Conversation flows may not work for screen reader users | 会話フローはスクリーンリーダーユーザーには機能しない可能性
- Typing can be difficult for users with motor disabilities | 運動障害のあるユーザーにとってタイピングが困難な場合
- Complex conversations hard for cognitive disabilities | 認知障害にとって複雑な会話が困難

**Solutions:**
- **Provide multiple input methods:** Text, voice, buttons/quick replies | 複数の入力方法を提供：テキスト、音声、ボタン/クイック返信
- **Use clear, simple language:** Avoid jargon | 明確でシンプルな言語を使用：専門用語を避ける
- **Offer conversation history:** Let users review previous messages | 会話履歴を提供：ユーザーが以前のメッセージをレビューできるようにする
- **Support keyboard navigation:** Don't require mouse for bot interactions | キーボードナビゲーションをサポート：ボットインタラクションにマウスを要求しない
- **Provide easy error recovery:** Allow users to go back or restart | 簡単なエラー回復を提供：ユーザーが戻ったり再起動したりできるようにする

---

## Slide 14: Legal and Ethical Considerations | 法的および倫理的考慮事項

### Laws and Regulations | 法律と規制

**United States:**
- **ADA (Americans with Disabilities Act):** Requires accessible websites and apps | アクセス可能なウェブサイトとアプリを要求
- **Section 508:** Federal government procurement requires accessibility | 連邦政府の調達はアクセシビリティを要求

**European Union:**
- **European Accessibility Act:** Requires accessibility for digital products and services | デジタル製品とサービスのアクセシビリティを要求
- **EN 301 549:** European standard based on WCAG 2.1 | WCAG 2.1に基づくヨーロッパ基準

**Japan:**
- **JIS X 8341-3:** Japanese Industrial Standard for web accessibility | ウェブアクセシビリティの日本産業規格
- Based on WCAG 2.0 | WCAG 2.0に基づく

**Canada:**
- **AODA (Accessibility for Ontarians with Disabilities Act)** | オンタリオ州障害者アクセシビリティ法

### The Business Case for Accessibility | アクセシビリティのビジネスケース

**Larger Market:**
- 15% of world population = 1+ billion people with disabilities | 世界人口の15% = 10億人以上の障害者
- Growing aging population with accessibility needs | アクセシビリティニーズを持つ高齢化人口の増加

**Legal Protection:**
- Avoid lawsuits and legal penalties | 訴訟と法的罰則を避ける
- Compliance with regulations | 規制への準拠

**Better SEO:**
- Accessible sites rank better in search engines | アクセス可能なサイトは検索エンジンでより良くランク付けされる
- Semantic HTML helps search engines understand content | セマンティックHTMLは検索エンジンがコンテンツを理解するのを助ける

**Improved UX for Everyone:**
- Clear navigation benefits all users | 明確なナビゲーションはすべてのユーザーに利益をもたらす
- Simple language improves comprehension | シンプルな言語は理解を改善

### The Ethical Imperative | 倫理的義務

**It's Simply the Right Thing to Do:**
- Everyone deserves equal access to information and services | すべての人は情報とサービスへの平等なアクセスに値する
- Digital exclusion is a form of discrimination | デジタル排除は差別の一形態
- As designers, we have power and responsibility | デザイナーとして、私たちは力と責任を持つ

---

## Slide 15: Today's Activity: Accessibility Audit | 今日のアクティビティ：アクセシビリティ監査

### Part 1: Automated Testing (20 minutes) | パート1：自動テスト（20分）

**What You'll Do:**
1. **Install testing tools** | テストツールをインストール
   - WAVE browser extension
   - axe DevTools extension
   - OR use Lighthouse in Chrome DevTools

2. **Run automated tests on your prototype** | プロトタイプで自動テストを実行
   - Export prototype to HTML or use live link
   - Run WAVE, axe, or Lighthouse
   - Document all issues found

3. **Check color contrast** | 色コントラストをチェック
   - Use WebAIM Contrast Checker
   - Test all text/background combinations
   - Ensure 4.5:1 for normal text, 3:1 for large text

### Part 2: Manual Testing (25 minutes) | パート2：手動テスト（25分）

**What You'll Do:**
1. **Keyboard-only navigation test** | キーボードのみのナビゲーションテスト
   - Navigate your entire interface with keyboard
   - Can you reach all interactive elements?
   - Are focus indicators visible?

2. **Screen reader test** | スクリーンリーダーテスト
   - Enable VoiceOver (Mac) or NVDA (Windows)
   - Navigate your interface
   - Does it make sense when read aloud?

3. **Zoom test** | ズームテスト
   - Zoom browser to 200%
   - Does content reflow properly?
   - Is anything cut off or broken?

4. **Color blindness simulation** | 色覚異常シミュレーション
   - Use browser extension to simulate color blindness
   - Is information still clear without color?

### Part 3: Document and Fix (15 minutes) | パート3：文書化と修正（15分）

**Create Accessibility Audit Report:**
- List all issues found (automated + manual)
- Prioritize by severity (Critical, Major, Minor)
- For each issue, note:
  - What the problem is
  - WCAG guideline violated
  - How to fix it
  - Priority level

**Implement High-Priority Fixes:**
- Fix critical issues immediately if possible
- Document what you fixed
- Re-test to confirm fixes work

**Deliverable:**
Accessibility audit report + improved prototype with fixes implemented
アクセシビリティ監査レポート + 修正を実装した改善されたプロトタイプ

---

## Slide 16: Accessibility Resources and Tools | アクセシビリティリソースとツール

### Official Guidelines and Standards | 公式ガイドラインと基準

**WCAG 2.1:**
- **URL:** w3.org/WAI/WCAG21/quickref
- Comprehensive guidelines with success criteria
- Filterable by level (A, AA, AAA)

**WebAIM:**
- **URL:** webaim.org
- Tutorials, articles, and resources
- Excellent contrast checker

**A11Y Project:**
- **URL:** a11yproject.com
- Community-driven accessibility resources
- Checklist and pattern library

### Testing Tools | テストツール

**Automated Tools:**
- WAVE: wave.webaim.org
- axe DevTools: deque.com/axe
- Lighthouse: Built into Chrome DevTools
- Pa11y: Automated accessibility testing

**Browser Extensions:**
- WAVE Extension (Chrome/Firefox)
- axe DevTools (Chrome/Firefox)
- Accessibility Insights (Chrome/Edge)
- Colorblinding (Chrome)

**Design Tools Plugins:**
- **Figma:** Stark, A11y - Color Contrast Checker, Able
- **Adobe XD:** Stark, Contrast Checker

### Learning Resources | 学習リソース

**Online Courses:**
- Deque University: dequeuniversity.com
- WebAIM Training: webaim.org/training
- W3C WAI Tutorials: w3.org/WAI/tutorials

**Books:**
- "Accessibility for Everyone" by Laura Kalbag
- "Inclusive Design Patterns" by Heydon Pickering
- "Mismatch" by Kat Holmes

---

## Slide 17: Key Takeaways | 重要なポイント

### Remember These Essential Points | これらの重要なポイントを覚えてください

**1. Accessibility Benefits Everyone | アクセシビリティはすべての人に利益をもたらす**
- Not just for people with disabilities
- Improves usability for all users
- Examples: captions, voice control, large touch targets

**2. POUR Principles are Foundation | POUR原則は基礎**
- **P**erceivable: Can users perceive the content?
- **O**perable: Can users operate the interface?
- **U**nderstandable: Can users understand the content and interface?
- **R**obust: Does it work with assistive technologies?

**3. Aim for WCAG 2.1 Level AA | WCAG 2.1レベルAAを目指す**
- Industry standard and legal requirement
- Key requirements:
  - 4.5:1 color contrast for normal text
  - 44×44 px minimum touch targets
  - Keyboard accessibility
  - Text alternatives for images

**4. Test with Real Users and Tools | 実際のユーザーとツールでテスト**
- Use automated tools (WAVE, axe, Lighthouse)
- Perform manual testing (keyboard, screen reader, zoom)
- Best: Test with actual users with disabilities

**5. Design Inclusively from the Start | 最初から包括的にデザイン**
- Don't treat accessibility as an afterthought
- Integrate it into design process from beginning
- Easier and cheaper than retrofitting

**6. It's the Right Thing to Do | それは正しいことです**
- Equal access is a human right
- Digital exclusion is discrimination
- We have power and responsibility as designers

### Next Steps | 次のステップ

**For Your Final Projects:**
- Conduct accessibility audit
- Implement high-priority fixes
- Document accessibility features
- Test with accessibility tools

**Week 13 Preview:**
Emerging Technologies and Future Interactions (AR/VR, voice, gestures, IoT)
新興技術と未来のインタラクション（AR/VR、音声、ジェスチャー、IoT）

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
