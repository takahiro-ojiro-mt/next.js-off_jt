# 開発環境を整える

## 🎯 目的

プロジェクトごとに統一された開発環境を構築し、誰でも同じ状態で Next.js アプリを起動・開発できるようにする。  
VS Code + Dev Container + Docker を使い、再現性のある環境を用意する。

---

## 🎯 今週のゴール

- VS Code で Dev Container を開いてプロジェクトを起動できる
- `pnpm dev` または `make dev` で Next.js アプリが起動できる
- GitHub に Push し、Pull Request を作成できる

---

## ✅ Dev Container とは？

- VS Code が提供する機能で、**Docker コンテナ内で開発する仕組み**
- `.devcontainer/` ディレクトリに設定を置く
- OSやNode.jsのバージョンを揃えた開発ができる

---

## ✅ 起動手順（初回）

1. GitHub からリポジトリを clone

```bash
git clone https://github.com/your-team/your-project.git
cd your-project
```

2. VS Code でプロジェクトを開き、「Reopen in Container」を選択  
   - `.devcontainer/devcontainer.json` が読み込まれて起動

3. 起動後、自動で依存パッケージがインストールされる（`pnpm install`）

4. 開発サーバーを起動

```bash
# 方法1（直接）
pnpm dev

# 方法2（Makefile を使う）
make dev
```

5. `http://localhost:3000` を開いて初期画面が表示されれば成功！

---

## ✅ 演習①：開発環境を起動してNext.jsを立ち上げる

### 🎯 要件

- リポジトリを `git clone` する
- VS Code を使って Dev Container を起動
- `pnpm dev` または `make dev` で開発サーバーを起動
- `http://localhost:3000` にアクセスして画面が表示されることを確認

### 🔖 確認方法

- ブラウザでページが表示された状態をスクリーンショット
- `docs/week5-devcontainer.md` に起動成功のコメントを残す

---

## 🔄 提出方法

- 演習①の起動確認コメントを `docs/week1-devcontainer.md` に記入してコミット
- メンターがレビューを行い、必要に応じて修正対応を行う

---

## ✅ まとめ

- Dev Container を使うことで全員が同じ環境で開発できる
- `make` コマンドで作業を効率化できる
- GitHub の PR フローは今後も繰り返し使うので慣れておこう！