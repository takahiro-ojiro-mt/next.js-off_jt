// tests/MemoForm.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { MemoForm } from "../app/components/MemoForm";

// テスト用ラッパー
function Wrapper() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <MemoForm
      onSubmit={handleSubmit(() => {})}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
    />
  );
}

test("空欄で送信するとエラーメッセージが表示される", async () => {
  render(<Wrapper />);
  const submitBtn = screen.getByRole("button");
  await userEvent.click(submitBtn);
  expect(screen.getByText(/タイトル/i)).toBeInTheDocument();
});