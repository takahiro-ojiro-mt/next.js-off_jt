import { NextResponse } from "next/server";

// メモデータのモック保存先（ファイル外部ではなく、リクエスト間で共有しない擬似状態）
let memos = [
	{ id: 1, title: "最初のメモ" },
	{ id: 2, title: "次のメモ" },
];

// GET: 一覧取得
export async function GET() {
	return NextResponse.json(memos);
}
