import { buildBlurImage } from "@utils/image-utils";
import buildQuestions from "./questions";

import type { Prisma } from "@prisma/client";

const buildTopic =
  async (): Promise<Prisma.TopicCreateWithoutDifficultyInput> => ({
    name: "Lebensmittel",
    description: "Lernen Sie über die Bauernhoftiere",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Cover/public",
    blurImage: await buildBlurImage(
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Cover_LowQ/blur"
    ),
    multipleQuizQuestions: {
      createMany: {
        data: await buildQuestions(),
      },
    },
  });

export default buildTopic;
