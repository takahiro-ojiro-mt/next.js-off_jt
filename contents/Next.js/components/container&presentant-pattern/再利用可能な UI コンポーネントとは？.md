## ✅ 再利用可能な UI コンポーネントとは？

「再利用可能な UI コンポーネント」とは、  
異なる画面や機能でも**同じコードで使い回せる UI 部品**のことです。

---

### 🔸 具体例

| コンポーネント名 | 役割 | 再利用例 |
|------------------|------|-----------|
| `Button`         | 汎用ボタン | フォーム送信 / モーダルの開閉 / 検索実行など |
| `Input`          | テキスト入力欄 | 名前入力 / 検索フォーム / メールアドレスなど |
| `Label`          | ラベルテキスト | フォームの見出し / 状態表示など |
| `Card`           | 枠付きの表示コンテナ | ユーザー情報 / 商品紹介 / 投稿表示など |

---

### 🔸 再利用可能にするための考慮点

| 観点 | ポイント |
|------|----------|
| **Propsの設計** | 子テキストやハンドラ（onClickなど）を外部から受け取る |
| **見た目の柔軟性** | `className` や `variant` でスタイルを切り替えられるように |
| **状態管理を持たない** | UIは stateless（状態を持たず表示だけにする） |
| **テストしやすさ** | 単体で描画できる → Storybook やテスト導入にも向く |

---

### 🔸 サンプルコード：Button

```tsx
type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export const Button = ({ onClick, children, disabled, className }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded ${className}`}
  >
    {children}
  </button>
);
```

- `onClick`, `disabled`, `className` などで汎用性を持たせている
- 状態を受け取って「表示だけ」を行う
- 必要な場面に応じて自由にカスタマイズ可能

---

### ✅ まとめ

- 再利用可能なコンポーネントは「汎用性」「分離」「柔軟性」がポイント
- 状態を持たせず、props で外部から渡して制御する
- 最終的に UI ライブラリ（デザインシステム）としての発展も目指せる

まずは「繰り返し書いている UI」を見つけて切り出してみましょう！