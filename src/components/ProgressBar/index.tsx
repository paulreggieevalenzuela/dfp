import clsx from 'clsx';

import styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  displayPercentage?: boolean;
  displayValue?: boolean;
  value: number;
  max: number;
  isError?: boolean;
  size?: 'sm' | 'lg';
};

const ProgressBar = ({
  value,
  max,
  displayPercentage,
  displayValue,
  size,
  isError,
}: ProgressBarProps) => {
  const percentageValue = Math.round((value / max) * 100);
  const trackStyle = clsx('track', {
    small: size === 'sm',
  });

  return (
    <div className={styles.ProgressBar}>
      <div className={trackStyle}>
        <div
          style={{ width: `${percentageValue}%` }}
          className={clsx('bar', {
            small: size === 'sm',
            error: isError || percentageValue <= 25,
            warning: percentageValue > 25 && percentageValue <= 50,
            success: !isError && percentageValue > 50,
          })}
        />
      </div>
      {(displayPercentage || displayValue) && (
        <div className='progress-values'>
          {displayPercentage && (
            <span className='progress-percentage'>{percentageValue}%</span>
          )}
          {displayValue && (
            <span className='progress-value'>
              {value}/{max}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
