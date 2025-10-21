"use client";

import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
  userName: string;
  userRole: string;
}

export default function DashboardLayout({
  children,
  userName,
  userRole,
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const isAdmin = userRole === "ADMIN";

  const adminNavigation = [
    { name: "ダッシュボード", href: "/admin" },
    { name: "カリキュラム管理", href: "/admin/curriculum" },
    { name: "受講者管理", href: "/admin/students" },
    { name: "資料管理", href: "/admin/materials" },
    { name: "宿題管理", href: "/admin/assignments" },
  ];

  const studentNavigation = [
    { name: "ダッシュボード", href: "/student" },
    { name: "カリキュラム", href: "/student/curriculum" },
    { name: "進捗確認", href: "/student/progress" },
    { name: "宿題", href: "/student/assignments" },
    { name: "FAQ", href: "/student/faq" },
  ];

  const navigation = isAdmin ? adminNavigation : studentNavigation;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  研修管理システム
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {userName} ({isAdmin ? "講師" : "受講者"})
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 min-h-[calc(100vh-4rem)] border-r border-gray-200 dark:border-gray-700">
          <nav className="mt-5 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
