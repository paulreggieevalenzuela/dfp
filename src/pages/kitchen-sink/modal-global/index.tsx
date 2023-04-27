import { useDispatch } from 'react-redux';

import s from './page.module.scss';

import Button from '@/components/Button';
import DesignRequestModal from '@/components/design-request/DesignRequestModal';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import { ModalProps } from '@/components/Modal';
import TitleBar from '@/components/TitleBar';

import { useAppSelector } from '@/app/hooks';
import { selectModalContent, setModal } from '@/features/modalSlice';

export default function ModalGlobal() {
  const dispatch = useDispatch();
  const modal = useAppSelector(selectModalContent);

  const ModalText = () => <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit scelerisque vestibulum magnis. Are you sure you want to pause?</p>

  const modalContent: ModalProps = {
    title: 'Pause Subscription',
    open: true,
    actions: [
      {
        children: 'Pause Subscription',
        kind: 'tertiary',
        style: 'outline',
        action: () => console.log('trigger pause subscription...')
      },
      {
        children: 'Cancel',
        kind: 'primary',
        style: 'primary',
        action: () => dispatch(setModal(null))
      }
    ],
    children: <ModalText />
  };

  const handleOpenModal = () => {
    dispatch(setModal(modalContent));
  }

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Global Modal' description='Global modal that can be called anywhere using dispatch(setModal())' />
      <div className={s.ComponentContainer}>
        <div className="grid gap-8">
          <Button
            onClick={handleOpenModal}
            size='sm'
            disabled={modal ? true : false}>
            Open Global Modal
          </Button>
          <DesignRequestModal />
        </div>
      </div>
    </KitchenSinkLayout>
  );
}
