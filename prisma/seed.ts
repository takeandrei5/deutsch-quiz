import { PrismaClient } from "@prisma/client";
import type { DifficultyLevel } from "@prisma/client";

import { a1_bauernhof_topic } from "./a1/bauernhof";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await insertDifficultyLevels();
}

async function insertDifficultyLevels(): Promise<void> {
  await prisma.multipleQuizQuestion.deleteMany({});
  await prisma.topic.deleteMany({});
  await prisma.difficultyLevel.deleteMany({});

  const a1: DifficultyLevel = await prisma.difficultyLevel.create({
    data: {
      level: "A1",
      enabled: true,
      topics: {
        create: [a1_bauernhof_topic],
      },
    },
  });

  const a2: DifficultyLevel = await prisma.difficultyLevel.upsert({
    where: { level: "A2" },
    update: {
      enabled: false,
    },
    create: {
      level: "A2",
      enabled: false,
      topics: {},
    },
  });

  const b1: DifficultyLevel = await prisma.difficultyLevel.upsert({
    where: { level: "B1" },
    update: {
      enabled: false,
    },
    create: {
      level: "B1",
      enabled: false,
      topics: {},
    },
  });

  const b2: DifficultyLevel = await prisma.difficultyLevel.upsert({
    where: { level: "B2" },
    update: {
      enabled: false,
    },
    create: {
      level: "B2",
      enabled: false,
      topics: {},
    },
  });

  console.log("Inserted difficulty levels and topics: ", { a1, a2, b1, b2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
