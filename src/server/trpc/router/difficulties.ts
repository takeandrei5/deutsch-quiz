import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import type { Difficulty, Topic } from "@prisma/client";

export const difficultiesRouter = router({
  getManyDifficulties: publicProcedure.query(
    async ({ ctx }): Promise<Difficulty[]> => {
      const difficulties: Difficulty[] = await ctx.prisma.difficulty.findMany({
        where: {
          enabled: true,
        },
      });

      return difficulties;
    }
  ),
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
        await ctx.prisma.difficulty.findMany({
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
