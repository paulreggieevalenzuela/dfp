import React from 'react';

import s from './layouts.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const combinedClasses = `${s.Container} ${props.className}`;
  return <div {...props} {...{ className: combinedClasses }} />;
}
