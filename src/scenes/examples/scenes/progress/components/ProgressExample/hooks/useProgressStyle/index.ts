import { useMemo } from 'react';
import { getProgressExampleStyle } from './logic';
import { ProgressExampleProps } from '../../types';

const useProgressStyle = (progress: ProgressExampleProps['progress']) => {
  const style = useMemo(() => getProgressExampleStyle(progress), [progress]);

  return {
    progress,
    style,
  };
};

export default useProgressStyle;
