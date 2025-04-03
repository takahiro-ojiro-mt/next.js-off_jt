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

## 🔄 提出方法

- 演習①は GitHub 上で Pull Request を提出
- 演習②は Markdown 形式のレポートを提出
- 両方ともメンターがレビューし、FBを行います
