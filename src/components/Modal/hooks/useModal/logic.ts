import { ModalContextValue } from '../../../../contexts/ModalContext/types';
import { ModalProps } from '../../types';

export const handleOnClose = (onClose: ModalContextValue['closeModal']) => {
  onClose();
};

export const handleOnExited = (
  id: ModalProps['id'],
  deregisterAlert: ModalContextValue['deregisterModal'],
  hasTopAlert: ModalProps['hasTopModal'],
) => {
  if (hasTopAlert) return;
  deregisterAlert(id);
};
