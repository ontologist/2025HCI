# Week 12 Lecture: Instructor Notes and Speaking Points
# 第12週講義：インストラクターノートとスピーキングポイント

**Course:** HCI-101 - Introduction to Human-Computer Interaction
**コース：** HCI-101 - ヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Duration:** 15-20 minutes
**Target Audience:** Undergraduate students, no programming experience required

---

## Pre-Lecture Setup | 講義前セットアップ

### Technical Preparation | 技術的準備
- [ ] Install accessibility testing tools (WAVE, axe DevTools) on demo computer
- [ ] Test screen reader functionality (VoiceOver/NVDA)
- [ ] Prepare accessibility examples (good vs. bad)
- [ ] Have color contrast checker ready
- [ ] Test presentation slides on classroom display
- [ ] Ensure internet connectivity for tool demonstrations

### Materials to Distribute | 配布する教材
- [ ] Accessibility audit checklist
- [ ] WCAG 2.1 quick reference guide
- [ ] Tool installation instructions (WAVE, axe, Lighthouse)
- [ ] Color contrast requirements cheat sheet
- [ ] Touch target size guidelines
- [ ] AI transparency log template

### Classroom Setup | 教室セットアップ
- [ ] Ensure students can access their prototypes
- [ ] Prepare for bilingual presentation (English/Japanese)
- [ ] Set up for hands-on testing activity
- [ ] Have backup materials for students without devices
- [ ] Testing tools ready for installation

---

## Slide-by-Slide Speaking Points | スライド別スピーキングポイント

### Slide 1: Welcome to Week 12! | 第12週へようこそ！

#### Opening (2 minutes) | オープニング（2分）

**English Speaking Points:**
- "Welcome to Week 12! Today we're talking about accessibility and inclusive design - one of the most important topics in HCI."
- "Here's a surprising fact: 15% of the world's population - over 1 billion people - have some form of disability. That's a huge user base we need to design for."
- "But here's the thing: designing for accessibility doesn't just help people with disabilities. It makes your interfaces better for everyone."
- "By the end of today, you'll know how to audit your designs for accessibility and make them work for all users."

**Japanese Speaking Points:**
- "第12週へようこそ！今日はアクセシビリティと包括的デザインについて話します - HCIで最も重要なトピックの1つです。"
- "驚くべき事実があります：世界人口の15% - 10億人以上 - が何らかの障害を持っています。それは私たちがデザインする必要がある巨大なユーザーベースです。"
- "しかしここで重要なことは：アクセシビリティのためのデザインは障害を持つ人々を助けるだけではありません。すべての人のためにインターフェースを改善します。"
- "今日の終わりまでに、アクセシビリティのためにデザインを監査し、すべてのユーザーに機能させる方法を知るでしょう。"

**Key Points to Emphasize:**
- Accessibility is not optional
- Benefits everyone, not just disabled users
- Legal and ethical imperative
- Practical skills they'll use today

---

### Slide 2: What is Accessibility? | アクセシビリティとは？

#### Core Concepts (3 minutes) | コアコンセプト（3分）

**English Speaking Points:**
- "Accessibility means designing so that people with disabilities can use your product. Simple as that."
- "The foundation is the POUR framework: Perceivable, Operable, Understandable, Robust."
- "Perceivable: Can users perceive the information? If you're blind, you can't see images - you need text alternatives."
- "Operable: Can users operate the interface? If you can't use a mouse, you need keyboard navigation."
- "Understandable: Can users understand the content and how to use it? Clear language, consistent design."
- "Robust: Does it work with assistive technologies like screen readers? Use semantic HTML, proper structure."
- "These four principles underpin all of WCAG - the Web Content Accessibility Guidelines."

**Japanese Speaking Points:**
- "アクセシビリティとは、障害を持つ人々があなたの製品を使用できるようにデザインすることを意味します。それだけです。"
- "基礎はPOURフレームワークです：知覚可能、操作可能、理解可能、堅牢。"
- "知覚可能：ユーザーは情報を知覚できますか？盲目の場合、画像を見ることができません - テキスト代替が必要です。"
- "操作可能：ユーザーはインターフェースを操作できますか？マウスを使用できない場合、キーボードナビゲーションが必要です。"
- "理解可能：ユーザーはコンテンツとその使用方法を理解できますか？明確な言語、一貫したデザイン。"
- "堅牢：スクリーンリーダーのような支援技術で動作しますか？セマンティックHTML、適切な構造を使用します。"
- "これら4つの原則がWCAG - ウェブコンテンツアクセシビリティガイドライン - のすべてを支えています。"

**Interactive Elements:**
- Ask: "How many of you have ever used captions on a video - maybe in a noisy place?"
- Point out: "That's an accessibility feature designed for deaf users that benefits everyone."

---

### Slide 3: Types of Disabilities | 障害の種類

#### Understanding Diversity (4 minutes) | 多様性の理解（4分）

**English Speaking Points:**
- "Let's talk about the four main categories of disabilities and what they mean for design."
- "Visual impairments: blindness, low vision, color blindness. These users need screen readers, high contrast, and keyboard navigation."
- "Motor/physical disabilities: limited fine motor control, tremors, paralysis. They need large touch targets - minimum 44×44 pixels - and keyboard-only access."
- "Fun fact: Apple's iOS requires 44 points, Android requires 48dp. Why? Because smaller targets are hard to hit, especially if your hands shake or you have arthritis."
- "Auditory disabilities: deafness, hard of hearing. They need captions for videos and visual alerts instead of beeps."
- "Cognitive disabilities: dyslexia, ADHD, memory impairments, autism. They need clear language, consistent layouts, and no flashing content."
- "Important: Many people have multiple disabilities, and disabilities can be temporary or situational."

**Japanese Speaking Points:**
- "障害の4つの主要なカテゴリーとそれらがデザインにとって何を意味するかについて話しましょう。"
- "視覚障害：盲目、弱視、色覚異常。これらのユーザーはスクリーンリーダー、高コントラスト、キーボードナビゲーションが必要です。"
- "運動/身体障害：限られた細かい運動制御、震え、麻痺。彼らは大きなタッチターゲットが必要です - 最小44×44ピクセル - そしてキーボードのみのアクセス。"
- "楽しい事実：AppleのiOSは44ポイントを要求し、Androidは48dpを要求します。なぜですか？小さなターゲットは特に手が震えたり関節炎がある場合、ヒットするのが困難だからです。"
- "聴覚障害：聴覚障害、難聴。彼らはビデオのキャプションとビープ音の代わりに視覚的アラートが必要です。"
- "認知障害：ディスレクシア、ADHD、記憶障害、自閉症。彼らは明確な言語、一貫したレイアウト、点滅コンテンツなしが必要です。"
- "重要：多くの人々は複数の障害を持っており、障害は一時的または状況的である可能性があります。"

**Real-World Examples:**
- "Broken arm? That's a temporary motor disability. Bright sunlight? That's situational low vision."
- "Good accessible design helps in all these situations."

---

### Slide 4: WCAG 2.1 Guidelines Overview | WCAG 2.1ガイドライン概要

#### Standards and Compliance (3 minutes) | 基準とコンプライアンス（3分）

**English Speaking Points:**
- "WCAG has three levels: A, AA, and AAA. Think of them as good, better, best."
- "Level A is the bare minimum. If you don't meet this, you have major accessibility barriers."
- "Level AA is what you should aim for. It's the legal requirement in many countries and the industry standard."
- "Level AAA is the highest level. It's not always achievable for all content, but it's the gold standard."
- "For your projects, aim for AA. That means: 4.5:1 color contrast for normal text, 44×44 pixel touch targets, keyboard accessibility, text alternatives for images."
- "Meeting AA isn't just about compliance - it's about making your designs usable for millions of people."

**Japanese Speaking Points:**
- "WCAGには3つのレベルがあります：A、AA、AAA。良い、より良い、最高と考えてください。"
- "レベルAは最低限です。これを満たさない場合、主要なアクセシビリティ障壁があります。"
- "レベルAAは目指すべきものです。それは多くの国で法的要件であり、業界標準です。"
- "レベルAAAは最高レベルです。すべてのコンテンツで常に達成可能ではありませんが、ゴールドスタンダードです。"
- "プロジェクトについては、AAを目指してください。それは：通常のテキストの4.5:1の色コントラスト、44×44ピクセルのタッチターゲット、キーボードアクセシビリティ、画像のテキスト代替を意味します。"
- "AAを満たすことはコンプライアンスだけではありません - 何百万人もの人々のためにデザインを使用可能にすることです。"

---

### Slide 5: Visual Accessibility Principles | 視覚アクセシビリティ原則

#### Color and Contrast (4 minutes) | 色とコントラスト（4分）

**English Speaking Points:**
- "Let's talk about color contrast. This is one of the most common accessibility failures."
- "WCAG requires 4.5:1 contrast ratio for normal text. What does that mean? It's a mathematical ratio between the lightest and darkest colors."
- "Light gray on white - like #999 on #FFF - has a ratio of about 2.8:1. That fails. It's hard to read for everyone, not just people with low vision."
- "Dark gray on white - like #555 on #FFF - has a ratio of about 8.6:1. That passes. See how much clearer it is?"
- "Pro tip: Use tools like WebAIM Contrast Checker or the Figma Stark plugin. Don't guess - test."
- "Second principle: Don't rely on color alone. If you say 'required fields are in red,' what about users who can't see red?"
- "Better: 'Required fields are marked with a red asterisk.' Now you have color + symbol + label."
- "Third: Text alternatives for images. Every image needs alt text describing its content and function. Screen readers read this aloud."

**Japanese Speaking Points:**
- "色のコントラストについて話しましょう。これは最も一般的なアクセシビリティの失敗の1つです。"
- "WCAGは通常のテキストに4.5:1のコントラスト比を要求します。それは何を意味しますか？最も明るい色と最も暗い色の間の数学的比率です。"
- "白に薄いグレー - #FFFに#999のような - は約2.8:1の比率です。それは失敗します。弱視の人々だけでなく、すべての人にとって読みにくいです。"
- "白に濃いグレー - #FFFに#555のような - は約8.6:1の比率です。それは合格します。どれだけ明確かを見てください。"
- "プロのヒント：WebAIMコントラストチェッカーまたはFigma Starkプラグインのようなツールを使用してください。推測しないでください - テストしてください。"
- "2番目の原則：色だけに頼らないでください。「必須フィールドは赤です」と言った場合、赤を見ることができないユーザーについてはどうですか？"
- "より良い：「必須フィールドは赤いアスタリスク付きでマークされています。」今、色 + シンボル + ラベルがあります。"
- "3番目：画像のテキスト代替。すべての画像は、そのコンテンツと機能を説明するaltテキストが必要です。スクリーンリーダーはこれを音声で読み上げます。"

**Demonstration:**
- Show examples of good vs. bad color contrast
- Demonstrate contrast checker tool
- Show how screen reader reads alt text

---

### Slide 6: Motor Accessibility Principles | 運動アクセシビリティ原則

#### Touch and Keyboard (3 minutes) | タッチとキーボード（3分）

**English Speaking Points:**
- "Motor accessibility is about making interfaces operable for people who can't use a mouse or have difficulty with precise movements."
- "Rule #1: Minimum 44×44 pixel touch targets. Why? Try tapping a 20-pixel button with a shaky hand - it's impossible."
- "Rule #2: Everything must work with keyboard only. Unplug your mouse and try using your prototype. Can you reach everything? If not, it's not accessible."
- "Tab key moves forward, Shift+Tab moves backward, Enter/Space activates. Arrow keys navigate within components."
- "Focus indicators are critical. That blue outline around the focused element? Don't remove it! Or if you do, replace it with something even more visible."
- "Rule #3: No time limits, or allow users to extend them. Some users need more time to read, process, or interact."

**Japanese Speaking Points:**
- "運動アクセシビリティは、マウスを使用できない、または精密な動きが困難な人々のためにインターフェースを操作可能にすることです。"
- "ルール#1：最小44×44ピクセルのタッチターゲット。なぜですか？震える手で20ピクセルのボタンをタップしてみてください - 不可能です。"
- "ルール#2：すべてがキーボードのみで動作する必要があります。マウスを外してプロトタイプを使用してみてください。すべてに到達できますか？そうでない場合、それはアクセス可能ではありません。"
- "Tabキーは前方に移動し、Shift+Tabは後方に移動し、Enter/Spaceはアクティブ化します。矢印キーはコンポーネント内をナビゲートします。"
- "フォーカスインジケーターは重要です。フォーカスされた要素の周りの青いアウトライン？それを削除しないでください！または削除する場合は、さらに見やすいものに置き換えてください。"
- "ルール#3：時間制限なし、またはユーザーに延長を許可します。一部のユーザーは読む、処理する、または相互作用するためにより多くの時間が必要です。"

**Interactive Exercise:**
- Have students try keyboard navigation on a familiar website
- Identify what works and what doesn't

---

### Slide 7: Cognitive Accessibility Principles | 認知アクセシビリティ原則

#### Clarity and Consistency (3 minutes) | 明確性と一貫性（3分）

**English Speaking Points:**
- "Cognitive accessibility is often overlooked, but it's crucial. It's about making content easy to understand and use."
- "First: Use clear, simple language. Short sentences. Common words instead of jargon. Active voice."
- "Compare: 'Utilize the search functionality to locate desired content' versus 'Use search to find what you need.' Which is clearer?"
- "Second: Consistency. Put your navigation in the same place on every screen. Use the same words for the same actions. Use colors consistently."
- "When users learn your interface once, they shouldn't have to relearn it on every page."
- "Third: Avoid flashing and moving content. It can trigger seizures in people with photosensitive epilepsy, and it's incredibly distracting for people with ADHD."
- "WCAG rule: No more than 3 flashes per second. Better: don't flash at all. Provide pause/stop for animations."
- "Fourth: Clear error messages. Not 'Error 404' - say 'Email address is missing. Please enter your email address in the format: name@example.com.'"

**Japanese Speaking Points:**
- "認知アクセシビリティはしばしば見落とされますが、重要です。コンテンツを理解しやすく使用しやすくすることです。"
- "最初：明確でシンプルな言語を使用します。短い文。専門用語の代わりに一般的な言葉。能動態。"
- "比較：「検索機能を利用して目的のコンテンツを見つける」対「必要なものを見つけるために検索を使用する」。どちらが明確ですか？"
- "2番目：一貫性。ナビゲーションをすべての画面の同じ場所に配置します。同じアクションに同じ言葉を使用します。色を一貫して使用します。"
- "ユーザーがインターフェースを一度学習したら、すべてのページで再学習する必要はありません。"
- "3番目：点滅と移動コンテンツを避けます。光感受性てんかんの人々の発作を引き起こす可能性があり、ADHDの人々にとって非常に気が散ります。"
- "WCAGルール：1秒あたり3回以下の点滅。より良い：まったく点滅しない。アニメーションの一時停止/停止を提供します。"
- "4番目：明確なエラーメッセージ。「エラー404」ではありません - 「メールアドレスが見つかりません。name@example.comの形式でメールアドレスを入力してください」と言います。"

---

### Slide 8: Assistive Technologies | 支援技術

#### Understanding the Tools (3 minutes) | ツールの理解（3分）

**English Speaking Points:**
- "Let's talk about the technologies people use to interact with your designs."
- "Screen readers like JAWS, NVDA, VoiceOver, and TalkBack read everything aloud. They're used by blind and low-vision users."
- "For designers: This means semantic HTML matters. Use real buttons, not divs that look like buttons. Screen readers know what a button is, but not what a styled div is."
- "Screen magnifiers enlarge portions of the screen. Your design must work at 200% zoom. Text must reflow, not get cut off."
- "Voice control lets users speak commands. 'Click submit button.' This requires visible text labels - icon-only buttons don't work."
- "Switch controls for users with severe motor disabilities. They navigate by pressing switches to select items one by one. Sequential navigation must be perfect."
- "The takeaway: These technologies exist and millions of people use them. Test with them."

**Japanese Speaking Points:**
- "人々があなたのデザインと相互作用するために使用する技術について話しましょう。"
- "JAWS、NVDA、VoiceOver、TalkBackのようなスクリーンリーダーはすべてを音声で読み上げます。盲目と弱視のユーザーによって使用されます。"
- "デザイナーにとって：これはセマンティックHTMLが重要であることを意味します。ボタンのように見えるdivではなく、本物のボタンを使用してください。スクリーンリーダーはボタンが何であるかを知っていますが、スタイル付きdivが何であるかを知りません。"
- "画面拡大鏡は画面の一部を拡大します。あなたのデザインは200%ズームで動作する必要があります。テキストは再フローし、切り取られてはいけません。"
- "音声制御はユーザーがコマンドを話すことを可能にします。「送信ボタンをクリック。」これには可視テキストラベルが必要です - アイコンのみのボタンは機能しません。"
- "重度の運動障害を持つユーザー向けのスイッチ制御。彼らはスイッチを押して一つずつアイテムを選択してナビゲートします。順次ナビゲーションは完璧でなければなりません。"
- "要点：これらの技術は存在し、何百万人もの人々がそれらを使用しています。それらでテストしてください。"

**Demonstration:**
- Quick demo of VoiceOver or NVDA on a website
- Show how it reads content, navigates, announces buttons

---

### Slide 9: Accessibility Testing Tools | アクセシビリティテストツール

#### Automated and Manual Testing (3 minutes) | 自動および手動テスト（3分）

**English Speaking Points:**
- "You can't design for accessibility without testing. Let me show you the tools."
- "Automated tools: WAVE, axe DevTools, Lighthouse. These are browser extensions that scan your page and find issues."
- "WAVE highlights errors visually - missing alt text, low contrast, broken structure. It's free and easy to use."
- "axe DevTools gives detailed reports with specific WCAG violations and how to fix them. Also free."
- "Lighthouse is built into Chrome. It scores your accessibility from 0-100 and provides recommendations."
- "Important: Automated tools catch only 30-40% of accessibility issues. You MUST do manual testing."
- "Manual testing: Keyboard-only navigation, screen reader testing, zoom testing, color blindness simulation."
- "Today's activity: You'll use these tools to audit your prototypes. You'll find issues. That's good - finding them now means you can fix them."

**Japanese Speaking Points:**
- "テストなしでアクセシビリティのためにデザインすることはできません。ツールを見せましょう。"
- "自動ツール：WAVE、axe DevTools、Lighthouse。これらはページをスキャンして問題を見つけるブラウザ拡張機能です。"
- "WAVEはエラーを視覚的に強調します - altテキストの欠落、低コントラスト、壊れた構造。無料で使いやすいです。"
- "axe DevToolsは特定のWCAG違反とそれらを修正する方法を含む詳細なレポートを提供します。また無料です。"
- "LighthouseはChromeに組み込まれています。0-100からアクセシビリティをスコア付けし、推奨事項を提供します。"
- "重要：自動ツールはアクセシビリティ問題の30-40%のみを捕捉します。手動テストを行う必要があります。"
- "手動テスト：キーボードのみのナビゲーション、スクリーンリーダーテスト、ズームテスト、色覚異常シミュレーション。"
- "今日のアクティビティ：これらのツールを使用してプロトタイプを監査します。問題が見つかります。それは良いことです - 今それらを見つけることは修正できることを意味します。"

**Demonstration:**
- Run WAVE on a website with accessibility issues
- Show axe DevTools report
- Run Lighthouse audit

---

### Slide 10: Common Accessibility Issues and Fixes | 一般的なアクセシビリティ問題と修正

#### Practical Solutions (3 minutes) | 実践的な解決策（3分）

**English Speaking Points:**
- "Let's go through the six most common accessibility problems you'll find - and how to fix them."
- "Issue 1: Low color contrast. Fix: Use darker colors. Test with WebAIM Contrast Checker. Aim for 4.5:1."
- "Issue 2: Missing alt text. Fix: Add descriptive alt text to every image. For decorative images, use empty alt."
- "Issue 3: Small touch targets. Fix: Make all tappable elements at least 44×44 pixels with spacing."
- "Issue 4: No keyboard access. Fix: Use semantic HTML. If you must use divs, add proper keyboard handlers."
- "Issue 5: Poor focus indicators. Fix: Never remove outline without replacing it. Design visible focus states."
- "Issue 6: Auto-playing content. Fix: Don't auto-play, or provide prominent pause/stop controls."
- "These six issues account for probably 80% of accessibility problems. Fix these, and you're most of the way there."

**Japanese Speaking Points:**
- "見つかる6つの最も一般的なアクセシビリティ問題 - とそれらを修正する方法を見ていきましょう。"
- "問題1：低い色コントラスト。修正：より暗い色を使用します。WebAIMコントラストチェッカーでテストします。4.5:1を目指します。"
- "問題2：altテキストの欠落。修正：すべての画像に説明的なaltテキストを追加します。装飾的な画像には、空のaltを使用します。"
- "問題3：小さなタッチターゲット。修正：すべてのタップ可能な要素を少なくとも44×44ピクセルで間隔を空けて作成します。"
- "問題4：キーボードアクセスなし。修正：セマンティックHTMLを使用します。divを使用する必要がある場合は、適切なキーボードハンドラーを追加します。"
- "問題5：不十分なフォーカスインジケーター。修正：置き換えずにアウトラインを削除しないでください。可視フォーカス状態をデザインします。"
- "問題6：自動再生コンテンツ。修正：自動再生しない、または目立つ一時停止/停止コントロールを提供します。"
- "これら6つの問題はおそらくアクセシビリティ問題の80%を占めます。これらを修正すれば、ほとんどの道のりが終わります。"

---

### Slide 11: ARIA (Accessible Rich Internet Applications) | ARIA概要

#### When and How to Use ARIA (2 minutes) | ARIAを使用する時期と方法（2分）

**English Speaking Points:**
- "ARIA adds accessibility info to HTML when semantic HTML isn't enough."
- "First rule of ARIA: Don't use it if semantic HTML works. A real button is better than a div with ARIA."
- "Use ARIA when building custom widgets that don't have semantic equivalents: tabs, carousels, modals."
- "Common ARIA attributes: aria-label provides accessible names, aria-labelledby references labels, aria-live announces dynamic content."
- "ARIA is powerful but can make things worse if used incorrectly. When in doubt, stick with semantic HTML."

**Japanese Speaking Points:**
- "セマンティックHTMLが十分でない場合、ARIAはHTMLにアクセシビリティ情報を追加します。"
- "ARIAの第一のルール：セマンティックHTMLが機能する場合は使用しないでください。本物のボタンはARIA付きdivよりも優れています。"
- "セマンティック同等物を持たないカスタムウィジェットを構築する場合にARIAを使用します：タブ、カルーセル、モーダル。"
- "一般的なARIA属性：aria-labelはアクセス可能な名前を提供し、aria-labelledbyはラベルを参照し、aria-liveは動的コンテンツをアナウンスします。"
- "ARIAは強力ですが、誤って使用すると事態を悪化させる可能性があります。疑わしい場合は、セマンティックHTMLに固執してください。"

---

### Slide 12: Inclusive Design vs. Accessibility | 包括的デザイン vs アクセシビリティ

#### Broader Perspective (3 minutes) | より広い視点（3分）

**English Speaking Points:**
- "Accessibility and inclusive design are related but different."
- "Accessibility focuses on compliance - meeting WCAG standards, designing for people with disabilities."
- "Inclusive design is broader - it considers the full range of human diversity from the start."
- "Here's the key difference: Accessibility often feels like accommodating disabilities. Inclusive design recognizes that diversity is the norm."
- "Think about curb cuts - those ramps on sidewalks. Originally designed for wheelchairs. But they also help parents with strollers, delivery workers, travelers with luggage."
- "Closed captions: Designed for deaf users. But they also help people in noisy environments, language learners, people who prefer reading."
- "This is the power of inclusive design: Solutions designed for people with disabilities often benefit everyone."
- "Design inclusively from the start. Don't treat accessibility as an afterthought - bake it in from day one."

**Japanese Speaking Points:**
- "アクセシビリティと包括的デザインは関連していますが異なります。"
- "アクセシビリティはコンプライアンスに焦点を当てます - WCAG基準を満たす、障害を持つ人々のためにデザインする。"
- "包括的デザインはより広いです - 最初から人間の多様性の全範囲を考慮します。"
- "ここでの重要な違い：アクセシビリティはしばしば障害に対応しているように感じます。包括的デザインは多様性が標準であることを認識しています。"
- "縁石カット - 歩道のスロープについて考えてみてください。元々車椅子用に設計されました。しかし、ベビーカーの親、配達作業員、荷物を持つ旅行者にも役立ちます。"
- "クローズドキャプション：聴覚障害者用に設計されました。しかし、騒がしい環境の人々、言語学習者、読書を好む人々にも役立ちます。"
- "これが包括的デザインの力です：障害を持つ人々のために設計されたソリューションはしばしばすべての人に利益をもたらします。"
- "最初から包括的にデザインします。アクセシビリティを後付けとして扱わないでください - 初日から組み込みます。"

---

### Slide 13: Accessibility in Smart Devices and AI | スマートデバイスとAIにおけるアクセシビリティ

#### Modern Platforms (2 minutes) | 現代のプラットフォーム（2分）

**English Speaking Points:**
- "Modern devices have amazing built-in accessibility features."
- "iOS: VoiceOver screen reader, Voice Control, Zoom, Display Accommodations. All free, all powerful."
- "Android: TalkBack, Voice Access, Magnification, color correction. Also built-in."
- "For chatbots: Provide multiple input methods - text, voice, buttons. Use clear language. Offer conversation history."
- "The bot you're using in this course - HCI-101 Bot - should be accessible too. Does it work with screen readers? Can you use it with keyboard only?"
- "For your projects: If you're designing a chatbot, make sure it's accessible. If you're designing a mobile app, test it with VoiceOver or TalkBack."

**Japanese Speaking Points:**
- "現代のデバイスには素晴らしい組み込みアクセシビリティ機能があります。"
- "iOS：VoiceOverスクリーンリーダー、音声制御、ズーム、ディスプレイ調整。すべて無料、すべて強力。"
- "Android：TalkBack、音声アクセス、拡大、色補正。また組み込み。"
- "チャットボットについて：複数の入力方法を提供します - テキスト、音声、ボタン。明確な言語を使用します。会話履歴を提供します。"
- "このコースで使用しているボット - HCI-101ボット - もアクセス可能である必要があります。スクリーンリーダーで動作しますか？キーボードのみで使用できますか？"
- "プロジェクトについて：チャットボットをデザインしている場合は、アクセス可能であることを確認してください。モバイルアプリをデザインしている場合は、VoiceOverまたはTalkBackでテストしてください。"

---

### Slide 14: Legal and Ethical Considerations | 法的および倫理的考慮事項

#### Why This Matters (3 minutes) | なぜこれが重要なのか（3分）

**English Speaking Points:**
- "Let's talk about why accessibility isn't optional."
- "First, the law. In the US, ADA requires accessible websites. In the EU, the European Accessibility Act. In Japan, JIS X 8341-3. Many countries have laws."
- "Companies get sued for inaccessible websites. Domino's Pizza lost a Supreme Court case because blind users couldn't order online."
- "Second, the business case. 15% of the world = 1 billion people with disabilities. That's a huge market you're excluding if you're not accessible."
- "Better SEO: Accessible sites rank better in search engines because semantic HTML helps search engines understand your content."
- "Improved UX for everyone: Clear navigation, readable text, keyboard shortcuts - these help all users."
- "Third, and most important: the ethical imperative. Everyone deserves equal access to information and services."
- "Digital exclusion is discrimination. As designers, you have power and responsibility to create inclusive experiences."

**Japanese Speaking Points:**
- "アクセシビリティがオプションではない理由について話しましょう。"
- "最初に、法律。米国では、ADAはアクセス可能なウェブサイトを要求します。EUでは、ヨーロッパアクセシビリティ法。日本では、JIS X 8341-3。多くの国に法律があります。"
- "企業はアクセス不可能なウェブサイトで訴えられます。Domino's Pizzaは盲目のユーザーがオンラインで注文できなかったため、最高裁判所の訴訟に敗れました。"
- "2番目、ビジネスケース。世界の15% = 10億人の障害者。アクセス可能でない場合、あなたは巨大な市場を除外しています。"
- "より良いSEO：アクセス可能なサイトは検索エンジンでより良くランク付けされます。セマンティックHTMLは検索エンジンがコンテンツを理解するのを助けます。"
- "すべての人のためのUXの改善：明確なナビゲーション、読みやすいテキスト、キーボードショートカット - これらはすべてのユーザーを助けます。"
- "3番目、そして最も重要：倫理的義務。すべての人は情報とサービスへの平等なアクセスに値します。"
- "デジタル排除は差別です。デザイナーとして、あなたは包括的な体験を作成する力と責任を持っています。"

**Personal Appeal:**
- "You're about to become professional designers. The choices you make affect millions of people."
- "Choose to design for everyone. It's the right thing to do."

---

### Slide 15: Today's Activity: Accessibility Audit | 今日のアクティビティ：アクセシビリティ監査

#### Activity Introduction (2 minutes) | アクティビティ紹介（2分）

**English Speaking Points:**
- "Now it's your turn to become accessibility auditors!"
- "You have 60 minutes in three parts: automated testing, manual testing, and documenting/fixing issues."
- "Part 1 (20 min): Install and run WAVE, axe, or Lighthouse on your prototypes. Check color contrast. Document all issues."
- "Part 2 (25 min): Manual testing. Navigate with keyboard only. Test with a screen reader if possible. Zoom to 200%. Use color blindness simulation."
- "Part 3 (15 min): Create your accessibility audit report. List issues, prioritize them, and fix the high-priority ones."
- "Your deliverable: An accessibility audit report with prioritized issues and an improved prototype."
- "This isn't busy work - you're making your designs usable for millions more people."

**Japanese Speaking Points:**
- "今、アクセシビリティ監査者になるあなたの番です！"
- "3つのパートで60分あります：自動テスト、手動テスト、問題の文書化/修正。"
- "パート1（20分）：プロトタイプでWAVE、axe、またはLighthouseをインストールして実行します。色コントラストをチェックします。すべての問題を文書化します。"
- "パート2（25分）：手動テスト。キーボードのみでナビゲートします。可能であればスクリーンリーダーでテストします。200%にズームします。色覚異常シミュレーションを使用します。"
- "パート3（15分）：アクセシビリティ監査レポートを作成します。問題をリストし、優先順位を付け、高優先度のものを修正します。"
- "成果物：優先順位付けされた問題と改善されたプロトタイプを含むアクセシビリティ監査レポート。"
- "これは忙しい作業ではありません - あなたは何百万人もの人々のためにデザインを使用可能にしています。"

**Logistics:**
- Distribute audit checklist
- Help with tool installation as needed
- Circulate during activity to provide guidance

---

### Slide 16: Accessibility Resources and Tools | アクセシビリティリソースとツール

#### Where to Learn More (1 minute) | もっと学ぶ場所（1分）

**English Speaking Points:**
- "Accessibility is a deep topic - we've only scratched the surface today."
- "Resources: WCAG guidelines at w3.org/WAI, WebAIM tutorials at webaim.org, A11Y Project at a11yproject.com."
- "Tools: WAVE, axe DevTools, Lighthouse for testing. Stark and Able plugins for Figma."
- "Books: 'Accessibility for Everyone' by Laura Kalbag, 'Inclusive Design Patterns' by Heydon Pickering."
- "Keep learning. Accessibility is constantly evolving as technology changes."

---

### Slide 17: Key Takeaways | 重要なポイント

#### Closing (2 minutes) | クロージング（2分）

**English Speaking Points:**
- "Let's recap the six essential lessons from today."
- "One: Accessibility benefits everyone, not just people with disabilities. Curb cuts, captions, voice control - all designed for accessibility, all help everyone."
- "Two: POUR principles are the foundation. Perceivable, Operable, Understandable, Robust."
- "Three: Aim for WCAG 2.1 Level AA. That means 4.5:1 contrast, 44×44 px touch targets, keyboard access, alt text."
- "Four: Test with real tools and users. Automated tools catch 30-40%, manual testing finds the rest."
- "Five: Design inclusively from the start. Don't treat accessibility as an afterthought."
- "Six: It's the right thing to do. Equal access is a human right. As designers, you have the power and responsibility to make it happen."
- "Next week: Emerging technologies - AR/VR, voice, gestures, IoT. The future of HCI."

**Japanese Speaking Points:**
- "今日の6つの重要なレッスンを要約しましょう。"
- "1つ：アクセシビリティは障害を持つ人々だけでなく、すべての人に利益をもたらします。縁石カット、キャプション、音声制御 - すべてアクセシビリティのために設計され、すべての人を助けます。"
- "2つ：POUR原則は基礎です。知覚可能、操作可能、理解可能、堅牢。"
- "3つ：WCAG 2.1レベルAAを目指します。それは4.5:1のコントラスト、44×44 pxのタッチターゲット、キーボードアクセス、altテキストを意味します。"
- "4つ：実際のツールとユーザーでテストします。自動ツールは30-40%を捕捉し、手動テストは残りを見つけます。"
- "5つ：最初から包括的にデザインします。アクセシビリティを後付けとして扱わないでください。"
- "6つ：それは正しいことです。平等なアクセスは人権です。デザイナーとして、あなたはそれを実現する力と責任を持っています。"
- "来週：新興技術 - AR/VR、音声、ジェスチャー、IoT。HCIの未来。"

**Final Inspiration:**
- "You now have the knowledge and tools to design for everyone. Use them."
- "Make the web - and the world - more accessible, one design at a time."

---

## Post-Lecture Activities | 講義後アクティビティ

### Immediate Next Steps | 即座の次のステップ

1. **Set Up Testing Tools** | テストツールをセットアップ
   - Help students install WAVE, axe, or Lighthouse
   - Provide installation troubleshooting
   - Ensure everyone can access their prototypes

2. **Distribute Materials** | 教材を配布
   - Accessibility audit checklist
   - WCAG quick reference guide
   - Tool instructions and tutorials
   - AI transparency log template

3. **Monitor Testing Sessions** | テストセッションを監視
   - Circulate during automated testing
   - Help with tool usage
   - Guide manual testing procedures
   - Answer accessibility questions

### Activity Support | アクティビティサポート

**During Part 1 (Automated Testing - 20 min):**
- Ensure tools are working properly
- Help interpret test results
- Explain WCAG violations
- Guide color contrast testing

**During Part 2 (Manual Testing - 25 min):**
- Demonstrate keyboard navigation
- Help with screen reader setup
- Guide zoom testing
- Assist with color blindness simulation

**During Part 3 (Documentation - 15 min):**
- Review audit report quality
- Help prioritize issues
- Guide fix implementation
- Check documentation completeness

### Common Issues to Watch For | 注意すべき一般的な問題

- **Tool Installation Problems** | ツールインストール問題: Have backup tools ready
- **Prototype Access** | プロトタイプアクセス: Ensure export or live link works
- **Screen Reader Confusion** | スクリーンリーダー混乱: Provide simplified instructions
- **Overwhelming Number of Issues** | 圧倒的な数の問題: Help students prioritize
- **Time Management** | 時間管理: Keep students on track through three parts

### Support Strategies | サポート戦略

- **Bilingual Support** | バイリンガルサポート: Explain technical terms in both languages
- **Hands-On Demos** | ハンズオンデモ: Show tool usage live
- **Pairing Students** | 学生のペアリング: Encourage peer support
- **Clear Examples** | 明確な例: Show good audit report examples

---

## Deliverables and Grading | 成果物と評価

### Today's Deliverable | 今日の成果物

**Accessibility Audit Report**

**Required Components:**
1. **Automated Test Results**
   - Tool used (WAVE, axe, Lighthouse)
   - List of all issues found
   - WCAG violations noted

2. **Color Contrast Audit**
   - All text/background combinations tested
   - Contrast ratios documented
   - Pass/fail status for each

3. **Manual Test Results**
   - Keyboard navigation findings
   - Screen reader test observations
   - Zoom test results
   - Color blindness simulation findings

4. **Issue Summary**
   - Complete list of accessibility issues
   - Prioritized by severity (Critical, Major, Minor)
   - WCAG guideline violated for each
   - How to fix each issue

5. **Implemented Fixes**
   - High-priority issues addressed
   - Documentation of changes made
   - Before/after comparisons

6. **AI Transparency Documentation**
   - External AI usage for understanding issues
   - Prompts and responses
   - Verification process

**Format:** 4-6 page document with screenshots

### Grading Criteria | 評価基準

**Accessibility Audit Report (Weighted in Weekly Activities 40%):**
- Thoroughness of Testing (25%): All required tests completed
- Issue Identification (25%): Issues found and documented correctly
- Prioritization (20%): Proper severity and priority assignment
- Fixes Implemented (20%): High-priority issues addressed
- Documentation Quality (10%): Clear, professional report

---

## Resources for Next Week | 来週のためのリソース

### Week 13 Preview: Emerging Technologies and Future Interactions

**Topics:**
- AR/VR interfaces
- Voice interfaces and natural language
- Gesture control
- Wearables and IoT
- Future trends in HCI

**Student Preparation:**
- Explore emerging tech if available (VR headsets, voice assistants)
- Think about future interface possibilities
- Begin final project completion

---

## Reflection and Adaptation | 振り返りと適応

### Post-Class Reflection Questions

**For Instructor:**
- Did students grasp WCAG principles?
- Were they able to use testing tools effectively?
- How was the quality of audit reports?
- Did they prioritize issues correctly?
- Were manual tests conducted properly?
- What accessibility concepts need reinforcement?

**For Students (Optional Reflection Prompt):**
- What surprised you about accessibility testing?
- What was the most common issue you found?
- How will this change your design approach?
- What accessibility features will you prioritize?

---

*End of Instructor Notes*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
