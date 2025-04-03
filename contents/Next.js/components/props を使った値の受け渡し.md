## ✅ props を使った値の受け渡し

コンポーネントに外部から値（データ）を渡すときに使うのが `props`（プロップス）です。  
「関数の引数のように使う」と考えるとイメージしやすいです。

---

### 🔸 props の基本的な使い方

```tsx
type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <p>こんにちは、{name}さん！</p>;
}

// 使用例
<Greeting name="Hanako" />
```

- `props` はオブジェクト形式で渡される
- TypeScript で型定義するのがベストプラクティス

---

### 🔸 props の複数受け取り

```tsx
type ProfileProps = {
  name: string;
  age: number;
};

function Profile({ name, age }: ProfileProps) {
  return (
    <div>
      <h2>{name}さんのプロフィール</h2>
      <p>年齢：{age}</p>
    </div>
  );
}
```

- 複数の値をまとめて渡すときは `type` を使って明示する
- props は `props.xxx` のように中身を取り出せる

---

### 🔸 props を使うと何がうれしい？

| 特徴 | 説明 |
|------|------|
| 外部から値を変更できる | コンポーネントを再利用しやすくなる |
| 表示内容を柔軟に変えられる | 名前・ID・画像など用途が広がる |
| 保守性が高まる | 1つの部品でいろいろな表示ができるようになる |

---

### ✅ よくあるミスと注意点

| ミス | 対策 |
|------|------|
| props に型注釈がない | `type Props = { name: string }` などで定義 |
| props の綴りミス | 呼び出し元と受け取り側の一致を確認 |
| 型と実際の値が合わない | `string` に `number` を渡すとエラーになる（TypeScriptの強み） |

---

### ✅ まとめ

- props はコンポーネント外から値を渡す仕組み
- 型定義（`type Props = ...`）を使って安全に扱う
- 表示のカスタマイズや再利用を考える上で重要なポイント！

まずは「名前を表示する」だけでもOK。props に慣れることから始めましょう！