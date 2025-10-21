import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  // Public routes
  const publicRoutes = ["/", "/login", "/register"];
  const isPublicRoute = publicRoutes.includes(pathname);

  // If not logged in and trying to access protected route
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If logged in and trying to access auth pages
  if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
    const dashboardUrl = userRole === "ADMIN" ? "/admin" : "/student";
    return NextResponse.redirect(new URL(dashboardUrl, req.url));
  }

  // Role-based access control
  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/student", req.url));
  }

  if (pathname.startsWith("/student") && userRole !== "STUDENT") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
