# Week 11: Conducting Tests and Analyzing Results
# 第11週：テスト実施と結果分析

**Course:** HCI-101 - Introduction to Human-Computer Interaction in the Era of Smart Devices and AI Chatbots
**コース：** HCI-101 - スマートデバイスとAIチャットボット時代のヒューマンコンピュータインタラクション入門
**Instructor:** Yuri Tijerino
**Semester:** Fall 2025 | 2025年秋学期

---

## Slide 1: Welcome to Week 11! | 第11週へようこそ！

### Today's Agenda | 今日のアジェンダ
- **Conducting Real Usability Tests** | 実際のユーザビリティテストの実施
- **Analyzing Test Results** | テスト結果の分析
- **Finding Patterns Across Participants** | 参加者間のパターンの発見
- **Prioritizing Usability Issues** | ユーザビリティ問題の優先順位付け
- **Creating Actionable Recommendations** | 実行可能な推奨事項の作成
- **Bot-Conducted Assessment** | ボット実施評価

### Learning Objectives | 学習目標
By the end of today, you will:
今日の終わりまでに、あなたは：
- Synthesize qualitative and quantitative test data | 定性的および定量的テストデータを統合する
- Identify patterns and recurring issues across users | ユーザー間のパターンと繰り返し発生する問題を特定する
- Apply severity rating frameworks to prioritize problems | 重大度評価フレームワークを適用して問題に優先順位を付ける
- Translate findings into clear, actionable recommendations | 調査結果を明確で実行可能な推奨事項に変換する

---

## Slide 2: From Testing to Analysis | テストから分析へ

### The Testing Journey | テストの旅
**Week 10:** Planning and preparing tests | テストの計画と準備
**Week 11:** Conducting tests and analyzing results | テストの実施と結果分析

### Why Analysis Matters | なぜ分析が重要なのか
- **Raw data isn't enough** | 生データだけでは十分ではない: Numbers and notes need interpretation | 数字とノートは解釈が必要
- **Patterns reveal truth** | パターンが真実を明らかにする: One user's problem might be noise; five users' problem is signal | 1人のユーザーの問題はノイズかもしれない；5人のユーザーの問題はシグナル
- **Prioritization is essential** | 優先順位付けは不可欠: You can't fix everything at once | すべてを一度に修正することはできない
- **Recommendations drive action** | 推奨事項が行動を促進: Analysis without recommendations is just information | 推奨事項のない分析は単なる情報

### The Goal | 目標
Transform test observations into a clear roadmap for improving your design.
テスト観察をデザインを改善するための明確なロードマップに変換します。

---

## Slide 3: Analyzing Quantitative Data | 定量的データの分析

### Core Metrics Analysis | コアメトリクス分析

#### 1. Task Success Rate Analysis | タスク成功率分析

**Calculate Overall Success Rate:**
全体成功率を計算：
```
Total Successful Tasks / Total Task Attempts × 100
```

**Example:**
5 participants × 5 tasks = 25 task attempts
20 successful completions
Success Rate: 20/25 = 80%

**Benchmark Comparison:**
- **>78%** = Acceptable | 許容可能
- **<78%** = Needs improvement | 改善が必要
- **<50%** = Critical usability problems | 重大なユーザビリティ問題

**Task-by-Task Analysis:**
Which specific tasks had low success rates?
どの特定のタスクが低い成功率を持っていましたか？

#### 2. Time on Task Analysis | タスク時間分析

**Calculate Average Time:**
平均時間を計算：
```
Sum of all task times / Number of successful completions
```

**Look for:**
- **Outliers:** Unusually long times indicate confusion | 異常に長い時間は混乱を示す
- **Patterns:** Do all users struggle at same point? | すべてのユーザーが同じポイントで苦労しますか？
- **Task comparison:** Which tasks take longest? | どのタスクが最も長くかかりますか？

**Consider:**
- Fast completion might indicate ease OR skipping steps | 高速完了は簡単さまたはステップのスキップを示す可能性
- Slow completion might indicate thoroughness OR confusion | 遅い完了は徹底性または混乱を示す可能性

#### 3. Error Rate Analysis | エラー率分析

**Types of Errors:**
- **Slips:** Unintentional mistakes (wrong tap) | 意図しない間違い（間違ったタップ）
- **Mistakes:** Wrong actions from misunderstanding | 誤解からの間違った行動

**Analyze:**
- Which tasks had most errors? | どのタスクが最も多くのエラーを持っていましたか？
- What caused the errors? | エラーの原因は何でしたか？
- How long did recovery take? | 回復にどのくらい時間がかかりましたか？
- Were errors critical or minor? | エラーは重大でしたか、それとも軽微でしたか？

---

## Slide 4: Analyzing Qualitative Data | 定性的データの分析

### Making Sense of Observations | 観察の意味を理解する

#### Quote Analysis | 引用分析
**What to look for:**
- **Direct user pain points** | 直接的なユーザーのペインポイント: "I can't find the search button!" | 「検索ボタンが見つからない！」
- **Expectations vs. reality** | 期待対現実: "I expected this to open settings" | 「これが設定を開くと期待していました」
- **Confusion indicators** | 混乱の指標: "What does this icon mean?" | 「このアイコンは何を意味しますか？」
- **Positive reactions** | ポジティブな反応: "This is so easy!" | 「これはとても簡単です！」

**Group Similar Quotes:**
Organize quotes by theme or issue to see patterns.
テーマまたは問題別に引用を整理してパターンを確認します。

#### Behavior Analysis | 行動分析
**Observed Actions:**
- **Hesitation points:** Where did users pause? | ユーザーはどこで一時停止しましたか？
- **Navigation paths:** Did users take expected route? | ユーザーは予想されるルートを取りましたか？
- **Repeated attempts:** Did users try multiple times? | ユーザーは複数回試しましたか？
- **Body language:** Frustration, confusion, delight | フラストレーション、混乱、喜び

**Pattern Recognition:**
If 3+ participants exhibit same behavior, it's a pattern worth addressing.
3人以上の参加者が同じ行動を示す場合、それは対処する価値のあるパターンです。

#### SUS Score Analysis | SUSスコア分析

**Calculate SUS Score:**
For each participant, score the 10 items, then calculate final score (0-100).
各参加者について、10項目を採点し、最終スコア（0-100）を計算します。

**Average SUS Across Participants:**
What's your overall usability score?
全体的なユーザビリティスコアは何ですか？

**Individual Item Analysis:**
Which specific statements had lowest/highest agreement?
どの特定のステートメントが最も低い/高い同意を得ましたか？

---

## Slide 5: Finding Patterns Across Participants | 参加者間のパターンの発見

### From Individual to Universal | 個別から普遍的へ

#### Triangulation Method | トライアンギュレーション方法
**Combine multiple data sources:**
複数のデータソースを組み合わせる：
- Quantitative metrics + Qualitative observations + User quotes = Complete picture
- 定量的メトリクス + 定性的観察 + ユーザー引用 = 完全な絵

#### Pattern Identification | パターン特定

**Strong Patterns (High Priority):**
強いパターン（高優先度）：
- **5/5 participants** struggle with same issue | 5/5人の参加者が同じ問題で苦労
- Issue causes task failure across multiple users | 問題が複数のユーザーでタスク失敗を引き起こす
- Consistent negative quotes about same feature | 同じ機能についての一貫したネガティブな引用

**Moderate Patterns (Medium Priority):**
中程度のパターン（中優先度）：
- **3-4/5 participants** experience issue | 3-4/5人の参加者が問題を経験
- Issue causes delays but eventual success | 問題が遅延を引き起こすが最終的には成功
- Mixed feedback on feature | 機能についての混合フィードバック

**Weak Patterns (Low Priority):**
弱いパターン（低優先度）：
- **1-2/5 participants** mention issue | 1-2/5人の参加者が問題を言及
- Issue is minor and doesn't affect task completion | 問題は軽微でタスク完了に影響しない
- Individual preference rather than usability problem | ユーザビリティ問題ではなく個人的な好み

### Example Pattern Analysis | パターン分析の例

**Issue:** Users can't find the price filter in e-commerce app
**問題：** ユーザーが電子商取引アプリで価格フィルターを見つけられない

**Evidence:**
- **Quantitative:** "Search for book under 2000 yen" task had 40% success rate | タスクの成功率が40%
- **Behavioral:** 4/5 users scrolled past filter without seeing it | 4/5人のユーザーがフィルターを見ずにスクロール
- **Quotes:** "Where is the price option?" (P02, P03, P05) | 「価格オプションはどこですか？」
- **Time:** Average task time 4.2 min vs. expected 1.5 min | 平均タスク時間4.2分対予想1.5分

**Conclusion:** High-priority pattern - filter visibility is a critical usability issue
**結論：** 高優先度パターン - フィルターの可視性は重大なユーザビリティ問題

---

## Slide 6: Severity Rating Framework | 重大度評価フレームワーク

### Prioritizing Issues | 問題の優先順位付け

#### Jakob Nielsen's Severity Ratings | Jakob Nielsenの重大度評価

**0 = Not a Usability Problem**
ユーザビリティ問題ではない
- Personal preference or isolated incident | 個人的な好みまたは孤立した事件

**1 = Cosmetic Problem**
表面的な問題
- Fix if time allows | 時間があれば修正
- Doesn't affect functionality | 機能に影響しない
- Example: Minor visual inconsistency | 例：軽微な視覚的不一致

**2 = Minor Usability Problem**
軽微なユーザビリティ問題
- Low priority fix | 低優先度の修正
- Causes slight delay or confusion | わずかな遅延または混乱を引き起こす
- Example: Unclear label that users eventually figure out | 例：ユーザーが最終的に理解する不明確なラベル

**3 = Major Usability Problem**
主要なユーザビリティ問題
- High priority fix | 高優先度の修正
- Causes significant delay or frustration | 重大な遅延またはフラストレーションを引き起こす
- Most users affected | ほとんどのユーザーが影響を受ける
- Example: Hidden navigation that's hard to discover | 例：発見が困難な隠されたナビゲーション

**4 = Usability Catastrophe**
ユーザビリティの壊滅的問題
- Critical - must fix before launch | 重大 - 起動前に修正する必要がある
- Prevents task completion | タスク完了を妨げる
- Affects majority of users | ユーザーの大多数に影響
- Example: Broken checkout flow in e-commerce app | 例：電子商取引アプリの壊れたチェックアウトフロー

---

## Slide 7: Prioritization Matrix | 優先順位付けマトリックス

### Impact vs. Frequency | 影響対頻度

#### Two-Dimensional Prioritization | 二次元優先順位付け

**Frequency:** How many users experience this issue?
頻度：この問題を経験するユーザーは何人ですか？
- High: 80-100% of users | 高：80-100%のユーザー
- Medium: 40-79% of users | 中：40-79%のユーザー
- Low: <40% of users | 低：40%未満のユーザー

**Impact:** How severe is the issue when it occurs?
影響：問題が発生したときにどの程度深刻ですか？
- Critical: Prevents task completion | 重大：タスク完了を妨げる
- Major: Causes significant delay/frustration | 主要：重大な遅延/フラストレーションを引き起こす
- Minor: Slight inconvenience | 軽微：わずかな不便

### Priority Matrix | 優先度マトリックス

```
                   HIGH FREQUENCY
                   高頻度
                   |
    CRITICAL       |    P1 - Fix Immediately
    IMPACT         |    P1 - すぐに修正
                   |
    ---------------+---------------
                   |
    MINOR          |    P3 - Fix Later
    IMPACT         |    P3 - 後で修正
                   |
                LOW FREQUENCY
                低頻度
```

**P1 (Critical Priority):** High Frequency + Critical Impact
高頻度 + 重大な影響
- Must fix before launch | 起動前に修正する必要がある
- Example: Search function doesn't work | 例：検索機能が動作しない

**P2 (High Priority):** High Frequency + Major Impact OR Medium Frequency + Critical Impact
高頻度 + 主要な影響または中頻度 + 重大な影響
- Fix in next iteration | 次の反復で修正
- Example: Confusing navigation labels | 例：混乱を招くナビゲーションラベル

**P3 (Medium Priority):** Medium Frequency + Minor Impact OR Low Frequency + Major Impact
中頻度 + 軽微な影響または低頻度 + 主要な影響
- Address if time permits | 時間があれば対処
- Example: Inconsistent button styling | 例：一貫性のないボタンスタイリング

**P4 (Low Priority):** Low Frequency + Minor Impact
低頻度 + 軽微な影響
- Backlog for future consideration | 将来の検討のためのバックログ
- Example: Edge case visual glitch | 例：エッジケースの視覚的グリッチ

---

## Slide 8: Root Cause Analysis | 根本原因分析

### Beyond Symptoms to Causes | 症状から原因へ

#### The "5 Whys" Technique | 「5つのなぜ」技法

**Symptom:** Users can't complete checkout
症状：ユーザーがチェックアウトを完了できない

**Why #1:** Why can't users complete checkout?
なぜ #1：なぜユーザーはチェックアウトを完了できないのですか？
→ They can't find the "Confirm Purchase" button
「購入確認」ボタンが見つからない

**Why #2:** Why can't they find the button?
なぜ #2：なぜボタンが見つからないのですか？
→ It's below the fold and not visible without scrolling
スクロールしないと見えず、フォールドの下にある

**Why #3:** Why is it below the fold?
なぜ #3：なぜフォールドの下にあるのですか？
→ Too much information above it (shipping details, order summary)
上に情報が多すぎる（配送詳細、注文概要）

**Why #4:** Why is there so much information above?
なぜ #4：なぜ上に情報がそんなに多いのですか？
→ We tried to show everything on one screen to avoid multiple pages
複数のページを避けるためにすべてを1つの画面に表示しようとした

**Why #5:** Why did we prioritize single screen over button visibility?
なぜ #5：なぜボタンの可視性よりも単一画面を優先したのですか？
→ Assumption that users prefer fewer clicks (not validated with testing)
ユーザーがより少ないクリックを好むという仮定（テストで検証されていない）

**Root Cause:** Design decision based on unvalidated assumption about user preference
根本原因：ユーザーの好みに関する検証されていない仮定に基づくデザイン決定

**Solution:** Prioritize critical actions (button) over information density; consider progressive disclosure
解決策：情報密度よりも重要なアクション（ボタン）を優先する；段階的開示を検討する

---

## Slide 9: Creating Actionable Recommendations | 実行可能な推奨事項の作成

### From Problems to Solutions | 問題から解決策へ

#### Characteristics of Good Recommendations | 良い推奨事項の特性

**Specific** | 具体的
- ❌ Bad: "Improve navigation" | 悪い：「ナビゲーションを改善する」
- ✅ Good: "Move main menu icon to top-left corner and increase size to 44×44 px" | 良い：「メインメニューアイコンを左上隅に移動し、サイズを44×44 pxに増やす」

**Actionable** | 実行可能
- ❌ Bad: "Make it more user-friendly" | 悪い：「よりユーザーフレンドリーにする」
- ✅ Good: "Add price filter to top of product list page with clear '$' icon" | 良い：「明確な'$'アイコン付きで製品リストページの上部に価格フィルターを追加する」

**Evidence-Based** | 証拠に基づく
- Reference test data | テストデータを参照
- Example: "Based on 4/5 users failing to notice the filter..." | 例：「4/5人のユーザーがフィルターに気付かなかったことに基づいて...」

**Prioritized** | 優先順位付け
- Indicate urgency (P1, P2, P3, P4) | 緊急性を示す（P1、P2、P3、P4）
- Link to severity and frequency | 重大度と頻度にリンク

**User-Centered** | ユーザー中心
- Focus on user needs, not designer preferences | デザイナーの好みではなくユーザーニーズに焦点
- Example: "Users need to see price filter immediately when searching" | 例：「ユーザーは検索時にすぐに価格フィルターを見る必要がある」

---

## Slide 10: Recommendation Template | 推奨事項テンプレート

### Structured Approach | 構造化されたアプローチ

#### Recommendation Format | 推奨事項形式

**Issue Title:**
問題タイトル：
Price filter is not visible to users
ユーザーに価格フィルターが表示されない

**Priority:** P1 (Critical)
優先度：P1（重大）

**Evidence:**
証拠：
- 4/5 participants (80%) couldn't find price filter
- Task success rate: 40% (below 78% benchmark)
- Average task time: 4.2 min (expected: 1.5 min)
- Quotes: "Where is the price option?" (P02, P03, P05)

**Root Cause:**
根本原因：
Filter is hidden in collapsed "Advanced Filters" section with low visibility
フィルターは可視性の低い「高度なフィルター」セクションに折りたたまれている

**Recommendation:**
推奨事項：
1. Move price filter to prominent position at top of product listing
2. Display filter as expanded by default (not collapsed)
3. Use clear "$" icon and "Price Range" label
4. Increase filter section height from 32px to 48px for better visibility

1. 価格フィルターを製品リストの上部の目立つ位置に移動
2. フィルターをデフォルトで展開表示（折りたたまない）
3. 明確な「$」アイコンと「価格範囲」ラベルを使用
4. より良い可視性のためにフィルターセクションの高さを32pxから48pxに増やす

**Expected Impact:**
予想される影響：
- Increase task success rate to >78%
- Reduce average task time to ~1.5 minutes
- Improve user satisfaction with search functionality

- タスク成功率を78%以上に増やす
- 平均タスク時間を約1.5分に短縮
- 検索機能に対するユーザー満足度を改善

---

## Slide 11: Types of Design Improvements | デザイン改善の種類

### Solution Categories | 解決策カテゴリ

#### 1. Quick Fixes (Low Effort, High Impact) | クイックフィックス（低労力、高影響）
- Label changes | ラベル変更
- Color/contrast adjustments | 色/コントラスト調整
- Button size increases | ボタンサイズの増加
- Error message improvements | エラーメッセージの改善
**Timeline:** Can be fixed in hours/days | 時間/日で修正可能

#### 2. Interface Refinements (Medium Effort, Medium-High Impact) | インターフェース改良（中程度の労力、中-高影響）
- Navigation restructuring | ナビゲーション再構築
- Layout changes | レイアウト変更
- Visual hierarchy improvements | ビジュアル階層改善
- Interaction pattern updates | インタラクションパターン更新
**Timeline:** Can be fixed in days/weeks | 日/週で修正可能

#### 3. Feature Additions (High Effort, Variable Impact) | 機能追加（高労力、変動影響）
- New filtering options | 新しいフィルタリングオプション
- Search functionality | 検索機能
- User customization | ユーザーカスタマイズ
- Advanced features | 高度な機能
**Timeline:** May require weeks/months | 週/月が必要な場合がある

#### 4. Fundamental Redesigns (Very High Effort, Variable Impact) | 基本的な再設計（非常に高い労力、変動影響）
- Complete information architecture overhaul | 完全な情報アーキテクチャの見直し
- Workflow redesign | ワークフロー再設計
- Interaction model changes | インタラクションモデル変更
**Timeline:** Requires months and new testing | 月と新しいテストが必要
**Note:** Avoid if possible; indicates major design problems | 可能であれば避ける；主要なデザイン問題を示す

---

## Slide 12: Communicating Findings | 調査結果の伝達

### Presenting Results to Stakeholders | ステークホルダーへの結果の提示

#### Executive Summary | エグゼクティブサマリー
- **Overall usability score** | 全体的なユーザビリティスコア: SUS average | SUS平均
- **Key findings** | 主要な調査結果: Top 3-5 critical issues | 上位3-5の重大な問題
- **High-priority recommendations** | 高優先度の推奨事項: What must be fixed | 修正する必要があるもの
- **Expected impact** | 予想される影響: How changes will improve experience | 変更が体験をどのように改善するか

#### Visual Presentation | ビジュアルプレゼンテーション
- **Charts and graphs** | チャートとグラフ: Success rates, time data, error rates | 成功率、時間データ、エラー率
- **Heatmaps** | ヒートマップ: Where users clicked, scrolled, looked | ユーザーがクリック、スクロール、見た場所
- **User quotes** | ユーザー引用: Powerful evidence of problems | 問題の強力な証拠
- **Video clips** | ビデオクリップ: Show actual user struggles (powerful!) | 実際のユーザーの苦労を示す（強力！）

#### Recommendations Report Structure | 推奨事項レポート構造
1. **Executive Summary** | エグゼクティブサマリー
2. **Methodology** | 方法論: How testing was conducted | テストがどのように実施されたか
3. **Participant Demographics** | 参加者の人口統計
4. **Quantitative Results** | 定量的結果: Metrics and benchmarks | メトリクスとベンチマーク
5. **Qualitative Findings** | 定性的調査結果: Patterns and themes | パターンとテーマ
6. **Prioritized Issues** | 優先順位付けされた問題: P1, P2, P3, P4 | P1、P2、P3、P4
7. **Recommendations** | 推奨事項: Specific, actionable fixes | 具体的で実行可能な修正
8. **Next Steps** | 次のステップ: Implementation timeline | 実装タイムライン

---

## Slide 13: Iterative Design Cycle | 反復デザインサイクル

### Testing is Not a One-Time Event | テストは1回限りのイベントではない

#### The Continuous Improvement Loop | 継続的改善ループ

**1. Design** | デザイン
Create or refine interface
インターフェースを作成または改良

**2. Test** | テスト
Evaluate with users
ユーザーで評価

**3. Analyze** | 分析
Identify issues and patterns
問題とパターンを特定

**4. Prioritize** | 優先順位付け
Determine what to fix first
最初に修正するものを決定

**5. Redesign** | 再設計
Implement improvements
改善を実装

**6. Test Again** | 再度テスト
Validate changes worked
変更が機能したことを検証

→ **Repeat** | 繰り返す

### When to Stop Testing? | テストをいつ停止しますか？

**Never!** | 決して！
- Designs evolve | デザインは進化する
- User needs change | ユーザーニーズが変化する
- Technology advances | 技術が進歩する
- New features require testing | 新しい機能にはテストが必要

**For Your Projects:**
プロジェクトについて：
- Test once with initial prototype | 初期プロトタイプで一度テスト
- Implement high-priority fixes | 高優先度の修正を実装
- Time permitting: test again with improved version | 時間が許せば：改善版で再度テスト

---

## Slide 14: Common Analysis Mistakes to Avoid | 避けるべき一般的な分析ミス

### Pitfalls and How to Avoid Them | 落とし穴とそれを避ける方法

#### 1. Confirmation Bias | 確証バイアス
**Mistake:** Only seeing data that confirms your design was good
間違い：デザインが良かったことを確認するデータのみを見る
**Avoid:** Actively look for problems; assume your design has issues
避ける：積極的に問題を探す；デザインに問題があると仮定する

#### 2. Cherry-Picking Data | データのチェリーピッキング
**Mistake:** Highlighting one positive quote while ignoring four negative ones
間違い：4つのネガティブな引用を無視しながら1つのポジティブな引用を強調する
**Avoid:** Report all findings objectively; look for patterns across all participants
避ける：すべての調査結果を客観的に報告する；すべての参加者間のパターンを探す

#### 3. Ignoring Outliers | 外れ値を無視する
**Mistake:** Dismissing unusual behavior as "one weird user"
間違い：異常な行動を「1人の奇妙なユーザー」として却下する
**Avoid:** Investigate outliers - they might reveal edge cases or accessibility issues
避ける：外れ値を調査する - エッジケースまたはアクセシビリティ問題を明らかにする可能性がある

#### 4. Vague Recommendations | 曖昧な推奨事項
**Mistake:** "Make the navigation better"
間違い：「ナビゲーションをより良くする」
**Avoid:** Be specific with actionable steps
避ける：実行可能なステップで具体的にする

#### 5. Analysis Paralysis | 分析麻痺
**Mistake:** Over-analyzing data forever without taking action
間違い：行動を起こさずにデータを永遠に過剰分析する
**Avoid:** Set deadline for analysis; prioritize and move to implementation
避ける：分析の締め切りを設定する；優先順位を付けて実装に移る

#### 6. Defending Your Design | デザインを擁護する
**Mistake:** "Users just don't understand my brilliant design"
間違い：「ユーザーは私の素晴らしいデザインを理解していないだけです」
**Avoid:** If users don't understand it, it's a design problem, not a user problem
避ける：ユーザーが理解しない場合、それはユーザー問題ではなくデザイン問題です

---

## Slide 15: Your Turn: Analyzing Test Results | あなたの番：テスト結果の分析

### Today's Activity (60 minutes) | 今日のアクティビティ（60分）

#### Part 1: Conduct Real Usability Tests (30 minutes) | パート1：実際のユーザビリティテストの実施（30分）

**What You'll Do:**
- Test your prototype with 2-3 participants (classmates/friends)
- Use the test plan you created last week
- Apply think-aloud protocol
- Record all metrics: success rate, time, errors, SUS scores
- Take detailed observation notes

**Moderator Reminder:**
- Stay neutral | 中立を保つ
- Prompt think-aloud | シンクアラウドを促す
- Document everything | すべてを文書化する
- Thank participants | 参加者に感謝する

#### Part 2: Analyze Results and Create Recommendations (30 minutes) | パート2：結果分析と推奨事項の作成（30分）

**Analysis Steps:**
1. Calculate quantitative metrics (success rates, averages)
2. Identify patterns across participants
3. List all observed issues
4. Apply severity ratings (0-4)
5. Use priority matrix (frequency × impact)
6. Create 3-5 specific, actionable recommendations
7. Draft findings summary

**Bot Support:**
The bot will guide you through analysis templates and prioritization frameworks.
ボットが分析テンプレートと優先順位付けフレームワークを案内します。

---

## Slide 16: Bot-Conducted Assessment | ボット実施評価

### Conversational Interview on HCI Principles | HCI原則に関する会話インタビュー

#### Assessment Format | 評価形式
- **Interview-style conversation** with HCI-101 Bot | HCI-101ボットとのインタビュー形式の会話
- **15-20 minutes** | 15-20分
- **Topics covered:** | カバーされるトピック：
  - Usability testing methodology | ユーザビリティテスト方法論
  - Metrics and analysis | メトリクスと分析
  - Design decision rationale | デザイン決定の根拠
  - Prioritization frameworks | 優先順位付けフレームワーク

#### What to Expect | 期待すること
- Bot will ask about your design choices | ボットがデザイン選択について尋ねる
- Explain your testing process | テストプロセスを説明する
- Justify recommendations based on evidence | 証拠に基づいて推奨事項を正当化する
- Demonstrate understanding of HCI principles | HCI原則の理解を示す

#### Assessment Criteria | 評価基準
- **Understanding of usability testing methods** | ユーザビリティテスト方法の理解
- **Ability to analyze test data** | テストデータを分析する能力
- **Evidence-based reasoning** | 証拠に基づく推論
- **Application of prioritization frameworks** | 優先順位付けフレームワークの適用
- **Clear communication of findings** | 調査結果の明確なコミュニケーション

#### Preparation Tips | 準備のヒント
- Review your test results | テスト結果をレビュー
- Be ready to explain your design decisions | デザイン決定を説明する準備をする
- Practice articulating usability issues | ユーザビリティ問題を明確に表現する練習をする
- Understand why you prioritized certain fixes | 特定の修正に優先順位を付けた理由を理解する

**Note:** This is individual assessment. External AI chatbots not allowed during assessment.
注：これは個別評価です。評価中は外部AIチャットボットは許可されません。

---

## Slide 17: Key Takeaways | 重要なポイント

### Remember | 覚えておいてください

#### 1. Analysis Transforms Data into Insights | 分析はデータを洞察に変換する
- Raw numbers and notes aren't enough | 生の数字とノートだけでは十分ではない
- Look for patterns across participants | 参加者間のパターンを探す
- Combine quantitative + qualitative data | 定量的 + 定性的データを組み合わせる

#### 2. Prioritization is Essential | 優先順位付けは不可欠
- You can't fix everything at once | すべてを一度に修正することはできない
- Use severity ratings (0-4) | 重大度評価を使用する（0-4）
- Apply frequency × impact matrix | 頻度 × 影響マトリックスを適用する
- Focus on high-priority issues first | 高優先度の問題に最初に焦点を当てる

#### 3. Recommendations Must Be Actionable | 推奨事項は実行可能でなければならない
- Specific, not vague | 具体的で曖昧ではない
- Evidence-based | 証拠に基づく
- Prioritized | 優先順位付け
- User-centered | ユーザー中心

#### 4. Design is Iterative | デザインは反復的
- Testing → Analysis → Redesign → Test Again | テスト → 分析 → 再設計 → 再度テスト
- Each iteration improves the design | 各反復がデザインを改善する
- Continuous improvement is the goal | 継続的改善が目標

### Next Week | 来週
**Week 12: Accessibility and Inclusive Design**
Learn how to design interfaces that work for all users, including those with disabilities.

**第12週：アクセシビリティと包括的デザイン**
障害を持つユーザーを含むすべてのユーザーに機能するインターフェースをデザインする方法を学びます。

---

*End of Presentation*
*プレゼンテーション終了*

**Course:** HCI-101 | **Instructor:** Yuri Tijerino | **Fall 2025**
