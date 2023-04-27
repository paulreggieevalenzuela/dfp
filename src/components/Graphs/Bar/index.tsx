import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import styles from './Bar.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type DatasetProps = {
  data: number[];
  backgroundColor: string;
};

type Props = {
  data: {
    labels: string[];
    datasets: DatasetProps[];
  };
  options?: React.ReactNode | any;
};

const BarGraph = ({ data, options }: Props) => {
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    ...options,
  };

  return (
    <div className={styles.ComponentContainer}>
      <Bar options={defaultOptions} data={data} />
    </div>
  );
};

export default BarGraph;
