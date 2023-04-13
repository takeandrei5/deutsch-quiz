import React, { useRef, useState } from 'react';

import { useQuiz } from './hooks';

import type { QuizGameProps } from './types';
import { Stopwatch } from '@components';
import { SoundControlIcon } from '../SoundControlIcon';

const QuizGame: React.FC<QuizGameProps> = ({ questions }: QuizGameProps) => {
  const quizRef = useRef<HTMLDivElement>(null);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  const [isStopwatchPaused, setIsStopwatchPaused] = useState<boolean>(true);

  const { history, isQuizFinished, onQuizFinished } = useQuiz(
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
