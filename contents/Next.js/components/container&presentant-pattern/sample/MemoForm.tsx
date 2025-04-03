// app/components/MemoForm.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";

type MemoFormProps = {
  onSubmit: () => void;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  isSubmitting: boolean;
};

export const MemoForm = ({ onSubmit, register, errors, isSubmitting }: MemoFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>タイトル</label>
        <input {...register("title")} />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
      </div>
      <div>
        <label>内容</label>
        <textarea {...register("content")} rows={4} />
        {errors.content && <p style={{ color: 'red' }}>{errors.content.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} style={{ marginTop: '1rem' }}>
        {isSubmitting ? "登録中..." : "登録"}
      </button>
    </form>
  );
};