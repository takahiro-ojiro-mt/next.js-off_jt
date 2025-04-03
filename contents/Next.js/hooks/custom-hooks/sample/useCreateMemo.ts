// app/hooks/useCreateMemo.ts
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  title: string;
  content: string;
};

export const useCreateMemo = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const createMemo = async (data: FormData) => {
    setError(null);
    try {
      const res = await fetch("/api/memos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("登録に失敗しました");
      router.push("/memos");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { createMemo, error };
};