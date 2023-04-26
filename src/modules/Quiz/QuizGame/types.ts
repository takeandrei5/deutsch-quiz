import type { MultipleQuizQuestion, Topic } from '@prisma/client';
import type { NonEmptyArray } from '@utils/models';

export type QuizGameProps = {
  questions: NonEmptyArray<MultipleQuizQuestion>;
  topic: Topic;
};
