// app/memos/new/page.tsx
'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { MemoForm } from "@/app/components/MemoForm";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "内容は10文字以上で入力してください"),
});

type FormData = z.infer<typeof schema>;

export default function MemoFormContainer() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const existing = JSON.parse(localStorage.getItem("memos") || "[]");
    const updated = [...existing, { id: Date.now(), ...data }];
    localStorage.setItem("memos", JSON.stringify(updated));
    router.push("/memos");
  };

  return (
    <main style={{ maxWidth: 500, margin: "0 auto" }}>
      <h1>メモ投稿</h1>
      <MemoForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </main>
  );
}