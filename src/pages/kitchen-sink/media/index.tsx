import s from './page.module.scss';

import Carousel, { CarouselItem } from '@/components/Carousel';
import Img from '@/components/Image';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';
import VideoPlayer from '@/components/VideoPlayer';

export default function PageMedia() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Media' description='Carousel and Video Pcclayer' />
      <Carousel>
        <CarouselItem>
          <Img
            src='/images/mock/city4.jpg'
            alt='Carousel Iamge'
            width='500px'
            height='300px'
          />
        </CarouselItem>
        <CarouselItem>
          <Img
            src='/images/mock/city3.jpg'
            alt='Carousel Iamge'
            width='500px'
            height='300px'
          />
        </CarouselItem>
        <CarouselItem>
          <Img
            src='/images/mock/city2.jpg'
            alt='Carousel Iamge'
            width='500px'
            height='300px'
          />
        </CarouselItem>
        <CarouselItem>
          <Img
            src='/images/mock/city1.jpg'
            alt='Carousel Iamge'
            width='500px'
            height='300px'
          />
        </CarouselItem>
      </Carousel>

      <div className={s.videoContainer}>
        <VideoPlayer src='/videos/mock/video1.mp4' width={500} />
      </div>
    </KitchenSinkLayout>
  );
}
