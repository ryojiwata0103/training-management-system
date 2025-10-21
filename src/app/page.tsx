import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  // Redirect to appropriate dashboard if logged in
  if (session) {
    if (session.user.role === "ADMIN") {
      redirect("/admin");
    } else {
      redirect("/student");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          研修管理システム
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
          IT人材育成プログラム
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
          1年間の伴走型支援で確実にスキルアップ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              📚
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              52週のカリキュラム
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              3つのフェーズで体系的に学習
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="text-green-600 dark:text-green-400 text-4xl mb-4">
              📊
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              進捗管理
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              学習の進み具合を可視化
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="text-purple-600 dark:text-purple-400 text-4xl mb-4">
              📝
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              宿題提出
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              課題の提出とフィードバック
            </p>
          </div>
        </div>

        <div className="space-x-4">
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ログイン
          </Link>
          <Link
            href="/register"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            新規登録
          </Link>
        </div>
      </div>
    </main>
  );
}
