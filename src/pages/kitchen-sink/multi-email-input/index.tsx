import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import MultiEmail from '@/components/MultiEmail';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const values = ['example@example.com', 'hello@500designs.com'];

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Multi Email Input'
        description='Input field for emails'
      />
      <div className='flex flex-col gap-6'>
        <MultiEmail label='Label' />
        <MultiEmail label='Label' hint='hint/optional' />
        <MultiEmail label='Large field' width='w-[500px]' />
        <MultiEmail label='With values' value={values} width='w-[500px]' />
      </div>
    </KitchenSinkLayout>
  );
}
