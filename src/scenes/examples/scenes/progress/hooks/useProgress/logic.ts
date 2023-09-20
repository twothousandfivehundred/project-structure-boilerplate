export const handleUpdateProgress = ({
  progress,
  setProgress,
  setTimerRef,
  duration,
  numberOfSteps,
}: {
  progress: number;
  setProgress: (progressSetter: (progress: number) => number) => void;
  setTimerRef: (newTimerRef: NodeJS.Timeout) => void;
  duration: number;
  numberOfSteps: number;
}) => {
  if (progress >= 100) return;
  const timerRef = setTimeout(() => {
    setProgress((prevProgress) => prevProgress + 100 / numberOfSteps);
  }, duration);
  setTimerRef(timerRef);
};

export const handleUpdateProgressChange = (
  updateProgress: () => void,
  timerRef: NodeJS.Timeout | undefined,
) => {
  updateProgress();
  return () => {
    clearTimeout(timerRef);
  };
};
