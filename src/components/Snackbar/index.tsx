import { Link } from 'carbon-components-react';
import { clsx } from 'clsx';

import s from './Snackbar.module.scss';

type SnackbarProps = {
  message: string;
  severity?: 'error' | 'warning' | 'success';
  actionLabel?: string;
  onClickAction?: React.MouseEventHandler;
  position?: 'bottom-left' | 'bottom-center';
};

export const Snackbar = ({
  message,
  actionLabel,
  severity,
  position,
  onClickAction,
}: SnackbarProps) => {
  return (
    <div
      className={clsx(
        s.barStyle,
        severity == 'success' && s.successStyle,
        severity == 'warning' && s.warningStyle,
        severity == 'error' && s.errorStyle,
        !severity && s.defaultStyle,
        position == 'bottom-left' && s.bottomLeft
      )}
    >
      <span>{message}</span>
      <Link className='text-base text-blue-300' onClick={onClickAction}>
        {actionLabel}
      </Link>
    </div>
  );
};
