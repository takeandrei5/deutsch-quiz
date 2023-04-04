import type { MultipleQuizQuestion, Topic } from '@prisma/client';

export type TopicSelectionProps = {
  difficultyLevel: string;
  topics: (Topic & {
    multipleQuizQuestions: MultipleQuizQuestion[];
  })[];
};
