## ✅ Next.js API Routes の作成

Next.js（App Router）では、`app/api/` 以下にファイルを作成することで  
独自のAPIエンドポイントを定義できます。これにより、**バックエンドの処理を同一プロジェクト内で完結**できます。

---

### 🔸 ファイル構成（App Router）

```
app/
└── api/
    └── memos/
        └── route.ts
```

- `route.ts` の中に `GET`, `POST` などの HTTP メソッドごとの関数を記述
- フロントからは `/api/memos` でアクセス可能

---

### 🔸 POST リクエストの例（登録処理）

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("受け取ったデータ:", body);

  // 本来は DB 保存処理などをここに書く
  return NextResponse.json({ success: true, message: "登録完了" });
}
```

- `req.json()` で送られてきたデータを取得
- `NextResponse.json()` でレスポンスを返す

---

### 🔸 GET リクエストの例（一覧取得）

```ts
export async function GET() {
  const dummyData = [
    { id: 1, title: "メモ1" },
    { id: 2, title: "メモ2" },
  ];

  return NextResponse.json(dummyData);
}
```

- 一覧データなどを返す（ダミーデータでもOK）
- 実際のAPI開発ではDBとの接続などがここに入る

---

### 🔸 フロントエンドからのアクセス

```tsx
await fetch("/api/memos", { method: "POST", body: JSON.stringify(...) });
```

- `fetch` を使って `/api/xxx` にアクセス
- POST/GETともにこの API Route を叩くことで処理が可能

---

### ✅ よくあるミスと注意点

| ミス | 対策 |
|------|------|
| ファイル名や構造が間違っている | `app/api/〇〇/route.ts` で定義 |
| fetch先のURLミス | `/api/memos` などルート確認 |
| レスポンス形式を統一しない | 必ず JSON 形式で返すように統一 |

---

### ✅ まとめ

- API Routes は `app/api/.../route.ts` に定義
- フロントから簡単に呼び出せる内製APIが作れる
- フロント・バック両方の処理を Next.js で完結可能

まずは GET / POST だけでも実装して、仕組みを体験してみましょう！