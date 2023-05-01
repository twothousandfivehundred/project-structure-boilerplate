import { ModalContentProps } from '../../types';
import useStyles from './styles';
import Typography from '../../../Typography';

const DefaultModalContent = ({
  preventClose,
  title,
  body,
}: ModalContentProps) => {
  const styles = useStyles();

  return (
    <div className={styles.modal} onClick={preventClose}>
      <div className={styles.content}>
        <Typography className={styles.title} variant="heading5">
          {title}
        </Typography>
        {body && <Typography variant="body">{body}</Typography>}
      </div>
    </div>
  );
};

export default DefaultModalContent;
