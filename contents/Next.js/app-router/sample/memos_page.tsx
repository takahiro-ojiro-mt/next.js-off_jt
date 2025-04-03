// app/memos/page.tsx
import Link from "next/link";

// 仮データ（本来はAPI取得などで用意）
const mockMemos = [
  { id: "1", title: "買い物リスト" },
  { id: "2", title: "プロジェクトアイデア" },
];

export default function MemoListPage() {
  return (
    <main>
      <h1>メモ一覧</h1>
      <ul>
        {mockMemos.map((memo) => (
          <li key={memo.id}>
            {/* ID付き詳細ページへのリンク */}
            <Link href={`/memos/${memo.id}`}>{memo.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}