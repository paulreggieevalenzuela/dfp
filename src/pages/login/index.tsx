import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft';
import ArrowRight from '@carbon/icons-react/lib/ArrowRight';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';

import s from './page.module.scss';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import LoginLayout from '@/components/layouts/LoginLayout';
import LoginWithEmail from '@/components/login-providers/LoginWithEmail';
import Quote from '@/components/login-slider/Quote';

import { checkUserRoleName } from '@/utils/arrayUtils'

import mockData from './mock-data.json';

import HubSpotLogo from '~/images/mock/login/hubspot/logo.svg';
import TiktokLogo from '~/images/mock/login/tiktok/logo.svg';
import UFCLogo from '~/images/mock/login/ufc/logo.svg';
import LogoDark from '~/svg/df-logo-dark.svg';
import CurveRed from '~/svg/lines/curve-red.svg';

type ProviderName = 'default' | 'credentials' | 'google';
export interface Provider {
  handleChangeProvider: (val: ProviderName) => void;
}

const logos = {
  hubspot: HubSpotLogo,
  tiktok: TiktokLogo,
  ufc: UFCLogo,
};

export default function Page() {
  const { data: session } = useSession() as any;
  const router = useRouter();
  const [provider, setProvider] = useState<ProviderName>('default');

  // TODO: clear this log after all user info needed has be utilized in app state
  let unauthorized = true;

  if (session) {
    // TODO: add a dispatch after here to save current logged in user name, avatar, etc to SideNav state 

    if (checkUserRoleName(session.user.roles, 'COMPANY_ADMIN') ||
      checkUserRoleName(session.user.roles, 'SITE_ADMIN')) {
      unauthorized = false;
    } else {
      unauthorized = true;
    }
  }

  // TODO: make landingUrl dynamic, based on user role
  let landingUrl = '/';

  const goToLanding = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(landingUrl);
  }
  const handleChangeProvider = (val: ProviderName) => {
    setProvider(val);
  };

  const launchGoogleAuth = () => {
    window.location.href = `${window.location.origin}/api/df/oauth2/authorize/google?redirect_uri=${window.location.origin}/login/google`;
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

  if (session && !unauthorized) {

    if (router.query.callbackUrl) {
      landingUrl = router.query.callbackUrl.toString();
      router.push(landingUrl);
      return false;
    }
    // TODO: uncomment 2 lines below when final default landing page is iplemented/determined
    // router.push(landingUrl);
    // return false;
  }

  return (
    <LoginLayout className={s.Page}>
      <div className='left'>
        <Button style='lite' onClick={goToLanding} className='mr-auto'>
          Go to Landing Page
        </Button>
        <div className={`content provider-${provider}`}>
          <Link href='/'>
            <a>
              <LogoDark className='logo' />
            </a>
          </Link>
          {session ? (
            <div className={s.userInfo}>
              <Avatar
                src={session?.user?.image as string}
                alt='profile1'
                size='medium'
              />
              <p>Welcome, {session?.user?.name}</p>
              {unauthorized &&
                <p className='text-center leading-normal'>You are not permitted to access this page, please ask admin to gain access.</p>
              }
              <Button style='outline' onClick={() => signOut()}>
                Sign out&nbsp;
                <ArrowRight />
              </Button>

            </div>
          ) : (
              <>
                <p>
                  Don&rsquo;t have an account?{' '}
                  <Link href='/#'>Request access.</Link>
                </p>

                {provider === 'google' ? (
                  <Button style='filled' onClick={launchGoogleAuth}>
                    <ArrowLeft />
                  &nbsp; Continue with Google
                  </Button>
                ) : (
                    <Button
                      style='filled'
                      onClick={() => handleChangeProvider('google')}
                    >
                      Sign in with Google &nbsp;
                      <ArrowRight />
                    </Button>
                  )}
                {provider === 'credentials' ? (
                  <LoginWithEmail isExpanded={provider === 'credentials'} />
                ) : (
                    <Button
                      style='outline'
                      onClick={() => handleChangeProvider('credentials')}
                    >
                      Sign in with email instead
                    </Button>
                  )}
              </>
            )}
        </div>
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
