import { memo } from 'react';
import Typography from '~/components/Typography';
import useStyles from './styles';
import { RefreshSubComponentProps } from './types';

const RefreshSubComponent = ({ onClick }: RefreshSubComponentProps) => {
  const styles = useStyles();

  return (
    <Typography
      as="button"
      className={styles.container}
      type="button"
      onClick={onClick}
    >
      Refresh Example
    </Typography>
  );
};

export default memo(RefreshSubComponent);
