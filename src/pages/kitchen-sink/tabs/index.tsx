import AddAlt from '@carbon/icons-react/lib/AddAlt';
import { IconProps } from 'carbon-components-react';
import { ReactElement, useState } from 'react';

import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tabs/Tab';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const tabStyles: {
    type: 'line' | 'pill' | 'folder';
    orientation?: 'horizontal' | 'vertical';
    icon?: ReactElement<IconProps>;
    className?: string;
  }[] = [
      {
        type: 'line',
        orientation: 'horizontal',
        icon: <AddAlt size={20} />,
      },
      {
        type: 'line',
        orientation: 'horizontal',
      },
      {
        type: 'folder',
        icon: <AddAlt size={20} />,
      },
      {
        type: 'folder',
      },
      {
        type: 'pill',
        orientation: 'horizontal',
        icon: <AddAlt size={20} />,
      },
      {
        type: 'pill',
        orientation: 'horizontal',
      },
      {
        type: 'line',
        orientation: 'vertical',
        icon: <AddAlt size={20} />,
        className: 'w-[150px]',
      },
      {
        type: 'line',
        orientation: 'vertical',
        className: 'w-[150px]',
      },
      {
        type: 'pill',
        orientation: 'vertical',
        icon: <AddAlt size={20} />,
        className: 'w-[150px]',
      },
      {
        type: 'pill',
        orientation: 'vertical',
        className: 'w-[150px]',
      },
    ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeIndex = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <KitchenSinkLayout>
      <TitleBar title='Tabs' description='' />

      <Container>
        {tabStyles.map(({ type, orientation, icon, className }) => (
          <section key={`${type}-${orientation}-${!!icon}`} className='mb-8'>
            <h5 className='mb-4'>
              {type} / {orientation} / {icon ? 'icon' : 'no icon'}
            </h5>
            <Tabs
              type={type}
              orientation={orientation}
              activeIndex={activeIndex}
              onChangeIndex={handleChangeIndex}
              className={className}
            >
              <Tab icon={icon}>Tab Name</Tab>
              <Tab icon={icon}>Tab Name</Tab>
              <Tab icon={icon}>Tab Name</Tab>
              <Tab icon={icon}>Tab Name</Tab>
              <Tab icon={icon}>Tab Name</Tab>
              <Tab icon={icon}>Tab Name</Tab>
            </Tabs>
          </section>
        ))}
      </Container>
    </KitchenSinkLayout>
  );
}
