## ✅ Zodの refine を使ったカスタムバリデーション

Zod の `refine()` を使うと、**複数のフィールドを組み合わせたバリデーション**や、  
**ロジックベースのバリデーション**をスキーマに追加することができます。

---

### 🔸 例：パスワードと確認パスワードの一致チェック

```ts
const schema = z
  .object({
    password: z.string().min(6, "6文字以上で入力してください"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "パスワードが一致しません",
    path: ["confirmPassword"],
  });
```

- `refine()` の第一引数には、true/false を返すカスタム関数
  - `false`が返ってきた場合にエラーを返します
- `message` でエラー内容、`path` でどの項目にエラーを表示するか指定

---

### 🔸 使用例：フォームにエラー表示

```tsx
<input type="password" {...register("password")} />
<input type="password" {...register("confirmPassword")} />

{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
```

---

### 🔸 複数条件の組み合わせにも使える

```ts
.refine((data) => data.age > 20 || data.email.includes("@example.com"), {
  message: "年齢が21歳未満の場合、メールはexample.comのみ許可されます",
  path: ["email"],
});
```

- 業務ルールに即したバリデーションにも対応できる

---

### ✅ よくある活用シーン

| パターン | 例 |
|----------|----|
| フィールド間の一致 | パスワード・確認 |
| 条件付きチェック | チェックボックスがONのときだけバリデーション |
| 複雑なビジネスルール | 数値の合計、入力値の相関など |

---

### ✅ まとめ

- `refine()` を使えば、フィールド間の相関バリデーションが可能
- `path` を明示することで、特定の項目にエラーを出せる
- 複雑な条件も Zod スキーマ内で表現できるようになる

Zod の最大の強みの一つがこのカスタマイズ性です。  
業務に近いルールで使ってみましょう！