import { router } from "../trpc";
import { difficultiesRouter } from "./difficulties";
import { topicsRouter } from "./topics";

export const appRouter = router({
  difficulties: difficultiesRouter,
  topics: topicsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
