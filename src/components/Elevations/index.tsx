import clsx from 'clsx';

import s from './Elevations.module.scss';

type Props = {
  children?: React.ReactNode | string;
  className?: string;
  dp?: string;
};

export default function Elevations({ children, dp = '00', className }: Props) {
  const setElevation = () => {
    switch (dp) {
      case '01':
        return s.Elavation1;
      case '02':
        return s.Elavation2;
      case '03':
        return s.Elavation3;
    }
  };

  return (
    <div className={clsx(s.Elevations, className, setElevation())}>
      {children}
    </div>
  );
}
