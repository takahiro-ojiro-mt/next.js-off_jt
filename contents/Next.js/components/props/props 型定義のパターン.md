## ✅ props 型定義のパターン（詳細解説）

props の型定義は、UIコンポーネントの使いやすさ・保守性・安全性を左右する重要なポイントです。  
ここでは基本的な書き方から応用パターンまでを整理します。

---

### 🔸 1. 明示的な型定義（基本形）

```tsx
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
```

- 明示的に `type` を定義し、props を安全に使う基本形
- `children` は UI コンポーネントでほぼ必須

---

### 🔸 2. Optional Props（任意指定）

```tsx
type ButtonProps = {
  disabled?: boolean;
  className?: string;
};
```

- `?` を付けることで「渡してもしなくてもOK」な型に
- 呼び出し元に柔軟性を持たせる

---

### 🔸 3. Union型で選択肢を限定

```tsx
type AlertProps = {
  type: "success" | "error" | "warning";
};
```

- 間違った値（"sccuess"など）を防止できる
- UI上のパターンが明確なときに有効（variant / size / status など）

---

### 🔸 4. 型の再利用と共通化（共通インターフェース）

```tsx
type BaseButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

type IconButtonProps = BaseButtonProps & {
  icon: React.ReactNode;
};
```

- 共通の型をベースに拡張することで保守性を高める
- 複数のコンポーネントに共通 props があるときに使う

---

### 🔸 5. Generic型による柔軟な対応（上級）

```tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>{items.map(renderItem)}</ul>
);
```

- コンポーネントが使うデータ型を汎用化できる
- 表示する内容が異なるリストを共通化したいときに便利

---

### ✅ よくあるアンチパターン

| アンチパターン | 問題点 | 解決策 |
|----------------|--------|--------|
| props に any を使う | 型安全が失われる | 具体的な型 or 型パラメータで書く |
| 全部必須にしている | 柔軟性がない | `?` を使って Optional にする |
| 型の重複定義 | 保守が面倒 | 共通型を切り出して再利用する |

---

### ✅ まとめ

- props の型は「何が渡せて」「どう動くのか」を正確に表す設計図
- Optional / Union / 再利用 / Generic など目的に応じて設計を選ぶ
- 「明示的」で「柔軟」な型定義が、使いやすいコンポーネントの基本です！

これらのパターンを使い分けることで、現場レベルのUI設計力がぐっと上がります。