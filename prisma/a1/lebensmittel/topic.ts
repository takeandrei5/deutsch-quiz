import buildQuestions from "./questions";

import type { Prisma } from "@prisma/client";

const buildTopic =
  async (): Promise<Prisma.TopicCreateWithoutDifficultyInput> => ({
    name: "In dem Supermarkt",
    description:
      "Mit diesem einfachen Spiel habt ihr die Möglichkeit, die Namen der meistgekauften Lebensmittel zu lernen.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Cover/public",
    multipleQuizQuestions: {
      createMany: {
        data: await buildQuestions(),
      },
    },
  });

export default buildTopic;
