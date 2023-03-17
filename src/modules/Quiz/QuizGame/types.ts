import type { MultipleQuizQuestion } from "@prisma/client";
import type { NonEmptyArray } from "@utils/models";

export type QuizGameProps = {
  questions: NonEmptyArray<MultipleQuizQuestion>;
  anchorRef: React.RefObject<HTMLDivElement>;
  isSoundOn: boolean;
};
