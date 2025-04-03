## ✅ カスタムHooksの基本構造

React では「状態管理」や「副作用処理」などを `useState`, `useEffect` のような Hooks で行います。  
この仕組みを拡張し、**自分だけのロジックの再利用単位**として作るのが「カスタムHook」です。

---

### ✅ カスタムHookとは？

- `use` から始まる関数
- `useState`, `useEffect`, `useForm`, `useSWR` などのフックを中で使える
- 状態やロジックを閉じ込めて、**呼び出す側は「使うだけ」で済む**ようにする

---

### ✅ 最も基本的なカスタムHookの例

```tsx
// hooks/useCounter.ts

import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return { count, increment, decrement };
};
```

---

### ✅ 呼び出し側（使うだけ）

```tsx
const CounterDisplay = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};
```

- 状態も関数も `useCounter()` でまとめて受け取れる
- `CounterDisplay` 側には状態ロジックが一切ない → **表示に専念できる**

---

### ✅ 使いどころの目安

| シーン | 切り出し対象 |
|--------|---------------|
| 複数ページで同じ fetch をしている | useSWR / fetch ロジック |
| 同じバリデーションや計算をしている | useForm / useZod / 計算関数 |
| 開閉状態など単純な状態を何度も使う | useBoolean / useToggle |

---

### ✅ まとめ

- カスタムHookは「再利用できる状態 + 処理のまとまり」
- UI とは別の場所にロジックを置くことで、**責務が分離され、保守性が高まる**
- 命名規則は `useXxx`、`hooks/` ディレクトリで管理が基本

次に、**実際の演習で使う「useCreateMemo」「useMemos」**のような応用Hookに繋げていきましょう！