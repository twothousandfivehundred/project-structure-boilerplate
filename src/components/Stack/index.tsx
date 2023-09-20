import { memo } from 'react';
import clsx from 'clsx';

import useStyles from './styles';
import { PolymorphicStackProps } from './types';

const Stack = <C extends React.ElementType = 'div'>({
  as,
  className,
  children,
  align = 'start',
  justify = 'start',
  spacing = 'md',
  direction = 'column',
}: PolymorphicStackProps<C>) => {
  const Component = as || 'div';
  const styles = useStyles();

  return (
    <Component
      className={clsx(
        className,
        styles.container,
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        styles[`direction-${direction}`],
        styles[`spacing-${spacing}`],
      )}
    >
      {children}
    </Component>
  );
};

export default memo(Stack);
