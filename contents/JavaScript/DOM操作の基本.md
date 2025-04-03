## ✅ DOM操作の基本

JavaScriptでは、HTMLの要素をプログラムから操作することができます。  
このとき使うのが「**DOM（Document Object Model）**」という仕組みです。

---

### 🌳 DOMとは？

- DOM は、HTML文書を「**ツリー構造**」として扱う仕組み
- JavaScriptからHTMLの要素を取得・変更・追加・削除できる

図で例えると：
```
<html>
  └─ <body>
       ├─ <h1>
       ├─ <p>
       └─ <button>
```

---

### 🔍 要素の取得方法

| メソッド | 説明 |
|----------|------|
| `getElementById("id")` | IDで取得（最も基本的） |
| `querySelector("セレクタ")` | CSSセレクタ形式で1つ取得 |
| `querySelectorAll("セレクタ")` | CSSセレクタで複数取得（NodeList） |

```html
<p id="message">こんにちは！</p>
```

```js
const msg = document.getElementById("message");
console.log(msg.innerText); // → "こんにちは！"
```

---

### ✏️ 要素の中身を変更

| プロパティ | 内容 | 例 |
|------------|------|----|
| `innerText` | テキストを変更する | `msg.innerText = "こんばんは！"` |
| `innerHTML` | HTMLごと変更する | `msg.innerHTML = "<strong>ようこそ</strong>"` |
| `value` | `<input>` や `<textarea>` の値を取得・設定 | `input.value = "初期値"` |

---

### 🎨 クラス・スタイルの変更

```js
const box = document.querySelector(".box");

box.classList.add("active"); // クラスを追加
box.classList.remove("hidden"); // クラスを削除
box.style.backgroundColor = "yellow"; // インラインスタイルを変更
```

---

### 🧩 要素の生成・追加・削除

```js
const newItem = document.createElement("li");
newItem.innerText = "新しい項目";
document.querySelector("ul").appendChild(newItem);
```

- `.createElement()`：新しいタグを作る
- `.appendChild()`：親要素に追加
- `.remove()`：要素を削除する

---

### 🧪 開発者ツールでDOMを確認

- Chromeの検証ツールで「Elements」タブを見るとDOM構造がわかる
- 右クリック →「検証」で対象のHTML要素に直接アクセス可能

---

### ✅ まとめ

- DOMとは「HTMLを操作するためのJavaScriptの窓口」
- 要素の取得 → 内容変更 → スタイル変更 → 要素の追加・削除 という流れを理解しよう
- イベントと組み合わせて「動きのあるUI」が作れるようになる