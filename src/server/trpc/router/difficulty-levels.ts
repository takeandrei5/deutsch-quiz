import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import type { Topic } from "@prisma/client";

export const difficultyLevelsRouter = router({
  getManyTopics: publicProcedure
    .input(
      z.object({
        difficultyLevel: z
          .string()
          .regex(/^(A1|A2|B1|B2)$/, { message: "Unknown difficulty level." }),
      })
    )
    .query(async ({ ctx, input }): Promise<Topic[]> => {
      const topics: Topic[] = (
        await ctx.prisma.difficultyLevel.findMany({
          where: {
            level: input.difficultyLevel,
            enabled: true,
          },
          include: {
            topics: true,
          },
        })
      ).flatMap((difficultyLevel) => difficultyLevel.topics);

      return topics;
    }),
});
