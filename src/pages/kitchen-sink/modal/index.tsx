import { Button } from 'carbon-components-react';
import { useState } from 'react';

import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Modal from '@/components/Modal';
import TitleBar from '@/components/TitleBar';

export default function PageElevations() {
  const [open, setOpen] = useState(false);
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [centerModalOpen, setCenterModalOpen] = useState(false);
  const [centerSmallModalOpen, setCenterSmallModalOpen] = useState(false);

  const [isSuccessLgModal, setSuccessLgModal] = useState(false);
  const [isSuccessSMModal, setSuccessSMModal] = useState(false);
  const [isErrorLgModal, setErrorLgModal] = useState(false);
  const [isErrorSMModal, setErrorSMModal] = useState(false);

  const CTA = [
    {
      children: 'Secondary',
      kind: 'tertiary',
      style: 'outline',
    },
    {
      children: 'Primary',
      kind: 'secondary',
      style: 'primary',
    },
  ];

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Modal' description='Modal/Pop Up with Transition.' />
      <div className={s.ComponentContainer}>
        <Modal
          title='Large Modal'
          open={open}
          onClose={() => setOpen(false)}
          actions={CTA}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit
          scelerisque vestibulum magnis. Auctor dolor, tincidunt enim pharetra.
          Ornare amet suspendisse id sit malesuada. Nec platea tellus mollis
          diam ut elit consequat adipiscing at.
        </Modal>
        <Modal
          title='Center Modal'
          orientation='center'
          open={centerModalOpen}
          onClose={() => setCenterModalOpen(false)}
          actions={CTA.slice(0, 1)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit
          scelerisque vestibulum magnis. Auctor dolor, tincidunt enim.
        </Modal>
        <Modal
          title='Small Modal'
          size='sm'
          open={smallModalOpen}
          onClose={() => setSmallModalOpen(false)}
          actions={CTA}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit
          scelerisque vestibulum magnis. Auctor dolor, tincidunt enim pharetra.
          Ornare amet suspendisse id sit malesuada. Nec platea tellus mollis
          diam ut elit consequat adipiscing at.
        </Modal>
        <Modal
          title='Center Modal'
          size='sm'
          orientation='center'
          open={centerSmallModalOpen}
          onClose={() => setCenterSmallModalOpen(false)}
          actions={CTA.slice(0, 1)}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </Modal>
      </div>

      <Modal
        title='Success Large Modal'
        open={isSuccessLgModal}
        onClose={() => setSuccessLgModal(false)}
        actions={CTA}
        type='success'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit
        scelerisque vestibulum magnis. Auctor dolor, tincidunt enim pharetra.
        Ornare amet suspendisse id sit malesuada. Nec platea tellus mollis diam
        ut elit consequat adipiscing at.
      </Modal>
      <Modal
        title='Error Large Modal'
        open={isErrorLgModal}
        onClose={() => setErrorLgModal(false)}
        actions={CTA}
        type='error'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit
        scelerisque vestibulum magnis. Auctor dolor, tincidunt enim pharetra.
        Ornare amet suspendisse id sit malesuada. Nec platea tellus mollis diam
        ut elit consequat adipiscing at.
      </Modal>

      <Modal
        title='Modal Title'
        open={isSuccessSMModal}
        onClose={() => setSuccessSMModal(false)}
        actions={CTA.slice(1, 2)}
        orientation='center'
        size='sm'
        type='success'
      >
        Lorem ipsum dolor sit amet, consectetur.
      </Modal>
      <Modal
        title='Modal Title'
        open={isErrorSMModal}
        onClose={() => setErrorSMModal(false)}
        actions={CTA.slice(1, 2)}
        orientation='center'
        size='sm'
        type='error'
      >
        Lorem ipsum dolor sit amet, consectetur.
      </Modal>

      <div className={s.CTAContainer}>
        <Button kind='primary' onClick={() => setOpen(true)}>
          Large modal
        </Button>
        <Button kind='primary' onClick={() => setCenterModalOpen(true)}>
          Large modal (Center)
        </Button>
        <Button kind='primary' onClick={() => setSmallModalOpen(true)}>
          Small modal
        </Button>
        <Button kind='primary' onClick={() => setCenterSmallModalOpen(true)}>
          Small modal (Center)
        </Button>
      </div>
      <div className={s.CTAContainer}>
        <Button kind='primary' onClick={() => setSuccessLgModal(true)}>
          Large Success Modal
        </Button>
        <Button kind='primary' onClick={() => setErrorLgModal(true)}>
          Large Error Modal
        </Button>
        <Button kind='primary' onClick={() => setSuccessSMModal(true)}>
          Small Success Modal (Center)
        </Button>
        <Button kind='primary' onClick={() => setErrorSMModal(true)}>
          Small Error Modal (Center)
        </Button>
      </div>
    </KitchenSinkLayout>
  );
}
