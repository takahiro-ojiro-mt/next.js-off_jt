## ✅ useState の仕組みと使い方

`useState` は React における「状態（state）」を管理するためのフックです。  
コンポーネント内で変化する値を保持し、変更時に自動で再描画されます。

---

### 🔸 基本構文

```tsx
const [state, setState] = useState(初期値);
```

| 部分 | 役割 |
|------|------|
| `state` | 現在の状態の値 |
| `setState` | 状態を更新する関数 |
| `初期値` | 最初に設定される状態の値 |

---

### 🔸 例：カウントボタン

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

- 初期値に `0` を設定
- `setCount()` を呼ぶことで `count` の値が更新 → 再描画される

---

### 🔸 状態更新時の注意

- 直接 `count++` のように値を操作しない
- 必ず `setCount(newValue)` を使って更新する
- 更新後は自動的にコンポーネントが再描画される

---

### ✅ 型注釈をつける場合（TypeScript）

```tsx
const [name, setName] = useState<string>("Hanako");
```

- 初期値から自動推論されることが多い
- 明示したい場合や `null` / `undefined` を扱う場合は注釈を追加

---

### ✅ よくある useState の用途

| 用途 | 例 |
|------|----|
| フォームの入力値 | 名前、メール、パスワードなど |
| UIの切り替え | モーダルの表示/非表示、タブ切り替え |
| カウント | クリック数、いいね数 など |

---

### ✅ まとめ

- `useState` は関数コンポーネントで状態を持たせる仕組み
- `const [値, セッター関数] = useState(初期値)` で宣言
- `setXxx()` を呼ぶと値が変わり、画面が自動的に更新される

まずはカウントボタンなど簡単な例から試してみよう！