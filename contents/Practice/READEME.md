# 総合演習（複合フォームの実装）

## 🎯 目的

これまで学習してきたフォーム構築・バリデーション・API通信・状態管理の知識をすべて活用し、  
実践的な複合フォームアプリケーションを一人称で実装できる力を身につける。

---

## 🎯 今週のゴール

- 複数の入力フィールドを持つフォームを React Hook Form + Zod で構築する
- 入力値をバリデーションし、APIに POST 送信できる
- 登録されたデータを SWR で一覧取得・表示できる
- 成功・エラー・ローディング状態に応じた UI を制御できる

---

## ✅ 実装内容

以下の複合フォームを `/memos/new` ページに作成してください：

| 項目         | バリデーション条件              |
|--------------|------------------------------|
| タイトル     | 必須                           |
| 内容         | 10文字以上                     |
| メール       | メール形式、任意               |
| 年齢         | 18歳以上、100歳以下（任意）     |
| 利用規約同意 | チェックされていること（必須） |

- Zod でスキーマを定義し、`zodResolver` で React Hook Form と連携
- バリデーションに通過したら `/api/memos` に POST 送信し、`mutate()` によって最新化する
- 登録成功後は一覧（`/memos`）に遷移 or 成功メッセージを表示
- 一覧ページでは `useSWR` でメモを取得する

---

## 🔄 状態管理・表示例

- ローディング中：送信ボタンを非活性にし、「送信中...」表示
- バリデーションエラー：各フィールドの下にメッセージ表示
- 成功：「登録が完了しました！」メッセージ表示
- 失敗：「送信に失敗しました」などの案内表示

---

## 💬 ワンポイントアドバイス

- `useForm`, `z.object()`, `refine()` など Week9〜11 の復習になります
- POST 成功後の `mutate("/api/memos")` を使って一覧を再取得しましょう
- 入力データの保存処理はバックエンド側に既に実装済みです（ダミーでもOK）

----

## 🔸 補足

データ処理部分はこちらを参考にしてください
``` typescript
// app/api/memos/route.ts

import { NextRequest, NextResponse } from "next/server";

// メモデータのモック保存先（ファイル外部ではなく、リクエスト間で共有しない擬似状態）
let memos = [
  { id: 1, title: "最初のメモ" },
  { id: 2, title: "次のメモ" },
];

// GET: 一覧取得
export async function GET() {
  return NextResponse.json(memos);
}

// POST: 新規メモ追加（受け取ったデータを配列に追加）
export async function POST(req: NextRequest) {
  const body = await req.json();

  const newMemo = {
    id: memos.length + 1,
    title: body.title ?? "(無題)",
  };

  memos.push(newMemo);

  return NextResponse.json({ success: true, memo: newMemo });
}
```