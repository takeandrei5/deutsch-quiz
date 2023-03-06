import React from "react";
import { useQuiz } from "./hooks";

import type { QuizGameProps } from "./types";

const QuizGame: React.FC<QuizGameProps> = ({
  questions,
  anchorRef,
}: QuizGameProps) => {
  const { history } = useQuiz(questions, anchorRef.current);

  return (
    <>
      {history.map((item: JSX.Element, index: number) =>
        React.createElement(item.type, { ...item.props, key: index })
      )}
    </>
  );
};

export default QuizGame;
