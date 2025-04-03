// app/hooks/useMemos.ts
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useMemos = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/memos", fetcher);

  return {
    memos: data ?? [],
    isLoading,
    isError: !!error,
    mutate,
  };
};