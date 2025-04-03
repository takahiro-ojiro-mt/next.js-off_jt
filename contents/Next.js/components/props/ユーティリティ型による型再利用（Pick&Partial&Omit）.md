## ✅ ユーティリティ型による型再利用（Pick / Partial / Omit）

React + TypeScript で UI を実装する際、  
props やデータ構造の型を「再利用可能な形」で定義することはとても重要です。

TypeScript のユーティリティ型（Pick / Omit / Partial）を使えば、  
既存の型から目的に応じたサブ型を簡単に作成できます。

---

### 🔸 1. Pick：必要なプロパティだけを抜き出す

```ts
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UserCardProps = Pick<User, "name" | "email">;
```

- `UserCardProps` は `name` と `email` のみを持つ型になる
- **APIレスポンスなどの元型から「表示に必要な情報だけ」を取り出すときに便利**

---

### 🔸 2. Omit：不要なプロパティを除外する

```ts
type UserFormProps = Omit<User, "id">;
```

- `UserFormProps` は `id` を除いた `name`, `email`, `age` を持つ型になる
- **入力時には必要ないフィールドを除外して使うのに便利**

---

### 🔸 3. Partial：すべてのプロパティを「任意」にする

```ts
type UserOptional = Partial<User>;
```

- 全てのプロパティが `undefined` でもOKになる
- **フォームの途中状態や編集画面など、「一部だけ持つ可能性がある」データを表現するのに有効**

---

### ✅ 使い分け早見表

| ユーティリティ型 | 説明 | 用途例 |
|------------------|------|--------|
| `Pick<T, K>`     | 特定のプロパティだけ使う | UI表示や一部抜き出し |
| `Omit<T, K>`     | 指定のプロパティを除外 | 入力フォームや編集 |
| `Partial<T>`     | 全てをオプショナルに | 編集中・初期値未定義の場面 |

---

### 💡 応用例：props の型に使う

```tsx
type ButtonProps = Partial<{
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
  disabled: boolean;
}>;
```

- `size` も `variant` も `disabled` も省略可能
- 柔軟に呼び出せる汎用コンポーネントの設計に役立つ

---

### ✅ まとめ

- TypeScript のユーティリティ型を使うことで「一貫性」と「保守性」が高まる
- 元となる型から「表示用」「編集用」など、**目的別の派生型**を作るのが基本
- 型設計に慣れると、UI設計の幅が一気に広がる！

props にもデータ構造にも、積極的に型再利用を取り入れてみましょう。