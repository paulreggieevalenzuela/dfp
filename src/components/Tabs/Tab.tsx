import { IconProps } from 'carbon-components-react';
import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

import styles from './Tabs.module.scss';

export interface TabProps {
  className?: string;
  icon?: ReactElement<IconProps>;
  children?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const Tab = ({ children, className, icon, selected, onClick }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.Tab, className, selected && styles.selected)}
    >
      <div>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
      </div>
    </button>
  );
};

export default Tab;
