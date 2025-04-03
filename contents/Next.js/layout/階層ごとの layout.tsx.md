## ✅ 階層ごとの layout.tsx

Next.js の App Router では、`app/` 配下の任意のディレクトリにも `layout.tsx` を置くことで、  
**特定の階層以下だけに適用されるレイアウト**を定義することができます。

---

### 📁 例：/admin 以下だけ別レイアウトにしたい場合

```bash
app/
├── layout.tsx           # 全体共通のレイアウト
├── page.tsx
├── admin/
│   ├── layout.tsx       # admin用のレイアウト
│   ├── page.tsx
│   └── settings/
│       └── page.tsx
```

- `app/admin/layout.tsx` は `/admin` およびその子孫ページにだけ適用されます
- 親の layout とは独立して定義でき、用途に応じて切り替えることができます

---

### 🧑‍💻 サンプル：管理画面用の layout.tsx

```tsx
// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#fdf6e3", padding: "2rem" }}>
      <h2>🔐 管理画面</h2>
      {children}
    </div>
  );
}
```

- 例えば「/admin」「/admin/settings」などの画面だけ、背景色や見た目を変更可能

---

### ✅ 実務での活用例

| パス | 用途 |
|------|------|
| `/` | 一般ユーザー向けのレイアウト |
| `/admin` | 管理画面の専用UIに切り替え |
| `/auth` | ログイン・新規登録などだけ異なるレイアウト |

---

### ⚠️ 注意点

- layout.tsx は「そのディレクトリ＋子孫全体」に影響を与える
- 階層が深くなるほど、layout.tsx の構造が複雑になることもあるため注意

---

### ✅ まとめ

- layout.tsx は **階層ごとに分けて使うことも可能**
- `/admin/layout.tsx` などで用途ごとにレイアウトを変更できる
- 最初は `app/layout.tsx` 1つだけで十分なので、慣れてきたら活用していこう