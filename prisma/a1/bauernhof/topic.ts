import type { Prisma } from "@prisma/client";
import buildQuestions from "./questions";
import { buildBlurImage } from "../../../src/utils/image-utils";

const buildTopic =
  async (): Promise<Prisma.TopicCreateWithoutDifficultyLevelInput> => ({
    name: "Auf dem Bauernhof",
    description: "Lernen Sie über die Bauernhoftiere",
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
