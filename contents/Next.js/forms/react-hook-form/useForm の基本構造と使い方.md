## ✅ useForm の基本構造と使い方

React Hook Form の中核を担うのが `useForm` です。  
フォーム全体の状態を管理し、各入力フィールドや送信処理を制御します。

---

### 🔸 基本構文

```tsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>();
```

- `register`: 各入力要素をフォームの状態に登録
- `handleSubmit`: フォーム送信時に実行する関数
- `errors`: バリデーションエラー情報を含むオブジェクト

---

### 🔸 useForm の初期設定オプション

```tsx
const { register, handleSubmit, reset } = useForm({
  defaultValues: {
    name: "",
    email: "",
  },
  mode: "onChange",
});
```

| オプション | 説明 |
|------------|------|
| `defaultValues` | 各フィールドの初期値 |
| `mode` | バリデーションのタイミング（例：`onChange`, `onBlur`） [参考](https://react-hook-form.com/docs/useform#mode) |

---

### 🔸 型定義（TypeScript対応）

```tsx
type FormValues = {
  name: string;
  age: number;
};

const { register, handleSubmit } = useForm<FormValues>();
```

- `<FormValues>` により `register("name")` の時点で型エラーが防げる
- `number`, `boolean` なども指定可能

---

### 🔸 handleSubmit の使い方

```tsx
const onSubmit = (data: FormValues) => {
  console.log("送信データ:", data);
};

<form onSubmit={handleSubmit(onSubmit)}>
  {/* フォーム内容 */}
</form>
```

- `handleSubmit` でラップされた関数は、バリデーション後にのみ実行される
- バリデーションエラーがあると `onSubmit` は呼ばれない

---

### ✅ まとめ

- `useForm()` は React Hook Form の起点となる関数
- `register`・`handleSubmit`・`errors` などを提供
- TypeScript と併用することで入力の安全性が高まる

フォーム構築の出発点として、この構造を覚えておきましょう。