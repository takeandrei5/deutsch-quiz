import { NextResponse } from "next/server";

import topicsMiddleware from "./pages/levels/[difficultyLevel]/topics/middleware";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match(/\/levels\/[A-Za-z0-9]+/gi)) {
    return topicsMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/levels/:difficultyLevel{1}"],
};
