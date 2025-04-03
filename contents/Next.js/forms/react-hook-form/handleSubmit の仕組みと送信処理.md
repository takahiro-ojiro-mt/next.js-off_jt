## ✅ handleSubmit の仕組みと送信処理

React Hook Form では、フォームの送信処理を `handleSubmit` 関数でラップするのが基本です。  
この関数を使うことで、バリデーションの後にのみ安全にデータ送信処理を行うことができます。

---

### 🔸 基本構文

```tsx
const onSubmit = (data: FormValues) => {
  console.log("送信データ:", data);
};

<form onSubmit={handleSubmit(onSubmit)}>
  {/* フォームの内容 */}
</form>
```

- `handleSubmit` はバリデーションを通過した場合に `onSubmit` を実行
- `data` には全てのフィールドの値がオブジェクトで渡される

---

### 🔸 バリデーションに失敗した場合

- `onSubmit` は呼ばれません
- エラーメッセージは `formState.errors` に格納されている

```tsx
{errors.email && <p>{errors.email.message}</p>}
```

---

### 🔸 複数ハンドラを同時に使いたいとき

- 送信前に何か確認したいときは `handleSubmit(onSubmit, onError)` という書き方も可能

```tsx
handleSubmit(
  (data) => console.log("成功:", data),
  (errors) => console.log("バリデーションエラー:", errors)
)
```

---

### ✅ よくあるミスと対策

| ミス | 対策 |
|------|------|
| `handleSubmit` を使わず直接 `onSubmit` を実行している | バリデーションが効かないので必ずラップする |
| `e.preventDefault()` を書いてしまう | React Hook Form で自動的に処理されるので不要 |
| `data` をうまく受け取れていない | `FormValues` の型定義と `register()` のキーが一致しているか確認 |

---

### ✅ まとめ

- `handleSubmit(onSubmit)` を `<form>` に指定してフォームを送信する
- バリデーションエラーがなければ `onSubmit(data)` が呼ばれる
- 成功と失敗を分岐させたいときは2引数パターンも活用できる

これにより、「安全でスムーズなフォーム送信処理」が実現できます！