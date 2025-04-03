// app/memos/[id]/page.tsx

type Props = {
  params: { id: string };
};

// 本来は id を元にデータを取得するが、今回はモック
export default function MemoDetailPage({ params }: Props) {
  return (
    <main>
      <h1>メモ詳細ページ</h1>
      <p>選択されたメモID: {params.id}</p>
    </main>
  );
}