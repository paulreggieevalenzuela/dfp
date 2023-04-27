import { Button as CButton, ButtonDefaultProps } from 'carbon-components-react';
import { clsx } from 'clsx';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

type ButtonKindProps = 'primary' | 'danger' | 'tertiary';

type CbuttonProps = Omit<ButtonDefaultProps, 'size' | 'kind' | 'style'> & {
  kind?: ButtonKindProps;
  size?: 'sm' | 'lg';
};

const BUTTON_KINDS: ButtonKindProps[] = ['primary', 'danger', 'tertiary'];

const CarbonButton = CButton as React.FC<CbuttonProps>;
CarbonButton.propTypes = {
  ...CarbonButton.propTypes,
  kind: PropTypes.oneOf(BUTTON_KINDS),
};

export type ButtonProps = CbuttonProps & {
  widthSizing?: 'hug' | 'fixed';
  style?: 'filled' | 'outline' | 'link' | 'lite';
  selected?: boolean;
  darkMode?: boolean;
};

const Button = ({
  className,
  children,
  kind = 'primary',
  widthSizing = 'hug',
  style = 'filled',
  selected = false,
  darkMode = false,
  ...rest
}: ButtonProps) => {
  const buttonClassName = clsx(styles.Button, className, {
    'cds--btn--fixed-size': widthSizing === 'fixed',
    'cds--btn--outline': style === 'outline',
    'cds--btn--link': style === 'link',
    'cds--btn--lite': style === 'lite',
    dark: darkMode,
    selected: selected,
    kind: kind,
  });

  return (
    <CarbonButton className={buttonClassName} {...rest} kind={kind}>
      {children}
    </CarbonButton>
  );
};

export default Button;
