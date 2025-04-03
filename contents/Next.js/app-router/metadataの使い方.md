## ✅ metadata の使い方

Next.js App Router では、各ページごとに `metadata` を定義することで、ページタイトルやメタ情報（説明文・OGPなど）を設定できます。  
これにより、SEO や SNS での見え方、アクセシビリティにも貢献できます。

---

### 🧑‍💻 基本構文：ページタイトルの設定

```tsx
// app/about/page.tsx

export const metadata = {
  title: "Aboutページ | サンプルサイト",
};

export default function AboutPage() {
  return (
    <main>
      <h1>このサイトについて</h1>
    </main>
  );
}
```

- `export const metadata = { ... }` は、`page.tsx` の上部に書く
- HTML の `<title>` タグに反映される

---

### 📘 よく使うプロパティ

| プロパティ名 | 用途 |
|--------------|------|
| `title` | タブや検索結果に表示されるページタイトル |
| `description` | ページの説明。検索やSNS表示に使われる |
| `openGraph` | OGP画像やSNSでの表示内容（X/Twitter, Facebookなど） |

---

### 🖼️ 応用：OGPやdescriptionを設定

```tsx
export const metadata = {
  title: "記事タイトル",
  description: "このページは記事の内容を紹介しています。",
  openGraph: {
    title: "OGPタイトル",
    description: "SNS用の説明文",
    url: "https://example.com/about",
    siteName: "サンプルサイト",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
```

- ブログや記事ページなどで重宝される設定

---

### ✅ まとめ

- `metadata` を使えばページごとにタイトルや説明を簡単に設定できる
- SEOやSNSでの表示にもつながる重要な設定項目
- `title` だけでも入れる習慣をつけよう！