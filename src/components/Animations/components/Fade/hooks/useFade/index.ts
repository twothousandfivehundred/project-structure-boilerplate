import { useCallback, useRef } from 'react';
import { TransitionStatus } from 'react-transition-group';
import { FadeProps } from '../../types';
import { getStyleForState } from './logic';

const useFade = (
  isIn: FadeProps['in'],
  durationIn: number,
  durationOut: number,
) => {
  const ref = useRef<HTMLDivElement>(null);

  const getStyle = useCallback(
    (state: TransitionStatus) =>
      getStyleForState(state, isIn, durationIn, durationOut),
    [isIn, durationIn, durationOut],
  );

  return {
    ref,
    getStyle,
  };
};

export default useFade;
