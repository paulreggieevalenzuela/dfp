import { ScriptableContext } from "chart.js";

import s from './page.module.scss';

import Bar from '@/components/Graphs/Bar';
import HorizantalBar from '@/components/Graphs/HorizantalBar';
import Donut from '@/components/Graphs/Donut';
import LineGraph from '@/components/Graphs/LineGraph';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageGraphs() {
  const DonutData = {
    labels: ['Key Item 1', 'Key Item 2', 'Key Item 3'],
    datasets: [
      {
        label: '# of Votes',
        data: [200, 300, 700],
        backgroundColor: [
          '#027AFF',
          '#429AFF',
          '#94C6FF',
        ],
        borderWidth: 0,
      },
    ],
  };

  const DonutData2 = {
    labels: ['Key Item 1', 'Key Item 2', 'Key Item 3', 'Key Item 4'],
    datasets: [
      {
        data: [200, 300, 400, 700],
        backgroundColor: [
          '#004CA3',
          '#027AFF',
          '#429AFF',
          '#94C6FF',
        ],
        borderWidth: 0,
      },
    ],
  };

  const BarData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
    datasets: [
      {
        data: [200, 200, 400, 800, 600, 700,],
        backgroundColor: '#027AFF',
      },
    ],
  };

  const HorizantalBarData = [200, 200, 400, 800, 600, 700];

  const BarData2 = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
    datasets: [
      {
        data: [100, 300, 200, 200, 400, 300],
        backgroundColor: '#8A1445',
      },
      {
        data: [200, 200, 400, 500, 300, 200,],
        backgroundColor: '#027AFF',
      },
    ],
  };

  const lineGraphData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [2, 2, 1, 7, 5, 6, 4],
        borderColor: 'rgba(2, 122, 255, 1)',
        fill: "start",
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(2, 122, 255, 0.2)");
          gradient.addColorStop(1, "rgba(2, 122, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  const lineGraphDataTwoDatasets = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [1, 3, 2, 5, 6, 4, 7],
        borderColor: 'rgba(189, 71, 120, 1)',
        fill: "start",
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(189, 71, 120, 0.2)");
          gradient.addColorStop(1, "rgba(189, 71, 120, 0)");
          return gradient;
        },
      },
      {
        data: [7, 2, 3, 1, 5, 6, 4],
        borderColor: 'rgba(2, 122, 255, 1)',
        fill: "start",
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(2, 122, 255, 0.2)");
          gradient.addColorStop(1, "rgba(2, 122, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title="Graphs" description='Graphs or data visualization components.' />
      <div className={s.ComponentContainer}>
        <HorizantalBar data={HorizantalBarData} />
      </div>
      <div className={s.ComponentContainer}>
        <HorizantalBar data={[1, 2, 3, 4]} />
      </div>
      <div className={s.ComponentContainer}>
        <Bar data={BarData2} />
        <Bar data={BarData} />
      </div>
      <div className={s.ComponentContainer}>
        <Donut data={DonutData} />
        <Donut data={DonutData2} />
      </div>
      <div className={s.ComponentContainer}>
        <LineGraph data={lineGraphData} />
        <LineGraph data={lineGraphDataTwoDatasets} />
      </div>
    </KitchenSinkLayout>
  );
}
