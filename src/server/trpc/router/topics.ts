import { shuffleArray } from "@utils/array-utils";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

import type { MultipleQuizQuestion } from "@prisma/client";

export const topicsRouter = router({
  getManyMultipleQuizQuestions: publicProcedure
    .input(
      z.object({
        topic: z.string(),
      })
    )
    .query(async ({ ctx, input }): Promise<MultipleQuizQuestion[]> => {
      const questions: MultipleQuizQuestion[] = (
        await ctx.prisma.topic.findMany({
          where: {
            name: input.topic,
          },
          include: {
            multipleQuizQuestions: true,
          },
        })
      ).flatMap((topic) =>
        topic.multipleQuizQuestions.map((question: MultipleQuizQuestion) => ({
          ...question,
          answers: shuffleArray<string>(question.answers),
        }))
      );

      return shuffleArray<MultipleQuizQuestion>(questions);
    }),
});
