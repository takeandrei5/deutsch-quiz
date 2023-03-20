import React from "react";
import Image from "next/image";

import type { MultipleQuizQuestion } from "@prisma/client";

const usePreloadImage = () => {
  const preloadImage = (
    history: JSX.Element[],
    remainingQuestions: MultipleQuizQuestion[]
  ): JSX.Element[] => {
    const currentQuestion: MultipleQuizQuestion = remainingQuestions[0];
    const newHistory: JSX.Element[] = [...history];

    if (currentQuestion && currentQuestion.image) {
      newHistory.push(
        React.createElement(Image, {
          className: "invisible absolute",
          alt: currentQuestion.correctAnswer,
          src: currentQuestion.image,
          width: 96,
          height: 0,
          quality: 10,
        })
      );
    }

    return newHistory;
  };

  return { preloadImage };
};

export { usePreloadImage };
