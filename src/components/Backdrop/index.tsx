import clsx from 'clsx';

import useStyles from './styles';
import { BackdropProps } from './types';

const Backdrop = ({ variant, onClick }: BackdropProps) => {
  const styles = useStyles();

  return (
    <div
      className={clsx(
        styles.backdrop,
        styles[`variant-${variant}`],
        !!onClick && styles.backdropOnClick,
      )}
      onClick={onClick}
    />
  );
};

export default Backdrop;
