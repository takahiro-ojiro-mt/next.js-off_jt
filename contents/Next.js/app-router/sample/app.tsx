// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>ようこそ！</h1>
      {/* メモ一覧ページへのリンク */}
      <Link href="/memos">メモ一覧を見る</Link>
    </main>
  );
}