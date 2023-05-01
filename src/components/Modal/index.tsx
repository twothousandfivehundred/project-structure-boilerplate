import clsx from 'clsx';

import Fade from '../Animations/components/Fade';
import useModal from './hooks/useModal';
import useStyles from './styles';
import { ModalProps } from './types';
import DefaultModalContent from './components/DefaultModalContent';

const Modal = ({
  id,
  title,
  body,
  hasTopModal,
  isIn = false,
  isRequired = false,
}: ModalProps) => {
  const { onClose, onExited, preventClose } = useModal(id, hasTopModal);
  const styles = useStyles();

  return (
    <Fade
      className={clsx(styles.container, isRequired && styles.containerRequired)}
      durationIn={500}
      durationOut={500}
      in={isIn}
      onClick={isRequired ? undefined : onClose}
      onExited={onExited}
    >
      <DefaultModalContent
        isRequired={isRequired}
        preventClose={preventClose}
        onClose={onClose}
        title={title}
        body={body}
      />
    </Fade>
  );
};

export default Modal;
