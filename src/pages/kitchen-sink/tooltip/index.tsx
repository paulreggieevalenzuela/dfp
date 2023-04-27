import { useState } from 'react';

import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';
import Tooltip from '@/components/Tooltip';

export default function Page() {
  const [label, setLabel] = useState('Label');

  return (
    <KitchenSinkLayout>
      <TitleBar title='Tooltip' description='' />
      <Container>
        <div className='mb-8'>
          <label>Tooltip Message: </label>
          <input
            placeholder='Set tooltip label'
            value={label}
            onChange={({ target: { value } }) => setLabel(value)}
          />
        </div>

        <h6 className='mb-8'>Hover to see Tooltip</h6>

        <section className='mb-8'>
          <Tooltip align='top-left' label={label} className='mr-3'>
            <span className='pointer-events-auto inline-block w-[100px] border-[1px] border-solid border-gray-darkest py-2 text-center'>
              Top Left
            </span>
          </Tooltip>

          <Tooltip align='top' label={label} className='mr-3'>
            <span className='pointer-events-auto inline-block w-[100px] border-[1px] border-solid border-gray-darkest py-2 text-center'>
              Top
            </span>
          </Tooltip>

          <Tooltip align='top-right' label={label} className='mr-3'>
            <span className='pointer-events-auto inline-block w-[100px] border-[1px] border-solid border-gray-darkest py-2 text-center'>
              Top Right
            </span>
          </Tooltip>
        </section>

        <section>
          <Tooltip align='bottom-left' label={label} className='mr-3'>
            <span className='pointer-events-auto inline-block w-[100px] border-[1px] border-solid border-gray-darkest py-2 text-center'>
              Bottom Left
            </span>
          </Tooltip>
          <Tooltip align='bottom' label={label} className='mr-3'>
            <span className='pointer-events-auto inline-block  w-[100px] border-[1px] border-solid border-gray-darkest py-2 text-center'>
              Bottom
            </span>
          </Tooltip>
          <Tooltip align='bottom-right' label={label} className='mr-3'>
            <span className='pointer-events-auto inline-block w-[100px] border-[1px] border-solid border-gray-darkest py-2 text-center'>
              Bottom Right
            </span>
          </Tooltip>
        </section>
      </Container>
    </KitchenSinkLayout>
  );
}
