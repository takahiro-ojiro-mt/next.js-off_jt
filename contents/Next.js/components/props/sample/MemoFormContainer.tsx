// app/memos/new/page.tsx
'use client';

import { useRouter } from "next/navigation";
import { MemoForm } from "@/app/components/MemoForm";
import { useMemoForm } from "@/app/hooks/useMemoForm";

export default function MemoFormContainer() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    save,
  } = useMemoForm();

  const onSubmit = (data: any) => {
    save(data);
    router.push("/memos");
  };

  return (
    <main style={{ maxWidth: 500, margin: "0 auto" }}>
      <h1>メモ投稿（カスタムHook版）</h1>
      <MemoForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </main>
  );
}