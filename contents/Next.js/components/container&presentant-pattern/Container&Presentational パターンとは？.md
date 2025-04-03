## ✅ Container / Presentational パターンとは？

UIコンポーネントを **「見た目に特化した部分」と「ロジックを担う部分」** に分離する設計手法です。  
責務を分けることで、保守性・再利用性・テスト性が大きく向上します。

---

### 🔸 概念的な役割の違い

| 種類 | 主な責務 | 例 |
|------|----------|----|
| Container（コンテナ） | 状態の管理・イベント処理・ロジックの実行 | フォーム送信処理、API通信、データ加工など |
| Presentational（表示用） | UIの見た目・レイアウト・propsによる受け取り | `Button`, `FormView`, `UserCard` など |

---

### 🔸 実装例

#### 1. Presentational コンポーネント

```tsx
type FormViewProps = {
  onSubmit: () => void;
  isSubmitting: boolean;
};

export const FormView = ({ onSubmit, isSubmitting }: FormViewProps) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="メモ内容" />
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "送信中..." : "送信"}
    </button>
  </form>
);
```

#### 2. Container コンポーネント

```tsx
import { useState } from "react";
import { FormView } from "./FormView";

export const FormContainer = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // 擬似API送信
    setTimeout(() => {
      alert("送信完了");
      setSubmitting(false);
    }, 1000);
  };

  return <FormView onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
};
```

---

### 🔸 メリット

| メリット | 内容 |
|----------|------|
| 単体でテストしやすい | UIだけ or ロジックだけを別々に確認可能 |
| 状態の切り分けができる | ロジックの複雑化を抑えられる |
| チーム開発に向く | UIとロジックを役割で分担できる（デザイナーとエンジニアなど） |

---

### ✅ まとめ

- 「見た目」と「ロジック」を分けることでコードの意図が明確になる
- props を通じて UI と状態をつなげる設計に慣れることが重要
- 最初は単純な `FormContainer` + `FormView` から始めてOK！

この設計スタイルを知っておくだけで、将来的なリファクタや共通化がとても楽になります。