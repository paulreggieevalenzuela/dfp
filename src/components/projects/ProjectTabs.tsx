import Link from 'next/link';
import React, { useState } from 'react';

import s from './projects.module.scss';

import Tabs from '@/components/Tabs';
import Tab from '@/components/Tabs/Tab';
import TopNavHeader from '@/components/TopNavHeader';

import data from './project-tabs.json';

export default function ProjectTabs({
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

  return (
    <div className={s.ProjectHeader}>
      <div className={s.container}>
        <div className={s.header}>
          <TopNavHeader />
        </div>

        <div className={s.tabContainer}>
          <Tabs activeIndex={activeIndex} onChangeIndex={handleChangeIndex}>
            {data &&
              data.tabs.map((item, idx) => {
                return (
                  <Tab key={idx}>
                    <Link href={item.link}>{item.tabName}</Link>
                  </Tab>
                );
              })}
          </Tabs>
        </div>

      </div>

      <div className='flex flex-col gap-1 justify-center w-full lg:max-w-[930px] pt-[105px]'>
        {children}
      </div>
    </div>
  );
}
