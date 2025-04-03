// app/hooks/useMemoForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "内容は10文字以上で入力してください"),
});

type FormData = z.infer<typeof schema>;

export const useMemoForm = () => {
  const form = useForm<FormData>({ resolver: zodResolver(schema) });

  const save = (data: FormData) => {
    const existing = JSON.parse(localStorage.getItem("memos") || "[]");
    const updated = [...existing, { id: Date.now(), ...data }];
    localStorage.setItem("memos", JSON.stringify(updated));
  };

  return { ...form, save };
};