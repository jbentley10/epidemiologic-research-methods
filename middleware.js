// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const normalizedPathname = pathname.toLowerCase();

  if (pathname !== normalizedPathname) {
    const url = req.nextUrl.clone();
    url.pathname = normalizedPathname;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Match page routes only: skip Next.js internals, API routes, and static files
  // (anything with a file extension, e.g. /fonts/Bahnschrift-Regular.ttf), whose
  // paths are case-sensitive and must not be lowercased.
  matcher: "/((?!_next|api|.*\\..*).*)",
};
