#!/usr/bin/env python3
"""
Convert instructor notes markdown files to scrollable HTML with navigation.
Creates HTML files for weeks 1-14 with proper navigation between weeks.
"""

import os
import re
from pathlib import Path

# Base directory
BASE_DIR = Path("/Users/ontologist/Documents/GitHub/2025HCI")
LECTURES_DIR = BASE_DIR / "lectures"
DOCS_DIR = BASE_DIR / "docs"

def markdown_to_html(markdown_text):
    """Convert markdown to HTML with basic formatting."""
    html = markdown_text

    # Convert code blocks (``` language ... ```)
    html = re.sub(r'```(\w+)?\n(.*?)\n```', r'<pre><code class="\1">\2</code></pre>', html, flags=re.DOTALL)

    # Convert headings
    html = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^#### (.*?)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)

    # Convert horizontal rules
    html = re.sub(r'^---$', r'<hr>', html, flags=re.MULTILINE)

    # Convert bold and italic
    html = re.sub(r'\*\*\*(.+?)\*\*\*', r'<strong><em>\1</em></strong>', html)
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)

    # Convert unordered lists
    html = re.sub(r'^\- \[ \] (.+?)$', r'<li class="checkbox">&#9744; \1</li>', html, flags=re.MULTILINE)
    html = re.sub(r'^\- (.+?)$', r'<li>\1</li>', html, flags=re.MULTILINE)

    # Wrap consecutive list items in <ul>
    html = re.sub(r'(<li>.*?</li>\n)+', lambda m: '<ul>\n' + m.group(0) + '</ul>\n', html, flags=re.DOTALL)

    # Convert paragraphs (lines not already in tags)
    lines = html.split('\n')
    in_tag = False
    result = []
    for line in lines:
        stripped = line.strip()
        if not stripped:
            result.append(line)
            continue
        if stripped.startswith('<') or in_tag:
            result.append(line)
            if '<pre>' in stripped or '<ul>' in stripped or '<ol>' in stripped:
                in_tag = True
            if '</pre>' in stripped or '</ul>' in stripped or '</ol>' in stripped:
                in_tag = False
        else:
            if not in_tag:
                result.append(f'<p>{line}</p>')
            else:
                result.append(line)

    return '\n'.join(result)

def create_navigation(week_num):
    """Create navigation HTML for a specific week."""
    nav_html = '<nav class="week-nav">\n'
    nav_html += '    <div class="nav-container">\n'

    # Home button
    nav_html += '        <a href="index.html" class="nav-btn nav-home">🏠 Home</a>\n'

    # Previous week button
    if week_num > 1:
        nav_html += f'        <a href="week{week_num-1:02d}-instructor-notes.html" class="nav-btn nav-prev">← Week {week_num-1}</a>\n'
    else:
        nav_html += '        <span class="nav-btn nav-disabled">← Previous</span>\n'

    # Current week indicator
    nav_html += f'        <span class="nav-current">Week {week_num} Instructor Notes</span>\n'

    # Next week button
    if week_num < 14:
        nav_html += f'        <a href="week{week_num+1:02d}-instructor-notes.html" class="nav-btn nav-next">Week {week_num+1} →</a>\n'
    else:
        nav_html += '        <span class="nav-btn nav-disabled">Next →</span>\n'

    # View presentation button
    nav_html += f'        <a href="week{week_num:02d}-presentation.html" class="nav-btn nav-presentation">📊 View Presentation</a>\n'

    nav_html += '    </div>\n'
    nav_html += '</nav>\n'

    return nav_html

def create_html_template(week_num, content):
    """Create complete HTML file with header, navigation, and content."""

    nav = create_navigation(week_num)

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week {week_num} Instructor Notes - HCI-101</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Additional styles for instructor notes */
        .notes-container {{
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }}

        .notes-content {{
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            line-height: 1.8;
        }}

        .notes-content h1 {{
            color: var(--primary-color);
            border-bottom: 3px solid var(--primary-color);
            padding-bottom: 15px;
            margin-bottom: 30px;
        }}

        .notes-content h2 {{
            color: var(--secondary-color);
            margin-top: 40px;
            margin-bottom: 20px;
            border-left: 4px solid var(--secondary-color);
            padding-left: 15px;
        }}

        .notes-content h3 {{
            color: var(--primary-color);
            margin-top: 30px;
            margin-bottom: 15px;
        }}

        .notes-content h4 {{
            color: var(--text-dark);
            margin-top: 20px;
            margin-bottom: 10px;
            font-style: italic;
        }}

        .notes-content ul {{
            margin-left: 30px;
            margin-bottom: 20px;
        }}

        .notes-content li {{
            margin-bottom: 10px;
            padding-left: 5px;
        }}

        .notes-content li.checkbox {{
            list-style-type: none;
            margin-left: -20px;
        }}

        .notes-content p {{
            margin-bottom: 15px;
            color: var(--text-dark);
        }}

        .notes-content hr {{
            border: none;
            border-top: 2px solid var(--border-color);
            margin: 40px 0;
        }}

        .notes-content strong {{
            color: var(--text-dark);
            font-weight: 600;
        }}

        .notes-content em {{
            color: var(--text-light);
            font-style: italic;
        }}

        .notes-content code {{
            background-color: #f3f4f6;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }}

        .notes-content pre {{
            background-color: #1f2937;
            color: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
        }}

        .notes-content pre code {{
            background-color: transparent;
            padding: 0;
            color: #f9fafb;
        }}

        /* Week Navigation */
        .week-nav {{
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
            margin-bottom: 30px;
        }}

        .nav-container {{
            max-width: 1200px;
            margin: 0 auto;
            padding: 15px 20px;
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
        }}

        .nav-btn {{
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            white-space: nowrap;
        }}

        .nav-home {{
            background-color: var(--accent-color);
            color: white;
        }}

        .nav-home:hover {{
            background-color: #059669;
        }}

        .nav-prev, .nav-next {{
            background-color: var(--primary-color);
            color: white;
        }}

        .nav-prev:hover, .nav-next:hover {{
            background-color: #1e5bb8;
        }}

        .nav-presentation {{
            background-color: var(--secondary-color);
            color: white;
        }}

        .nav-presentation:hover {{
            background-color: #6d28d9;
        }}

        .nav-disabled {{
            background-color: var(--disabled);
            color: white;
            cursor: not-allowed;
            opacity: 0.5;
        }}

        .nav-current {{
            flex: 1;
            text-align: center;
            font-weight: 600;
            color: var(--text-dark);
            min-width: 200px;
        }}

        /* Scrollable content */
        html {{
            scroll-behavior: smooth;
        }}

        /* Responsive */
        @media (max-width: 768px) {{
            .notes-content {{
                padding: 20px;
            }}

            .nav-container {{
                flex-direction: column;
                gap: 10px;
            }}

            .nav-btn, .nav-current {{
                width: 100%;
                text-align: center;
            }}
        }}
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>HCI-101: Human-Computer Interaction</h1>
            <p class="subtitle">Week {week_num} Instructor Notes | 第{week_num}週インストラクターノート</p>
            <p class="instructor">Instructor: Yuri Tijerino | Kwansei Gakuin University</p>
        </div>
    </header>

    {nav}

    <main class="notes-container">
        <div class="notes-content">
{content}
        </div>
    </main>

    {nav}

    <footer>
        <div class="container">
            <p>&copy; 2025 Yuri Tijerino. All rights reserved.</p>
            <p>著作権 © 2025 Yuri Tijerino. 無断転載を禁じます。</p>
            <p style="margin-top: 10px; font-size: 0.9em;">Kwansei Gakuin University | School of Policy Studies | Department of Applied Informatics</p>
        </div>
    </footer>
</body>
</html>'''

    return html

def convert_week(week_num):
    """Convert a single week's instructor notes to HTML."""
    input_file = LECTURES_DIR / f"week{week_num:02d}-instructor-notes.md"
    output_file = DOCS_DIR / f"week{week_num:02d}-instructor-notes.html"

    if not input_file.exists():
        print(f"⚠️  Warning: {input_file} not found, skipping...")
        return False

    # Read markdown content
    with open(input_file, 'r', encoding='utf-8') as f:
        markdown_content = f.read()

    # Convert markdown to HTML
    html_content = markdown_to_html(markdown_content)

    # Create complete HTML file
    complete_html = create_html_template(week_num, html_content)

    # Write HTML file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(complete_html)

    print(f"✅ Created: {output_file.name}")
    return True

def main():
    """Convert all 14 weeks of instructor notes."""
    print("🚀 Starting conversion of instructor notes to HTML...\n")

    # Ensure docs directory exists
    DOCS_DIR.mkdir(exist_ok=True)

    success_count = 0
    failed = []

    for week in range(1, 15):
        if convert_week(week):
            success_count += 1
        else:
            failed.append(week)

    print(f"\n{'='*60}")
    print(f"✨ Conversion Complete!")
    print(f"{'='*60}")
    print(f"✅ Successfully created: {success_count}/14 HTML files")

    if failed:
        print(f"❌ Failed weeks: {', '.join(map(str, failed))}")

    print(f"\n📁 Output location: {DOCS_DIR}")
    print(f"\n🔗 Files created:")
    for week in range(1, 15):
        if week not in failed:
            print(f"   - week{week:02d}-instructor-notes.html")

if __name__ == "__main__":
    main()
