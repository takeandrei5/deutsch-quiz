import { DifficultyLevels } from "@models";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

const middleware = (request: NextRequest): NextResponse => {
  const difficultyLevel: string | undefined = request.nextUrl.pathname
    .split("/")
    .pop();

  if (!difficultyLevel) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  if (
    !DifficultyLevels[
      difficultyLevel.toUpperCase() as keyof typeof DifficultyLevels
    ]
  ) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  return NextResponse.redirect(new URL(`${request.url}/topics`));
};

export default middleware;
