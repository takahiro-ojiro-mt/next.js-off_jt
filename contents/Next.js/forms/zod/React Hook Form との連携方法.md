## ✅ React Hook Form との連携方法

Zod は React Hook Form（RHF）とシームレスに連携でき、  
バリデーションロジックをスキーマとして一元管理することができます。

---

### 🔸 連携の基本構文

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスが正しくありません"),
});

type FormValues = z.infer<typeof schema>;

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

- `resolver: zodResolver(schema)` を指定することで Zod によるバリデーションが有効化される
- `errors.xxx.message` でエラーメッセージにアクセス可能

---

### 🔸 エラーの表示方法

```tsx
<input {...register("email")} />
{errors.email && <p>{errors.email.message}</p>}
```

- RHF のエラーハンドリングの仕組みはそのまま使える
- Zod の `.min()` や `.email()` のメッセージが表示される

---

### 🔸 Zod と RHF の連携のメリット

| 項目 | 内容 |
|------|------|
| 一元管理 | バリデーションルールをまとめて記述できる |
| 型安全 | `z.infer` で自動的に型が定義される |
| 可読性 | チェーン構文でルールが明確になる |
| 再利用性 | 同じスキーマを API バリデーションにも使える可能性 |

---

### ✅ まとめ

- `useForm({ resolver: zodResolver(schema) })` の形が基本
- スキーマで型とルールを一元定義し、ミスを減らせる
- 型推論によって TypeScript との相性も抜群！

この連携によって、現代的かつスケーラブルなフォーム開発が実現できます。