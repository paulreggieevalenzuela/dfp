import { ToastNotification, ToastNotificationProps } from 'carbon-components-react';
import clsx from 'clsx';

import s from './AlertBar.module.scss';

type Props = ToastNotificationProps & {
  className?: string;
  kind?:
  | 'error'
  | 'info'
  | 'info-square'
  | 'success'
  | 'warning'
  | 'warning-alt';
  subTitle?: string | React.ReactNode;
  timeout?: number;
  title?: string | React.ReactElement;
  hideCloseButton?: boolean;
  size?: 'small' | 'large';
};

export default function AlertBar({
  className,
  title = 'Notification Bar',
  subTitle,
  kind = 'info',
  timeout = 0,
  hideCloseButton = true,
  size = 'large',
}: Props) {
  return (
    <div
      className={clsx(
        size === 'small' && s.AlertBarSmall,
        s.AlertBar,
        className
      )}
    >
      <ToastNotification
        title={title}
        kind={kind}
        timeout={timeout}
        hideCloseButton={hideCloseButton}
      >
        <div className="cds--toast-notification__subtitle">
          {subTitle}
        </div>
      </ToastNotification>
    </div>
  );
}
