import { PreloadedImage } from "@components";
import React from "react";

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
        React.createElement(PreloadedImage, {
          className: "invisible absolute top-0 left-0",
          alt: currentQuestion.correctAnswer,
          src: currentQuestion.image,
          width: 96,
          height: 96,
          quality: 75,
        })
      );
    }

    return newHistory;
  };

  return { preloadImage };
};

export { usePreloadImage };
