import { memo } from 'react';
import clsx from 'clsx';

import useStyles from './styles';
import { DividerProps } from './types';

const Divider = ({ className, isSubtle }: DividerProps) => {
  const styles = useStyles();

  return (
    <div
      className={clsx(className, styles.divider, isSubtle && styles.subtle)}
    />
  );
};

export default memo(Divider);
