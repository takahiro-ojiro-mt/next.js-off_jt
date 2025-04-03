// TypeScript + TSX の基本構文確認

// 🔹 型付きのユーティリティ関数
export function greet(name: string): string {
	return `こんにちは、${name}さん！`;
}

// 🔹 Propsの型定義
type GreetingProps = {
	name: string; // 必須の名前
	age?: number; // 任意の年齢（省略可）
};

// 🔹 TSXコンポーネント
export const GreetingCard = ({ name, age }: GreetingProps) => {
	return (
		<div
			style={{
				padding: "1rem",
				border: "1px solid #ccc",
				borderRadius: "6px",
				maxWidth: "300px",
			}}
		>
			<h2>こんにちは、{name}さん！</h2>
			{age !== undefined && <p>あなたは {age} 歳です。</p>}
		</div>
	);
};
