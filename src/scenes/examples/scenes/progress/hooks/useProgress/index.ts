import { useCallback, useEffect, useRef, useState } from 'react';
import { numberOfSteps } from '../../constants';
import { handleUpdateProgress, handleUpdateProgressChange } from './logic';

const useProgress = () => {
  const [progress, setProgress] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>();

  const setTimerRef = useCallback((newTimerRef: NodeJS.Timeout) => {
    clearTimeout(timerRef.current);
    timerRef.current = newTimerRef;
  }, []);

  const updateProgress = useCallback(
    () =>
      handleUpdateProgress({
        progress,
        setProgress,
        setTimerRef,
        duration: 1000,
        numberOfSteps,
      }),
    [progress],
  );

  useEffect(
    () => handleUpdateProgressChange(updateProgress, timerRef.current),
    [updateProgress],
  );

  return {
    progress,
  };
};

export default useProgress;
