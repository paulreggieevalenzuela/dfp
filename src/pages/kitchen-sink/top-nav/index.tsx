import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';
import TopNav from '@/components/TopNav';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Top Nav' description='Navigation' />
      <TopNav
        tabNames={[
          { label: 'Tab Name' },
          { label: 'Tab Name' },
          { label: 'Tab Name' },
          { label: 'Tab Name' },
          { label: 'Tab Name' },
          { label: 'Tab Name' },
        ]}
      />
    </KitchenSinkLayout>
  );
}
