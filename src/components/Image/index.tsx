import Image, { ImageProps } from 'next/image';
import React from 'react';

import styles from './Image.module.scss';

const Img = (props: ImageProps) => {
  const { alt = 'image', width, height, objectFit = 'cover' } = props;

  return (
    <div className={styles.imgWrap}>
      <Image
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        {...props}
      />
    </div>
  );
};

export default Img;
