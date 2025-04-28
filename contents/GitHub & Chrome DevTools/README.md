# 開発ツールの基本（GitHub & Chrome DevTools）

## 🎯 目的

実務で必須となる Git / GitHub の基本操作を習得し、Chrome DevTools を使って DOM / CSS / ネットワーク通信 / コンソールログの確認ができるようになる。

---

## 🎯 今週のゴール

- Git の基本操作（clone, branch, commit, push）を理解し使えるようになる
- GitHub で Pull Request を作成し、レビュー・修正の流れを体験する
- Chrome DevTools を使って HTML/CSS の構造や fetch 通信を確認できる
- エラー発見やログ出力など、デバッグの初歩を理解する

---

## ✅ Git / GitHub の基本操作

[リンク](GitHub%20の基本操作.md)

---

## ✅ ブランチ運用とレビュー体験

[リンク](ブランチ運用とレビュー.md)

---

## ✅ Chrome DevTools の基本操作

[リンク](Chrome%20DevTools%20の基本操作.md)

---

## ✅ 演習①：GitHub Pull Request 提出体験

### 📘 内容

GitHub でブランチを切って簡単な変更（自己紹介文の追加）を行い、Pull Request を提出 → コメントに応じて修正 → 再提出までの一連の流れを体験します。

### 🎯 要件

- 任意の GitHub リポジトリを `git clone` する
- `feature/your-name` ブランチを作成
- `README.md` に名前・一言コメントを追加
- `git add` → `commit` → `push` で GitHub に反映
- Pull Request を作成し、レビューを依頼
- 指摘があれば修正し、再 Push して対応

### 📄 PRテンプレート例

```markdown
## 概要
READMEに自己紹介を追加しました

## 変更点
- 名前と一言を追記

## レビューしてほしいポイント
- Markdown記法のミスがないか確認お願いします
```

---

## ✅ 演習②：Chrome DevTools レポート作成

### 📘 内容

任意の Web サイトを開き、Chrome DevTools を使って DOM 構造や CSS、API 通信、JavaScript ログなどを調査し、レポートとしてまとめて提出します。

### 🎯 要件

以下の内容を DevTools を使って調査し、Markdown 形式で報告してください：

| 項目 | 内容 |
|------|------|
| DOM構造 | Elementsタブで確認した HTML の構造（タグ階層・IDなど） |
| CSS適用 | Stylesタブでのスタイルとその継承元 |
| 通信内容 | Networkタブで確認した API 通信（URL・レスポンス） |
| エラー / ログ | Consoleタブに出力されたログやエラーの例 |

### 📄 提出形式

```markdown
## WebページのDevToolsレポート

### 🔍 Elements
- `<div id="main">` という要素がルートになっていた
- クラス名：.header, .nav などが確認できた

### 🎨 Styles
- `.header` に `display: flex` が適用されていた
- 色は `color: #333` で継承元は styles.css

### 🌐 Network
- `GET https://api.example.com/user` が実行されていた
- ステータスコード：200
- レスポンス：`{"name":"Taro"}`

### 🧾 Console
- `Uncaught TypeError: undefined is not a function` のエラーが出ていた
```

---

<!-- 課題を提出する際、プルリクエストに以下を貼り付けてください

## 📊 評価チェックリスト（Week 4：GitHubとDevTools）

※ 各観点ごとにチェック数を数え、下記ルールで点数化  
（チェック数 0個=0点 / 1個=1点 / 2個=3点 / 3個以上=5点）

---

### 🎯 成果物（アウトプットの完成度）

- [ ] Gitを使って clone / branch / commit / push の基本操作を行っている
- [ ] GitHub上で Pull Request を作成し、差分が確認できる状態になっている
- [ ] PRに自己評価コメントが含まれている
- [ ] Chrome DevTools を使い、HTML / CSS / Network / Console のいずれかを確認している

---

### 📚 知識理解（仕組みや構文の理解）

- [ ] Gitの役割とリモートリポジトリの概念を理解している
- [ ] Pull Requestの目的とレビューの流れを説明できる
- [ ] DevTools の各タブ（Elements / Console / Network）の役割を説明できる
- [ ] fetchやAPI通信に対するDevTools上での確認ポイントを理解している

---

### 💬 説明力（なぜその実装をしたか）

- [ ] ブランチの切り方やコミットの粒度について意図を説明できる
- [ ] PRコメントに「何をしたか」「なぜそれをしたか」が書かれている
- [ ] DevToolsで確認したログやエラーの情報を具体的に共有できる
- [ ] Git/GitHubの操作を他人に説明できる（社内OJTや後輩想定で）

---

### 🔧 自己修正（修正・改善の自走力）

- [ ] PRレビューを受けて自分で修正・再Pushできている
- [ ] コンフリクトが発生した場合に自力で解消できた
- [ ] DevTools上のエラーやスタイル崩れに気づいて自力で調整した
- [ ] Gitの操作に迷った際、ドキュメントや先行事例を調べて対応した

---

📝 評価観点ごとのチェック数を数え、以下のように点数に換算してください：

| チェック数 | 点数 |
|------------|------|
| 0個        | 0点  |
| 1個        | 1点  |
| 2個        | 3点  |
| 3〜4個     | 5点  |

-->