# フォームとAPI連携

## 🎯 目的

HTMLフォームの基本を理解し、JavaScriptで入力値の取得・バリデーション・API通信の基礎を学ぶ。

---

## 🎯 今週のゴール

- フォームの構造・各種入力要素を理解し、使い分けられる
- JavaScriptでフォームの値を取得・検証できる
- fetchを使ってAPIと通信し、レスポンスを処理できる

---

## ✅ フォームの基本構造と各種入力要素

[リンク](フォームの基本構造と各種入力要素.md) 

---

## ✅ フォーム入力の取得・バリデーション

[リンク](フォームの入力・バリデーション.md)

---

## ✅ fetchを使ったAPI通信

[リンク](fetchを使ったAPI通信.md)

---

## ✅ 課題1：アンケートフォームの作成

### 📘 説明  
名前・年齢・職業などの情報を入力し、送信ボタンを押すと、バリデーションを行い、JSON形式で送信データをコンソールに表示するアプリを作成します。

### 🎯 要件

- 以下の項目をフォームで作成
  - 名前（必須）
  - 年齢（数値・18歳以上）
  - 職業（プルダウンで選択）
  - 自己紹介（任意の文章）
- 入力チェック（バリデーション）を行う
  - 未入力や不正な形式があればエラーメッセージ表示
- 入力値を JSON 形式にして `console.log()` に出力

### 💡 ヒント

- `form.addEventListener("submit", handler)` で送信イベントを取得
- `preventDefault()` でページリロードを防止
- `input.value` で値を取得し、条件でチェック
- JSON出力には `JSON.stringify(data, null, 2)` を使うと見やすい


### 完成イメージ
https://github.com/user-attachments/assets/47f29505-185c-4b9d-94c0-0f800b99fa90

---

## ✅ 課題2：APIからデータを取得して表示

### 📘 説明  
ダミーAPI（JSONPlaceholderなど）からユーザー一覧を取得し、ページにリスト表示するアプリを作成します。

### 🎯 要件

- ページ読み込み時に API からデータを取得
  - `https://jsonplaceholder.typicode.com/users` を使用
- ユーザーの名前をリスト表示する
- 読み込み中の表示（例：読み込み中...）を出す
- エラー時にメッセージを表示する

### 💡 ヒント

- `fetch().then().catch()` で非同期処理
- DOMに要素を追加するには `createElement()` と `appendChild()`
- 画面初期表示には `DOMContentLoaded` イベントを使うと便利

### 完成イメージ

https://github.com/user-attachments/assets/f3771fb5-e24b-4569-9fd8-e1c8a5a795b8

---

## 🔄 提出方法

- 演習①と②はそれぞれ別のHTML/JSファイルで作成
- GitHubにPushし、Pull Requestで提出
- PRには「実装内容」「チェック項目」「困った点」などを記載
