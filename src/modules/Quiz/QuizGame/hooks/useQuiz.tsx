import { useCallback, useEffect, useRef, useState } from 'react';

import { useBuildHistory } from './useBuildHistory';
import { useBuildOptions } from './useBuildOptions';

import type { MultipleQuizQuestion } from '@prisma/client';
import type { NonEmptyArray } from '@utils/models';
import type { Dispatch, SetStateAction } from 'react';
import type { Option } from '../../UserOption/types';
import type { CorrectAnswer } from '../../types';

const useQuiz = (
  questions: NonEmptyArray<MultipleQuizQuestion>,
  quizRef: HTMLDivElement | null,
  isSoundOn: boolean,
  setIsStopwatchPaused: Dispatch<SetStateAction<boolean>>
) => {
  const { buildOptions } = useBuildOptions();

  const remainingQuestionsRef = useRef<MultipleQuizQuestion[]>(questions.slice(1));
  const incorrectAnswersCountRef = useRef<number>(0);
  const correctAnswersRef = useRef<CorrectAnswer>({});
  const currentQuestionRef = useRef<MultipleQuizQuestion>(questions[0]);
  const currentOptionsRef = useRef<Option[]>(buildOptions(questions[0]));
  const isSoundOnRef = useRef<boolean>(isSoundOn);

  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  const { history, appendCorrectAnswerNode, appendIncorrectAnswerNode, appendQuizResultNode } = useBuildHistory(
    onUserOptionSubmitted,
    questions,
    currentOptionsRef.current,
    remainingQuestionsRef.current
  );

  const scrollToBottom = useCallback((): void => {
    const node: HTMLDivElement | null = quizRef;

    if (node) {
      node.scrollTo({ behavior: 'smooth', top: node.scrollHeight });
    }
  }, [quizRef]);

  useEffect(() => {
    setIsStopwatchPaused(false);
  }, []);

  useEffect(() => {
    isSoundOnRef.current = isSoundOn;
  }, [isSoundOn]);

  useEffect(() => {
    setTimeout(() => scrollToBottom(), 100);
  }, [scrollToBottom, history]);

  function onQuizFinished(time: string): void {
    const totalQuestionsCount: number = Object.keys(questions).length;
    const correctAnswersCount: number = Object.values(correctAnswersRef.current).filter(
      (correctAnswer: boolean) => !!correctAnswer
    ).length;

    appendQuizResultNode(correctAnswersCount, totalQuestionsCount, time);
  }

  function onUserOptionSubmitted(optionId: number): void {
    const currentQuestion = currentQuestionRef.current;
    const currentOptions = currentOptionsRef.current;
    const remainingQuestions = remainingQuestionsRef.current;

    const isCorrect: boolean = currentOptions[optionId].value === currentQuestion.correctAnswer;

    const isQuestionAnswered: boolean = Object.keys(correctAnswersRef.current).includes(currentQuestion.id);

    if (!isQuestionAnswered) {
      correctAnswersRef.current[currentQuestion.id] = isCorrect;
    }

    if (isCorrect && !remainingQuestions.length) {
      setIsQuizFinished(true);

      return;
    }

    if (isCorrect) {
      const newQuestion: MultipleQuizQuestion = remainingQuestions[0];

      currentQuestionRef.current = newQuestion;
      currentOptionsRef.current = buildOptions(newQuestion);
      incorrectAnswersCountRef.current = 0;
      remainingQuestionsRef.current = remainingQuestions.slice(1);

      appendCorrectAnswerNode(newQuestion, currentOptionsRef.current, remainingQuestionsRef.current, isSoundOn);

      return;
    }

    incorrectAnswersCountRef.current += 1;
    currentOptionsRef.current = buildOptions(currentQuestion);

    appendIncorrectAnswerNode(
      currentOptionsRef.current,
      incorrectAnswersCountRef.current > 3 ? currentQuestion.hint : null,
      isSoundOnRef.current
    );
  }

  return {
    history,
    isQuizFinished,
    onQuizFinished,
  };
};

export { useQuiz };
