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
  data: number[];
};

const HorizantalBar = ({ data }: Props) => {
  console.log('data', data);

  return (
    <div className={styles.ComponentContainer}>
      <div className={styles.HorizantalBarContainer}>
        {data.length && data.map((d, index: number) => {
          const sum = data.reduce((acc: any, curr: any) => acc + curr, 0);
          const barPercentage = d / sum * 100;

          return <div key={index} className={styles.HorizantalBar}
            style={{
              backgroundColor: `hsl(${barPercentage}, 40%, 50%)`,
              width: `${barPercentage}%`,
            }} />;
        })}
      </div>
    </div>
  );
};

export default HorizantalBar;
