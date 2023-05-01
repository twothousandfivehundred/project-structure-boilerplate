import { useContext, useMemo } from 'react';

import { ModalContext } from '../../../../contexts/ModalContext';
import { getOnBackdropClick } from './logic';

const useModalRoot = () => {
  const { closeModal, topModal, modals } = useContext(ModalContext);

  const onBackdropClick = useMemo(
    () => getOnBackdropClick(modals, topModal, closeModal),
    [modals, closeModal, topModal],
  );

  return {
    modals,
    topModal,
    onBackdropClick,
  };
};

export default useModalRoot;
