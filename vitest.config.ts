import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		coverage: {
			enabled: true, // カバレッジを有効化
			reporter: ["text", "json", "html"], // 出力形式
			reportsDirectory: "./coverage", // 保存先ディレクトリ
			all: true, // 全ファイルのカバレッジを計測
		},
	},
});
