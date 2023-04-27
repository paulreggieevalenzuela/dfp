import React from 'react';

import s from './layouts.module.scss';

import Header from '@/components/Header';
import Container from '@/components/layouts/Container';
import Seo from '@/components/Seo';

export default function KitchenSinkLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${s.KitchenSink} ${className}`}>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
