import clsx from 'clsx';
import useStyles from './styles';
import { PolymorphicContentWrapperProps } from './types';

const ContentWrapper = <C extends React.ElementType = 'div'>({
  as,
  children,
  className,
}: PolymorphicContentWrapperProps<C>) => {
  const styles = useStyles();
  const Component = as || 'div';

  return (
    <Component className={clsx(className, styles.container)}>
      {children}
    </Component>
  );
};

export default ContentWrapper;
