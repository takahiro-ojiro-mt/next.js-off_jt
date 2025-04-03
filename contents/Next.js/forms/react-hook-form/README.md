# React Hook Form 入門

## 🎯 目的

Reactアプリケーションでフォームを扱う際に定番のライブラリ  
「React Hook Form（RHF）」の基本的な使い方を学び、  
入力フィールドの制御や簡単なバリデーションができるようになる。

---

## 🎯 今週のゴール

- `useForm` を使ってフォームを構成できる
- `register` を使って各フォームフィールドを簡単に扱える
- フォーム送信（onSubmit）と簡単なバリデーションを実装できる

---

## ✅ useForm の基本構造と使い方

[リンク](useForm%20の基本構造と使い方.md)  

---

## ✅ register の使い方とバリデーション設定

[リンク](register%20の使い方とバリデーション設定.md)  

---

## ✅ handleSubmit の仕組みと送信処理

[リンク](handleSubmit%20の仕組みと送信処理.md)  

---

## 🔹 課題①：名前とメールアドレスのフォーム

### ✅ 要件

- `name` フィールド（必須）
- `email` フィールド（必須、かつメール形式チェック）
- フォーム送信時に `console.log` でデータを出力
- バリデーションエラーは `<p>` 要素で表示する

---

## 🔹 課題②：年齢と範囲チェック

### ✅ 要件

- `age` フィールド（`type="number"`）
- `18歳以上、100歳以下` のチェックを行う
- 数値で入力されていない場合はバリデーションエラーを出す

---

## 🔸 サンプル参考コード（ヒント）

```tsx
<input
  {...register("name", { required: "名前は必須です" })}
/>
{errors.name && <p>{errors.name.message}</p>}
```

---

## ✅ 実装条件

- TypeScript で型定義を行う（`FormValues` 型など）
- React Hook Form の `register`, `handleSubmit`, `errors` を使用する
- それぞれのフィールドごとにエラーメッセージを表示する