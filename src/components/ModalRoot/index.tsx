/* eslint-disable react/jsx-props-no-spreading */

import { EMPTY_OBJ } from '../../constants/emptys';
import Backdrop from '../Backdrop';
import Modal from '../Modal';
import useModalRoot from './hooks/useModalRoot';

const ModalRoot = () => {
  const { modals, topModal, onBackdropClick } = useModalRoot();

  return (
    <>
      {modals.map((modal) => {
        const modalKey = modal.key;
        const modalProps = modal.config || EMPTY_OBJ;
        return (
          <Modal
            key={modalKey}
            id={modalKey}
            {...modalProps}
            hasTopModal={!!topModal}
            isIn={topModal === modalKey}
          />
        );
      })}
      {modals.length > 0 && (
        <Backdrop onClick={onBackdropClick} variant="modal" />
      )}
    </>
  );
};

export default ModalRoot;
