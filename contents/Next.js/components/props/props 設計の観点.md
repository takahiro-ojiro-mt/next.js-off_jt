## ✅ props 設計の観点

良い UI コンポーネントを設計するためには、props の「受け渡し」だけでなく、  
**その設計自体を意識すること**がとても重要です。

---

### 🔸 1. 明示性（Explaining by Type）

**どんな情報を渡せば、どんな見た目・動作になるかが明確であること。**

#### ✅ 例：

```tsx
type AlertProps = {
  type: "success" | "error";
  message: string;
};
```

- `type` を限定することで、「このコンポーネントは状態表示用なんだな」と意図が伝わる
- 型定義を読むだけで **UIの振る舞いがイメージできる** ようになる

---

### 🔸 2. 柔軟性（Flexible & Configurable）

**props を工夫して、用途に応じた変化に対応できるようにする。**

#### ✅ 例：

```tsx
type ButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  disabled?: boolean;
};
```

- `variant` や `size` を props に持たせることで、1つの Button で何パターンにも対応可能
- `disabled` を props 経由で制御すれば、親コンポーネントで一元管理できる

---

### 🔸 3. 安全性（Type Safety）

**props に型をつけることで、バグや予期せぬ使い方を防げるようにする。**

#### ✅ 例：

```tsx
type UserCardProps = {
  name: string;
  email?: string;
};
```

- 必須と任意を明確にすることで、使い方に誤りがあればビルド時に警告
- 間違った型（数値を string に渡すなど）を事前に防止

---

### 🔸 4. 再利用性（Reusable Across Contexts）

**様々な画面・用途で使い回せるように、シンプルに設計する。**

#### ✅ ポイント

- props を絞る（表示専用コンポーネントならロジックは持たない）
- デフォルト値をつけて「最低限で動く」状態にする

```tsx
const Button = ({ variant = "primary" }: { variant?: "primary" | "secondary" }) => ...
```

---

### ✅ まとめ

| 観点 | チェックポイント |
|------|------------------|
| 明示性 | 型を読めば動きや目的が想像できるか |
| 柔軟性 | 状態・見た目を props で切り替え可能か |
| 安全性 | 必要な型定義・制約が設定されているか |
| 再利用性 | 複数の場面で使い回せるように設計されているか |

**props 設計 = UI コンポーネントの「使いやすさ」の土台**です。  
メンテナンス性や拡張性を考える第一歩として、意識して設計しましょう。