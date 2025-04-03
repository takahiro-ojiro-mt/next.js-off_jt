## ✅ Git / GitHub の基本操作

Git はファイルの変更履歴を管理するためのバージョン管理システムです。  
GitHub はその Git のリポジトリをホスティングし、チームでの開発を支えるプラットフォームです。

---

### 📘 Git の基礎用語

| 用語 | 説明 |
|------|------|
| リポジトリ（repo） | プロジェクトのソースコードと履歴を保存する場所 |
| コミット（commit） | ファイルの変更内容を記録する作業単位 |
| ブランチ（branch） | 機能ごとに分岐した開発ライン（mainとfeatureなど） |
| プッシュ（push） | ローカルの変更をGitHubへ反映させる操作 |
| プルリクエスト（PR） | 開発ブランチの変更をmainに統合してもらうための提案 |

---

### 🔧 Git 初期設定とclone

```bash
# Gitのユーザー情報設定（初回のみ）
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# リポジトリのclone（コピー）
git clone https://github.com/yourname/project.git
cd project
```

---

### 🔧 基本的な操作コマンド

```bash
# ブランチ作成と切り替え
git checkout -b feature/your-branch-name

# ファイルの変更をステージング
git add .

# コミット（変更を記録）
git commit -m "READMEに自己紹介を追加"

# GitHub にプッシュ
git push origin feature/your-branch-name
```

---

### 🛠️ GitHub でのPull Request作成

1. GitHubにアクセスし、Pushしたブランチを確認
2. 「Compare & pull request」をクリック
3. 以下の情報を記入：
   - 変更概要
   - 影響範囲
   - レビューしてほしいポイント

---

### 💡 Tips：良いコミットメッセージとは？

- 「何をしたか」がすぐにわかるように書く
- 英語 or 日本語どちらでも良いが、**命令形**が基本

例：
- `fix: メールバリデーションの不具合を修正`
- `add: プロフィール表示用のCardコンポーネントを追加`

https://qiita.com/muranakar/items/20a7927ffa63a5ca226a

---

### ✅ まとめ

- Git での変更記録 → GitHubへの反映 → PRによる共有が基本の流れ
- ブランチ運用とPRフローに慣れておくと実務でも安心
- チーム開発では「レビューを受ける前提」での作業整理が重要！