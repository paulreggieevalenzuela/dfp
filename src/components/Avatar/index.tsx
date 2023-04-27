import Image, { ImageProps } from 'next/image';
import React from 'react';

import s from './Avatar.module.scss';

const sizes = {
  xxsmall: {
    width: 20,
    height: 20,
  },
  xsmall: {
    width: 24,
    height: 24,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 126,
    height: 126,
  },
  large: {
    width: 230,
    height: 230,
  },
};
export interface AvatarProps {
  mode?: 'image' | 'initials' | 'icon';
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large';
  hasStatus?: boolean;
  count?: number;
  children?: React.ReactNode;
}

const defaultProps = {
  alt: 'avatar',
  objectFit: 'cover',
  src: '/images/avatar-placeholder.gif',
};

const Avatar = (props: ImageProps & AvatarProps) => {
  const {
    alt,
    objectFit,
    size = 'small',
    hasStatus = false,
    mode = 'icon',
    count,
    children,
    ...rest
  } = props;

  return (
    <div
      className={`${s.Avatar} 
      ${s[size]} 
      ${s[mode]}
      ${s[hasStatus ? 'hasStatus' : '']}
      `}
      style={{ width: sizes[size].width, height: sizes[size].height }}
    >
      {children ? (
        children
      ) : (
        <Image
          alt={alt}
          width={sizes[size].width}
          height={sizes[size].height}
          objectFit={objectFit}
          {...rest}
        />
      )}
      {count && (
        <div className={`${s.count} ${count === 1 ? s.isOne : ''}`}>
          <span>{count}</span>
        </div>
      )}
    </div>
  );
};

Avatar.defaultProps = defaultProps;
export default Avatar;
