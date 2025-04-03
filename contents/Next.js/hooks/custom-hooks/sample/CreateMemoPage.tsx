// app/memos/new/page.tsx
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateMemo } from "@/app/hooks/useCreateMemo";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "内容は10文字以上で入力してください"),
});
type FormData = z.infer<typeof schema>;

export default function CreateMemoPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { createMemo, error } = useCreateMemo();

  const onSubmit = (data: FormData) => {
    createMemo(data);
  };

  return (
    <main style={{ maxWidth: 500, margin: "0 auto" }}>
      <h1>メモ投稿</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>タイトル</label>
          <input {...register("title")} />
          {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
        </div>
        <div>
          <label>内容</label>
          <textarea {...register("content")} />
          {errors.content && <p style={{ color: "red" }}>{errors.content.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "登録中..." : "登録"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>エラー: {error}</p>}
    </main>
  );
}