import { memo } from 'react';
import useStyles from './styles';
import Typography from '~/components/Typography';
import useProgressStyle from './hooks/useProgressStyle';
import { ProgressExampleProps } from './types';

const ProgressExample = ({ progress }: ProgressExampleProps) => {
  const { style } = useProgressStyle(progress);
  const styles = useStyles();

  return (
    <>
      <Typography>{`${progress}%`}</Typography>
      <div className={styles.container} style={style} />
    </>
  );
};

export default memo(ProgressExample);
