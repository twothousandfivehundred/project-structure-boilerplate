import { ModalContextValue } from '~/contexts/ModalContext/types';

export const getOnBackdropClick = (
  modals: ModalContextValue['modals'],
  topModal: ModalContextValue['topModal'],
  closeModal: ModalContextValue['closeModal'],
) => {
  if (!topModal) return undefined;

  const modal = modals.find((a) => a.key === topModal);
  if (modal?.config?.isRequired) return undefined;

  return () => closeModal();
};
