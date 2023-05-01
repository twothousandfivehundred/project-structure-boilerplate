import { ReactNode } from 'react';
import { RequireExactlyOne } from 'type-fest';

export type ModalContextProps = {
  children: React.ReactNode;
};

export type ModalButton = RequireExactlyOne<
  {
    title: string;
    onClick?: () => void;
    to?: string;
    href?: string;
  },
  'onClick' | 'to' | 'href'
>;

export type Modal = {
  isRequired?: boolean;
  title: ReactNode;
  body?: ReactNode;
  imgSrc?: string;
  videoSrc?: string;
  buttons?: ModalButton[];
  variant?: 'default' | 'lightbox';
};

export type ModalContextModal = {
  key: string;
  config: Modal;
};

export type ModalContextValue = {
  closeModal: () => void;
  topModal: string | undefined;
  modals: ModalContextModal[];
  registerModal: (key: string, modal: Modal) => void;
  deregisterModal: (key: string) => void;
};
