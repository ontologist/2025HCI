# PowerPoint Template for Week 12 HCI Lecture
# 第12週HCI講義用PowerPointテンプレート

## How to Use This Template:
1. Open PowerPoint or Google Slides
2. Create new presentation
3. Copy content from each slide section below
4. Add visual elements and formatting
5. Save as "Week12-Accessibility.pptx"

---

## Slide 1: Title Slide
**Title:** Week 12: Accessibility and Inclusive Design
**Title (JP):** 第12週：アクセシビリティと包括的デザイン
**Subtitle:** Designing for Everyone
**Subtitle (JP):** すべての人のためのデザイン
**Instructor:** Yuri Tijerino
**Date:** Fall 2025 | 2025年秋学期

**Visual Elements:**
- Accessibility icon or universal design symbols
- Diverse user representations
- Modern, inclusive imagery

---

## Slide 2: Today's Agenda
**Title:** Today's Agenda | 今日のアジェンダ

**Topics:**
- What is Accessibility? | アクセシビリティとは？
- Types of Disabilities | 障害の種類
- WCAG 2.1 Guidelines | WCAG 2.1ガイドライン
- Visual Accessibility | 視覚アクセシビリティ
- Motor Accessibility | 運動アクセシビリティ
- Cognitive Accessibility | 認知アクセシビリティ
- Assistive Technologies | 支援技術
- Testing Tools and Methods | テストツールと方法
- Legal and Ethical Considerations | 法的および倫理的考慮事項

**Learning Objectives:**
- Understand WCAG 2.1 standards
- Design for diverse abilities
- Use accessibility testing tools
- Audit and improve prototypes

---

## Slide 3: What is Accessibility?
**Title:** What is Accessibility? | アクセシビリティとは？

**Definition:**
Designing products, devices, services, and environments so that people with disabilities can use them.

**POUR Framework:**

**P - Perceivable | 知覚可能**
- Information must be presentable to users in ways they can perceive
- Text alternatives for images
- Captions for videos
- High contrast colors

**O - Operable | 操作可能**
- UI components and navigation must be operable
- Keyboard accessibility
- Sufficient time to interact
- No seizure-inducing content

**U - Understandable | 理解可能**
- Information and UI must be understandable
- Clear, simple language
- Consistent navigation
- Helpful error messages

**R - Robust | 堅牢**
- Content must work with current and future technologies
- Works with assistive technologies
- Semantic HTML
- Valid code

**Visual Elements:**
- POUR acronym diagram
- Icons for each principle
- Examples of each

---

## Slide 4: Types of Disabilities
**Title:** Types of Disabilities | 障害の種類

**Four Main Categories:**

**1. Visual Impairments | 視覚障害**
- Blindness, low vision, color blindness
- **Needs:** Screen readers, high contrast, keyboard navigation
- **15 million** blind users worldwide

**2. Motor/Physical Disabilities | 運動/身体障害**
- Limited fine motor control, tremors, paralysis
- **Needs:** Large touch targets (44×44 px), keyboard access
- **Design Impact:** Touch target size, keyboard shortcuts

**3. Auditory Disabilities | 聴覚障害**
- Deafness, hard of hearing
- **Needs:** Captions, visual alerts
- **466 million** people with hearing loss worldwide

**4. Cognitive Disabilities | 認知障害**
- Dyslexia, ADHD, memory impairments, autism
- **Needs:** Clear language, consistent layouts, no flashing
- **Design Impact:** Simple language, predictable patterns

**Statistics:**
- **15% of world population** = 1+ billion people with disabilities
- Growing aging population with accessibility needs

**Visual Elements:**
- Icons for each disability type
- Statistics visualization
- User persona examples

---

## Slide 5: WCAG 2.1 Guidelines
**Title:** WCAG 2.1 Guidelines Overview

**Three Conformance Levels:**

**Level A (Minimum)**
- Basic accessibility
- Must meet to avoid major barriers
- Example: Text alternatives for images

**Level AA (Recommended)** ⭐
- Industry standard
- Legal requirement in many countries
- Example: 4.5:1 color contrast ratio
- **Target for your projects**

**Level AAA (Highest)**
- Gold standard
- Not always achievable for all content
- Example: 7:1 color contrast ratio

**Key Level AA Requirements:**
- 4.5:1 contrast ratio for normal text
- 3:1 contrast for large text (18pt+)
- 44×44 px minimum touch targets
- Keyboard accessibility
- Text alternatives for non-text content
- Captions for prerecorded audio/video

**Visual Elements:**
- Three-tier pyramid
- Checkmarks for AA requirements
- Level comparison chart

---

## Slide 6: Visual Accessibility - Color Contrast
**Title:** Visual Accessibility: Color Contrast

**WCAG Requirements:**
- **Normal text:** 4.5:1 minimum (AA)
- **Large text:** 3:1 minimum (AA)
- **UI components:** 3:1 minimum

**Good vs. Bad Examples:**

❌ **FAILS:**
- Light gray (#999) on white (#FFF) = 2.8:1
- Yellow on white
- Light blue on white

✅ **PASSES:**
- Dark gray (#555) on white (#FFF) = 8.6:1
- Black on white = 21:1
- White on dark blue

**Don't Rely on Color Alone:**
❌ Bad: "Required fields are in red"
✅ Good: "Required fields are marked with a red asterisk (*)"

**Use Multiple Indicators:**
- Color + Icons
- Color + Text labels
- Color + Patterns

**Testing Tools:**
- WebAIM Contrast Checker
- Figma Stark plugin
- Chrome DevTools

**Visual Elements:**
- Side-by-side contrast examples
- Color palette samples
- Tool screenshots

---

## Slide 7: Visual Accessibility - Alt Text
**Title:** Text Alternatives for Images

**Why Alt Text Matters:**
- Screen readers read it aloud to blind users
- Displays if image fails to load
- Helps with SEO

**Alt Text Guidelines:**
- Describe content and function
- Be concise but descriptive
- Don't start with "image of..."
- Decorative images: use empty alt=""

**Examples:**

❌ **Bad Alt Text:**
- "logo"
- "image of person"
- "click here"

✅ **Good Alt Text:**
- "Acme Corporation logo"
- "Woman using laptop at desk"
- "Submit button"

**For Decorative Images:**
```html
<img src="decorative-line.png" alt="">
```
Empty alt tells screen readers to skip

**Visual Elements:**
- Good vs. bad examples
- Code snippets
- Screen reader demo screenshot

---

## Slide 8: Motor Accessibility
**Title:** Motor Accessibility Principles

**1. Touch Target Size**

**Minimum Requirements:**
- WCAG 2.1: 44×44 pixels
- iOS: 44×44 points
- Android: 48×48 dp

**Why It Matters:**
- Easier for tremors or limited dexterity
- Reduces accidental taps
- Better for everyone on mobile

❌ Small icons (24×24 px) without padding
✅ Adequately sized buttons (44×44 px) with spacing

**2. Keyboard Navigation**

**All Interactive Elements Must:**
- Be keyboard accessible
- Have visible focus indicators
- Follow logical tab order

**Keyboard Shortcuts:**
- **Tab:** Move forward
- **Shift + Tab:** Move backward
- **Enter/Space:** Activate
- **Arrow keys:** Navigate within components

**Focus Indicators:**
- Must be clearly visible
- Don't remove outline without replacement
- Design custom focus states with high contrast

**3. No Time Limits**
- Allow users to extend time
- Provide option to disable timeouts
- Critical tasks should have no timeout

**Visual Elements:**
- Touch target size comparison
- Keyboard navigation diagram
- Focus indicator examples

---

## Slide 9: Cognitive Accessibility
**Title:** Cognitive Accessibility Principles

**1. Clear, Simple Language**

❌ **Complex:**
"Utilize the search functionality to locate desired content"

✅ **Simple:**
"Use search to find what you need"

**Guidelines:**
- Short sentences and paragraphs
- Common words over jargon
- Active voice over passive
- Define technical terms

**2. Consistent Layout and Navigation**

**Consistency Helps:**
- Users learn interface faster
- Reduces cognitive load
- Prevents confusion

**Apply Consistently:**
- Navigation placement
- Button styles and positions
- Color meanings
- Icon usage

**3. Avoid Flashing and Moving Content**

**Danger:**
- Can trigger seizures (photosensitive epilepsy)
- Distracting for ADHD users

**WCAG Guidelines:**
- No more than 3 flashes per second
- Provide pause/stop for animations
- Don't auto-play videos with sound

**4. Clear Error Messages**

❌ **Bad:** "Error 404: Invalid input"
✅ **Good:** "Email address is missing. Please enter your email in the format: name@example.com"

**Visual Elements:**
- Language comparison examples
- Consistency diagrams
- Error message examples

---

## Slide 10: Assistive Technologies
**Title:** Assistive Technologies | 支援技術

**Screen Readers:**
- JAWS (Windows)
- NVDA (Windows) - Free
- VoiceOver (macOS/iOS)
- TalkBack (Android)

**Design Implications:**
- Use semantic HTML
- Provide text alternatives
- Ensure logical reading order
- Use ARIA when needed

**Screen Magnifiers:**
- ZoomText (Windows)
- Built-in Zoom (macOS)
- Browser zoom

**Design Implications:**
- Works at 200% zoom
- Text reflows, not cut off
- No fixed pixel sizes

**Voice Control:**
- Dragon NaturallySpeaking
- Voice Control (iOS/macOS)
- Voice Access (Android)

**Design Implications:**
- Visible text labels required
- Icon-only buttons problematic
- Keyboard accessibility essential

**Switch Controls:**
- For severe motor disabilities
- Sequential navigation with switches

**Design Implications:**
- Perfect sequential navigation
- Clear focus indicators
- No time-based interactions

**Visual Elements:**
- Tool logos and screenshots
- Device examples
- User interaction demonstrations

---

## Slide 11: Accessibility Testing Tools
**Title:** Accessibility Testing Tools

**Automated Tools:**

**1. WAVE**
- Browser extension
- Highlights issues visually
- Free
- URL: wave.webaim.org

**2. axe DevTools**
- Chrome/Firefox extension
- Detailed issue reports
- Fix suggestions
- Free version available

**3. Lighthouse**
- Built into Chrome DevTools
- Scores 0-100
- Part of performance testing
- Free and built-in

**4. Color Contrast Analyzers:**
- WebAIM Contrast Checker
- Figma: Stark, A11y plugins
- Adobe XD: Contrast Checker

**Manual Testing Methods:**

**1. Keyboard-Only Navigation**
- Unplug mouse
- Navigate with Tab, Shift+Tab, Enter, Arrows
- Check: reach everything? Focus visible?

**2. Screen Reader Testing**
- macOS: VoiceOver (Cmd + F5)
- Windows: NVDA (free download)
- Does it make sense when read aloud?

**3. Zoom Testing**
- Zoom to 200%
- Does content reflow?
- Anything cut off?

**4. Color Blindness Simulation**
- Use browser extensions
- Check information without color

**Important:** Automated tools catch only 30-40% of issues. Manual testing is essential.

**Visual Elements:**
- Tool logos and interface screenshots
- Testing workflow diagram
- Automated vs. manual comparison

---

## Slide 12: Common Accessibility Issues and Fixes
**Title:** Common Accessibility Issues and Fixes

**Issue 1: Low Color Contrast**
❌ Problem: #999 on #FFF = 2.85:1 (FAILS)
✅ Fix: #595 on #FFF = 7.5:1 (PASSES)

**Issue 2: Missing Alt Text**
❌ Problem: `<img src="logo.png">`
✅ Fix: `<img src="logo.png" alt="Acme Corporation logo">`

**Issue 3: Small Touch Targets**
❌ Problem: 32×32 pixels
✅ Fix: 44×44 pixels minimum

**Issue 4: No Keyboard Access**
❌ Problem: Custom dropdown with `<div>`
✅ Fix: Use `<select>` or add keyboard handlers

**Issue 5: Poor Focus Indicators**
❌ Problem: `outline: none` in CSS
✅ Fix: Custom focus state with high contrast

**Issue 6: Auto-Playing Content**
❌ Problem: Video auto-plays with sound
✅ Fix: Don't auto-play or provide pause/stop

**These 6 issues = ~80% of accessibility problems**

**Visual Elements:**
- Before/after comparisons
- Code examples
- Visual demonstrations

---

## Slide 13: ARIA Overview
**Title:** ARIA (Accessible Rich Internet Applications)

**What is ARIA?**
Adds accessibility information to HTML when semantic HTML isn't enough.

**First Rule of ARIA:**
"Don't use ARIA if you can use semantic HTML instead"

**When to Use ARIA:**
- Building custom widgets (tabs, modals, carousels)
- Semantic HTML doesn't exist for use case
- Adding dynamic content updates

**Common ARIA Attributes:**

**aria-label:**
```html
<button aria-label="Close dialog">X</button>
```

**aria-labelledby:**
```html
<h2 id="dialog-title">Confirm Delete</h2>
<div role="dialog" aria-labelledby="dialog-title">
```

**aria-describedby:**
```html
<input aria-describedby="password-hint">
<span id="password-hint">Must be 8+ characters</span>
```

**aria-live:**
```html
<div aria-live="polite">3 items in cart</div>
```

**aria-hidden:**
```html
<span aria-hidden="true">⭐</span>
```

**Warning:** ARIA can make things worse if used incorrectly. When in doubt, use semantic HTML.

**Visual Elements:**
- Code examples
- ARIA attribute reference
- Semantic HTML comparison

---

## Slide 14: Inclusive Design vs. Accessibility
**Title:** Inclusive Design vs. Accessibility

**Accessibility:**
- Focuses on people with disabilities
- Compliance with standards (WCAG)
- Technical requirements
- Often feels like accommodation

**Inclusive Design:**
- Considers full range of human diversity
- Proactive approach from start
- Benefits everyone
- Recognizes diversity as the norm

**Examples of Inclusive Design:**

**1. Curb Cuts (Sidewalk Ramps)**
- **Originally for:** Wheelchair users
- **Also helps:** Strollers, luggage, delivery carts

**2. Closed Captions**
- **Originally for:** Deaf users
- **Also helps:** Noisy environments, language learners

**3. Voice Control**
- **Originally for:** Motor disabilities
- **Also helps:** Drivers, multitaskers, hands-free needs

**4. Dark Mode**
- **Originally for:** Light sensitivity
- **Also helps:** Night-time use, battery saving

**5. Large Touch Targets**
- **Originally for:** Motor disabilities
- **Also helps:** Everyone on mobile, people in motion

**Key Principle:**
Solutions designed for people with disabilities often benefit everyone.

**Visual Elements:**
- Venn diagram showing overlap
- Real-world examples with photos
- Benefit comparison chart

---

## Slide 15: Accessibility in Smart Devices and AI
**Title:** Accessibility in Smart Devices and AI

**Mobile Accessibility Features:**

**iOS:**
- VoiceOver (screen reader)
- Voice Control
- Zoom and Magnifier
- Display Accommodations

**Android:**
- TalkBack (screen reader)
- Voice Access
- Magnification
- Color correction

**Design Considerations for Mobile:**
- 44×44 px touch targets
- Portrait and landscape support
- Don't rely on gestures alone
- Test with accessibility features on

**Chatbot Accessibility:**

**Challenges:**
- Conversation flows may not work for screen readers
- Typing difficult for motor disabilities
- Complex conversations hard for cognitive disabilities

**Solutions:**
- Multiple input methods (text, voice, buttons)
- Clear, simple language
- Conversation history
- Keyboard navigation support
- Easy error recovery

**For Your Projects:**
- Test chatbots with screen readers
- Test mobile apps with VoiceOver/TalkBack
- Provide multiple interaction methods

**Visual Elements:**
- Device screenshots showing accessibility features
- Chatbot interaction examples
- Best practices checklist

---

## Slide 16: Legal and Ethical Considerations
**Title:** Legal and Ethical Considerations

**Laws and Regulations:**

**United States:**
- ADA (Americans with Disabilities Act)
- Section 508 (Federal government)

**European Union:**
- European Accessibility Act
- EN 301 549 standard

**Japan:**
- JIS X 8341-3
- Based on WCAG 2.0

**Canada:**
- AODA (Accessibility for Ontarians with Disabilities Act)

**The Business Case:**

**Larger Market:**
- 15% of world = 1+ billion people
- Growing aging population

**Legal Protection:**
- Avoid lawsuits
- Compliance with regulations

**Better SEO:**
- Accessible sites rank better
- Semantic HTML helps search engines

**Improved UX:**
- Clear navigation helps everyone
- Simple language improves comprehension

**The Ethical Imperative:**
- Everyone deserves equal access
- Digital exclusion is discrimination
- Designers have power and responsibility

**Visual Elements:**
- World map showing accessibility laws
- Business case statistics
- Ethical considerations diagram

---

## Slide 17: Activity Overview
**Title:** Today's Activity: Accessibility Audit

**Three Parts (60 minutes):**

**Part 1: Automated Testing (20 min)**
1. Install WAVE, axe, or use Lighthouse
2. Run tests on your prototype
3. Check color contrast
4. Document all issues found

**Part 2: Manual Testing (25 min)**
1. Keyboard-only navigation
2. Screen reader test (if possible)
3. Zoom to 200%
4. Color blindness simulation

**Part 3: Document and Fix (15 min)**
1. Create accessibility audit report
2. List all issues
3. Prioritize by severity
4. Fix high-priority issues
5. Re-test fixes

**Deliverable:**
Accessibility audit report + improved prototype

**Visual Elements:**
- Activity timeline
- Three-part process diagram
- Deliverable checklist

---

## Slide 18: Key Takeaways
**Title:** Key Takeaways | 重要なポイント

**Six Essential Lessons:**

**1. Accessibility Benefits Everyone**
- Not just for people with disabilities
- Curb cuts, captions, voice control
- Improves UX for all users

**2. POUR Principles are Foundation**
- Perceivable
- Operable
- Understandable
- Robust

**3. Aim for WCAG 2.1 Level AA**
- 4.5:1 color contrast
- 44×44 px touch targets
- Keyboard accessibility
- Text alternatives

**4. Test with Real Tools and Users**
- Automated tools (WAVE, axe, Lighthouse)
- Manual testing (keyboard, screen reader, zoom)
- Best: Test with actual users with disabilities

**5. Design Inclusively from the Start**
- Don't treat as afterthought
- Integrate from beginning
- Easier and cheaper than retrofitting

**6. It's the Right Thing to Do**
- Equal access is a human right
- Digital exclusion is discrimination
- You have power and responsibility

**Next Week:**
Emerging Technologies and Future Interactions
(AR/VR, voice, gestures, IoT)

**Visual Elements:**
- Six key points highlighted
- Next week preview
- Inspirational closing graphic

---

## PowerPoint Design Tips:

### Visual Design:
- Use consistent color scheme
- Ensure all slides meet accessibility requirements (practice what you preach!)
- High contrast colors
- Large, readable fonts
- Meaningful icons

### Layout:
- Keep slides uncluttered
- Use bullet points effectively
- Visual breaks between sections
- Bilingual text clearly separated

### Accessibility Considerations:
- Use accessible color palettes
- Include alt text for all images
- Test your presentation with accessibility tools
- Ensure readability for all users

### Interactive Elements:
- Include discussion prompts
- Prepare examples and demos
- Have tool demonstrations ready
- Plan for student questions
