## ✅ fetchを使ったAPI通信

JavaScriptでは `fetch` を使って、外部のAPIと非同期で通信することができます。  
画面の更新を伴わずにデータの取得・送信ができるため、モダンなWebアプリケーションには欠かせない技術です。

---

### 🔄 fetchとは？

`fetch()` はブラウザに組み込まれている API で、HTTP通信を行うための関数です。  
基本的な使い方：

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("エラー:", err);
  });
```

- `.then()`：非同期の成功時に処理
- `.catch()`：失敗したときの処理

---

### 📥 GETリクエスト（データの取得）

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name);
    });
  });
```

- APIからデータを取得して配列で受け取り、ループで処理
- `res.json()` は「レスポンスを JSON に変換する」処理

---

### 📤 POSTリクエスト（データの送信）

```js
fetch("https://example.com/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Taro",
    age: 25,
  }),
})
  .then((res) => res.json())
  .then((result) => {
    console.log("送信成功:", result);
  });
```

- `method`, `headers`, `body` を設定することでPOST送信が可能
- `body` は必ず `JSON.stringify()` で文字列化する

---

### 🧪 APIの代わりに使えるモックサービス

| サービス名 | 説明 |
|------------|------|
| JSONPlaceholder | テスト用のダミーAPI（GET/POST対応） |
| reqres.in | ログインや登録の擬似APIが使える |
| mockapi.io | 自作のAPIをブラウザで作ってテスト可能 |

---

### 🛠️ レスポンスのUI表示例

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    const list = document.getElementById("userList");
    list.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      list.appendChild(li);
    });
  });
```

---

### ⚠️ エラー処理の基本

```js
.catch((error) => {
  console.error("通信エラー:", error);
  alert("データの取得に失敗しました");
});
```

- 通信失敗やレスポンス異常時に備えて必ず `.catch()` を書く習慣を！

---

### ✅ まとめ

- `fetch()` は Web API 通信を行うための標準的な方法
- `GET` は取得、`POST` は送信に使う
- `.then()` → `.catch()` の流れで非同期処理を扱う