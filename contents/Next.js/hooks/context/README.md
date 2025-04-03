# 状態管理とコンテキストの導入（useContextの基礎）

## 🎯 目的

アプリ全体で共通して使いたい情報（ログイン状態・テーマなど）を Context を使って管理し、  
どのコンポーネントからでも参照・更新できる仕組みを学ぶ。

---

## 🎯 今週のゴール

- Context API の基本構造を理解できる
- `useContext` で共通状態を取得・更新できるようになる
- props drilling（中間コンポーネント経由の受け渡し）を回避できる

---

## ✅ Context API とは？（Reactの状態共有メカニズム）

Context API は、React が提供する「**グローバルな状態管理の仕組み**」です。  
通常、親から子コンポーネントへ値を渡すには `props` を使いますが、  
複数階層をまたいで状態を共有したい場合、**props の受け渡しが煩雑**になります。

この課題を解決するのが Context API です。

---

### 🔸 Context API の仕組み

1. `createContext()`  
   - 状態の箱（コンテキストオブジェクト）を作る

2. `Provider`  
   - 状態を「誰が提供するか」を定義する
   - `value` に共有したいデータを渡す

3. `useContext()`  
   - Context から状態を取得するための Hook

---

### 🔸 なぜ必要なのか？

#### ❌ 通常の props の場合：

```tsx
<App>
  <Header user={user}>
    <Nav user={user}>
      <Profile user={user} />
    </Nav>
  </Header>
</App>
```

- 途中のコンポーネント（Header, Nav）は本来 user を使わないのに props を受け渡す必要がある
- これを **props drilling** と呼ぶ

#### ✅ Context を使えば：

```tsx
<UserProvider>
  <Header />
</UserProvider>
```

- `useContext(UserContext)` を使って、どの階層でも `user` にアクセスできる
- 中間のコンポーネントに props を渡さなくて済む

---

### ✅ 適切な使いどころ

| 適用対象 | 例 |
|----------|----|
| ログイン状態 | `user`, `isLoggedIn`, `login()`, `logout()` など |
| テーマ設定 | ダーク/ライトテーマなど |
| 言語情報 | `locale`, `setLocale()` など |
| アプリ全体の設定 | ページタイトル、設定フラグなど |

---

### ✅ Context 導入時の注意点

| 注意点 | 内容 |
|--------|------|
| 状態が頻繁に変わると再レンダリングが多くなる | → 状態は必要最低限に |
| 乱用するとブラックボックス化する | → useContext の責務を意識 |
| 状態の初期化が複雑化しやすい | → Provider の階層と defaultValue を整理 |

---

### ✅ まとめ

- Context は「アプリ全体 or 複数コンポーネントで共有したい状態」に使う
- Provider で包み、useContext で取り出すのが基本形
- 状態と処理をセットで持たせることで、アプリ全体がすっきりする

---

## ✅ サンプル実装：UserContext

アプリ全体で「ログインユーザーの情報」を管理・参照したい場合の例です。  
この UserContext を使うことで、どのコンポーネントからでもログイン状態を簡単に扱えるようになります。

---

### 🔸 1. Context の定義

```tsx
// context/UserContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type User = { name: string } | null;

type UserContextType = {
  user: User;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (name: string) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within UserProvider");
  return context;
};
```

---

### 🔸 2. アプリに組み込む（レイアウト or root）

```tsx
// app/layout.tsx
import { UserProvider } from "@/context/UserContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
```

---

### 🔸 3. ヘッダーでログイン状態を表示

```tsx
// components/Header.tsx
import { useUserContext } from "@/context/UserContext";

export const Header = () => {
  const { user, logout } = useUserContext();

  return (
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-lg font-bold">My App</h1>
      <div>
        {user ? (
          <>
            <span className="mr-2">{user.name} さん</span>
            <button onClick={logout} className="text-blue-500">ログアウト</button>
          </>
        ) : (
          <span>ゲスト</span>
        )}
      </div>
    </header>
  );
};
```

---

### 🔸 4. 任意の画面からログイン処理

```tsx
// app/login/page.tsx
"use client";
import { useUserContext } from "@/context/UserContext";

export default function LoginPage() {
  const { login } = useUserContext();

  return (
    <div className="p-4">
      <h2>ログイン</h2>
      <button onClick={() => login("山田太郎")} className="bg-blue-500 text-white px-4 py-2 rounded">
        ログインする
      </button>
    </div>
  );
}
```

---

### ✅ ポイントまとめ

- `createContext + useContext` で状態の提供と取得を明確に分離
- Provider でアプリ全体を包むことを忘れずに
- `login`, `logout` のような関数も一緒に管理することで、状態管理が簡潔に

この構成ができれば、**どの画面でも同じ状態を自然に使えるようになります！**

## 🔹 演習課題

### 課題①：UserContext を作成し、ログイン状態を保持

- `user: { name: string } | null` を Context で保持
- `login(name: string)` 関数でログイン状態を更新
- `logout()` 関数でクリア

### 課題②：ヘッダーでログイン状態を表示

- `useUserContext()` を使ってログイン状態を取得
- ログインしていない場合は「ゲスト」、している場合は「〇〇さん、こんにちは」と表示

---

## 💬 ワンポイントアドバイス

- 「複数の UI が同じ情報を使う」場合はまず Context を検討
- 状態の初期化、更新、参照をシンプルに整理すると保守しやすくなる