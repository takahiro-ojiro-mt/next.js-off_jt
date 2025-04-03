## ✅ register の使い方とバリデーション設定

React Hook Form の `register` 関数は、  
各入力フィールドをフォームの状態管理に「登録」するための仕組みです。

また、同時にバリデーションルールも設定できます。

---

### 🔸 基本構文

```tsx
<input {...register("name")} />
```

- `register("name")` のように名前を指定
- 入力された値は `onSubmit` 時に `data.name` として取得可能

---

### 🔸 バリデーション付きの例

```tsx
<input
  {...register("email", {
    required: "メールアドレスは必須です",
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
      message: "メールアドレスの形式が正しくありません",
    },
  })}
/>
```

| ルール | 内容 |
|--------|------|
| `required` | 入力必須（エラーメッセージも指定可） |
| `pattern` | 正規表現による形式チェック |

---

### 🔸 数値のバリデーション例

```tsx
<input
  type="number"
  {...register("age", {
    required: "年齢は必須です",
    min: { value: 18, message: "18歳以上である必要があります" },
    max: { value: 100, message: "100歳以下である必要があります" },
  })}
/>
```

- `type="number"` を指定して数値入力フィールドを作成
- `min` / `max` を組み合わせて範囲チェック

---

### 🔸 エラー表示の方法

```tsx
{errors.name && <p>{errors.name.message}</p>}
```

- `formState.errors.xxx` から各エラーの情報を取得
- 条件付きレンダリングでメッセージ表示

---

### ✅ よくあるミス

| ミス | 対策 |
|------|------|
| `register` をつけ忘れる | 値が送信されないので注意 |
| `errors.xxx` の参照忘れ | 型がないとエラーが出にくいので TS推奨 |

---

### ✅ まとめ

- `register("key")` を各 input に設定して状態と結びつける
- バリデーションルールをオブジェクト形式で追加可能
- `errors.xxx.message` を使って柔軟にエラーメッセージを表示

これだけで、簡単かつ柔軟なバリデーション付きフォームが構築できます！