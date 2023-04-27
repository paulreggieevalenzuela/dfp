import clsx from 'clsx';
import { ElementType, ReactElement } from 'react';

import styles from './Notification.module.scss';

import { getNotificationDate } from '@/lib/helper';

import { AvatarProps } from '@/components/Avatar';

export interface NotificationProps {
  as?: ElementType;
  href?: string;
  avatar: ReactElement<AvatarProps>;
  name: string;
  action: string;
  actionItem: string;
  dateTime: Date;
  message: string;
  className?: string;
  unread?: boolean;
}

const Notification = ({
  as: Tag = 'div',
  href,
  avatar,
  name,
  action,
  actionItem,
  dateTime,
  message,
  className,
  unread,
}: NotificationProps) => {
  return (
    <Tag className={clsx(styles.Notification, className)} href={href}>
      <div className='avatar'>{avatar}</div>
      <div className='content'>
        <div className='heading'>
          <span className='name'>{name}</span>
          <span className='action'>{` ${action}`}</span>
          <span className='action-item'>{` ${actionItem}`}</span>
        </div>
        <span className='date-time'>{getNotificationDate(dateTime)}</span>
        <span className='message'>{message}</span>
      </div>
      {unread && <span className='unread-marker' />}
    </Tag>
  );
};

export default Notification;
