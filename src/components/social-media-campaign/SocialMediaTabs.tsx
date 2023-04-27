import {
  Branch,
  Document,
  Link as IconLink,
  RecentlyViewed,
} from '@carbon/icons-react';
import Link from 'next/link';
import { useState } from 'react';

import s from './socialMediaCampaign.module.scss';

import SocialMediaCampaignHeader from '@/components/social-media-campaign/SocialMediaCampaignHeader';
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tabs/Tab';

import data from './social-media-tabs.json';

export default function SocialMediaTabs({
  index,
  header,
  children,
}: {
  index: number;
  header: {
    status: string;
    dueDates: string;
    estimatedHours: number | string;
    loggedHours: number | string;
    user: {
      name: string;
      src: string;
    };
    team: {
      name: string;
      src: string;
    }[];
  };
  children: React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(index);

  const handleChangeIndex = (idx: number) => {
    setActiveIndex(idx);
  };

  const generateIcons = (icon: React.ReactNode) => {
    switch (icon) {
      case 'branch':
        return <Branch size={20} />;
      case 'document':
        return <Document size={20} />;
      case 'clip':
        return <IconLink size={20} />;
      case 'history':
        return <RecentlyViewed size={20} />;
    }
  };

  return (
    <div className={s.SocialMediaHeader}>
      <div className={s.container}>
        <div className={s.header}>
          <SocialMediaCampaignHeader header={header} />
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

      <div className={s.childrenContainer}>{children}</div>
    </div>
  );
}
