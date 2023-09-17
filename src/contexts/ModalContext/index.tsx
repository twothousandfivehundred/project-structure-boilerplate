import { createContext, useMemo } from 'react';

import useModalManagement from './hooks/useModalManagement';
import { ModalContextProps, ModalContextValue } from './types';
import { EMPTY_ARR, NOOP } from '~/constants/emptys';

export const ModalContext = createContext<ModalContextValue>({
  closeModal: NOOP,
  topModal: undefined,
  modals: EMPTY_ARR,
  registerModal: NOOP,
  deregisterModal: NOOP,
});

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const modalManagement = useModalManagement();
  const value = useMemo(() => modalManagement, [modalManagement]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
