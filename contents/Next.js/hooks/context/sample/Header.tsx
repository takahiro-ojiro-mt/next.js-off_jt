// app/components/Header.tsx
'use client';

import { useUserContext } from "@/app/contexts/UserContext";

export const Header = () => {
  const { user, login, logout } = useUserContext();

  return (
    <header style={{ padding: "1rem", background: "#f3f4f6" }}>
      {user ? (
        <>
          <span>ようこそ, {user.name} さん</span>
          <button onClick={logout} style={{ marginLeft: "1rem" }}>ログアウト</button>
        </>
      ) : (
        <button onClick={() => login("ゲスト")}>ログイン</button>
      )}
    </header>
  );
};