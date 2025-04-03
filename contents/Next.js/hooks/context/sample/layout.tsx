// app/layout.tsx
import { ReactNode } from "react";
import { UserProvider } from "./contexts/UserContext";
import { Header } from "./components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <UserProvider>
          <Header />
          <main style={{ padding: "1rem" }}>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}