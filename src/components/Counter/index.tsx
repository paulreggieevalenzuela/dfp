import clsx from 'clsx';

import s from './Counter.module.scss';

type Props = {
  count: number;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'neutral';
  type?: 'rounded' | 'padded';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function Counter({
  count = 0,
  color = 'primary',
  type = 'padded',
  size = 'sm',
  className,
}: Props) {
  return (
    <div
      className={clsx(
        s.counter,
        className,
        color === 'primary' && s.primaryCounter,
        color === 'secondary' && s.secondaryCounter,
        color === 'success' && s.successCounter,
        color === 'warning' && s.warningCounter,
        color === 'neutral' && s.neutralCounter,
        type === 'rounded' && s.rounded,
        size === 'md' && s.medium,
        size === 'lg' && s.large,
        count.toString().length > 2 && s.largerCounter
      )}
    >
      <span>{count}</span>
    </div>
  );
}
