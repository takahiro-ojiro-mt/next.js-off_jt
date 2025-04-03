// app/page.tsx

import ServerDate from "./components/ServerDate";
import LikeButton from "./components/LikeButton";

export default function HomePage() {
  return (
    <main>
      <h1>サーバー & クライアント コンポーネント</h1>
      <ServerDate />
      <LikeButton />
    </main>
  );
}