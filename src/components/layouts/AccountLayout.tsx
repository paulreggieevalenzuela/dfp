import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './layouts.module.scss';

import Container from '@/components/layouts/Container';
import Main from '@/components/layouts/Main';
import Loading from '@/components/Loading';
import Seo from '@/components/Seo';
import SideNav from '@/components/SideNav';
import mockData from '@/components/SideNav/side-nav-data.json';

import { useAppSelector } from '@/app/hooks';
import { selectSideNav, setSideNav } from '@/features/sideNavSlice';
import { selectSubscriptionPlan, updateSubscriptionPlan } from '@/features/subscriptionPlanSlice';
import { useTotalHoursCompanyQuery } from '@/services/totalHours';

export default function AccountLayout({
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
  const subsScriptionPlanValue = useAppSelector(selectSubscriptionPlan).value;

  // TODO: set currentCompanyId to actual company ID based on clientInfo state
  const currentCompanyId = 2;
  const { data, isLoading } = useTotalHoursCompanyQuery(currentCompanyId);
  console.log('mockData: ', mockData);

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

  useEffect(() => {
    if (data) {
      dispatch(updateSubscriptionPlan({
        ...subsScriptionPlanValue,
        ...{
          availableHours: data.consumed_hours,
          totalHours: data.subscription_hours
        }
      }));
    }
  }, [isLoading]);

  const mainStyle = clsx({ '--white': mainBGColor === 'white' });

  return (
    <div className={`${s.Account} ${className}`}>
      <Seo
        templateTitle='Account'
        description='Client Account pages and sub pages'
      />
      <SideNav items={sideNavState.data} />
      {header && header}
      <Main className={mainStyle}>
        <Container>
          {isLoading ?
            <Loading />
            :
            children
          }
        </Container>
      </Main>
    </div>
  );
}
