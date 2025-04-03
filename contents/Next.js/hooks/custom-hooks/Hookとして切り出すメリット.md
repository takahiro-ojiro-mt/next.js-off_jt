## ✅ Hookとして切り出すメリット

React コンポーネントの中で状態やロジックをそのまま書いてしまうと、  
**「再利用しにくく、テストしづらく、可読性も低下」**しがちです。

こうした問題を解消するために、**ロジックを Custom Hook に切り出す設計**が重要になります。

---

### 🔸 1. UI とロジックの責務を分離できる

```tsx
// ❌ ロジックが UI コンポーネントに直書きされている状態
const Form = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => { ... };
  return <form>{/* 略 */}</form>;
};

// ✅ ロジックを Hook に切り出す
const useFormLogic = () => { ... };
const Form = () => {
  const { handleSubmit, loading } = useFormLogic();
  return <form>{/* 略 */}</form>;
};
```

- 見た目の構成とロジックの記述が別になる
- 読みやすく、保守しやすくなる

---

### 🔸 2. 同じロジックを別の画面でも使える

```tsx
const { memos } = useMemos(); // 一覧ページ
const { memos } = useMemos(); // ダッシュボードでも
```

- fetch 処理やエラーハンドリングなどを1か所に集約できる
- 同じことを別ファイルで何度も書かなくて済む

---

### 🔸 3. テストしやすくなる

- Hook 単体でロジックのテストが可能になる
- UI を含まずにユニットテストでロジック確認ができる（例：Jest + React Testing Library）

---

### 🔸 4. 名前と構造で役割が明確になる

```tsx
useLoginForm() → ログイン用のフォームロジック
useToggle() → ON/OFFの切り替えロジック
useFetchUser() → ユーザーデータの取得処理
```

- 命名によって「何をしている Hook なのか」が一目瞭然
- 読む人も使う人も迷わない

---

### ✅ よくある Hook 化の対象

| Hook名 | 機能例 |
|--------|--------|
| `useBoolean` | ON/OFF 切り替え、モーダル表示制御など |
| `useFetch<T>` | 一般的な API 通信・データ取得 |
| `useFormState` | フォームの状態管理と送信ロジック |
| `usePagination` | ページネーションの状態とロジック |

---

### ✅ まとめ

- Hook 化は「ロジックの再利用」と「UIの責務分離」に直結する
- 初めは簡単な状態・処理から切り出すだけでも効果が大きい
- チームで書くコードの「整理力」が上がり、保守性も高まる

**「表示はUI」「状態と処理はHook」** この意識がプロダクト品質を高める第一歩です！