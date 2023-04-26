import { PrismaClient } from '@prisma/client';
import { build_a1_bauernhof_topic } from './a1/bauernhof';
import { build_a1_der_die_das_topic } from './a1/der-die-das';
import { build_a1_lebensmittel_topic } from './a1/lebensmittel';

import type { Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await insertDifficulties();
}

async function insertDifficulties(): Promise<void> {
  await prisma.multipleQuizQuestion.deleteMany({});
  await prisma.topic.deleteMany({});
  await prisma.difficulty.deleteMany({});

  const a1: Difficulty = await prisma.difficulty.create({
    data: {
      level: 'A1',
      description:
        'Mit A1 lernen Sie die Grundbausteine ​​der deutschen Sprache, sowohl was Grammatik als auch Wortschatz betrifft.',
      rating: 1,
      topics: {
        create: [
          await build_a1_bauernhof_topic(),
          await build_a1_lebensmittel_topic(),
          await build_a1_der_die_das_topic(),
        ],
      },
      enabled: true,
    },
  });

  const a2: Difficulty = await prisma.difficulty.upsert({
    where: { level: 'A2' },
    update: {
      enabled: false,
    },
    create: {
      level: 'A2',
      description: 'A2 difficulty',
      enabled: false,
      topics: {},
    },
  });

  const b1: Difficulty = await prisma.difficulty.upsert({
    where: { level: 'B1' },
    update: {
      enabled: false,
    },
    create: {
      level: 'B1',
      description: 'B1 difficulty',
      enabled: false,
      topics: {},
    },
  });

  const b2: Difficulty = await prisma.difficulty.upsert({
    where: { level: 'B2' },
    update: {
      enabled: false,
    },
    create: {
      level: 'B2',
      description: 'B2 difficulty',
      enabled: false,
      topics: {},
    },
  });

  console.log('Inserted difficulty levels and topics: ', { a1, a2, b1, b2 });
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
