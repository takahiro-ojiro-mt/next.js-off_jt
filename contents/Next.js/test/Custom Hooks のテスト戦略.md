# ✅ Custom Hooks のテスト戦略

Hooks のテストは「状態・副作用・非同期処理」が絡むため、UIとは異なる設計と視点が必要です。  
ここでは `renderHook` + `act` によるユニットテストの基本から応用パターンまでを解説します。

---

## 🎯 Hooks テストの目的

1. **状態が正しく初期化されているか**
2. **操作に応じて状態が意図通りに変化するか**
3. **副作用（fetch・setTimeoutなど）が正しく動くか**
4. **エラー時の挙動が適切か**

---

## 🔧 使うツールと関数

| 関数 | 説明 | 使い方の例 |
|------|------|-------------|
| `renderHook(fn)` | Hooks を単体で実行 | `renderHook(() => useX())` |
| `result.current` | Hooks の return を参照 | `result.current.count` |
| `act(fn)` | 状態更新や副作用を安全に行う | `act(() => count++)` |
| `waitFor` / `waitForNextUpdate` | 非同期変化を待つ | `await waitFor(() => ...)` |

---

## 🔸 基本サンプル：useCounter

```tsx
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return { count, increment };
};

describe("useCounter", () => {
  it("初期値は0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("incrementで+1される", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
```

---

## 🔸 応用例：非同期処理を含む useCreateMemo

```tsx
// モックfetch
global.fetch = vi.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve({ id: 1 }) })
) as any;

describe("useCreateMemo", () => {
  it("成功時にエラーなしで完了する", async () => {
    const { result } = renderHook(() => useCreateMemo());

    await act(async () => {
      await result.current.createMemo({ title: "テスト", content: "内容" });
    });

    expect(result.current.error).toBe(null);
    expect(result.current.isSubmitting).toBe(false);
  });

  it("失敗時にエラーがセットされる", async () => {
    (fetch as any).mockImplementationOnce(() =>
      Promise.resolve({ ok: false, status: 500 })
    );

    const { result } = renderHook(() => useCreateMemo());

    await act(async () => {
      await result.current.createMemo({ title: "失敗", content: "error" });
    });

    expect(result.current.error).toBe("登録に失敗しました");
  });
});
```

---

## 🔄 よくあるパターン別チェックポイント

| シチュエーション | チェックポイント |
|------------------|------------------|
| 初期状態 | `expect(result.current.xxx).toBe(...)` |
| 操作 → 状態更新 | `act(() => updateFn())` |
| 非同期処理後の状態 | `await act(async () => ...)` で検証 |
| APIモックの使用 | `jest.fn()`, `vi.fn()` による返り値差し替え |

---

## 💡 Hooks テスト設計のコツ

- 「ユーザー操作」をトリガーにする Hooks は act() を必ず使う
- 外部依存（fetch, localStorage）はすべてモックに置き換える
- 状態の変化順（初期 → 中間 → 完了）を時系列で検証する

---

## ✅ まとめ

- Hooks テストは「UIなしでの検証」＝状態変化のロジックチェック
- 単純な Hooks から非同期・副作用ありの Hooks へ段階的に経験を積む
- ビジネスロジックを Hooks 化することで、**UIとは独立してテストできるようになる**