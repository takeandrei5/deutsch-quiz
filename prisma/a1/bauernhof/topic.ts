import { buildBlurImage } from "@utils/image-utils";
import buildQuestions from "./questions";

import type { Prisma } from "@prisma/client";

const buildTopic =
  async (): Promise<Prisma.TopicCreateWithoutDifficultyInput> => ({
    name: "Auf dem Bauernhof",
    description:
      "Kommt mit auf den Bauernhof! Hier habt ihr die Möglichkeit, die Namen der Tiere mithilfe eines einfachen Spiels herauszufinden.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Cover/public",
    blurImage: await buildBlurImage(
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Cover_LowQ/blur"
    ),
    multipleQuizQuestions: {
      createMany: {
        data: await buildQuestions(),
      },
    },
  });

export default buildTopic;
