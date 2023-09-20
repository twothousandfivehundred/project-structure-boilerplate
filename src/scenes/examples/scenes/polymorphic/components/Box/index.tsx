/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { PolymorphicBoxProps } from './types';

const Box = <C extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: PolymorphicBoxProps<C>) => {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
};

export default Box;
