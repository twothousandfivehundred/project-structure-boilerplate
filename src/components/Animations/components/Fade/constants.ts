import { TransitionStatus } from 'react-transition-group';

export const transitionStyles: {
  [key in TransitionStatus]: React.CSSProperties;
} = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};
