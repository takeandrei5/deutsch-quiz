import { Stopwatch } from '@components';
import React, { useRef, useState } from 'react';
import { SoundControlIcon } from '../SoundControlIcon';
import { useQuiz } from './hooks/useQuiz';

import type { QuizGameProps } from './types';

const QuizGame: React.FC<QuizGameProps> = ({ questions, topic }: QuizGameProps) => {
  const quizRef = useRef<HTMLDivElement>(null);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  const [isStopwatchPaused, setIsStopwatchPaused] = useState<boolean>(true);

  const { history, isQuizFinished, onQuizFinished } = useQuiz(
    topic,
    questions,
    quizRef.current,
    isSoundOn,
    setIsStopwatchPaused
  );

  return (
    <>
      <div className='mt-4 flex w-full flex-row'>
        <div className='mr-auto'>
          <Stopwatch isPaused={isStopwatchPaused} isStopped={isQuizFinished} onStopwatchStopped={onQuizFinished} />
        </div>
        <div className='ml-auto'>
          <SoundControlIcon isSoundOn={isSoundOn} toggleSound={() => setIsSoundOn((prevState) => !prevState)} />
        </div>
      </div>
      <div
        className='h-[663px] w-full overflow-auto overflow-x-hidden rounded-2xl bg-base-100 p-4 shadow-xl md:w-[768px] lg:p-8'
        ref={quizRef}
      >
        {history.map((item: JSX.Element, index: number) =>
          React.createElement(item.type, { ...item.props, key: index })
        )}
      </div>
    </>
  );
};

export default QuizGame;
