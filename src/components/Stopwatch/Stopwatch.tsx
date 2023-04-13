import React, { useState, useLayoutEffect, useRef } from 'react';

import type { StopwatchProps } from './types';

const Stopwatch: React.FC<StopwatchProps> = ({ isPaused, isStopped, onStopwatchStopped }: StopwatchProps) => {
  const isStoppedCallbackExecuted = useRef<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const formatTime = (time: number): string => {
    const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);

    return `${minutes}:${seconds}`;
  };

  useLayoutEffect(() => {
    if (isStopped) {
      if (!isStoppedCallbackExecuted.current) {
        isStoppedCallbackExecuted.current = true;
        onStopwatchStopped(formatTime(time));
      }
      return;
    }

    if (isPaused) {
      return;
    }

    const intervalId: NodeJS.Timer = setInterval(() => setTime(time + 1000), 1000);
    return () => clearInterval(intervalId);
  }, [time, isPaused, isStopped]);

  return <span className='font-normal text-neutral'>{formatTime(time)}</span>;
};

export default Stopwatch;
