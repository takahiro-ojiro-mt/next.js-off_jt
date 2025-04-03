## ✅ Flexboxレイアウトの導入

Flexbox（Flexible Box Layout）は、**要素の配置・並びを柔軟に制御するCSSレイアウト手法**です。  
横並び・縦並び・中央揃え・等間隔配置などが簡単に実現できます。

---

### 🔧 Flexboxの基本構造

まず、Flexboxを使うには親要素に `display: flex;` を指定します。

```html
<style>
  .container {
    display: flex;
  }
</style>

<div class="container">
  <div>要素A</div>
  <div>要素B</div>
  <div>要素C</div>
</div>
```

これだけで、要素が**横並び（水平方向）**になります。

<img src="https://github.com/user-attachments/assets/2038fd4a-3a6c-4770-9fd0-21eea9c267e1" width="400">

---

### 📌 主なプロパティ（親要素に指定）

| プロパティ | 説明 | 例 |
|------------|------|----|
| `display: flex;` | Flexboxを有効にする（親要素） | `.container { display: flex; }` |
| `flex-direction` | 並ぶ向きを指定：`row`（横） / `column`（縦） | `flex-direction: row;` |
| `justify-content` | 主軸（水平方向）の整列方法 | `center`, `space-between`, `space-around`, `flex-start`, `flex-end` |
| `align-items` | 交差軸（垂直方向）の整列方法 | `center`, `stretch`, `flex-start`, `flex-end` |

---

### 🔄 よく使うパターン

#### 📍 横並び＋中央揃え

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

<img src="https://github.com/user-attachments/assets/34b3276f-f284-4f8b-ba06-0881440dba04" width="400">

#### 📍 均等に並べる（両端揃え）

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

<img src="https://github.com/user-attachments/assets/73e7d346-8b4f-456b-9cb0-1478850bd011" width="400">

#### 📍 縦に並べる（カラム方向）

```css
.container {
  display: flex;
  flex-direction: column;
}
```

<img src="https://github.com/user-attachments/assets/c5cc3f26-8e02-44a6-b127-651d9fc0a82b" width="400">

---

### 🧩 子要素に使うプロパティ（応用）

| プロパティ | 説明 |
|------------|------|
| `flex-grow` | 余白を広げる比率 |
| `flex-shrink` | 縮む比率 |
| `flex-basis` | 初期サイズ |
| `flex` | 上記3つの省略記法（例：`flex: 1`） |
| `align-self` | 特定の子要素だけ位置を変える |

---

### 💡 よくある用途・UIパターン

- 横並びのナビゲーションバー
- ボタンを等間隔で配置したいとき
- カード一覧を並べたいとき
- 高さが異なる要素の**中央揃え**がしたいとき

---

### 🛠️ 演習アイデア

```html
<div class="profile-card">
  <img src="avatar.png" alt="アイコン" />
  <div class="info">
    <h2>山田太郎</h2>
    <p>Webエンジニアです。</p>
  </div>
</div>
```

```css
.profile-card {
  display: flex;
  align-items: center;
  gap: 16px;
}
```

→ アイコンとテキストを横並び・中央揃えにする典型例

---

### 🧪 開発者ツールで確認

Chromeの開発者ツールには、Flexboxの可視化補助機能あり。  
`Elements` → `Styles` → `display: flex` をクリックで「主軸／交差軸／揃え位置」が可視化されます。

---

### ✅ まとめ

- `display: flex;` を書くだけで横並びにできる
- 中央揃え・等間隔配置なども簡単に実現
- Flexboxは**レイアウトの必須スキル**なので早めに慣れることが重要！