## ✅ useState + useEffect のよくある使い方と応用例

`useState` と `useEffect` を組み合わせることで、実用的な機能を持つ UI を実装できます。  
このセクションでは、実務でも頻出するパターンを紹介します。

---

### 🔸 1. フォーム入力とリアルタイム表示

```tsx
const [name, setName] = useState("");

return (
  <div>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="名前を入力"
    />
    <p>こんにちは、{name}さん！</p>
  </div>
);
```

- 入力された値を `useState` で管理
- `onChange` イベントで状態を更新 → 自動で反映

---

### 🔸 2. コンポーネント初回に API 呼び出し

```tsx
useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://api.example.com/data");
    const json = await res.json();
    console.log(json);
  }

  fetchData();
}, []);
```

- 初回マウント時にデータを取得して状態に保存
- `async/await` を使うとわかりやすい

---

### 🔸 3. タイマーと現在時刻の更新

```tsx
const [now, setNow] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setNow(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

- `setInterval` で1秒ごとに現在時刻を更新
- `useEffect` の return 部で `clearInterval` を行いメモリリークを防止

---

### 🔸 4. ウィンドウサイズの検知

```tsx
const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
```

- イベントリスナーを登録・解除するパターン
- 状態更新と一緒に使うと「リアクティブなUI」が作れる

---

### ✅ まとめ

| パターン | 技術ポイント |
|----------|---------------|
| フォーム入力 | `useState` で状態管理 / `onChange` で更新 |
| 初回API呼び出し | `useEffect` + `async` / 空依存配列 |
| タイマー | `setInterval` / `clearInterval` の return 処理 |
| イベント監視 | `addEventListener` → `removeEventListener` |

この週では「状態があることによって UI が変化する」という感覚をつかむのがゴールです。