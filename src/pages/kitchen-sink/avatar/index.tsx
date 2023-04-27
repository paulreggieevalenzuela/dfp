import React from 'react';

import s from './page.module.scss';

import Avatar from '@/components/Avatar';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

import Enterprise from '~/svg/icons/enterprise.svg';

function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Avatar' />

      <section>
        <div className='flex max-w-lg flex-col gap-6'>
          <span className='text-[22px]'>Bases</span>
          <div className='row !text-[20px] !text-neutral-400'>
            <span>Avatar</span>
            <span>Initials</span>
            <span>Icon</span>
          </div>
          <div className='row'>
            <Avatar src='/images/mock/profile3.png' />
            <Avatar mode='initials'>AB</Avatar>
            <Avatar mode='icon'>
              <Enterprise />
            </Avatar>
          </div>
          <div className='row'>
            <Avatar src='/images/mock/profile3.png' hasStatus />
            <Avatar mode='initials' hasStatus>
              AB
            </Avatar>
            <Avatar mode='icon' hasStatus>
              <Enterprise />
            </Avatar>
          </div>
          <div className='row'>
            <Avatar src='/images/mock/profile3.png' hasStatus count={1} />
            <Avatar mode='initials' hasStatus count={2}>
              AB
            </Avatar>
            <Avatar mode='icon' hasStatus count={3}>
              <Enterprise />
            </Avatar>
          </div>
          <div className='row'>
            <Avatar src='/images/mock/profile3.png' count={1} />
            <Avatar mode='initials' count={2}>
              AB
            </Avatar>
            <Avatar mode='icon' count={3}>
              <Enterprise />
            </Avatar>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className='flex max-w-lg flex-col gap-6'>
          <span className='text-[22px]'>Medium</span>
          <div className='row'>
            <Avatar
              src='/images/mock/profile1.png'
              alt='profile1'
              size='medium'
            />
            <Avatar
              src='/images/mock/profile2.png'
              alt='profile2'
              size='medium'
            />
            <Avatar
              src='/images/mock/profile3.png'
              alt='profile3'
              size='medium'
            />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className='flex w-full flex-col gap-6'>
          <span className='text-[22px]'>Large</span>
          <div className='row'>
            <Avatar
              src='/images/mock/profile1.png'
              alt='profile1'
              size='large'
            />
            <Avatar
              src='/images/mock/profile2.png'
              alt='profile2'
              size='large'
            />
            <Avatar
              src='/images/mock/profile3.png'
              alt='profile3'
              size='large'
            />
          </div>
        </div>
      </section>
    </KitchenSinkLayout>
  );
}

export default Page;
