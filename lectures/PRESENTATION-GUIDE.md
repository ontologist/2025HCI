# HCI-101 Week 1 Presentation Guide
# HCI-101第1週プレゼンテーションガイド

## Three Ways to Present Your Slides | 3つのスライドプレゼンテーション方法

### ✅ Option 1: PowerPoint/Google Slides (Recommended)
**Best for:** Traditional classroom presentations with projector

**Setup:**
1. Open PowerPoint or Google Slides
2. Use template from: `lectures/week01-powerpoint-template.md`
3. Copy content slide by slide
4. Add visuals and formatting
5. Present directly from slides

**Pros:**
- Most familiar format
- Easy to edit on the fly
- Works with any projector
- Can add animations
- Offline capable

**Cons:**
- Manual conversion from Markdown
- Takes time to format initially

---

### ✅ Option 2: reveal.js Presentation (GitHub Pages)
**Best for:** Web-based presentations, sharing with students online

**Setup:**
1. Enable GitHub Pages in repository settings:
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: main, Folder: /docs
   - Save

2. Wait 2-5 minutes for deployment

3. Access presentation at:
   ```
   https://yuritijerino.github.io/2025HCI/week01-presentation.html
   ```

4. Present directly from web browser

**Pros:**
- No conversion needed - ready to use
- Shareable link with students
- Professional web-based interface
- Works on any device with browser
- Can be updated anytime
- Beautiful transitions and animations

**Cons:**
- Requires internet connection
- Need to enable GitHub Pages first

**Keyboard Controls:**
- `→` or `Space`: Next slide
- `←`: Previous slide
- `F`: Fullscreen
- `O`: Overview mode
- `Esc`: Exit fullscreen

---

### ✅ Option 3: Local Bot Portal Presentation
**Best for:** Interactive demonstration of bot features

**Setup:**
1. Navigate to bot-portal directory:
   ```bash
   cd bot-portal
   ```

2. Install dependencies (first time only):
   ```bash
   npm install
   ```

3. Configure environment:
   ```bash
   cp env.example .env
   # Edit .env and add your API key (OpenAI or Claude)
   ```

4. Start the bot portal:
   ```bash
   npm run dev
   ```

5. Access at: http://localhost:3000

6. Use this as a live demonstration during lecture

**Pros:**
- Live, interactive demonstration
- Students see actual bot interface
- Can answer questions in real-time
- Runs entirely on your PC
- No external hosting needed

**Cons:**
- Requires setup before class
- Need API key for AI service
- Requires Node.js installed

---

## Recommended Presentation Flow | 推奨プレゼンテーションフロー

### Before Class | クラス前
1. **Start bot portal** (if demonstrating):
   ```bash
   cd bot-portal
   npm run dev
   ```

2. **Open presentation** (choose one method):
   - PowerPoint slides
   - reveal.js in browser: https://yuritijerino.github.io/2025HCI/week01-presentation.html
   - Or both for flexibility

3. **Test projector** connection and display

4. **Prepare bot portal credentials** for students

### During Lecture (15-20 min) | 講義中
1. **Slides 1-7**: Core HCI concepts (10 min)
   - Use PowerPoint or reveal.js

2. **Slide 8-10**: Course overview and projects (5 min)

3. **Slide 11**: Bot demonstration (3-5 min)
   - Switch to bot portal at http://localhost:3000
   - Show live interaction
   - Demonstrate key features

4. **Slides 12-16**: Policies and activity intro (2-3 min)

### After Lecture | 講義後
- Keep bot portal running for student activity
- Distribute bot credentials
- Monitor student access

---

## File Locations | ファイルの場所

### PowerPoint Template
```
lectures/week01-powerpoint-template.md
```
Content organized by slide, ready to copy into PowerPoint/Google Slides

### Instructor Notes
```
lectures/week01-instructor-notes.md
```
Detailed speaking points for each slide

### Original Markdown Slides
```
lectures/week01-hci-intro-slides.md
```
Full slide content in Markdown format

### reveal.js Presentation
```
docs/week01-presentation.html
```
Web-based presentation (viewable on GitHub Pages)

### Bot Portal
```
bot-portal/
├── server/index.js
├── package.json
├── env.example
└── setup-instructions.md
```

---

## Quick Start Checklist | クイックスタートチェックリスト

### Day Before Class | クラス前日
- [ ] Decide which presentation method to use
- [ ] If using reveal.js: Verify GitHub Pages is working
- [ ] If using bot portal: Test bot portal startup
- [ ] Review instructor notes
- [ ] Prepare any additional examples

### 30 Minutes Before Class | クラス30分前
- [ ] Start bot portal (if using): `cd bot-portal && npm run dev`
- [ ] Open presentation in browser or PowerPoint
- [ ] Test projector connection
- [ ] Verify internet connection (if using reveal.js)
- [ ] Print bot credentials for students (optional)
- [ ] Have activity handouts ready

### During Class | クラス中
- [ ] Present slides (15-20 min)
- [ ] Demonstrate bot portal (3-5 min)
- [ ] Distribute credentials
- [ ] Transition to hands-on activity

### After Class | クラス後
- [ ] Keep bot portal running
- [ ] Monitor student progress
- [ ] Answer questions
- [ ] Review submissions

---

## Combining All Three Methods | 3つの方法を組み合わせる

**Best Approach:**
1. **Use reveal.js for main slides**
   - Professional, web-based
   - Easy to navigate
   - Shareable with students

2. **Switch to bot portal for live demo**
   - Show actual interface
   - Interactive demonstration
   - Answer questions live

3. **Have PowerPoint as backup**
   - In case internet fails
   - For offline access
   - Can edit during class if needed

**Seamless Switching:**
- Open both in separate browser tabs/windows
- Alt+Tab (Windows) or Cmd+Tab (Mac) between them
- Use second monitor if available

---

## Student Access to Materials | 学生の教材アクセス

### Slides
Students can access slides at:
```
https://yuritijerino.github.io/2025HCI/week01-presentation.html
```

### Bot Portal
Students access bot portal at:
```
http://[your-pc-ip-address]:3000
```
Or if on same machine: `http://localhost:3000`

### Course Materials
All materials available on GitHub:
```
https://github.com/yuritijerino/2025HCI
```

---

## Troubleshooting | トラブルシューティング

### reveal.js Not Loading
- Check GitHub Pages is enabled
- Verify docs folder is published
- Try incognito/private browser window
- Clear browser cache

### Bot Portal Won't Start
- Check Node.js is installed: `node --version`
- Verify dependencies installed: `npm install`
- Check .env file has API key
- View logs for errors

### Projector Issues
- Have PowerPoint backup ready
- Test connection before class
- Know how to switch inputs
- Bring adapter cables

---

## Next Steps | 次のステップ

After successfully presenting Week 1:

1. **Collect student feedback** on presentation format
2. **Monitor bot portal usage** and issues
3. **Adjust timing** for future lectures
4. **Create Week 2 materials** using same format

---

**All materials created and ready to use!**  
**すべての教材が作成され、使用準備完了！**

Choose the method that works best for your setup and teaching style.  
セットアップと教育スタイルに最適な方法を選択してください。




