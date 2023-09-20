import { memo } from 'react';
import useStyles from './styles';
import { PanelProps } from './types';

const Panel = ({ children }: PanelProps) => {
  const styles = useStyles();

  return <div className={styles.container}>{children}</div>;
};

export default memo(Panel);
