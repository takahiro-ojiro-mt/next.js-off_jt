# TypeScript + TSX 記法入門

## 🎯 目的

React × Next.js アプリケーションで使われる TypeScript の基本構文と、TSX 記法のルールを理解する。  
以降の開発に向けて、安全に型を扱いながら UI を記述できるようになる。

---

## 🎯 今週のゴール

- TypeScript の型注釈（変数・関数・配列・オブジェクト）を理解する
- JSX と TS の組み合わせである TSX 記法の基本を理解する
- TSX を使って Next.js ページや構造を書けるようになる

---

## ✅ TypeScript の型注釈

[リンク](変数・配列・オブジェクトの型注釈.md)  
[リンク](関数の型定義.md)  

---

## ✅ TSX 記法の基本

[リンク](TSX構文の注意点（JSXとの違い）.md)  

---

## ✅ よくあるミス

[リンク](よくあるエラーとその原因.md)  

---

## ✅ 演習①：型の注釈

- `types-training.ts` を作成し、以下の変数に型注釈を追加してみましょう：

```ts
const name = "Hanako";
const age = 22;
const fruits = ["りんご", "バナナ", "みかん"];

function getProfile(user) {
  return `${user.name} (${user.age}歳)`;
}
```

---

## ✅ 演習②：TSXの型チェック

- `app/page.tsx` に以下のような UI を表示してみよう：

```tsx
const name: string = "Yuki";

export default function Home() {
  return (
    <main>
      <h1>こんにちは、{name}さん</h1>
    </main>
  );
}
```

- 変数の型・TSXの構文にエラーが出ないように調整

---

## 🔄 提出方法

- ブランチ名：`feature/week2-types-tsx`
- GitHub に Push → Pull Request 作成
- PRテンプレートに以下の内容を含めて提出：

```markdown
## 概要
Week2：TypeScriptとTSX記法の基本

## 実装内容
- 変数・関数・配列・オブジェクトの型注釈
- 簡単なTSX構文を使った画面出力

## 確認してほしい点
- 型注釈が適切か
- TSX記法に文法エラーがないか
```