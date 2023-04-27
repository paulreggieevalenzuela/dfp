import React from 'react';

import s from './page.module.scss';

import Img from '@/components/Image';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Map from '@/components/Map';
import TitleBar from '@/components/TitleBar';

function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Images'
        description='Fill content for avatars, maps, and other images.'
      />

      <section>
        <div className='row'>
          <div className='col'>
            <h3 className='mb-2.5 text-[16px]'>Placeholder</h3>
            <div className='flex flex-row'>
              <Img
                src='/images/mock/placeholder.png'
                alt='placeholder'
                width={187}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <div className='col'>
            <h3 className='mb-2.5 text-[16px]'>Map</h3>

            <div className='flex gap-[24px]'>
              <Map latitude={33.6542529} longitude={-117.750137} />
              <Map
                latitude={33.6542529}
                longitude={-117.750137}
                grayscale
                darkMode
              />
              <Map latitude={33.6542529} longitude={-117.750137} grayscale />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <div className='col'>
            <h3 className='mb-2.5 text-[16px]'>Profile</h3>
            <div className='flex flex-col gap-[24px] md:flex-row'>
              <Img
                src='/images/mock/profile1.png'
                alt='profile1'
                width={187}
                height={150}
              />
              <Img
                src='/images/mock/profile2.png'
                alt='profile2'
                width={187}
                height={150}
              />
              <Img
                src='/images/mock/profile3.png'
                alt='profile3'
                width={187}
                height={150}
              />
              <Img
                src='/images/mock/profile4.png'
                alt='profile4'
                width={187}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <div className='col'>
            <h3 className='mb-2.5 text-[16px]'>Cities</h3>
            <div className='flex flex-col gap-[24px] md:flex-row'>
              <div>
                <Img
                  src='/images/mock/city1.jpg'
                  alt='city1'
                  width={187}
                  height={150}
                />
              </div>
              <Img
                src='/images/mock/city2.jpg'
                alt='city2'
                width={187}
                height={150}
              />
              <Img
                src='/images/mock/city3.jpg'
                alt='city3'
                width={187}
                height={150}
              />
              <Img
                src='/images/mock/city4.jpg'
                alt='city4'
                width={187}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
    </KitchenSinkLayout>
  );
}

export default Page;
