import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

import s from './page.module.scss';

import LoginLayout from '@/components/layouts/LoginLayout';
import { ResetPassword } from '@/components/login-providers/ResetPassword';
import Quote from '@/components/login-slider/Quote';

import mockData from '../login/mock-data.json';

import HubSpotLogo from '~/images/mock/login/hubspot/logo.svg';
import TiktokLogo from '~/images/mock/login/tiktok/logo.svg';
import UFCLogo from '~/images/mock/login/ufc/logo.svg';
import LogoDark from '~/svg/df-logo-dark.svg';
import CurveRed from '~/svg/lines/curve-red.svg';
type ProviderName = 'default' | 'email' | 'google';
export interface Provider {
  handleChangeProvider: (val: ProviderName) => void;
}

const logos = {
  hubspot: HubSpotLogo,
  tiktok: TiktokLogo,
  ufc: UFCLogo,
};

export default function Page() {
  const { data: session } = useSession();
  const [provider, setProvider] = useState<ProviderName>('default');
  // TODO: clear this log after all user info need has be utilized in global app state
  console.log('session: ', session);

  const handleChangeProvider = (val: ProviderName) => {
    setProvider(val);
  };
  const launchGoogleAuth = () => {
    signIn('google');
  };

  useEffect(() => {
    if (provider === 'google') {
      launchGoogleAuth();
    }
  }, [provider]);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = useCallback(() => {
    let newIndex = activeIndex + 1;
    if (newIndex < 0) {
      newIndex = mockData.data.length - 1;
    } else if (newIndex >= mockData.data.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex();
    }, 10000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [updateIndex]);

  return (
    <LoginLayout className={s.Page}>
      <div className='left'>
        <Link href='/login'>
          <a className='btn mr-auto mb-8'>Go to homepage</a>
        </Link>
        <Link href='/'>
          <a className='mt-5'>
            <LogoDark className='logo' />
          </a>
        </Link>
        <p className='text-xl mt-3'> Reset Password </p>
        <ResetPassword />
      </div>
      <div className='right'>
        <CurveRed className='curve' />
        <div className={s.avatarContainer}>
          <div className={s.column}>
            <div className={s.filler}></div>
            <div className={s.filler}></div>
            {Array.from({ length: 3 }, (_, imageIdx) => (
              <div key={`images-container-${imageIdx}`} className={s.avatar}>
                {mockData.data.map((data, brandIdx) => (
                  <Image
                    key={`image-${data.name}-${imageIdx}`}
                    src={data.avatars[imageIdx]}
                    alt={`user avatar ${imageIdx}`}
                    quality={90}
                    layout='fill'
                    className={clsx(activeIndex === brandIdx && 'active')}
                  />
                ))}
              </div>
            ))}
            <div className={s.filler}></div>
            <div className={s.filler}></div>
          </div>
          <div className={s.column}>
            <div className={s.filler}></div>
            <div className={s.filler}></div>
            {Array.from({ length: 3 }, (_, imageIdx) => (
              <div
                key={`images-container-${imageIdx + 3}`}
                className={s.avatar}
              >
                {mockData.data.map((data, brandIdx) => (
                  <Image
                    key={`image-${data.name}-${imageIdx + 3}`}
                    src={data.avatars[imageIdx + 3]}
                    alt={`user avatar ${imageIdx + 3}`}
                    quality={90}
                    layout='fill'
                    className={clsx(activeIndex === brandIdx && 'active')}
                  />
                ))}
              </div>
            ))}
            <div className={s.filler}></div>
            <div className={s.filler}></div>
          </div>
        </div>

        <div className={s.Slider}>
          {mockData.data.map((data, brandIdx) => {
            const BrandLogo = logos[data.name as 'hubspot' | 'tiktok' | 'ufc'];
            return (
              <Quote
                key={`quote-${data.name}`}
                className={clsx(activeIndex === brandIdx && 'active')}
              >
                <div className='brand'>
                  <BrandLogo />
                  <span>Design Force Team</span>
                </div>
                <h3>&ldquo;{data.review?.heading}</h3>
                <p>{data.review?.content}&rdquo;</p>
                <span className='author'>{data.review?.reviewer}</span>
              </Quote>
            );
          })}
          <ul className={s.nav}>
            {mockData.data.map((_, brandIdx) => (
              <li
                key={`slide-nav-${brandIdx}`}
                className={clsx(activeIndex === brandIdx && 'active')}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </LoginLayout>
  );
}
