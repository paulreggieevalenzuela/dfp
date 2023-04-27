import clsx from 'clsx';

import s from './Quote.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Quote(props: Props) {
  const { children, className } = props;
  return <div className={clsx(s.Quote, className)}>{children}</div>;
}
