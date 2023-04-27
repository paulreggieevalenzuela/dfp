import s from './page.module.scss';

import Elevations from '@/components/Elevations';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Menu from '@/components/Menu';
import TitleBar from '@/components/TitleBar';

import data from './menu-mock-data.json';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Menu Dropdown' description='' />

      <div className='mb-5 flex flex-row'>
        <div className='ml-10'>
          <div className='mb-5 text-[24px] font-bold'> Bases </div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.bases).flat(1)} />
          </Elevations>
        </div>

        <div className='ml-10'>
          <div className='mb-5 text-[24px] font-bold'> Atoms </div>
          <div className='flex flex-row gap-5'>
            <Menu items={data.atoms} />
            <Menu items={data.atomsHoverActive} />
          </div>
        </div>
      </div>

      <div className='mb-5 ml-10 flex flex-wrap gap-5'>
        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.bases).flat(1)} />
          </Elevations>
        </div>

        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={data.baseAndArrow} />
          </Elevations>
        </div>

        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.withIcon).flat(1)} />
          </Elevations>
        </div>

        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.withIcon).flat(1)} />
          </Elevations>
        </div>
      </div>

      <div className='mb-5 ml-10 flex flex-wrap gap-5'>
        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.withSubAndAvatar).flat(1)} />
          </Elevations>
        </div>
        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.withSub).flat(1)} />
          </Elevations>
        </div>

        <div>
          <Elevations dp='00' className='m-2.5 w-[200px] pt-2.5'>
            <Menu items={data.mixed} />
          </Elevations>
        </div>

        <div>
          <Elevations dp='00' className='w-[200px] p-2.5'>
            <Menu items={Array(10).fill(data.withArrow).flat(1)} />
          </Elevations>
        </div>
      </div>
    </KitchenSinkLayout>
  );
}
