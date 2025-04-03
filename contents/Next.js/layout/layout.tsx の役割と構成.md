## ✅ layout.tsx の役割と構成

Next.js の App Router における `layout.tsx` は、**全ページ共通のレイアウト**を定義する特別なコンポーネントです。  
すべてのページはこのレイアウトに包まれることで、**共通のヘッダー・フッター・ナビゲーション**などを一箇所で管理できるようになります。

---

### 🧩 基本構成

```bash
app/
├── layout.tsx  # すべてのページの共通レイアウト
├── page.tsx    # ホームページ
├── about/
│   └── page.tsx
```

---

### 🧑‍💻 シンプルな layout.tsx の例

```tsx
// app/layout.tsx
export const metadata = {
  title: "サンプルサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          <h1>ヘッダー：共通タイトル</h1>
        </header>

        <main>{children}</main>

        <footer style={{ padding: '1rem', background: '#eee' }}>
          <p>フッター：共通コピーライトなど</p>
        </footer>
      </body>
    </html>
  );
}
```

- `children` に各ページ（`page.tsx`）の内容が挿入されます
- `<header>` や `<footer>` は全ページ共通で表示されます

---

### 📚 metadata について補足

- `metadata.title` を設定することで、各ページ共通のタイトルが `<title>` に反映されます
- 各ページで個別の `metadata` を上書きすることも可能

---

### ✅ まとめ

| ポイント | 内容 |
|----------|------|
| 役割 | 全ページ共通のUIを定義（ヘッダー・フッターなど） |
| children | ページごとの中身を挿入する場所 |
| 構成場所 | `app/layout.tsx` に配置（最上位） |
| 拡張 | `/about/layout.tsx` のように階層ごとに分けることも可能 |

---