import s from './page.module.scss';

import Elevations from '@/components/Elevations';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageElevations() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Elevations'
        description='Elevations with hover effects.'
      />
      <div className={s.CardContainer}>
        <Elevations dp='00' className='mt-10 mr-5 p-20'>
          <h6 className='m-0 text-center'>
            Elevation 00 dp (Default drop/box-shadow)
          </h6>
        </Elevations>
        <Elevations dp='01' className='mt-10 mr-5 p-20'>
          <h6 className='m-0 text-center'>
            Elevation 01 dp (Hover to see effects)
          </h6>
        </Elevations>
        <Elevations dp='02' className='mt-10 mr-5 p-20'>
          <h6 className='m-0 text-center'>
            Elevation 02 dp (Hover to see effects)
          </h6>
        </Elevations>
        <Elevations dp='03' className='mt-10 p-20'>
          <h6 className='m-0 text-center'>
            Elevation 03 dp (Hover to see effects)
          </h6>
        </Elevations>
      </div>
    </KitchenSinkLayout>
  );
}
