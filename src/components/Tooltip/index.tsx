import clsx from 'clsx';
import { Children, ReactNode, useState } from 'react';

import styles from './Tooltip.module.scss';

interface TooltipProps {
  children: ReactNode | ReactNode[];
  label: ReactNode;
  className?: string;
  align:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
}

const Tooltip = ({ className, label, align, children }: TooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(styles.Tooltip, open && 'open', className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {Children.only(children)}
      <span className={clsx(styles.label, styles[align])}>{label}</span>
      <span className={clsx(styles.caret, styles[align])}></span>
    </div>
  );
};

export default Tooltip;
