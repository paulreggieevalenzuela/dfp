import React from 'react';

import Seo from '@/components/Seo';

export default function LoginLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <Seo
        templateTitle='Design Force Login'
        description='Design Force Portal Login'
      />
      <main>{children}</main>
    </div>
  );
}
