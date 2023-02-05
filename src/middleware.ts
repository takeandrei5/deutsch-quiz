import { NextResponse } from "next/server";

import topicsMiddleware from "./pages/levels/[difficultyLevel]/topics/middleware";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const PUBLIC_FILE = /\.(.*)$/;

  // if (
  //   request.nextUrl.pathname.startsWith("/_next") || // exclude Next.js internals
  //   request.nextUrl.pathname.startsWith("/api") || //  exclude all API routes
  //   request.nextUrl.pathname.startsWith("/static") || // exclude static files
  //   PUBLIC_FILE.test(request.nextUrl.pathname) // exclude all files in the public folder
  // ) {
  //   return NextResponse.next();
  // }

  if (request.nextUrl.pathname.match(/\/levels\/[A-Za-z0-9]+/gi)) {
    return topicsMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/levels/:difficultyLevel{1}"],
};
