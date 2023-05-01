import { Dispatch, SetStateAction } from 'react';

import { Modal, ModalContextValue } from '../../types';

export const getCloseModal = (
  setTopModal: Dispatch<SetStateAction<ModalContextValue['topModal']>>,
) => {
  setTopModal(undefined);
  window?.document.scrollingElement?.classList.remove('lock-scroll-modal');
};

export const getDeregisterModal = (
  setModals: Dispatch<SetStateAction<ModalContextValue['modals']>>,
  modalId: string,
) => {
  setModals((modals) => modals.filter((modal) => modal.key !== modalId));
};

export const getRegisterModal = (
  setModals: Dispatch<SetStateAction<ModalContextValue['modals']>>,
  modalId: string,
  modalConfig: Modal,
) => {
  setModals((modals) => {
    if (modals.find((modal) => modal.key === modalId)) {
      return modals;
    }
    return [...modals, { config: modalConfig, key: modalId }];
  });
};

export const handleModalsChange = (
  modals: ModalContextValue['modals'],
  setTopModal: Dispatch<SetStateAction<ModalContextValue['topModal']>>,
) => {
  if (modals.length) {
    setTopModal(modals[modals.length - 1].key);
    window?.document.scrollingElement?.classList.add('lock-scroll-modal');
    return;
  }
  setTopModal(undefined);
};
