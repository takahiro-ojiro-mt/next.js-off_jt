// app/memos/new/page.tsx
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// 入力バリデーションスキーマ
const MemoSchema = z.object({
  title: z.string().min(1, 'タイトルは必須です'),
  content: z.string().min(10, '内容は10文字以上で入力してください'),
});

type MemoFormData = z.infer<typeof MemoSchema>;

export default function MemoFormPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemoFormData>({
    resolver: zodResolver(MemoSchema),
  });

  const onSubmit = async (data: MemoFormData) => {
    setIsSubmitting(true);

    // 仮想送信：ローカルストレージを使って投稿を保存する体験
    const existing = JSON.parse(localStorage.getItem("memos") || "[]");
    const updated = [...existing, { id: Date.now(), ...data }];
    localStorage.setItem("memos", JSON.stringify(updated));

    // 登録完了後に一覧画面へ遷移
    router.push("/memos");
  };

  return (
    <main style={{ maxWidth: 500, margin: '0 auto' }}>
      <h1>メモ投稿フォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>タイトル</label>
          <input {...register('title')} />
          {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
        </div>
        <div>
          <label>内容</label>
          <textarea {...register('content')} rows={4} />
          {errors.content && <p style={{ color: 'red' }}>{errors.content.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} style={{ marginTop: '1rem' }}>
          {isSubmitting ? "登録中..." : "登録"}
        </button>
      </form>
    </main>
  );
}