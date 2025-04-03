## ✅ fetch を使ったフォーム送信（POST）

Next.jsのフォーム送信処理では、`fetch()` を使って Next.js API Routes にデータを送信することができます。  
このセクションでは `POST` メソッドを使ったデータの送信方法を解説します。

---

### 🔸 基本構文（POST）

```tsx
const onSubmit = async (data: FormValues) => {
  const res = await fetch("/api/memos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("登録完了！");
  } else {
    alert("エラーが発生しました");
  }
};
```

- `fetch()` の第2引数に `method`, `headers`, `body` を指定
- `JSON.stringify()` でデータを文字列化
- `Content-Type: application/json` を指定するのを忘れずに！

---

### 🔸 実行タイミング

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("title")} />
  <button type="submit">送信</button>
</form>
```

- RHFの `handleSubmit(onSubmit)` を使うことで、バリデーション後に送信処理を実行できる

---

### 🔸 レスポンスの受け取りと条件分岐

```tsx
const result = await res.json();
if (result.success) {
  setMessage("登録に成功しました！");
} else {
  setMessage("登録に失敗しました");
}
```

- サーバー側のレスポンス形式（例：`{ success: true }`）に応じて画面の状態を変える

---

### ✅ よくあるミスと対策

| ミス | 対策 |
|------|------|
| `body` をオブジェクトのまま渡している | 必ず `JSON.stringify()` を使う |
| ヘッダーを設定していない | `Content-Type` を `"application/json"` に設定 |
| fetch に `await` を付け忘れている | 非同期処理として必ず `await` を付ける |

---

### ✅ まとめ

- `fetch("/api/xxx", { method: "POST", ... })` でデータ送信ができる
- バリデーション後に `handleSubmit(onSubmit)` から呼び出すのが安全
- サーバーのレスポンス内容に応じた UI 表示でユーザー体験を改善できる

まずは `console.log(data)` から始めて、送信内容を確認してみましょう！