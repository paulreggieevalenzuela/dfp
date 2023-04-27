import clsx from 'clsx';
import { useState } from 'react';

import styles from './Slider.module.scss';

interface SliderProps {
  values: string[] | number[];
  onChange?: (min: string | number, max: string | number) => void;
  className?: string;
  defaultMinIndex?: number;
  defaultMaxIndex?: number;
  showLabel?: boolean;
}

const Slider = ({
  values,
  onChange = () => null,
  className,
  defaultMinIndex,
  defaultMaxIndex,
  showLabel,
}: SliderProps) => {
  const firstindex = 0;
  const lastIndex = values.length - 1;

  const [valuesIndex, setValuesIndex] = useState({
    min: defaultMinIndex ?? firstindex,
    max: defaultMaxIndex ?? lastIndex,
  });

  const handleChangeValues = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newValuesIndex = { ...valuesIndex, [name]: Number(value) };
    setValuesIndex(newValuesIndex);
    onChange(
      Math.min(...Object.values(newValuesIndex)),
      Math.max(...Object.values(newValuesIndex))
    );
  };

  const minValue = Math.min(...Object.values(valuesIndex));
  const maxValue = Math.max(...Object.values(valuesIndex));

  const rangeLeft = (minValue / (values.length - 1)) * 100;
  const rangeRight = (maxValue / (values.length - 1)) * 100;
  const rangeWidth = rangeRight - rangeLeft;

  let label = `${values[minValue]} - ${values[maxValue]}`;

  if (minValue === maxValue) {
    label = values[minValue].toString();
  }

  return (
    <div className={clsx(styles.SliderContainer, className)}>
      <div className={styles.Slider}>
        <input
          name='min'
          type='range'
          step='1'
          min={firstindex}
          max={lastIndex}
          value={valuesIndex.min}
          onChange={handleChangeValues}
        />
        <input
          name='max'
          type='range'
          step='1'
          min={firstindex}
          max={lastIndex}
          value={valuesIndex.max}
          onChange={handleChangeValues}
        />
        <div className={styles.track} />
        <div
          className={styles.range}
          style={{ left: `${rangeLeft}%`, width: `${rangeWidth}%` }}
        />
      </div>
      {showLabel && <div className={styles.label}>{label}</div>}
    </div>
  );
};

export default Slider;
