import Location from '@carbon/icons-react/lib/Location';

import s from './page.module.scss';

import Badge from '@/components/Badge';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageElevations() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Badge' description='Badge component' />

      <h6 className='mb-2'>Large Badge</h6>
      <div className={s.ComponentContainer}>
        <Badge label='Badge text' type='primary' />
        <Badge label='Badge text' type='secondary' />
        <Badge label='Badge text' type='error' />
        <Badge label='Badge text' type='warning' />
        <Badge label='Badge text' type='success' />
        <Badge label='Badge text' type='disabled' />
      </div>

      <h6 className='mt-5 mb-2'>Small Badge</h6>
      <div className={s.ComponentContainer}>
        <Badge label='Badge text' type='primary' size='small' />
        <Badge label='Badge text' type='secondary' size='small' />
        <Badge label='Badge text' type='error' size='small' />
        <Badge label='Badge text' type='warning' size='small' />
        <Badge label='Badge text' type='success' size='small' />
        <Badge label='Badge text' type='disabled' size='small' />
      </div>

      <h6 className='mt-5 mb-2'>Large Badge With Icons</h6>
      <div className={s.ComponentContainer}>
        <Badge
          label='Badge text'
          type='primary'
          icon={<Location size='20' />}
        />
        <Badge
          label='Badge text'
          type='secondary'
          icon={<Location size='20' />}
        />
        <Badge label='Badge text' type='error' icon={<Location size='20' />} />
        <Badge
          label='Badge text'
          type='warning'
          icon={<Location size='20' />}
        />
        <Badge
          label='Badge text'
          type='success'
          icon={<Location size='20' />}
        />
        <Badge
          label='Badge text'
          type='disabled'
          icon={<Location size='20' />}
        />
      </div>

      <h6 className='mt-5 mb-2'>Small Badge With Icons</h6>
      <div className={s.ComponentContainer}>
        <Badge
          label='Badge text'
          type='primary'
          size='small'
          icon={<Location size='16' />}
        />
        <Badge
          label='Badge text'
          type='secondary'
          size='small'
          icon={<Location size='16' />}
        />
        <Badge
          label='Badge text'
          type='error'
          size='small'
          icon={<Location size='16' />}
        />
        <Badge
          label='Badge text'
          type='warning'
          size='small'
          icon={<Location size='16' />}
        />
        <Badge
          label='Badge text'
          type='success'
          size='small'
          icon={<Location size='16' />}
        />
        <Badge
          label='Badge text'
          type='disabled'
          size='small'
          icon={<Location size='16' />}
        />
      </div>
    </KitchenSinkLayout>
  );
}
