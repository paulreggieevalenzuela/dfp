import s from './page.module.scss';

import Counter from '@/components/Counter';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageElevations() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Counter' description='Display counter as a pill' />

      <div className='flex flex-col gap-3'>

        <span> Primary / Padded / sm </span>
        <div className='flex flex-row gap-3'>
          <Counter count={1} />
          <Counter count={3} />
          <Counter count={10} />
          <Counter count={100} />
        </div>

        <span> Secondary / Padded / sm </span>
        <div className='flex flex-row gap-3' >
          <Counter count={1} color='secondary' />
          <Counter count={3} color='secondary' />
          <Counter count={10} color='secondary' />
          <Counter count={100} color='secondary' />
        </div>

        <span> Primary / Rounded / sm </span>
        <div className='flex flex-row gap-3'>
          <Counter count={1} type='rounded' />
          <Counter count={3} type='rounded' />
          <Counter count={10} type='rounded' />
          <Counter count={100} type='rounded' />
        </div>

        <span> Secondary / Rounded / sm </span>
        <div className='flex flex-row gap-3'>
          <Counter count={1} color='secondary' type='rounded' />
          <Counter count={3} color='secondary' type='rounded' />
          <Counter count={10} color='secondary' type='rounded' />
          <Counter count={100} color='secondary' type='rounded' />
        </div>
      </div>

    </KitchenSinkLayout>
  )
}