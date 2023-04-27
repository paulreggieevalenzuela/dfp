import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './Donut.module.scss';

ChartJS.register(ArcElement, Tooltip);

type DatasetProps = {
  data: number[];
  backgroundColor: string[];
  borderWidth: number;
};

type Props = {
  data: {
    labels: string[];
    datasets: DatasetProps[];
  };
  options?: React.ReactNode | any;
};

const Donut = ({ data, options }: Props) => {
  const defaultOptions = {
    cutout: '70%',
    spacing: 3,
    plugins: {
      legend: {
        display: false,
      },
    },
    ...options,
  };

  return (
    <div className={styles.ComponentContainer}>
      <div className={styles.DonutContainer}>
        <Doughnut data={data} options={defaultOptions} />
      </div>
      {data.labels.length && (
        <ul className={styles.legendContainer}>
          {data.labels.map((d, i) => (
            <li key={i}>
              <span
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              />
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Donut;
