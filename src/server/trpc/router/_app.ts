import { router } from "../trpc";
import { difficultyLevelsRouter } from "./difficulty-levels";
import { topicsRouter } from "./topics";

export const appRouter = router({
  difficultyLevels: difficultyLevelsRouter,
  topics: topicsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
