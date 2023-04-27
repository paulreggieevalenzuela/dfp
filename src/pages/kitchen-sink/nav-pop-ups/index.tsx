import s from './page.module.scss';

import Avatar from '@/components/Avatar';
import Elevations from '@/components/Elevations';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Menu from '@/components/Menu';
import TitleBar from '@/components/TitleBar';

import data from './menu-mock-data.json';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Menu' description='2nd level' />

      <div>
        <section className='m-5 flex flex-col'>
          <span className='mb-2'> Menu with sub menu </span>
          <Elevations dp='00' className='w-[300px] py-1.5'>
            <Menu items={data.menu} />
          </Elevations>
        </section>

        <section className='m-5 flex flex-col'>
          <span className='mb-2'> Avatar Pop-up </span>
          <div className={s.wrapper}>
            <span className={s.avatar}>
              <Avatar src='/images/mock/dropdown-avatar.png' />
            </span>
            <Elevations dp='00' className={s.popupContainer}>
              <Menu items={data.popupMenu} />
            </Elevations>
          </div>
        </section>
      </div>
    </KitchenSinkLayout>
  );
}
