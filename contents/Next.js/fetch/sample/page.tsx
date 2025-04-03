// app/memos/page.tsx
"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MemoList() {
	const { data, error, isLoading, mutate } = useSWR("/api/memos", fetcher);

	if (isLoading) return <p>読み込み中...</p>;
	if (error) return <p>取得に失敗しました</p>;

	return (
		<main>
			<h1>メモ一覧</h1>
			<ul>
				{data.map((memo: { id: number; title: string }) => (
					<li key={memo.id}>{memo.title}</li>
				))}
			</ul>
		</main>
	);
}
