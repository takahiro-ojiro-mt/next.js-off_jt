# 設計例（参考）

## フォルダ構成例
```
/app
  /page.tsx              # ホームページ
  /(auth)
    /login/page.tsx      # ログインページ
    /signup/page.tsx     # サインアップページ
  /(protected)           # 認証必要なルート
    /items/
      /page.tsx          # アイテム一覧ページ
      /[id]/page.tsx     # アイテム詳細ページ
      /new/page.tsx      # アイテム登録ページ
/components
  /auth/
    /login-form.tsx      # ログインフォーム
    /signup-form.tsx     # サインアップフォーム
  /items/
    /item-card.tsx       # アイテム表示カード
    /item-form.tsx       # アイテム登録/編集フォーム
    /item-list.tsx       # アイテム一覧
  /shared/
    /header.tsx          # 共通ヘッダー
    /loading.tsx         # ローディング表示
/lib
  /auth.ts              # 認証関連の処理
  /db.ts                # データベース接続設定
/types
  /item.ts             # 型定義
```

## コンポーネント設計例
```
// components/items/item-card.tsx
export interface ItemCardProps {
  id: string
  title: string
  description: string
  onDelete: (id: string) => void
}

export function ItemCard({ id, title, description, onDelete }: ItemCardProps) {
  // アイテムの表示と削除ボタン
}

// components/items/item-form.tsx
export function ItemForm() {
  // アイテムの登録・編集フォーム
}

// components/items/item-list.tsx
export function ItemList() {
  // アイテム一覧の表示
}

// components/shared/header.tsx
export function Header() {
  // ナビゲーションとログアウトボタンを含むヘッダー
}
```
