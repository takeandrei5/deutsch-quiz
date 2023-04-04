import React, { useRef } from "react";

import { useQuiz } from "./hooks";

import type { QuizGameProps } from "./types";

const QuizGame: React.FC<QuizGameProps> = ({
  questions,
  isSoundOn,
}: QuizGameProps) => {
  const quizRef = useRef<HTMLDivElement>(null);

  const { history } = useQuiz(questions, quizRef.current, isSoundOn);

  return (
    <>
      <div
        className="h-full w-full overflow-auto overflow-x-hidden rounded-2xl bg-base-100 p-4 shadow-xl md:w-[768px] lg:p-8"
        ref={quizRef}
      >
        {history.map((item: JSX.Element, index: number) =>
          React.createElement(item.type, { ...item.props, key: index })
        )}
      </div>
      <div className="mb-4" />
    </>
  );
};

export default QuizGame;
