import clsx from 'clsx';

import styles from './RoundedButton.module.scss';

import Button, { ButtonProps } from '@/components/Button';

export const RoundedButton = ({
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Button {...rest} className={clsx(styles.RoundedButton, className)}>
      {children}
    </Button>
  );
};

export default RoundedButton;
