import { Transition } from 'react-transition-group';

import useFade from './hooks/useFade';
import { FadeProps } from './types';

const Fade = ({
  className,
  durationIn = 1000,
  durationOut = 1000,
  in: inProp,
  children,
  onClick,
  onExited,
}: FadeProps) => {
  const { ref, getStyle } = useFade(inProp, durationIn, durationOut);

  return (
    <Transition
      in={inProp}
      nodeRef={ref}
      timeout={{
        enter: durationIn,
        exit: durationOut,
      }}
      unmountOnExit
      onExited={onExited}
    >
      {(state) => (
        <div
          ref={ref}
          className={className}
          onClick={onClick}
          style={getStyle(state)}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Fade;
