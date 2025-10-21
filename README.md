# 研修管理システム (Training Management System)

**IT人材育成プログラムのための研修管理システム**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC)](https://tailwindcss.com/)

---

## 📋 概要

このシステムは、**52週間のIT人材育成プログラム**を効率的に運営するための研修管理システムです。

### 主な機能

- 📚 **週次カリキュラム管理**: 52週分の学習内容を体系的に管理
- 📖 **研修資料管理**: スライド、ハンズオン資料、演習問題、参考資料
- 📝 **宿題管理**: 課題の作成、提出、フィードバック
- 📊 **進捗管理**: 受講者の学習進捗を可視化
- ❓ **FAQ管理**: よくある質問の一元管理
- 👥 **ユーザー管理**: 講師・受講者の役割管理

---

## 🎯 対象プログラム

**IT人材育成プログラム - 1年間の伴走型支援**

### 3つのフェーズ

#### フェーズ1: 請求書管理のデジタル化 (1〜8週目)
- Excel基礎から実務活用まで
- 請求書管理システムの構築

#### フェーズ2: ワークフロー自動化 (9〜32週目)
- 業務フロー分析
- スケジュール管理の自動化
- マクロ・VBAによる効率化

#### フェーズ3: 自社ブランドHP制作 (33〜52週目)
- Web基礎知識
- WordPressによるサイト構築
- 画像編集・SEO対策

---

## 🏗️ 技術スタック

### フロントエンド
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**

### バックエンド
- **Next.js API Routes**
- **Prisma ORM 6**
- **PostgreSQL** (データベース)
- **NextAuth.js v5** (認証)

### その他
- **bcryptjs** (パスワードハッシュ化)
- **react-markdown** (Markdown レンダリング)

---

## 📊 データモデル

### 主要エンティティ

- **User**: ユーザー (講師・受講者)
- **Phase**: 研修フェーズ (3フェーズ)
- **Week**: 週次カリキュラム (52週)
- **Material**: 研修資料 (スライド、ハンズオン等)
- **Assignment**: 宿題
- **AssignmentSubmission**: 宿題提出
- **FAQ**: よくある質問
- **Progress**: 進捗管理

詳細は `prisma/schema.prisma` を参照してください。

---

## 🚀 セットアップ

### 前提条件

- Node.js 18.x 以上
- PostgreSQL 14.x 以上
- npm または yarn

### インストール手順

#### 1. リポジトリのクローン

```bash
git clone https://github.com/ryojiwata0103/training-management-system.git
cd training-management-system
```

#### 2. 依存関係のインストール

```bash
npm install
```

#### 3. 環境変数の設定

`.env.example` を `.env` にコピーして、環境変数を設定:

```bash
cp .env.example .env
```

`.env` ファイルを編集:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/training_db?schema=public"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

#### 4. データベースのセットアップ

```bash
# Prisma Clientの生成
npm run prisma:generate

# データベースにスキーマを反映
npm run prisma:push
```

#### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 にアクセスしてください。

---

## 📜 利用可能なスクリプト

```bash
npm run dev            # 開発サーバー起動 (Turbopack有効)
npm run build          # プロダクションビルド
npm run start          # プロダクションサーバー起動
npm run prisma:generate # Prisma Clientの生成
npm run prisma:push    # データベースにスキーマを反映
npm run prisma:studio  # Prisma Studio (GUIツール) 起動
```

---

## 📁 プロジェクト構造

```
training-management-system/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # 認証関連ページ
│   │   ├── (dashboard)/       # ダッシュボード
│   │   ├── api/               # API Routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/            # UIコンポーネント
│   ├── lib/                   # ユーティリティ
│   └── types/                 # TypeScript型定義
├── prisma/
│   └── schema.prisma          # Prismaスキーマ
├── public/                    # 静的ファイル
├── .env.example               # 環境変数テンプレート
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔐 認証

### ユーザー役割

- **ADMIN**: 講師・管理者
  - カリキュラム管理
  - 資料作成・編集
  - 宿題作成・評価
  - 受講者の進捗確認

- **STUDENT**: 受講者
  - 研修資料の閲覧
  - 宿題の提出
  - 自分の進捗確認
  - FAQ閲覧

---

## 📖 機能詳細

### 管理者機能

- フェーズ・週次カリキュラムの作成・編集
- 研修資料のアップロード・管理 (Markdown対応)
- 宿題の作成・管理
- 受講者の宿題評価・フィードバック
- FAQ の作成・編集
- 受講者の進捗ダッシュボード

### 受講者機能

- 週次カリキュラム一覧の閲覧
- 研修資料の閲覧 (Markdown レンダリング)
- 資料完了ボタンで進捗記録
- 宿題の提出 (ファイルアップロード対応)
- 自己評価 (理解度・学習時間の記録)
- 自分の進捗確認
- FAQ 閲覧

---

## 🛠️ 開発ロードマップ

### Phase 1: MVP (完了)
- ✅ プロジェクトセットアップ
- ✅ データモデル設計
- ✅ GitHubリポジトリ作成

### Phase 2: 認証システム (次のステップ)
- [ ] NextAuth.js設定
- [ ] ログイン・登録ページ
- [ ] ロールベース認証

### Phase 3: 管理者機能
- [ ] カリキュラム管理画面
- [ ] 資料管理機能
- [ ] 宿題管理機能
- [ ] FAQ管理機能

### Phase 4: 受講者機能
- [ ] カリキュラム閲覧画面
- [ ] 資料閲覧・完了機能
- [ ] 宿題提出機能
- [ ] 進捗ダッシュボード

### Phase 5: 最終調整
- [ ] UI/UX改善
- [ ] レスポンシブ対応
- [ ] エラーハンドリング
- [ ] パフォーマンス最適化

---

## 🤝 貢献

プルリクエストは歓迎します! 大きな変更の場合は、まずIssueを開いて変更内容を議論してください。

---

## 📝 ライセンス

ISC

---

## 👤 作成者

**ryojiwata0103**

- GitHub: [@ryojiwata0103](https://github.com/ryojiwata0103)

---

## 📞 お問い合わせ

質問や提案がありましたら、GitHubのIssueでお知らせください。

---

**🤖 Generated with [Claude Code](https://claude.ai/code)**

**Co-Authored-By: Claude <noreply@anthropic.com>**
