# PowerPoint Template for Week 9: AI Chatbot Error Handling
# 第9週PowerPointテンプレート：AIチャットボットエラーハンドリング

## How to Use This Template:
1. Open PowerPoint or Google Slides
2. Create new presentation
3. Copy content from each slide section below
4. Add visual elements and formatting
5. Save as "Week09-Chatbot-Error-Handling.pptx"

---

## Slide 1: Title Slide
**Title:** Week 9: AI Chatbot Interaction Design and Error Handling
**Title (JP):** 第9週：AIチャットボットインタラクションデザインとエラーハンドリング
**Subtitle:** Introduction to Human-Computer Interaction
**Subtitle (JP):** ヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Date:** Fall 2025 | 2025年秋学期

**Visual Elements:**
- Error/warning icons
- Chatbot with error recovery theme
- Bilingual layout
- Error handling colors (yellows, oranges for warnings)

---

## Slide 2: Agenda
**Title:** Today's Agenda | 今日のアジェンダ

**Topics:**
- Understanding NLU Limitations | 自然言語理解の限界
- Handling Ambiguity and Confusion | 曖昧性と混乱の処理
- Error Recovery Strategies | エラー回復戦略
- Fallback Responses and Escalation | フォールバック応答とエスカレーション
- Human Handoff Design | 人間への引き継ぎデザイン
- Testing Chatbot Conversations | チャットボット会話のテスト
- Hands-On: Complete Chatbot Prototype | ハンズオン：完全なチャットボットプロトタイプ

**Learning Objectives:**
Understand NLU limitations, design error recovery, create fallbacks, implement human handoff, build complete prototypes

**Visual Elements:**
- Error flow diagram icons
- Testing symbols
- Progress indicators

---

## Slide 3: Recap from Week 8
**Title:** Recap from Week 8 | 第8週の振り返り

**Last Week:**
- Conversational UI principles
- Types of chatbots (rule-based, AI, hybrid)
- Dialog design principles
- Conversation flow structure
- Personality and tone

**This Week's Focus:**
Last Week: When things go RIGHT ✅
This Week: When things go WRONG ❌ → ✅

**Visual Elements:**
- Side-by-side comparison
- Happy path vs error path diagrams
- Connection arrows showing continuation

---

## Slide 4: Why Error Handling Matters
**Title:** Why Error Handling Matters | なぜエラーハンドリングが重要なのか

**Statistics Box:**
- 60-70% of interactions encounter misunderstandings
- 30% of users abandon after one failed interaction
- 80% recovery rate with good error handling

**Poor Error Handling:**
❌ "I don't understand" (repeated)
❌ No guidance
❌ Stuck in loops
❌ No human option

**Good Error Handling:**
✅ Clear explanation
✅ Specific suggestions
✅ Alternative paths
✅ Easy escalation

**Visual Elements:**
- Statistics infographic
- Good vs bad examples
- Before/after comparison

---

## Slide 5: Understanding NLU Limitations
**Title:** Understanding NLU Limitations | 自然言語理解の限界

**Six Common Challenges:**

1. **Ambiguity** | 曖昧性
   Example: "Can you book me?"

2. **Homophones** | 同音異義語
   Example: there/their/they're

3. **Slang** | スラング
   Example: "That's fire!" = great

4. **Sarcasm** | 皮肉
   Example: "Oh great, another delay"

5. **Context-Dependent** | コンテキスト依存
   Example: "Apple" = fruit or company?

6. **Multi-Intent** | マルチ意図
   Example: "Book flight AND check points"

**Visual Elements:**
- Six challenge boxes
- Example bubbles for each
- Complexity indicators

---

## Slide 6: Types of Chatbot Errors
**Title:** Types of Chatbot Errors | チャットボットエラーのタイプ

**Six Error Types:**

1. **No Match** | マッチなし
   Bot doesn't understand intent

2. **Partial Match** | 部分的マッチ
   Ambiguous intent (multiple meanings)

3. **Missing Information** | 情報不足
   Understands intent, lacks details

4. **Invalid Input** | 無効な入力
   Wrong format provided

5. **Out of Scope** | スコープ外
   Request beyond bot capabilities

6. **System Error** | システムエラー
   Technical failure

**Visual Elements:**
- Error type icons
- Example scenarios for each
- Color-coded categories

---

## Slide 7: Error Recovery Framework
**Title:** Error Recovery Strategy Framework | エラー回復戦略フレームワーク

**4-Step Process (AEGO):**

**1. ACKNOWLEDGE** | 認識
✅ "I didn't quite catch that"
❌ "Error"

**2. EXPLAIN** | 説明
✅ "I need date in MM/DD/YYYY format"
❌ "I don't understand"

**3. GUIDE** | ガイド
✅ "Try saying 'track my order'"
❌ "Try again"

**4. OFFER ALTERNATIVES** | 代替案
✅ "Speak with a team member?"
❌ No alternatives

**Visual Elements:**
- 4-step circular diagram
- Good/bad examples for each
- AEGO acronym highlight

---

## Slide 8: 3-Level Fallback Strategy
**Title:** Designing Effective Fallback Responses | 効果的なフォールバック応答

**Progressive Fallbacks:**

**Level 1: Soft Recovery** (First failure)
"I didn't quite understand. Could you rephrase?"
Tone: Helpful, assume user error

**Level 2: Guided Help** (Second failure)
"I'm still not sure. Here are things I can help with:"
[Buttons with options]
Tone: More directive, provide examples

**Level 3: Escalate** (Third failure)
"I apologize for the trouble. Let me connect you with a team member."
Tone: Apologetic, offer human help

**Best Practices:**
✅ Vary messages  
✅ Provide examples  
✅ Keep friendly tone  
✅ Escalate after 2-3 failures  

**Visual Elements:**
- Three-level pyramid/staircase
- Example responses for each level
- Escalation flow arrows

---

## Slide 9: Disambiguation Patterns
**Title:** Handling Ambiguity and Clarification | 曖昧性の処理と明確化

**Three Patterns:**

**Pattern 1: Multiple Choice**
"Did you mean:"
[Track Order] [Track Shipment] [Check Status]

**Pattern 2: Ask-and-Confirm**
"It sounds like you want to track your order. Is that right?"
[Yes] [No, something else]

**Pattern 3: Progressive Narrowing**
"What brings you here?" →  
"Is it about an order, product, or account?" →
"What's the issue with your order?"

**Visual Elements:**
- Three pattern boxes
- Example conversation flows
- Decision tree diagrams

---

## Slide 10: Human Handoff Design
**Title:** Human Handoff Design | 人間への引き継ぎデザイン

**When to Hand Off (6 Triggers):**
1. Repeated Failures (2-3 attempts)
2. Complex Requests
3. Emotional Distress
4. Out of Scope
5. User Request
6. High-Value Transactions

**Before Handoff:**
- Set expectations
- Collect information
- Provide wait time estimate

**During Handoff:**
- Transfer conversation transcript
- Include user details
- Flag sentiment (frustrated, urgent)

**Alternatives:**
- Callback scheduling
- Email support
- Knowledge base articles

**Visual Elements:**
- Trigger condition icons
- Handoff flow diagram
- Alternative options menu

---

## Slide 11: Error Scenario Playbook
**Title:** Designing for Different Error Scenarios | 異なるエラーシナリオ用のデザイン

**Scenario Templates:**

**No Match:**
1. Acknowledge: "I didn't understand"
2. Explain: "Not sure what you're looking for"
3. Guide: "I can help with [list]"
4. Alternative: "Or describe differently"

**Ambiguous Intent:**
1. Acknowledge: "I can help you cancel"
2. Explain: "What would you like to cancel?"
3. Guide: [Buttons for options]
4. Alternative: "Or describe what you'd like"

**Missing Information:**
1. Acknowledge: "I'll help track your order"
2. Explain: "I need your order number"
3. Guide: "It's in confirmation email, starts with #"
4. Alternative: "Don't have it? Look up by email"

**Visual Elements:**
- Scenario cards
- Template structure highlight
- Example conversations

---

## Slide 12: Error Prevention Strategies
**Title:** Error Prevention Strategies | エラー予防戦略

**Six Strategies:**

1. **Input Validation**
   Check format before accepting

2. **Constrained Input**
   Use buttons/dropdowns

3. **Auto-Correction**
   Fix common typos automatically

4. **Progressive Disclosure**
   One question at a time

5. **Set Clear Expectations**
   Tell users what you can do

6. **Provide Examples**
   Show what good input looks like

**Visual Elements:**
- Strategy icons
- Before/after examples
- Prevention checklist

---

## Slide 13: Sentiment Detection & Empathy
**Title:** Sentiment Detection and Empathy | センチメント検出と共感

**Frustration Indicators:**
- "This is frustrating"
- "This doesn't work"
- "I want a person"
- Repeated requests
- Short responses
- ALL CAPS
- Profanity

**Empathetic Response Patterns:**

**Acknowledgment:**
"I understand that's frustrating"

**Apology:**
"I apologize for the confusion"

**Action:**
"Let me fix that for you"

**Visual Elements:**
- Frustration indicator icons
- Empathy language examples
- Tone comparison (bad vs good)

---

## Slide 14: Testing Chatbot Error Handling
**Title:** Testing Chatbot Error Handling | チャットボットエラーハンドリングのテスト

**Testing Strategies:**
1. Happy Path Testing
2. Sad Path Testing (deliberate errors)
3. Edge Case Testing

**Test Scenarios:**
- [ ] Nonsense input
- [ ] Empty input
- [ ] Very long input
- [ ] Special characters
- [ ] Typos and misspellings
- [ ] Ambiguous requests
- [ ] Out of scope requests
- [ ] Context switches

**Metrics to Track:**
- Fallback Rate
- Resolution Rate
- Handoff Rate
- User Satisfaction

**Visual Elements:**
- Testing checklist
- Metrics dashboard mockup
- Test scenario examples

---

## Slide 15: Integration with Bot Platforms
**Title:** Integration with Bot Platforms | ボットプラットフォームとの統合

**No-Code Platforms:**
- **Botmock** - Visual flow builder
- **Voiceflow** - Drag-and-drop interface
- **Landbot** - WhatsApp/web integration
- **ManyChat** - Facebook Messenger

**Development Platforms:**
- **Dialogflow** (Google) - Advanced NLU
- **Microsoft Bot Framework** - Multi-channel
- **Rasa** - Open source

**Best Practices:**
1. Design flows first (paper/Figma)
2. Build incrementally in platform
3. Test each conversation path
4. Collect analytics and iterate

**Visual Elements:**
- Platform logos
- Feature comparison table
- Integration workflow diagram

---

## Slide 16: This Week's Activity
**Title:** This Week's Activity | 今週のアクティビティ

**Complete Chatbot Prototype with Error Handling (70 min)**

**Part 1: Error Scenario Planning (20 min)**
- Review Week 8 flow
- Identify 5-7 error scenarios
- Map recovery paths

**Part 2: Design Error Responses (25 min)**
- Write 3-level fallbacks
- Design clarification dialogs
- Create handoff flow
- Add empathetic responses

**Part 3: Build Prototype (25 min)**
- Use Botmock/Voiceflow
- Build complete flow
- Include happy AND error paths
- Test with partner

**Deliverables:**
1. Enhanced Conversation Flow Diagram
2. Error Response Script
3. Interactive Chatbot Prototype
4. Test Results Documentation
5. AI Transparency Log

**Due:** End of Week 9

**Visual Elements:**
- Activity timeline
- Three-part structure
- Deliverables checklist
- Time allocations

---

## Slide 17: Assessment Rubric & Key Takeaways
**Title:** Assessment Rubric & Key Takeaways | 評価ルーブリックと重要なポイント

**Grading (100 points):**
- Conversation Flow (25 pts)
- Error Handling Design (25 pts)
- Prototype Quality (25 pts)
- Testing & Documentation (15 pts)
- AI Transparency (10 pts)

**Key Takeaways:**
1. Errors are inevitable (60-70%)
2. Use 4-step recovery: AEGO
3. Progressive fallbacks: Level 1 → 2 → 3
4. Empathy matters
5. Test thoroughly

**Remember:**
Good chatbots anticipate problems and help users recover gracefully!

**Next Week:** Usability Testing with real users

**Visual Elements:**
- Rubric breakdown chart
- Key points highlights
- Motivational closing
- Preview of next week

---

## PowerPoint Design Tips:

### Visual Design:
- Error handling theme (warning colors: yellow, orange, red for severity)
- Use error/warning icons throughout
- Include conversation flow diagrams
- Good vs bad examples side-by-side
- Maintain bilingual clarity

### Layout:
- Keep slides focused (one concept per slide)
- Use color coding for error severity levels
- Include visual flowcharts for processes
- Side-by-side comparisons for examples

### Interactive Elements:
- Add animations for error flow progression
- Use transitions to show escalation
- Include clickable examples if digital
- Prepare for student questions

### Accessibility:
- High contrast for error indicators
- Large, readable fonts
- Alt text for all diagrams
- Colorblind-friendly palette
