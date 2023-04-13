export type StopwatchProps = {
  isPaused: boolean;
  isStopped: boolean;
  onStopwatchStopped: (time: string) => void;
};
