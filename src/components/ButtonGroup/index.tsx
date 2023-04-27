import { Fragment, ReactElement } from 'react';

import styles from './ButtonGroup.module.scss';

import { ButtonProps } from '@/components/Button';

type ButtonGroupProps = {
  className?: string;
  children: ReactElement<ButtonProps>[];
};

const ButtonGroup = ({ children, className }: ButtonGroupProps) => {
  return (
    <div className={`${styles.ButtonGroup} ${className}`}>
      {children.map((child, idx) => (
        <Fragment key={`button-group-${idx}`}>
          {child}
          {children.length - 1 !== idx && <div />}
        </Fragment>
      ))}
    </div>
  );
};

export default ButtonGroup;
