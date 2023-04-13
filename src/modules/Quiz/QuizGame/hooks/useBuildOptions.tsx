import type { MultipleQuizQuestion } from '@prisma/client';
import type { Option } from '../../UserOption/types';

const useBuildOptions = () => {
  const buildOptions = (question: MultipleQuizQuestion): Option[] => {
    return question.answers.map(
      (answer: string, index: number): Option => ({
        id: index,
        value: answer,
      })
    );
  };

  return { buildOptions };
};

export { useBuildOptions };
