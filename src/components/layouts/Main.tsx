import React from 'react'

import s from './layouts.module.scss';

import { useAppSelector } from '@/app/hooks';
import { selectSideNav } from '@/features/sideNavSlice';

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

  const { isCollapsed } = useAppSelector(selectSideNav).data;

  return (
    <main className={`${className} ${s.Main} ${isCollapsed ? 'collapsed' : s.expanded}`}>
      {children}
    </main>
  )
}