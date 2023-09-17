import { useCallback, useEffect, useState } from 'react';

import { Modal, ModalContextValue } from '../../types';
import {
  getCloseModal,
  getDeregisterModal,
  getRegisterModal,
  handleModalsChange,
} from './logic';
import { EMPTY_ARR } from '~/constants/emptys';

const useModalManagement = () => {
  const [topModal, setTopModal] = useState<ModalContextValue['topModal']>();
  const [modals, setModals] = useState<ModalContextValue['modals']>(
    EMPTY_ARR as ModalContextValue['modals'],
  );

  const closeModal = useCallback(
    () => getCloseModal(setTopModal),
    [setTopModal],
  );

  const registerModal = useCallback(
    (modalId: string, modalConfig: Modal) =>
      getRegisterModal(setModals, modalId, modalConfig),
    [setModals],
  );

  const deregisterModal = useCallback(
    (modalId: string) => getDeregisterModal(setModals, modalId),
    [setModals],
  );

  useEffect(
    () => handleModalsChange(modals, setTopModal),
    [modals, setTopModal],
  );

  return {
    registerModal,
    closeModal,
    deregisterModal,
    topModal,
    modals,
  };
};

export default useModalManagement;
