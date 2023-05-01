/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import useStyles from './styles';
import { PolymorphicTypographyProps } from './types';

const Typography = <C extends React.ElementType = 'p'>({
  as,
  children,
  className,
  noMargin,
  variant = 'body',
  ...props
}: PolymorphicTypographyProps<C>) => {
  const styles = useStyles();
  const Component = as || 'p';

  return (
    <Component
      className={clsx(
        className,
        styles.typography,
        styles[`variant-${variant}`],
        noMargin && styles.noMargin,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
