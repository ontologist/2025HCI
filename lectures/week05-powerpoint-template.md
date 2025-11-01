# PowerPoint Template for Week 5 HCI Lecture
# 第5週HCI講義用PowerPointテンプレート

## How to Use This Template:
1. Open PowerPoint or Google Slides
2. Create new presentation
3. Copy content from each slide section below
4. Add visual elements and formatting
5. Save as "Week05-Mobile-Design.pptx"

---

## Slide 1: Title Slide
**Title:** Smart Device Interface Design Principles | スマートデバイスインターフェースデザイン原則
**Subtitle:** HCI-101 Week 5 - Introduction to Human-Computer Interaction
**Subtitle (JP):** HCI-101 第5週 - ヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Date:** Fall 2025 | 2025年秋学期

**Visual Elements to Add:**
- Course logo or university branding
- Mobile device imagery (phones, tablets)
- Modern, clean design
- Bilingual text layout

---

## Slide 2: Welcome to Mobile Interface Design Week!
**Title:** Welcome to Mobile Interface Design Week! | モバイルインターフェースデザイン週へようこそ！

**Today's Focus:**
From Personas to Mobile-First Interfaces

Last week: Personas, journey maps, and scenarios
This week: Design principles for smart devices

**Today's Agenda:**
- Mobile-First Design Philosophy | モバイルファーストデザイン哲学: Why mobile matters
- Touch Interface Principles | タッチインターフェース原則: Designing for fingers
- Responsive Design Fundamentals | レスポンシブデザイン基礎: Adapting to screen sizes
- Mobile UI Patterns | モバイルUIパターン: Navigation, forms, and feedback
- Hands-On Sketching Workshop | ハンズオンスケッチワークショップ: Paper prototypes

**Learning Objectives:**
By the end of today, you will:
- Understand and apply mobile-first design principles | モバイルファーストデザイン原則を理解し適用する
- Design touch-friendly interfaces with appropriate target sizes | 適切なターゲットサイズでタッチフレンドリーなインターフェースをデザインする
- Create responsive layouts that adapt to different screen sizes | 異なる画面サイズに適応するレスポンシブレイアウトを作成する
- Apply common mobile UI patterns effectively | 一般的なモバイルUIパターンを効果的に適用する
- Sketch mobile interfaces for your personas | ペルソナのためのモバイルインターフェースをスケッチする

**Visual Elements:**
- Weekly progression graphic
- Mobile device collage
- Learning objectives checklist

---

## Slide 3: The Mobile Revolution
**Title:** The Mobile Revolution | モバイル革命

**Mobile-First Is Not Optional:**
The world has gone mobile

**Key Statistics:**
- 60%+ of web traffic is from mobile devices
- Smartphone penetration: 85% in developed countries
- Mobile-first users: Never or rarely use desktop
- Average daily mobile usage: 3-5 hours
- Mobile commerce: 70%+ of online purchases

**Why Mobile-First Design?**
- Users expect it | ユーザーが期待: Mobile experience must be excellent, not just "okay"
- Constraints breed creativity | 制約が創造性を生む: Limited screen space forces prioritization
- Progressive enhancement | プログレッシブエンハンスメント: Start with core experience, enhance for larger screens
- Performance matters | パフォーマンスが重要: Mobile users on slower connections need fast experiences
- Accessibility benefits | アクセシビリティの利点: Touch-friendly design helps everyone

**Visual Elements:**
- Mobile usage statistics graphics
- Device usage comparison charts
- Mobile-first benefits icons

---

## Slide 4: Mobile-First Design Philosophy
**Title:** Mobile-First Design Philosophy | モバイルファーストデザイン哲学

**What Is Mobile-First?**
Design and build for mobile devices first, then enhance for larger screens

**Traditional Approach (Desktop-First):**
- Design full-featured desktop site
- "Shrink" it to fit mobile
- Features get cut or hidden
- Result: Poor mobile experience

**Mobile-First Approach:**
- Start with core functionality | コア機能から始める: What's absolutely essential?
- Design for smallest screen | 最小の画面のためにデザイン: Every pixel counts
- Prioritize ruthlessly | 無慈悲に優先順位を付ける: Only include what users really need
- Progressive enhancement | プログレッシブエンハンスメント: Add features as screen size increases
- Result: Great experience everywhere

**Core Principles:**
1. Content first | コンテンツファースト: Focus on what users need most
2. Simplicity | シンプルさ: Remove everything that's not essential
3. Touch-friendly | タッチフレンドリー: Design for fingers, not mouse cursor
4. Performance | パフォーマンス: Fast load times are critical
5. Thumb-first design | 親指ファーストデザイン: Place key actions within thumb reach

**Visual Elements:**
- Desktop-first vs. mobile-first comparison
- Core principles icons
- Progressive enhancement diagram

---

## Slide 5: Touch Interface Fundamentals
**Title:** Touch Interface Fundamentals | タッチインターフェースの基礎

**Designing for Fingers, Not Cursors:**
Touch is fundamentally different from mouse interaction

**Mouse vs. Touch:**

**Mouse/Trackpad:**
- Precise pixel-level control
- Hover states possible
- Right-click for context menus
- Small targets (10x10px) acceptable

**Touch:**
- Finger is 44-48px wide minimum
- No hover - all interactions are taps
- Long-press for context
- Finger obscures target

**Target Size Guidelines:**
- Minimum touch target: 44x44 points (Apple), 48x48dp (Google)
- Recommended: 48-56px for important actions
- Spacing between targets: At least 8px
- Small text links: Increase padding to meet minimum size
- Primary actions: Make even larger (60-70px)

**Touch Zones:**

**One-Handed Phone Use:**
- Easy to reach: Bottom center (thumb zone)
- Stretch zone: Top and opposite corners
- Hard to reach: Top opposite corner

**Design Implication:** Place primary actions in thumb zone

**Visual Elements:**
- Touch target size diagrams
- Thumb zone heatmap
- Mouse vs. touch comparison chart

---

## Slide 6: Screen Sizes and Responsive Design
**Title:** Screen Sizes and Responsive Design | 画面サイズとレスポンシブデザイン

**The Device Landscape:**
Design must work across a spectrum of screen sizes

**Common Screen Sizes:**
- Small phones: 320-375px width (iPhone SE, small Android)
- Standard phones: 375-414px width (iPhone 12-15, most Android)
- Large phones: 414-480px width (iPhone Pro Max, large Android)
- Tablets (portrait): 768-834px width (iPad)
- Tablets (landscape): 1024-1112px width
- Desktop: 1280px+ width

**Responsive Design Principles:**

**1. Fluid Layouts | 流体レイアウト**
- Use percentages, not fixed pixels
- Content adapts to available space
- Flexible grids

**2. Flexible Images | 柔軟な画像**
- Images scale with container
- Responsive images for different resolutions
- Lazy loading for performance

**3. Media Queries | メディアクエリ**
- CSS rules based on screen size
- Breakpoints at key sizes
- Adapt layout, not just scale

**4. Content Priority | コンテンツ優先度**
- Most important content first
- Progressive disclosure
- Hide or collapse secondary content on small screens

**Visual Elements:**
- Device screen size comparison
- Responsive layout examples
- Breakpoint visualization

---

## Slide 7: Mobile Navigation Patterns
**Title:** Mobile Navigation Patterns | モバイルナビゲーションパターン

**Navigation on Small Screens:**
Navigation must be accessible yet not dominate the screen

**Common Navigation Patterns:**

**1. Bottom Tab Bar (Most Common) | 下部タブバー（最も一般的）**
- When to use: 3-5 primary sections, frequent switching
- Pros: Always visible, easy thumb access, clear current location
- Cons: Takes up screen space, limited to 5 items
- Examples: Instagram, Twitter, iOS Apps

**2. Hamburger Menu (Hidden Navigation) | ハンバーガーメニュー（非表示ナビゲーション）**
- When to use: Many navigation options, infrequent navigation changes
- Pros: Saves screen space, can hold many items
- Cons: Hidden = lower discoverability, requires extra tap
- Best practice: Combine with bottom bar for hybrid approach

**3. Top Navigation Bar | 上部ナビゲーションバー**
- When to use: Single-level navigation, 2-4 main options
- Pros: Standard pattern, clear hierarchy
- Cons: Harder to reach with thumb
- Common use: Settings, back navigation, search

**4. Swipe Gestures | スワイプジェスチャー**
- When to use: Sequential content, galleries, stories
- Pros: Natural, efficient, full screen content
- Cons: Not discoverable, hard to learn
- Best practice: Provide visual hints (arrows, dots)

**Visual Elements:**
- Navigation pattern examples with screenshots
- Pros and cons comparison chart
- When to use each pattern guide

---

## Slide 8: Mobile Form Design
**Title:** Mobile Form Design | モバイルフォームデザイン

**Forms Are Painful on Mobile:**
Every field is a burden - minimize input required

**Form Design Principles:**

**1. Minimize Input | 入力を最小化**
- Only ask for essential information: Every field reduces completion rate
- Smart defaults: Pre-fill when possible
- Use device capabilities: Location, camera, contacts
- Single-column layout: Easier to scan and complete

**2. Appropriate Input Types | 適切な入力タイプ**
- Email fields: Show email keyboard (@, .com)
- Phone numbers: Numeric keypad
- Dates: Date picker, not text input
- Selections: Dropdowns, radio buttons, checkboxes
- Large text: Multi-line text area

**3. Labels and Instructions | ラベルと指示**
- Label above field: Always visible, not inside field
- Clear instructions: Explain format requirements upfront
- Inline validation: Immediate feedback as user types
- Error messages: Specific, helpful, next to field

**4. Touch-Friendly Form Controls | タッチフレンドリーフォームコントロール**
- Large input fields: 44px minimum height
- Adequate spacing: 16px between fields
- Large tap targets: Checkboxes, radio buttons at least 44px
- Submit button: Primary, large, clear label

**Visual Elements:**
- Good vs. bad form design examples
- Input type keyboard screenshots
- Form best practices checklist

---

## Slide 9: Mobile UI Patterns - Lists and Content
**Title:** Mobile UI Patterns - Lists and Content | モバイルUIパターン - リストとコンテンツ

**Displaying Content Effectively:**
Mobile screens are small - every pixel matters

**List Patterns:**

**1. Vertical Scrolling List (Most Common) | 垂直スクロールリスト（最も一般的）**
- When to use: Feed, inbox, search results
- Design tips:
  - Card-based design for separation
  - Thumbnail + title + brief description
  - Swipe actions (archive, delete)
  - Infinite scroll or pagination
  - Pull-to-refresh

**2. Grid Layout | グリッドレイアウト**
- When to use: Photos, products, visual browsing
- Design tips:
  - 2-3 columns on phone, more on tablet
  - Consistent aspect ratios
  - Adequate spacing between items
  - Responsive grid (adapts to orientation)

**3. Horizontal Scrolling Carousel | 水平スクロールカルーセル**
- When to use: Categories, featured items, stories
- Design tips:
  - Show partial next item (hints at more content)
  - Pagination dots or indicators
  - Swipe-friendly spacing
  - Avoid auto-advance (users control)

**4. Expandable/Collapsible Sections (Accordion) | 拡張可能/折りたたみ可能セクション（アコーディオン）**
- When to use: FAQs, settings, long content sections
- Design tips:
  - Clear expand/collapse indicators (+ / -)
  - Show one or multiple sections at a time
  - Smooth animations
  - Save scroll position

**Visual Elements:**
- Pattern examples with screenshots
- When to use each pattern
- Design tips visualization

---

## Slide 10: Feedback and States
**Title:** Feedback and States | フィードバックと状態

**Users Need to Know What's Happening:**
Mobile users can't see hover states - feedback must be explicit

**Loading States:**

**1. Skeleton Screens | スケルトンスクリーン**
- What: Placeholder content shapes while loading
- Why better than spinners: Shows content structure, feels faster
- Example: Facebook, LinkedIn content loading

**2. Progress Indicators | 進行状況インジケーター**
- Indeterminate spinner: Unknown duration (searching, loading)
- Progress bar: Known duration (uploading, downloading)
- Estimated time: "About 30 seconds remaining"

**3. Optimistic UI | 楽観的UI**
- Show success immediately: Update UI before server confirms
- Revert if fails: Show error and undo
- Example: Like button, send message

**Button States:**
- Default: Resting state
- Pressed: Visual feedback when tapped
- Disabled: Grayed out, not tappable
- Loading: Spinner inside button

**Error Handling:**
- Inline errors: Next to field that has problem
- Toast messages: Brief notifications at bottom
- Error screens: Full-page when critical failure
- Retry actions: Give users way to fix problem

**Visual Elements:**
- Loading state examples
- Button state variations
- Error handling patterns

---

## Slide 11: Typography on Mobile
**Title:** Typography on Mobile | モバイルでのタイポグラフィ

**Readability Is Critical:**
Text must be readable at arm's length on small screens

**Font Size Guidelines:**
- Body text: 16px minimum (14px is too small)
- Headings: 24-32px for primary headings
- Small text: 12-14px for captions, labels (use sparingly)
- Button text: 16-18px, bold or medium weight
- Line height: 1.4-1.6 for body text (improves readability)

**Typography Best Practices:**
- Contrast: 4.5:1 minimum for body text
- Line length: 50-75 characters per line (on larger screens)
- Font choice: System fonts load fastest, web fonts add weight
- Hierarchy: Clear visual distinction between heading levels
- Avoid long paragraphs: Break into shorter chunks

**Visual Elements:**
- Font size comparison examples
- Contrast ratio demonstrations
- Typography hierarchy examples

---

## Slide 12: Color and Contrast
**Title:** Color and Contrast | 色とコントラスト

**Designing for Various Lighting Conditions:**
Mobile devices are used in bright sunlight and dark rooms

**Contrast Requirements:**
- Normal text (16px+): 4.5:1 minimum contrast ratio
- Large text (18px+ or 14px+ bold): 3:1 minimum
- UI elements: 3:1 (buttons, icons, borders)
- Test in sunlight: What looks good indoors may be invisible outdoors

**Color Usage:**
- Don't rely on color alone | 色だけに頼らない: Add icons, text, or patterns
- Accessible palette | アクセス可能なパレット: Test for color blindness (8% of men)
- Primary action color | 主要なアクション色: Consistent throughout app
- Error = red, success = green, warning = yellow: Standard conventions

**Dark Mode:**
- Increasingly expected: Reduce eye strain in low light
- True black vs. dark gray: Pure black can cause smearing on OLED
- Desaturated colors: Bright colors are harsh in dark mode
- Test both modes: Design should work in light and dark

**Visual Elements:**
- Contrast ratio examples
- Color palette recommendations
- Dark mode comparison

---

## Slide 13: Performance and Optimization
**Title:** Performance and Optimization | パフォーマンスと最適化

**Speed Is a Feature:**
Every second of delay = higher abandonment rate

**Why Performance Matters:**
- User expectation: Pages should load in under 3 seconds
- Mobile networks: Often slower and less reliable than wifi
- Data costs: Users on limited data plans
- Battery impact: Heavy pages drain battery faster

**Optimization Strategies:**

**1. Image Optimization | 画像最適化**
- Compress images: Tools like ImageOptim, TinyPNG
- Responsive images: Serve appropriate size for screen
- Lazy loading: Load images as user scrolls
- Use modern formats: WebP is smaller than JPEG

**2. Minimize Code | コードを最小化**
- Remove unused code: Don't load what you don't need
- Minify CSS/JS: Remove whitespace and comments
- Code splitting: Load only what's needed for current page

**3. Reduce Requests | リクエストを減らす**
- Combine files: Fewer HTTP requests
- Cache assets: Store files locally for repeat visits
- CDN usage: Serve from servers closer to users

**Visual Elements:**
- Performance impact statistics
- Optimization techniques diagram
- Before/after load time comparison

---

## Slide 14: Accessibility on Mobile
**Title:** Accessibility on Mobile | モバイルでのアクセシビリティ

**Design for Everyone:**
Accessibility benefits all users, not just those with disabilities

**Mobile Accessibility Principles:**

**1. Touch Targets | タッチターゲット**
- 44x44px minimum: Already covered, but critical for accessibility
- Adequate spacing: Prevent accidental taps
- One-handed operation: Important actions in thumb zone

**2. Screen Reader Support | スクリーンリーダーサポート**
- Alt text for images: Describe what image shows
- Semantic HTML: Proper heading hierarchy, buttons, links
- Labeled form fields: Clear association between label and input
- Meaningful link text: Not "click here," but "Download report"

**3. Text and Contrast | テキストとコントラスト**
- Minimum contrast ratios: 4.5:1 for text, 3:1 for UI
- Resizable text: Support user font size preferences
- Don't disable zoom: Users should be able to zoom in

**4. Motion and Animations | モーションとアニメーション**
- Respect reduced motion: Some users get dizzy from animations
- Provide controls: Pause/stop auto-playing content
- Avoid flashing: Can trigger seizures

**Visual Elements:**
- Accessibility principles icons
- Screen reader example
- Accessibility checklist

---

## Slide 15: Mobile Design Process
**Title:** Mobile Design Process | モバイルデザインプロセス

**From Idea to Interface:**
How to approach mobile interface design systematically

**Step-by-Step Process:**

**Step 1: Review Your Personas and Scenarios | ペルソナとシナリオをレビュー**
- Who are you designing for?: Reference your Week 4 personas
- What are they trying to do?: Focus on primary user goals
- What context?: Mobile, on-the-go, time constraints

**Step 2: Identify Core Functionality | コア機能を特定**
- What's essential?: Must-have features for mobile experience
- What can wait?: Features for larger screens
- Prioritize ruthlessly: Mobile = focus

**Step 3: Sketch Information Architecture | 情報アーキテクチャをスケッチ**
- How many screens?: Map out user flow
- Navigation structure: How do users move between screens?
- Content hierarchy: What's most important on each screen?

**Step 4: Sketch Interface Layouts (Today's Activity!) | インターフェースレイアウトをスケッチ（今日のアクティビティ！）**
- Low-fidelity first: Paper sketches, rough wireframes
- Multiple iterations: Try different approaches
- Focus on layout: Not visual design yet

**Step 5: Apply Mobile Patterns | モバイルパターンを適用**
- Navigation: Bottom bar, hamburger, tabs?
- Content display: List, grid, cards?
- Input: Forms, buttons, touch targets

**Step 6: Test and Refine | テストして洗練**
- Thumb test: Can you reach key actions?
- Scenario walkthrough: Does it support user goals?
- Peer feedback: Get input from classmates

**Visual Elements:**
- Process flow diagram
- Design iteration examples
- Testing checklist

---

## Slide 16: Today's Activity Preview
**Title:** Today's Activity Preview | 今日のアクティビティプレビュー

**Hands-On Mobile Interface Sketching Workshop:**
Sketch mobile interfaces for your personas using paper prototypes

**Activity Structure:**

**Step 1: Persona and Scenario Review (8 min)**
- Review your Week 4 personas
- Select primary mobile scenario
- Identify core tasks to support
- Bot helps you focus on mobile-first features

**Step 2: Information Architecture (10 min)**
- Map user flow through screens
- Define navigation structure
- Identify content for each screen
- Bot provides IA templates

**Step 3: Low-Fidelity Sketching (22 min)**
- Sketch 3-5 key screens on paper
- Use mobile screen templates (provided)
- Focus on layout and content placement
- Apply touch target sizing
- Include navigation elements

**Step 4: Apply Mobile Patterns (15 min)**
- Refine sketches with mobile UI patterns
- Add interaction annotations
- Show touch gestures and transitions
- Bot validates pattern usage

**Step 5: Peer Review and Iteration (10 min)**
- Exchange sketches with partner
- Walkthrough scenario using sketches
- Get feedback on usability
- Make refinements

**Materials Needed:**
- Paper or printable mobile screen templates
- Pencils, pens, markers
- Sticky notes for annotations
- Your Week 4 personas and scenarios

**Bot Support:**
- Mobile screen templates
- UI pattern library
- Touch target sizing guide
- Sketching tips and best practices
- Design critique framework

**Visual Elements:**
- Activity timeline
- Materials checklist
- Bot support features

---

## Slide 17: Key Takeaways and Looking Ahead
**Title:** Key Takeaways | 主要な要点

**Remember These Mobile Design Principles:**

**1. Mobile-First Is Essential | モバイルファーストは不可欠**
- Start with smallest screen, enhance for larger
- Constraints force prioritization
- Focus on core functionality

**2. Touch Is Different from Mouse | タッチはマウスと異なる**
- Minimum 44x44px touch targets
- Design for thumb reach
- No hover states - explicit feedback

**3. Responsive Design Adapts | レスポンシブデザインが適応**
- Fluid layouts, flexible images
- Content priority shifts with screen size
- Breakpoints at key device sizes

**4. Navigation Must Be Clear | ナビゲーションは明確である必要がある**
- Choose appropriate pattern (bottom bar, hamburger, tabs)
- Always visible or easily accessible
- Current location always clear

**5. Performance and Accessibility Matter | パフォーマンスとアクセシビリティが重要**
- Fast load times critical on mobile
- Design for all users, all conditions
- Test on real devices in real contexts

**Next Week: Usability Testing and Evaluation**
Testing your designs with real users
Think-aloud protocol
Identifying usability issues
Analyzing test results
Hands-on testing

**Ready to Design?**
Grab your paper and pencils - let's sketch interfaces that work on the devices your personas actually use!

**Visual Elements:**
- Key takeaways summary
- Next week preview
- Call-to-action graphic

---

## PowerPoint Design Tips:

### Visual Design:
- Use consistent color scheme (university colors if available)
- Include plenty of white space
- Use large, readable fonts
- Add relevant icons and images for mobile devices and UI patterns
- Include bilingual text clearly

### Layout:
- Keep slides uncluttered
- Use bullet points effectively
- Include visual breaks between sections
- Maintain consistent formatting

### Interactive Elements:
- Add animations for key points
- Use transitions between slides
- Include interactive elements where possible
- Prepare for student questions

### Accessibility:
- Use high contrast colors
- Include alt text for images
- Ensure readable font sizes
- Consider colorblind-friendly palettes
