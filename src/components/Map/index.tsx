import { Map as PigeonMap, MapProps as PigeonMapProps } from 'pigeon-maps';

import styles from './Map.module.scss';

interface MapProps {
  className?: string;
  grayscale?: boolean;
  darkMode?: boolean;
  latitude: number;
  longitude: number;
}

const Map = (props: PigeonMapProps & MapProps) => {
  const {
    height = 150,
    width = 187,
    attribution = false,
    mouseEvents = false,
    touchEvents = false,
    grayscale,
    darkMode,
    className = '',
    latitude,
    longitude,
    ...rest
  } = props;

  const finalClassName = [
    styles.Map,
    `${grayscale ? styles.gray : ''}`,
    `${darkMode ? styles.dark : ''}`,
    className,
  ]
    .filter((cls) => cls?.length > 0)
    .join(' ');

  return (
    <div className={finalClassName}>
      <PigeonMap
        height={height}
        width={width}
        center={[latitude, longitude]}
        mouseEvents={mouseEvents}
        touchEvents={touchEvents}
        attribution={attribution}
        {...rest}
      />
    </div>
  );
};

export default Map;
