// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";

// 共通で使う Header コンポーネント
const Header = () => (
	<header style={{ backgroundColor: "#f3f4f6", padding: "1rem" }}>
		<h1>My App</h1>
	</header>
);

// 共通で使う Footer コンポーネント
const Footer = () => (
	<footer
		style={{ backgroundColor: "#f3f4f6", padding: "1rem", marginTop: "2rem" }}
	>
		<p>&copy; 2024 My App. All rights reserved.</p>
	</footer>
);

// ルートレイアウトコンポーネント（App Routerでは必須）
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main style={{ padding: "2rem" }}>{children}</main>
			<Footer />
		</>
	);
}
