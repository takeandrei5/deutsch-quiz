import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ChatEnd } from "../ChatEnd";
import { ChatStart } from "../ChatStart";
import { ErrorMessage } from "../ErrorMessage";
import { Question } from "../Question";
import { QuizResultsMessage } from "../QuizResultsMessage";
import { SuccessMessage } from "../SuccessMessage";
import { UserOption } from "../UserOption";

import type { MultipleQuizQuestion } from "@prisma/client";
import type { NonEmptyArray } from "@utils/models";
import type { ChatEndProps } from "../ChatEnd/types";
import type { ChatStartProps } from "../ChatStart/types";
import type { ErrorMessageProps } from "../ErrorMessage/types";
import type { QuestionProps } from "../Question/types";
import type { QuizResultsMessageProps } from "../QuizResultsMessage/types";
import type { SuccessMessageProps } from "../SuccessMessage/types";
import type { Option, UserOptionProps } from "../UserOption/types";
import type { CorrectAnswer } from "../types";
import { useBuildOptions } from "./hooks/useBuildOptions";
import { usePreloadImage } from "./hooks/usePreloadImage";

const useQuiz = (
  questions: NonEmptyArray<MultipleQuizQuestion>,
  quizRef: HTMLDivElement | null,
  isSoundOn: boolean
) => {
  const { buildOptions } = useBuildOptions();
  const { preloadImage } = usePreloadImage();

  const remainingQuestionsRef = useRef<MultipleQuizQuestion[]>(
    questions.slice(1)
  );
  const incorrectAnswersCountRef = useRef<number>(0);
  const correctAnswersRef = useRef<CorrectAnswer>({});
  const currentQuestionRef = useRef<MultipleQuizQuestion>(questions[0]);
  const currentOptionsRef = useRef<Option[]>(buildOptions(questions[0]));
  const isSoundOnRef = useRef<boolean>(isSoundOn);

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
            options: currentOptionsRef.current,
            onOptionClick: onUserOptionSubmitted,
          })
        ),
      ],
      remainingQuestionsRef.current
    )
  );

  useEffect(() => {
    isSoundOnRef.current = isSoundOn;
  }, [isSoundOn]);

  if (!process.browser) React.useLayoutEffect = React.useEffect;

  useLayoutEffect(() => {
    setTimeout(() => scrollToBottom(), 100);
  }, [history]);

  function onUserOptionSubmitted(optionId: number): void {
    const currentQuestion = currentQuestionRef.current;
    const currentOptions = currentOptionsRef.current;
    const remainingQuestions = remainingQuestionsRef.current;

    const isCorrect: boolean =
      currentOptions[optionId]?.value === currentQuestion.correctAnswer;

    const isQuestionAnswered: boolean = Object.keys(
      correctAnswersRef.current
    ).includes(currentQuestion.id);

    if (!isQuestionAnswered) {
      correctAnswersRef.current[currentQuestion.id] = isCorrect;
    }

    if (isCorrect && !remainingQuestions.length) {
      const totalQuestionsCount: number = Object.keys(questions).length;
      const correctAnswersCount: number = Object.values(
        correctAnswersRef.current
      ).filter((correctAnswer: boolean) => !!correctAnswer).length;

      setHistory((prevHistory) => [
        ...prevHistory,
        React.createElement<QuizResultsMessageProps>(QuizResultsMessage, {
          correctAnswersCount,
          totalQuestionsCount,
        }),
      ]);
      return;
    }

    if (isCorrect) {
      const newQuestion = remainingQuestions[0] as MultipleQuizQuestion;

      currentQuestionRef.current = newQuestion;
      currentOptionsRef.current = buildOptions(newQuestion);
      incorrectAnswersCountRef.current = 0;
      remainingQuestionsRef.current = remainingQuestions.slice(1);

      setHistory((prevHistory) => [
        ...prevHistory,
        ...preloadImage(
          [
            React.createElement<ChatStartProps>(
              ChatStart,
              null,
              React.createElement<SuccessMessageProps>(SuccessMessage, {
                isSoundOn: isSoundOnRef.current,
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
                options: currentOptionsRef.current,
                onOptionClick: onUserOptionSubmitted,
              })
            ),
          ],
          remainingQuestionsRef.current
        ),
      ]);

      return;
    }

    incorrectAnswersCountRef.current += 1;

    currentOptionsRef.current = buildOptions(currentQuestion);
    setHistory((prevHistory) => [
      ...prevHistory,
      React.createElement<ChatStartProps>(
        ChatStart,
        null,
        React.createElement<ErrorMessageProps>(ErrorMessage, {
          hint:
            incorrectAnswersCountRef.current > 3 ? currentQuestion.hint : null,
          isSoundOn: isSoundOnRef.current,
        })
      ),
      React.createElement<ChatEndProps>(
        ChatEnd,
        null,
        React.createElement<UserOptionProps>(UserOption, {
          options: currentOptionsRef.current,
          onOptionClick: onUserOptionSubmitted,
        })
      ),
    ]);
  }

  function scrollToBottom(): void {
    const node: HTMLDivElement | null = quizRef;

    if (node) {
      node.scrollTo({ behavior: "smooth", top: node.scrollHeight });
    }
  }

  return {
    history,
  };
};

export { useQuiz };
