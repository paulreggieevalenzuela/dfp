import { Toggle, ToggleProps } from 'carbon-components-react';

type SwitchProps = Omit<ToggleProps, 'size'> & {
  switchPosition?: 'left' | 'right';
};

const Switch = ({
  switchPosition = 'left',
  className = '',
  ...rest
}: SwitchProps) => {
  const finalClassName = [
    className,
    switchPosition === 'right' ? 'cds--toggle__right-switch' : '',
  ]
    .filter((cls) => cls?.length > 0)
    .join(' ');

  return <Toggle {...rest} className={finalClassName} />;
};

export default Switch;
