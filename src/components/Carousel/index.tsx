import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import s from './Carousel.module.scss';

import Img from '@/components/Image';

type Props = {
  children?: React.ReactNode | React.ReactElement;
};

type ItemProps = {
  children?: React.ReactNode | React.ReactElement;
};

export const CarouselItem = ({ children }: ItemProps) => {
  return <div className='carousel__item'>{children}</div>;
};

const Carousel = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className={s.Carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className='carousel__content'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children}
      </div>
      <div className='carousel__cta'>
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <Img
            src='/images/carousel-left-chevron.png'
            alt='prev'
            width='32'
            height='32'
            objectFit='contain'
          />
        </button>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <Img
            src='/images/carousel-right-chevron.png'
            alt='next'
            width='32'
            height='32'
            objectFit='contain'
          />
        </button>
      </div>
      <div className='carousel__indicators'>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={clsx({ active: index === activeIndex })}
              onClick={() => updateIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
