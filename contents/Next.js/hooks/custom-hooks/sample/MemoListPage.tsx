// app/memos/page.tsx
'use client';

import { useMemos } from "@/app/hooks/useMemos";

export default function MemoListPage() {
  const { memos, isLoading, isError, mutate } = useMemos();

  if (isLoading) return <p>読み込み中...</p>;
  if (isError) return <p>データの取得に失敗しました</p>;

  return (
    <main>
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo: { id: number; title: string }) => (
          <li key={memo.id}>{memo.title}</li>
        ))}
      </ul>
      <button onClick={() => mutate()}>再取得</button>
    </main>
  );
}