## ✅ children によるページ内容の埋め込み

Next.js の App Router において、`layout.tsx` における `children` は非常に重要な概念です。  
これは「共通レイアウトに対して、ページ固有の中身を差し込む場所」を意味します。

---

### 🧩 イメージ

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>ヘッダー</header>
        {children}  ← 各ページの内容がここに差し込まれる
        <footer>フッター</footer>
      </body>
    </html>
  );
}
```

- 各 `page.tsx` の返す JSX は、この `{children}` の場所に埋め込まれる
- 共通のヘッダー・フッターはそのまま維持される

---

### 🖼️ ページが切り替わる流れ

```bash
ユーザーが /about にアクセス
→ app/about/page.tsx の中身が {children} に差し込まれる
→ layout.tsx の枠組みで描画される
```

---

### ✅ 開発上のメリット

| 項目 | 内容 |
|------|------|
| レイアウトの一元管理 | 各ページにヘッダー・フッターを毎回書かなくてよい |
| 保守性の向上 | デザイン変更時は layout.tsx を1箇所直すだけでOK |
| 柔軟なUI設計 | レイアウトと中身を分離して考えられるようになる |

---

### 💡 よくあるミス

- `children` を JSX に含め忘れると、ページの中身が表示されなくなる
- `layout.tsx` の構造が間違っていると全ページに影響するため注意

---

### ✅ まとめ

- `children` は **ページの中身が埋め込まれる場所**
- layout.tsx を「枠」として考え、共通UIを定義しよう
- ページ切り替えがスムーズで、保守もしやすい設計ができるようになる