import { describe, expect, it } from "vitest";

describe("formatDate", () => {
	it("should format date correctly", () => {
		const date = new Date("2024-03-20");
		const formatted = date.toLocaleDateString("ja-JP", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});
		expect(formatted).toBe("2024/03/20");
	});
});
