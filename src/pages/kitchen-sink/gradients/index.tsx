import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Gradients' description='Soft linear gradients' />

      <div className='gradient-box-container'>
        <section>
          <span> Primary </span>
          <div className='bg-gradient-primary' />
        </section>

        <section>
          <span> Secondary </span>
          <div className='bg-gradient-secondary' />
        </section>

        <section>
          <span> Gray </span>
          <div className='bg-gradient-gray'></div>
        </section>
      </div>
    </KitchenSinkLayout>
  );
}
