import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './layouts.module.scss';

import Main from '@/components/layouts/Main';
import Seo from '@/components/Seo';
import SideNav from '@/components/SideNav';
import data from '@/components/SideNav/side-nav-data.json';

import { useAppSelector } from '@/app/hooks';
import { selectSideNav, setSideNav } from '@/features/sideNavSlice';
import { useSession } from 'next-auth/react';

export default function SocialMediaCampaignLayout({
  children,
  className,
  mainBGColor,
  header,
}: {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  mainBGColor?: string;
}) {
  const { data: session }: any = useSession();
  const dispatch = useDispatch();
  const sideNavState = useAppSelector(selectSideNav);

  useEffect(() => {
    const firstName = session?.user?.first_name || sideNavState.data.firstName,
      lastName = session?.user?.last_name || sideNavState.data.lastName,
      fullName = session?.user?.name || sideNavState.data.fullName;
    const sidenavPayload = {
      ...data.nav,
      ...{
        firstName,
        lastName,
        fullName,
        isCollapsed: true
      }
    };
    dispatch(setSideNav(sidenavPayload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mainStyle = clsx({ '--white': mainBGColor === 'white' });

  return (
    <div className={`${s.SocialMediaCampaign} ${className}`}>
      <Seo
        templateTitle='Social Media Campaign'
        description='Design Force Portal Social Media Campaign'
      />
      <SideNav items={sideNavState.data} />
      {header && header}
      <Main className={mainStyle}>{children}</Main>
    </div>
  );
}
