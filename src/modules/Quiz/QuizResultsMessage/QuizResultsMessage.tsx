import { Button } from '@components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSound from 'use-sound';

import type { QuizResultsMessageProps } from './types';

const QuizResultsMessage: React.FC<QuizResultsMessageProps> = ({
  correctAnswersCount,
  totalQuestionsCount,
  timeSpent,
}: QuizResultsMessageProps) => {
  const { asPath, reload, push } = useRouter();
  const [play] = useSound('/cheering.mp3', { volume: 0.25 });

  useEffect(() => play(), [play]);

  return (
    <div className='mt-4 mr-auto ml-auto flex w-fit flex-col items-center rounded-2xl bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 p-4 text-neutral'>
      <span className='text-3xl font-semibold'>Fertig in {timeSpent}!</span>
      <span className='text-center text-xl'>
        Sie haben{' '}
        <b>
          {correctAnswersCount} von {totalQuestionsCount}
        </b>{' '}
        <br /> Fragen richtig beantwortet!
      </span>
      <div className='mt-4 flex gap-2'>
        <Button onClick={reload} size='sm'>
          <div className='flex items-center justify-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
            <span className='font-normal'>Noch einmal!</span>
          </div>
        </Button>
        <Button onClick={() => push(asPath.substring(0, asPath.lastIndexOf('/')))} size='sm'>
          <div className='flex items-center justify-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
              />
            </svg>

            <span className='font-normal'>Andere Thema</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default QuizResultsMessage;
