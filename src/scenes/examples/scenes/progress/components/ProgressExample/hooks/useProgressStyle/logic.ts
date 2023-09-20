import { CSSProperties } from 'react';

export const getProgressExampleStyle = (progress: number) =>
  ({
    '--progressExampleWidthPercentage': `${progress}%`,
    // width: `${progress}%`,
  } as CSSProperties);
