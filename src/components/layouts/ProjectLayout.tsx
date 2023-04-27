import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './layouts.module.scss';

import Container from '@/components/layouts/Container';
import Main from '@/components/layouts/Main';
import Seo from '@/components/Seo';
import SideNav from '@/components/SideNav';
import mockData from '@/components/SideNav/side-nav-data.json';

import { useAppSelector } from '@/app/hooks';
import { selectSideNav, setSideNav } from '@/features/sideNavSlice';

export default function ProjectLayout({
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
  console.log('data: ', mockData);

  useEffect(() => {
    const firstName = session?.user?.first_name || sideNavState.data.firstName,
      lastName = session?.user?.last_name || sideNavState.data.lastName,
      fullName = session?.user?.name || sideNavState.data.fullName;
    const sidenavPayload = {
      ...mockData.nav,
      ...{
        firstName,
        lastName,
        fullName,
        isCollapsed: true
      }
    };
    dispatch(setSideNav(sidenavPayload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const mainStyle = clsx({ '--white': mainBGColor === 'white' });

  return (
    <div className={`${s.Projects} ${className}`}>
      <Seo
        templateTitle='Projects'
        description='Design Force Portal Projects'
      />
      <SideNav items={sideNavState.data} />
      {header && header}
      <Main className={mainStyle}>
        <Container>{children}</Container>
      </Main>
    </div>
  );
}
