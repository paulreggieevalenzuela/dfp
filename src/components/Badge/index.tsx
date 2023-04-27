import clsx from 'clsx';

import s from './Badge.module.scss';

type Props = {
  label?: string;
  size?: 'small' | 'large';
  className?: string;
  type?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'disabled'
    | 'neutral';
  icon?: React.ReactNode | React.ReactElement;
  onClick?: () => void;
};

export default function Badge({
  label,
  onClick,
  type = 'primary',
  size = 'large',
  icon,
  className,
}: Props) {
  const badgeStyle = clsx(
    s.Badge,
    className,
    size === 'small' && s.Small,
    type === 'primary' && s.Primary,
    type === 'secondary' && s.Secondary,
    type === 'warning' && s.Warning,
    type === 'success' && s.Success,
    type === 'error' && s.Error,
    type === 'disabled' && s.Disabled,
    type === 'neutral' && s.Neutral
  );

  return (
    <div className={badgeStyle} onClick={onClick}>
      {icon && <div className='Badge__icon'>{icon}</div>}
      {label}
    </div>
  );
}
