import type { Option } from './UserOption/types';

import type { NonEmptyArray } from '../../utils/models';

import type { MultipleQuizQuestion, Topic } from '@prisma/client';

export type QuizProps = {
  difficultyLevel: string;
  topic: Topic;
  questions: NonEmptyArray<MultipleQuizQuestion>;
};

export enum QuizActionType {
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  FINISHED_QUIZ,
}

export type QuizAction = {
  type: QuizActionType;
  payload?: unknown;
};

export type QuizState = {
  history: JSX.Element[];
  remainingQuestions: MultipleQuizQuestion[];
  currentQuestion: MultipleQuizQuestion;
  currentOptions: Option[];
};

export type CorrectAnswer = {
  [key: string]: boolean;
};

export type MessageState = {
  [key: number]: JSX.Element;
};
