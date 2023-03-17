import React, { useState } from "react";

import { ChatEnd } from "@modules/Quiz/ChatEnd";
import { ChatStart } from "@modules/Quiz/ChatStart";
import { ErrorMessage } from "@modules/Quiz/ErrorMessage";
import { Question } from "@modules/Quiz/Question";
import { QuizResultsMessage } from "@modules/Quiz/QuizResultsMessage";
import { UserOption } from "@modules/Quiz/UserOption";
import { SuccessMessage } from "@modules/Quiz/SuccessMessage";

import { usePreloadImage } from "./usePreloadImage";

import type { ChatEndProps } from "@modules/Quiz/ChatEnd/types";
import type { ChatStartProps } from "@modules/Quiz/ChatStart/types";
import type { ErrorMessageProps } from "@modules/Quiz/ErrorMessage/types";
import type { QuestionProps } from "@modules/Quiz/Question/types";
import type { QuizResultsMessageProps } from "@modules/Quiz/QuizResultsMessage/types";
import type { Option, UserOptionProps } from "@modules/Quiz/UserOption/types";
import type { MultipleQuizQuestion } from "@prisma/client";
import type { NonEmptyArray } from "@utils/models";
import type { SuccessMessageProps } from "@modules/Quiz/SuccessMessage/types";

const useBuildHistory = (
  onUserOptionSubmitted: (optionId: number) => void,
  questions: NonEmptyArray<MultipleQuizQuestion>,
  currentOptions: Option[],
  remainingQuestions: MultipleQuizQuestion[]
) => {
  const { preloadImage } = usePreloadImage();

  const [history, setHistory] = useState<JSX.Element[]>(
    preloadImage(
      [
        React.createElement<ChatStartProps>(
          ChatStart,
          null,
          React.createElement<QuestionProps>(Question, {
            image: questions[0].image || "",
            question: questions[0].question || "",
          })
        ),
        React.createElement<ChatEndProps>(
          ChatEnd,
          null,
          React.createElement<UserOptionProps>(UserOption, {
            options: currentOptions,
            onOptionClick: onUserOptionSubmitted,
          })
        ),
      ],
      remainingQuestions
    )
  );

  const appendCorrectAnswerNode = (
    newQuestion: MultipleQuizQuestion,
    newOptions: Option[],
    newRemainingQuestions: MultipleQuizQuestion[],
    isSoundOn: boolean
  ): void => {
    setHistory([
      ...history,
      ...preloadImage(
        [
          React.createElement<ChatStartProps>(
            ChatStart,
            null,
            React.createElement<SuccessMessageProps>(SuccessMessage, {
              isSoundOn,
            })
          ),
          React.createElement<ChatStartProps>(
            ChatStart,
            null,
            React.createElement<QuestionProps>(Question, {
              image: newQuestion.image || "",
              question: newQuestion.question || "",
            })
          ),
          React.createElement<ChatEndProps>(
            ChatEnd,
            null,
            React.createElement<UserOptionProps>(UserOption, {
              options: newOptions,
              onOptionClick: onUserOptionSubmitted,
            })
          ),
        ],
        newRemainingQuestions
      ),
    ]);
  };

  const appendIncorrectAnswerNode = (
    hint: string | null,
    isSoundOn: boolean
  ): void => {
    setHistory([
      ...history,
      React.createElement<ChatStartProps>(
        ChatStart,
        null,
        React.createElement<ErrorMessageProps>(ErrorMessage, {
          hint,
          isSoundOn,
        })
      ),
      React.createElement<ChatEndProps>(
        ChatEnd,
        null,
        React.createElement<UserOptionProps>(UserOption, {
          options: currentOptions,
          onOptionClick: onUserOptionSubmitted,
        })
      ),
    ]);
  };

  const appendQuizResultNode = (
    correctAnswersCount: number,
    totalQuestionsCount: number
  ): void => {
    setHistory([
      ...history,
      React.createElement<QuizResultsMessageProps>(QuizResultsMessage, {
        correctAnswersCount,
        totalQuestionsCount,
      }),
    ]);
  };

  return {
    history,
    appendCorrectAnswerNode,
    appendIncorrectAnswerNode,
    appendQuizResultNode,
  };
};

export { useBuildHistory };
