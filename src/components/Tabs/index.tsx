import { TabProps } from 'carbon-components-react';
import clsx from 'clsx';
import { Children, cloneElement, ReactElement } from 'react';

import styles from './Tabs.module.scss';

interface TabsProps {
  type?: 'line' | 'pill' | 'folder';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  children?: ReactElement<TabProps> | ReactElement<TabProps>[];
  activeIndex?: number;
  onChangeIndex?: (index: number) => void;
}

const Tabs = ({
  type = 'line',
  orientation = 'horizontal',
  activeIndex = 0,
  children = [],
  className,
  onChangeIndex = () => null,
}: TabsProps) => {
  const handleChangeIndex = (idx: number) => {
    onChangeIndex(idx);
  };

  return (
    <div
      className={clsx(
        styles.Tabs,
        styles[type],
        styles[orientation],
        className
      )}
    >
      {Children.map(children, (C, idx) =>
        cloneElement(C as ReactElement, {
          selected: activeIndex === idx,
          onClick: () => handleChangeIndex(idx),
        })
      )}
    </div>
  );
};

export default Tabs;
