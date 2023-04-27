import { useDispatch } from 'react-redux';

import Modal from '@/components/Modal';

import { useAppSelector } from '@/app/hooks';
import { selectModalContent, setModal } from '@/features/modalSlice';


export default function GlobalModalWrapper() {
  const dispatch = useDispatch();
  const modalContent = useAppSelector(selectModalContent);
  return (
    <>
      {modalContent &&
        <Modal
          title={modalContent.title}
          actions={modalContent.actions}
          hasBorderTop={modalContent.hasBorderTop}
          size={modalContent.size}
          verticalOverflow={modalContent.verticalOverflow}
          customHeader={modalContent.customHeader}
          open
          onClose={() => dispatch(setModal(null))}
        >
          {modalContent.children}
        </Modal>
      }
    </>
  )
}