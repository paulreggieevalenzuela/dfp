import clsx from 'clsx';

import styles from './ComboButton.module.scss';

import Button, { ButtonProps } from '@/components/Button';

type Props = ButtonProps & {
  iconelement?: React.ReactNode;
};

export const ComboButton = ({
  className,
  children,
  iconelement,
  selected = false,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.ComboButton, className, { selected })}>
      <Button {...rest} className='main-button' selected={selected}>
        {children}
      </Button>
      <Button {...rest} className='icon-button' selected={selected}>
        {iconelement}
      </Button>
    </div>
  );
};

export default ComboButton;
