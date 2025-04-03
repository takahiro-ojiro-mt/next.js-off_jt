// tests/useCreateMemo.test.ts
import { renderHook, act } from "@testing-library/react";
import { useCreateMemo } from "../app/hooks/useCreateMemo";

global.fetch = vi.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
) as any;

test("createMemo が呼ばれると fetch が実行される", async () => {
  const { result } = renderHook(() => useCreateMemo());

  await act(() =>
    result.current.createMemo({ title: "test", content: "test content" })
  );

  expect(global.fetch).toHaveBeenCalledWith(
    "/api/memos",
    expect.objectContaining({
      method: "POST",
    })
  );
});