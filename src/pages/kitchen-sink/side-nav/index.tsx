import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import SideNav from '@/components/SideNav';
import TitleBar from '@/components/TitleBar';

import data from './mock-data.json';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Side Nav' description='' />
      {/* Sample: Default uncollapsed */}
      <div className='flex flex-row gap-5'>
        <div>
          <SideNav items={data.expanded} />
        </div>
        {/* Sample: Default collapsed */}
        <div>
          <SideNav items={data.collapsed} />
        </div>
      </div>
    </KitchenSinkLayout>
  );
}
