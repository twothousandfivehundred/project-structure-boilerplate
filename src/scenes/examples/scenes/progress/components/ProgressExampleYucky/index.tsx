/* 
  Example YUCKY component.. use ~/scenes/home/components/ProgressExample.. or so help me!
*/
import { memo } from 'react';
import useStyles from './styles';
import Typography from '~/components/Typography';
import { ProgressExampleYuckyProps } from './types';

const ProgressExampleYucky = ({ progress }: ProgressExampleYuckyProps) => {
  const styles = useStyles();
  // const styles = useStyles({ progress });

  return (
    <>
      <Typography>{`${progress}%`}</Typography>
      <div className={styles.containerSimpleStyle} />

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* <div style={{ width: `${progress}%` }} /> */}
    </>
  );
};

export default memo(ProgressExampleYucky);
