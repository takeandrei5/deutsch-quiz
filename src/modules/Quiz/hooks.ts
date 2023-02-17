import React, { useLayoutEffect, useRef, useState } from "react";

import { ChatEnd } from "./ChatEnd";
import { ChatStart } from "./ChatStart";
import { ErrorMessage } from "./ErrorMessage";
import { Question } from "./Question";
import { QuizResultsMessage } from "./QuizResultsMessage";
import { SuccessMessage } from "./SuccessMessage";
import { UserOption } from "./UserOption";

import type { QuestionProps } from "./Question/types";
import type { MultipleQuizQuestion } from "@prisma/client";

import type { Option } from "./UserOption/types";
import type { NonEmptyArray } from "../../utils/models";
import type { ChatStartProps } from "./ChatStart/types";
import type { ChatEndProps } from "./ChatEnd/types";
import type { UserOptionProps } from "./UserOption/types";
import type { CorrectAnswer } from "./types";
import type { QuizResultsMessageProps } from "./QuizResultsMessage/types";
import type { ErrorMessageProps } from "./ErrorMessage/types";

const useQuiz = (questions: NonEmptyArray<MultipleQuizQuestion>) => {
  const quizRef = useRef<HTMLDivElement>(null);
  const remainingQuestionsRef = useRef<MultipleQuizQuestion[]>(
    questions.slice(1)
  );
  const incorrectAnswersCountRef = useRef<number>(0);
  const correctAnswersRef = useRef<CorrectAnswer>({});
  const currentQuestionRef = useRef<MultipleQuizQuestion>(questions[0]);
  const currentOptionsRef = useRef<Option[]>(buildOptions(questions[0]));

  const [history, setHistory] = useState<JSX.Element[]>([
    React.createElement<ChatStartProps>(ChatStart, {
      node: React.createElement<QuestionProps>(Question, {
        image: questions[0].image || "",
        blurImage: questions[0].blurImage || "",
        question: questions[0].question || "",
      }),
    }),
    React.createElement<ChatEndProps>(ChatEnd, {
      node: React.createElement<UserOptionProps>(UserOption, {
        options: currentOptionsRef.current,
        onOptionClick: onUserOptionSubmitted,
      }),
    }),
  ]);

  useLayoutEffect(() => {
    setTimeout(() => scrollToBottom(), 100);
  }, [history]);

  const scrollToBottom = (): void => {
    const node: HTMLDivElement | null = quizRef.current;

    if (node) {
      node.scrollTo({ behavior: "smooth", top: node.scrollHeight });
    }
  };

  function buildOptions(question: MultipleQuizQuestion): Option[] {
    return question.answers.map(
      (answer: string, index: number): Option => ({
        id: index,
        value: answer,
      })
    );
  }

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

    if (!remainingQuestions || !remainingQuestions.length) {
      setHistory((prevHistory) => [
        ...prevHistory,
        React.createElement<ChatStartProps>(ChatStart, {
          node: "Es gibt eine Probleme mit der Spiele! Bitte versuche noch einmail",
        }),
      ]);
    }

    if (isCorrect) {
      const newQuestion = remainingQuestions[0] as MultipleQuizQuestion;

      currentQuestionRef.current = newQuestion;
      currentOptionsRef.current = buildOptions(newQuestion);
      remainingQuestionsRef.current = remainingQuestions.slice(1);

      incorrectAnswersCountRef.current = 0;

      setHistory((prevHistory) => [
        ...prevHistory,
        React.createElement<ChatStartProps>(ChatStart, {
          node: React.createElement(SuccessMessage),
        }),
        React.createElement<ChatStartProps>(ChatStart, {
          node: React.createElement<QuestionProps>(Question, {
            image: newQuestion.image || "",
            blurImage: newQuestion.blurImage || "",
            question: newQuestion.question || "",
          }),
        }),
        React.createElement<ChatEndProps>(ChatEnd, {
          node: React.createElement<UserOptionProps>(UserOption, {
            options: currentOptionsRef.current,
            onOptionClick: onUserOptionSubmitted,
          }),
        }),
      ]);

      return;
    }

    incorrectAnswersCountRef.current += 1;

    currentOptionsRef.current = buildOptions(currentQuestion);
    setHistory((prevHistory) => [
      ...prevHistory,
      React.createElement<ChatStartProps>(ChatStart, {
        node: React.createElement<ErrorMessageProps>(ErrorMessage, {
          hint:
            incorrectAnswersCountRef.current > 3 ? currentQuestion.hint : null,
        }),
      }),
      React.createElement<ChatEndProps>(ChatEnd, {
        node: React.createElement<UserOptionProps>(UserOption, {
          options: currentOptionsRef.current,
          onOptionClick: onUserOptionSubmitted,
        }),
      }),
    ]);
  }

  return {
    history,
    quizRef,
  };
};

export { useQuiz };
