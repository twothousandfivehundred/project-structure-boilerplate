import { TransitionStatus } from 'react-transition-group';
import { FadeProps } from '../../types';
import { transitionStyles } from '../../constants';

const defaultStyle = (duration: number) => ({
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
});

export const getStyleForState = (
  state: TransitionStatus,
  isIn: FadeProps['in'],
  durationIn: number,
  durationOut: number,
) =>
  ({
    ...defaultStyle(isIn ? durationIn : durationOut),
    ...transitionStyles[state],
  } as React.CSSProperties);
