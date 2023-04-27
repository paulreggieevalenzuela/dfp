import Enterprise from '@carbon/icons-react/lib/Enterprise';
import Receipt from '@carbon/icons-react/lib/Receipt';
import Link from 'next/link';
import React, { useState } from 'react';

import s from './account.module.scss';

import CRFFormModal from '@/components/design-request/DesignRequestModal';
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tabs/Tab';

import data from './account-tabs.json';

export default function AccountTabs({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(index);

  const handleChangeIndex = (idx: number) => {
    setActiveIndex(idx);
  };

  const generateIcons = (icon: React.ReactNode) => {
    switch (icon) {
      case 'enterprise':
        return <Enterprise size={20} />;
      case 'receipt':
        return <Receipt size={20} />;
    }
  };

  return (
    <div className={s.AccountHeader}>
      <div className={s.container}>
        <div className={s.header}>
          <span>Account Settings</span>
          <CRFFormModal />
        </div>

        <div className={s.tabContainer}>
          <Tabs activeIndex={activeIndex} onChangeIndex={handleChangeIndex}>
            {data &&
              data.tabs.map((item, idx) => {
                return (
                  <Tab key={idx} icon={generateIcons(item.icon)}>
                    <Link href={item.link}>{item.tabName}</Link>
                  </Tab>
                );
              })}
          </Tabs>
        </div>
      </div>
      <div className='flex flex-col gap-1 justify-center w-full lg:max-w-[930px] mt-20'>{children}</div>
    </div>
  );
}
