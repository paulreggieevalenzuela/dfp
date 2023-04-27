import clsx from 'clsx';

import s from './Card.module.scss';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Elevations from '@/components/Elevations';
import Map from '@/components/Map';

type ImageProps = {
  src: string;
  alt?: string;
};

type MapProps = {
  latitude: number;
  longitude: number;
  height: number;
  width: number;
};

type Props = {
  className?: string;
  dp?: string;
  image?: ImageProps;
  map?: MapProps;
  title?: string;
  description?: string;
  actions?: any[];
  avatars?: ImageProps[];
  avatar?: ImageProps;
  imageWithPadding?: boolean;
  alignment?: 'left' | 'right' | 'center' | string;
  ctaAlignment?: 'left' | 'right' | string;
  size?: 'sm' | 'lg' | string;
  orientation?: 'landscape' | 'portrait' | string;
  miniTitle?: boolean;
  largeDescription?: boolean;
};

export default function Card({
  className,
  image,
  map,
  title,
  description,
  actions = [],
  avatars = [],
  imageWithPadding = false,
  orientation,
  size,
  ctaAlignment,
  avatar,
  miniTitle = false,
  largeDescription = false,
}: Props) {
  const cardStyle = clsx(
    'rounded-[8px]',
    s.Card,
    className,
    orientation === 'landscape' && s.CardLandscape,
    size === 'sm' && s.CardSmall,
    avatar && s.CardHasAvatar,
    avatar && (image || map) && s.CardHasImageWithAvatar
  );

  const imageStyle = clsx(
    s.CardImage,
    imageWithPadding && s.CardImageWithPadding,
    imageWithPadding && orientation === 'landscape' && s.CardImageLandscape,
    size === 'sm' && orientation === 'landscape' && s.CardSmallImageLandscape,
    imageWithPadding &&
      size === 'sm' &&
      orientation === 'landscape' &&
      s.CardSmallImageLandscapeWithPadding,
    avatar && image && s.CardImageWithAvatar
  );

  const mapStyle = clsx(s.CardMap, imageWithPadding && s.CardMapWithPadding);

  const mediaContainerStyle = clsx(
    s.MediaContainer,
    avatar && (image || map) && s.MediaImageWithAvatar
  );

  const ctaStyle = clsx(
    s.CardCta,
    ctaAlignment === 'left' && s.CtaAlignmentLeft,
    orientation === 'landscape' && s.CardCtaLandcape
  );

  return (
    <Elevations className={cardStyle} dp='03'>
      <div className={mediaContainerStyle}>
        {image && (
          <div className={imageStyle}>
            <img {...image} />
          </div>
        )}
        {map && (
          <div className={mapStyle}>
            <Map {...map} />
          </div>
        )}
        {avatar && (
          <div className='mt-4'>
            <Avatar {...avatar} size='medium' />
          </div>
        )}
      </div>
      <article className='card__content'>
        {title && (
          <div
            className={
              largeDescription
                ? 'card__desc__large'
                : image || avatar || map
                ? 'card__desc__img'
                : 'card__desc__no__img'
            }
          >
            <h6 className={miniTitle ? 'card__mini__title' : 'card__title'}>
              {title}
            </h6>
            <p className={clsx(size == 'sm' && 'small')}>{description}</p>
          </div>
        )}
        {actions.length ? (
          <div className={ctaStyle}>
            {actions?.map((cta, i) => (
              <Button key={i} {...cta}>
                {cta.label}
              </Button>
            ))}
          </div>
        ) : null}
        {avatars.length ? (
          <div className={map ? 'card__map__avatars' : 'card__avatars'}>
            {avatars.map((d, i) => (
              <Avatar key={i} src={d.src} />
            ))}
          </div>
        ) : null}
      </article>
    </Elevations>
  );
}
