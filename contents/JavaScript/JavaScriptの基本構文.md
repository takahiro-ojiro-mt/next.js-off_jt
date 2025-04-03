## ✅ JavaScriptの基本構文
JavaScript は、Webページに「動き」や「インタラクション（操作）」を加えるためのプログラミング言語です。  
ここでは、最低限押さえておきたい文法（変数・関数・条件分岐・繰り返し）について解説します。

---

### 🧱 1. 変数の宣言と代入

```js
let message = "こんにちは";
const name = "山田";
```

- `let`：値をあとから変更する変数を宣言する
- `const`：値を変更しない（再代入できない）定数を宣言する

💡 **ポイント**：
- 原則は `const` を使い、必要があれば `let` に切り替える
- `var` は古い書き方。スコープの挙動が違うため基本的に使わない

---

### 🧩 2. 関数の定義と実行

```js
function greet(name) {
  return "こんにちは、" + name + "さん！";
}

console.log(greet("太郎")); // → こんにちは、太郎さん！
```

またはアロー関数（簡略記法）：

```js
const greet = (name) => {
  return `こんにちは、${name}さん！`;
};
```

💡 **ポイント**：
- 再利用可能な処理を「関数」としてまとめる
- イベント時（クリックなど）にも使える

---

### 🔄 3. 条件分岐（if文）

```js
let score = 75;

if (score >= 80) {
  console.log("よくできました！");
} else if (score >= 60) {
  console.log("まずまずですね！");
} else {
  console.log("がんばりましょう！");
}
```

💡 **ポイント**：
- 条件は `true` / `false` で判定される
- `===` は「厳密な等価」（型も値も同じ）

---

### 🔁 4. 繰り返し（for文）

```js
for (let i = 1; i <= 3; i++) {
  console.log(i + "回目のループ");
}
```

💡 **ポイント**：
- 「何回繰り返すか」が明確な場合は `for`
- 配列を扱う場合は `.forEach()` や `.map()` などの高階関数も便利（後述）

---

### 🛠️ 5. その他の基本構文

| 構文 | 役割・用途 | 例 |
|------|------------|----|
| `console.log()` | デバッグ用に値を表示 | `console.log("Hello!")` |
| `typeof` | 変数の型を確認 | `typeof 123` → `"number"` |
| テンプレート文字列 | 文字列に変数を埋め込む | `` `こんにちは、${name}さん` `` |

---
## ✅ JavaScriptの高階関数

JavaScriptでは、関数を変数のように扱える「第一級関数」の性質があります。  
これにより、関数を引数に渡したり、関数から関数を返すような**高階関数**が使えます。

---

### 🔍 高階関数とは？

**「関数を引数に取る、または関数を返す関数」**のことです。

```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // 0, 1, 2 が出力される
```

---

## ✅ 配列でよく使う高階関数

JavaScriptでは、配列に対して次のような高階関数が便利です。

---

### 1. `.forEach()`（繰り返し処理）

```js
const items = ["🍎", "🍌", "🍇"];

items.forEach((item, index) => {
  console.log(index + ": " + item);
});
```

- 配列の各要素に対して関数を実行する（ループのような使い方）
- `return` はできない（値を貯めるには `.map()` を使う）

---

### 2. `.map()`（変換）

```js
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // → [2, 4, 6]
```

- 各要素を変換し、新しい配列を返す
- 元の配列は変更されない

---

### 3. `.filter()`（絞り込み）

```js
const nums = [10, 20, 30, 40];
const over25 = nums.filter((n) => n > 25); // → [30, 40]
```

- 条件を満たす要素だけを抽出し、新しい配列を返す

---

### 4. `.find()`（最初の一致）

```js
const users = [
  { id: 1, name: "Taro" },
  { id: 2, name: "Jiro" }
];

const user = users.find((u) => u.id === 2); // → { id: 2, name: "Jiro" }
```

- 条件に一致する**最初の要素**を返す（配列ではなく1つの値）

---

### 5. `.reduce()`（集計）

```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, cur) => acc + cur, 0); // → 10
```

- 初期値と一緒に、配列の値を累積して1つの値にする

---

## 💡 まとめ

- `let` と `const` を使い分けよう（原則 `const` 推奨）
- `function` で処理をまとめて再利用しよう
- `if` / `for` は基本操作として必ず慣れておこう
- `console.log()` で値を確認しながら学習すると安心！
- 高階関数は「関数を操作する関数」
- `.map()`・`.filter()`・`.reduce()` は配列操作の定番
- forループよりも**読みやすく、保守しやすい書き方**になることが多い

---

### 🧪 演習ヒント

```js
const scores = [82, 45, 74, 60, 92];

const passed = scores.filter((s) => s >= 60);
console.log("合格者：", passed);

const average = scores.reduce((acc, cur) => acc + cur, 0) / scores.length;
console.log("平均点：", average);
```