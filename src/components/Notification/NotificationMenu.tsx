import clsx from 'clsx';
import { ReactElement } from 'react';

import styles from './NotificationMenu.module.scss';

import Elevations from '@/components/Elevations';
import { NotificationProps } from '@/components/Notification';

interface NotificationMenuProps {
  children: ReactElement<NotificationProps> | ReactElement<NotificationProps>[];
  className?: string;
}

const NotificationMenu = ({ children, className }: NotificationMenuProps) => {
  return (
    <Elevations className={clsx(styles.NotificationMenu, className)} dp='03'>
      <div className='title'>Notifications</div>
      {children}
    </Elevations>
  );
};

export default NotificationMenu;
