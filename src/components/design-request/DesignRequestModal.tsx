import ArrowRight from '@carbon/icons-react/lib/ArrowRight';
import { useDispatch } from 'react-redux';

import Button from '@/components/Button';
import DesignRequestForm from '@/components/design-request/DesignRequestForm';
import ProjectTitleField from '@/components/design-request/ProjectTitleField';
import { ModalProps } from '@/components/Modal';

import { useAppSelector } from '@/app/hooks';
import { selectModalContent, setModal } from '@/features/modalSlice';

export default function DesignRequestModal() {
  const dispatch = useDispatch();
  const modal = useAppSelector(selectModalContent);

  const createRequestForm: ModalProps = {
    open: true,
    size: 'xl',
    verticalOverflow: 'scroll',
    customHeader: <ProjectTitleField />,
    hasBorderTop: true,
    actions: [
      {
        children: 'Cancel',
        kind: 'tertiary',
        style: 'outline',
        onClick: () => dispatch(setModal(null))
      },
      {
        children: 'Create Design Request',
        kind: 'primary',
        style: 'primary',
        icon: (
          <>
            <ArrowRight />
            &nbsp;&nbsp;
          </>
        ),
        onClick: () => {
          // TODO: add submit form data trigger here i.e. 
          console.log('submitting form data value: ', {});
          // TODO: remove time out after implementing submit form success
          setTimeout(() => dispatch(setModal(null)), 5000);
        }
      }
    ],
    children: <DesignRequestForm />
  };

  const handleOpenModal = () => {
    dispatch(setModal(createRequestForm));
  }

  return (
    <Button
      onClick={handleOpenModal}
      size='sm'
      disabled={modal ? true : false}>
      <ArrowRight />
      &nbsp;&nbsp;
      Design Request
    </Button>
  );
}
