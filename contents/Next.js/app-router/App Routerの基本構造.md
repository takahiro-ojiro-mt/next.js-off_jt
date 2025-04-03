## ✅ App Routerの基本構造

Next.js 13以降では、App Router が導入され `app/` ディレクトリを使ったルーティングが推奨されています。  
App Router によるディレクトリ構造は、**ファイルベースのルーティング**と**ページごとの設定管理**が特徴です。

---

### 📁 ディレクトリ構造の基本

```bash
app/
├── page.tsx        # ルートパス（/）
├── about/
│   ├── page.tsx    # /about
│   └── layout.tsx  # /about 以下の共通レイアウト
├── contact/
│   ├── page.tsx    # /contact
```

- `page.tsx`：そのディレクトリがルーティングされるページ
- `layout.tsx`：同階層以下のページに適用される共通レイアウト
- ディレクトリ名 = URLパス名になる（`app/about/` → `/about`）

---

### 🧭 ページの定義（`page.tsx`）

```tsx
// app/page.tsx
export default function HomePage() {
  return <h1>ホームページ</h1>;
}
```

- `export default` された関数がページとして描画されます
- 複数の `page.tsx` を置けば、ルーティングが自動で生成される

---

### 🎨 レイアウトの適用（`layout.tsx`）

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>ヘッダー</header>
        {children}
        <footer>フッター</footer>
      </body>
    </html>
  );
}
```

- すべての `page.tsx` の周りに自動で適用される
- `children` に各ページのコンテンツが挿入される
- HTML の基本構造もここで定義する（`<html>` や `<body>`）

---

### 📝 特徴まとめ

| 項目 | 説明 |
|------|------|
| 自動ルーティング | ディレクトリ構造＝ルーティングになる |
| ページ構成が明確 | 各ディレクトリに `page.tsx` を置くことで構造がわかりやすい |
| レイアウトが階層化 | `layout.tsx` により、共通レイアウトを柔軟に適用可能 |
| SEO強化にも対応 | metadataや動的タイトルの設定もできる（次項参照） |

---