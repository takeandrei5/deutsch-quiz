import type { Prisma } from "@prisma/client";
import questions from "./questions";

const topic: Prisma.TopicCreateWithoutDifficultyLevelInput = {
  name: "Auf dem Bauernhof",
  description: "Lernen Sie über die Bauernhoftiere",
  image:
    "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Cover/public",
  multipleQuizQuestions: {
    createMany: {
      data: questions,
    },
  },
};

export default topic;
