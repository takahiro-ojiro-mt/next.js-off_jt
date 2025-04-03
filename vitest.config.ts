import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./vitest.setup.ts"],
		include: ["**/__tests__/**/*.{js,ts,jsx,tsx}"],
		passWithNoTests: true,
		coverage: {
			enabled: true, // カバレッジを有効化
			reporter: ["text", "json", "html"], // 出力形式
			reportsDirectory: "./coverage", // 保存先ディレクトリ
			all: true, // 全ファイルのカバレッジを計測
			include: ["src/**/*.{ts,tsx}"],
			exclude: ["src/**/*.d.ts", "src/**/*.stories.{ts,tsx}", "src/types/**/*"],
		},
	},
});
