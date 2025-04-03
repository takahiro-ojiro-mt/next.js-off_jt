// app/memos/new/page.tsx
'use client'; // クライアントコンポーネント

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const MemoSchema = z.object({
  title: z.string().min(1, 'タイトルは必須です'),
  content: z.string().min(10, '内容は10文字以上で入力してください'),
});

type MemoFormData = z.infer<typeof MemoSchema>;

export default function NewMemoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemoFormData>({
    resolver: zodResolver(MemoSchema),
  });

  const onSubmit = (data: MemoFormData) => {
    // 実際にはここでAPIにPOSTする処理などを行う
    console.log('送信成功:', data);
    alert('登録が完了しました！');
  };

  return (
    <main style={{ maxWidth: 500, margin: '0 auto' }}>
      <h1>メモを新規作成</h1>
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
        <button type="submit" style={{ marginTop: '1rem' }}>登録</button>
      </form>
    </main>
  );
}