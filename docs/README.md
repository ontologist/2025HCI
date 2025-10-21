# HCI-101 Course Presentations
# HCI-101コースプレゼンテーション

## Viewing Presentations | プレゼンテーションの表示

### On GitHub Pages | GitHub Pagesで
Once GitHub Pages is enabled, access presentations at:
GitHub Pagesが有効になったら、次のURLでプレゼンテーションにアクセスできます：

```
https://yuritijerino.github.io/2025HCI/week01-presentation.html
```

### Locally | ローカルで
You can also view presentations locally by opening the HTML files directly in your browser:
ブラウザでHTMLファイルを直接開いて、ローカルでプレゼンテーションを表示することもできます：

1. Navigate to `docs/` folder
2. Double-click `week01-presentation.html`
3. Presentation opens in your default browser

## Presentation Controls | プレゼンテーションコントロール

### Keyboard Shortcuts | キーボードショートカット
- **→ or Space** - Next slide | 次のスライド
- **← or Shift+Space** - Previous slide | 前のスライド
- **Home** - First slide | 最初のスライド
- **End** - Last slide | 最後のスライド
- **F** - Fullscreen mode | フルスクリーンモード
- **Esc** - Exit fullscreen | フルスクリーン終了
- **O** - Overview mode | 概要モード
- **S** - Speaker notes (if available) | スピーカーノート

### Navigation | ナビゲーション
- Use arrow keys or click arrows on screen
- Swipe on touch devices
- Overview mode (press 'O') shows all slides

## Setting Up GitHub Pages | GitHub Pagesのセットアップ

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/docs** folder
5. Click **Save**

### Step 2: Wait for Deployment
- GitHub will automatically build and deploy your site
- This may take a few minutes
- Check the deployment status in the **Actions** tab

### Step 3: Access Your Presentation
- Your presentation will be available at:
  `https://[your-username].github.io/2025HCI/week01-presentation.html`
- Replace `[your-username]` with your GitHub username

## Customizing Presentations | プレゼンテーションのカスタマイズ

### Editing Content | コンテンツの編集
- Open HTML file in any text editor
- Modify content within `<section>` tags
- Each `<section>` is one slide

### Changing Theme | テーマの変更
Replace the theme CSS line:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/white.css">
```

Available themes:
- white.css (default)
- black.css
- league.css
- beige.css
- sky.css
- night.css
- serif.css
- simple.css
- solarized.css

### Adding Custom Styles | カスタムスタイルの追加
Modify the `<style>` section in the HTML head to customize appearance.

## Creating New Presentations | 新しいプレゼンテーションの作成

1. Copy `week01-presentation.html` as template
2. Rename to `weekXX-presentation.html`
3. Update content for new week
4. Save in `docs/` folder
5. Commit and push to GitHub

## Offline Viewing | オフライン表示

To view presentations without internet:

1. Download reveal.js:
   ```bash
   cd docs
   mkdir reveal.js
   # Download from https://github.com/hakimel/reveal.js/releases
   ```

2. Update HTML links to use local files instead of CDN

## Troubleshooting | トラブルシューティング

### Presentation Not Showing
- Check GitHub Pages is enabled
- Verify correct branch and folder selected
- Wait a few minutes for deployment
- Check repository is public (or you're logged in)

### Formatting Issues
- Clear browser cache
- Try different browser
- Check HTML syntax for errors
- Verify CSS links are working

### PDF Export
To export presentation as PDF:
1. Add `?print-pdf` to URL
2. Print page using browser
3. Select "Save as PDF"

## Additional Resources | 追加リソース

- [Reveal.js Documentation](https://revealjs.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown to HTML Converters](https://www.markdownguide.org/tools/)

---

**Course:** HCI-101  
**Instructor:** Yuri Tijerino  
**Fall 2025**




