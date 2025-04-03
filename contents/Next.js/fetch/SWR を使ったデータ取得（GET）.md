## ✅ SWR を使ったデータ取得（GET）

SWR（Stale-While-Revalidate）は、Vercel が開発している React のデータ取得ライブラリです。  
`useSWR()` フックを使うことで、簡単かつ効率的に API からデータを取得し、状態を管理できます。

---

### 🔸 なぜ SWR を使うと効率的なのか？

SWR は以下のような理由から効率的でモダンなデータ取得体験を提供します：

| 特徴 | 説明 |
|------|------|
| 自動キャッシュ | 一度取得したデータはキャッシュされ、再取得時の無駄な通信を防止 |
| 自動再取得 | フォーカス時や再接続時に自動で再フェッチして最新化 |
| 状態管理の統一 | ローディング・エラー・データを一括管理できる |
| 柔軟な拡張性 | `mutate()` による手動更新や optimistic UI に対応 |

これにより、**記述量を減らしながら、リッチな体験を実現**できるのが大きなメリットです。

---

### 🔸 基本構文

```tsx
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const { data, error, isLoading } = useSWR("/api/memos", fetcher);
```

- `useSWR(key, fetcher)` の形で使用
- `key`：取得対象の URL（またはキー文字列）
- `fetcher`：データを取得する関数

---

### 🔸 状態に応じた表示制御

```tsx
if (isLoading) return <p>読み込み中...</p>;
if (error) return <p>エラーが発生しました</p>;

return (
  <ul>
    {data.map((memo) => (
      <li key={memo.id}>{memo.title}</li>
    ))}
  </ul>
);
```

- `isLoading`：ローディング中
- `error`：失敗時
- `data`：取得されたデータ

---

### 🔸 再取得のトリガー（mutate）

```tsx
import useSWR, { mutate } from "swr";

// フォーム送信後などに呼び出し
mutate("/api/memos"); // 最新データを再取得
```

- `mutate()` を使うことで任意のタイミングで再取得できる
- POST 成功後などに呼ぶのが一般的

---

### ✅ まとめ

- `useSWR("/api/xxx", fetcher)` で API を簡単に読み込める
- `mutate()` で手動再取得も可能
- キャッシュと自動再取得で「リアルタイムに近い」UXを少ないコードで実現可能！

SWR を使うことで、「書きやすく、反応が良い UI」が簡単に実現できます！