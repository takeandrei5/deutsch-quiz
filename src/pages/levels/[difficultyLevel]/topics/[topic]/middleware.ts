// import type { NextRequest } from "next/server";

// const middleware = (request: NextRequest): boolean => {
//   const difficultyLevel: string | undefined = request.nextUrl.pathname
//     .split("/")
//     .pop();

//   if (!difficultyLevel) {
//     return false;
//   }

//   if (
//     !DifficultyLevels[
//       difficultyLevel.toUpperCase() as keyof typeof DifficultyLevels
//     ]
//   ) {
//     return false;
//   }

//   return true;
// };

// export default middleware;
