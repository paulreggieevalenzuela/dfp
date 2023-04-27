import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import styles from './LineGraph.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


type DatasetProps = {
  data: number[];
  backgroundColor: any;
}

type Props = {
  data: {
    labels: string[],
    datasets: DatasetProps[];
  };
  options?: React.ReactNode | any;
}

const LineGraph = ({
  data,
  options
}: Props) => {
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
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
      <Line options={defaultOptions} data={data} />
    </div>
  );
};

export default LineGraph;
