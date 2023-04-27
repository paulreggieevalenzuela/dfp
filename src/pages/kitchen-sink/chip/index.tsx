import Checkmark from '@carbon/icons-react/lib/Checkmark';

import s from './page.module.scss';

import Chip from '@/components/Chip';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageElevations() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Chip' description='Chip/Pill component' />

      <h6 className='mb-2'>Large Chips</h6>
      <div className={s.ChipContainer}>
        <Chip label='Chip text' type='default' />
        <Chip label='Chip text' type='primary' />
        <Chip label='Chip text' type='disabled' />
      </div>

      <h6 className='mt-5 mb-2'>Small Chips</h6>
      <div className={s.ChipContainer}>
        <Chip label='Chip text' type='default' size='small' />
        <Chip label='Chip text' type='primary' size='small' />
        <Chip label='Chip text' type='disabled' size='small' />
      </div>

      <h6 className='mt-5 mb-2'>Large Chips With Icons</h6>
      <div className={s.ChipContainer}>
        <Chip label='Chip text' type='default' icon={<Checkmark size='16' />} />
        <Chip label='Chip text' type='primary' icon={<Checkmark size='16' />} />
        <Chip
          label='Chip text'
          type='disabled'
          icon={<Checkmark size='16' />}
        />
      </div>

      <h6 className='mt-5 mb-2'>Small Chips With Icons</h6>
      <div className={s.ChipContainer}>
        <Chip
          label='Chip text'
          type='default'
          size='small'
          icon={<Checkmark size='16' />}
        />
        <Chip
          label='Chip text'
          type='primary'
          size='small'
          icon={<Checkmark size='16' />}
        />
        <Chip
          label='Chip text'
          type='disabled'
          size='small'
          icon={<Checkmark size='16' />}
        />
      </div>
    </KitchenSinkLayout>
  );
}
