// app/components/ServerDate.tsx
// サーバーサイドで日付を生成して表示するコンポーネント

export default function ServerDate() {
  const now = new Date().toLocaleDateString("ja-JP");
  return <p>今日は {now} です。</p>;
}