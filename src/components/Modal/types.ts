import { Modal } from '../../contexts/ModalContext/types';

export type ModalContentProps = {
  preventClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClose: () => void;
  title: Modal['title'];
  body?: Modal['body'];
  isRequired?: Modal['isRequired'];
};

export type ModalProps = {
  id: string;
  isIn: boolean;
  title: Modal['title'];
  body?: Modal['body'];
  isRequired?: Modal['isRequired'];
  hasTopModal: boolean;
};
