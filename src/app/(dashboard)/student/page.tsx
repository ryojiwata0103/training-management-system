import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default async function StudentDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardLayout userName={session.user.name || ""} userRole={session.user.role}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          受講者ダッシュボード
        </h2>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            学習進捗
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>全体の進捗</span>
                <span>0 / 52週 (0%)</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  フェーズ1
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                  0 / 8週
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  請求書管理
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="text-sm font-medium text-green-900 dark:text-green-100">
                  フェーズ2
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">
                  0 / 24週
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                  ワークフロー自動化
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <div className="text-sm font-medium text-purple-900 dark:text-purple-100">
                  フェーズ3
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">
                  0 / 20週
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400 mt-1">
                  HP制作
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Week */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            今週の学習内容
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            カリキュラムがまだ設定されていません
          </p>
        </div>

        {/* Pending Assignments */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            未提出の宿題
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            未提出の宿題はありません
          </p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            最近のアクティビティ
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            まだアクティビティがありません
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
