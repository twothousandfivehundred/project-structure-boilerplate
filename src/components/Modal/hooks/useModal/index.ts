import { MouseEvent, useCallback, useContext, useMemo } from 'react';

import { ModalContext } from '../../../../contexts/ModalContext';
import { handleOnClose, handleOnExited } from './logic';
import { ModalProps } from '../../types';

const useModal = (
  id: ModalProps['id'],
  hasTopModal: ModalProps['hasTopModal'],
) => {
  const { closeModal, deregisterModal } = useContext(ModalContext);

  const onClose = useCallback(() => handleOnClose(closeModal), [closeModal]);

  const onExited = useCallback(
    () => handleOnExited(id, deregisterModal, hasTopModal),
    [id, deregisterModal, hasTopModal],
  );

  const preventClose = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return {
    onClose,
    onExited,
    preventClose,
  };
};

export default useModal;
