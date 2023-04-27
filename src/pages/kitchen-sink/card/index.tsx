import s from './page.module.scss';

import Card from '@/components/Card';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

import cardData from './card-mock-data.json';

export default function PageCard() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Card' description='Card with different orientation.' />
      <h3>Card</h3>
      <div className={s.CardContainer}>
        {cardData.data.map((d, i) => (
          <Card key={i} {...d} className='mb-[20px]' />
        ))}
      </div>
      <h3> Card with Small Title </h3>
      <div className={s.CardContainer}>
        {cardData.dataLargeDesc.map((d, i) => (
          <Card key={i} {...d} className='mb-[20px]' />
        ))}
      </div>
      <h3>Card with Avatar</h3>
      <div className={s.CardContainer}>
        {cardData.dataWithAvatar.map((d, i) => (
          <Card key={i} {...d} className='mb-[20px]' />
        ))}
      </div>
      <h3>Card (No Image)</h3>
      <div className={s.CardContainer}>
        {cardData.dataNoImage.map((d, i) => (
          <Card
            key={i}
            className='mb-[20px]'
            title={d.title}
            description={d.description}
            ctaAlignment={d.ctaAlignment}
            actions={d.actions}
          />
        ))}
      </div>
      <h3>Card with Landscape</h3>
      <div className={s.CardContainer}>
        {cardData.dataLandscapeOrientation.map((d, i) => (
          <Card
            key={i}
            className='mb-[20px] mr-5'
            title={d.title}
            description={d.description}
            image={d.image}
            orientation={d.orientation}
            imageWithPadding={d.imageWithPadding}
            actions={d.actions}
          />
        ))}
      </div>
      <h3>Card (Small)</h3>
      <div className={s.CardContainer}>
        {cardData.dataCardSmall.map((d, i) => (
          <Card
            key={i}
            className='mb-[50px]'
            title={d.title}
            description={d.description}
            image={d.image}
            orientation={d.orientation}
            imageWithPadding={d.imageWithPadding}
            size={d.size}
          />
        ))}
      </div>
      <h3>Card (with Map)</h3>
      <div className={s.CardContainer}>
        {cardData.dataWithMap.map((d, i) => (
          <Card key={i} {...d} className='mb-[20px]' />
        ))}
      </div>
    </KitchenSinkLayout>
  );
}
