## ✅ Propsで状態をUIに渡すメリット

Reactでは、状態（state）はできるだけ親コンポーネントで保持し、  
UIコンポーネント（子）には `props` を使って渡すのが基本です。

---

### 🔸 なぜ props を使うのか？

| 理由 | 内容 |
|------|------|
| **分離できる** | 状態を持つロジックと表示の責務を分離できる |
| **再利用しやすい** | UI部品をさまざまな状態で使いまわせる |
| **テストしやすい** | 状態に依存しない UI の単体テストが可能になる |
| **デバッグしやすい** | props を見れば状態の流れがわかるようになる |

---

### 🔸 具体例：Button コンポーネント

```tsx
type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({ onClick, disabled, children }: ButtonProps) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
```

- `disabled` 状態は親で管理して、Button には渡すだけ
- `onClick` ハンドラも親から渡す

```tsx
const isLoading = true;

return (
  <Button onClick={handleSubmit} disabled={isLoading}>
    {isLoading ? "送信中..." : "送信"}
  </Button>
);
```

---

### 🔸 UIを「状態に応じて変化させる」には props が最適

```tsx
const Alert = ({ type, message }: { type: "success" | "error"; message: string }) => (
  <div className={type === "success" ? "text-green-500" : "text-red-500"}>
    {message}
  </div>
);
```

- 状態が変わると見た目が変わる → でも Alert は常に「見た目だけ」に集中できる

---

### ✅ まとめ

- 状態を渡して UI を変化させるには **props が最適な手段**
- ロジックを含まず、**「表示だけを担当する UI」** を作ることができる
- 保守性・拡張性・可読性の高い設計には props の設計がカギになる！

「状態 × props × UI」の設計に慣れることが、今後のスケーラブルな開発につながります。