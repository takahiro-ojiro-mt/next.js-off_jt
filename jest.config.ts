import type { Config } from "jest";

const config: Config = {
	testEnvironment: "jsdom",
	preset: "ts-jest",
	testMatch: ["**/__tests__/**/*.test.ts?(x)"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	transform: {
		"^.+\\.ts?$": "ts-jest",
		"^.+\\.tsx?$": "ts-jest",
	},
};

export default config;
