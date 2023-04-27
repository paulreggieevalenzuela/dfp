import { useEffect, useState } from 'react';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import ProgressBar from '@/components/ProgressBar';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextProgress = progress === 100 ? 0 : progress + 1;
      setProgress(nextProgress);
    }, 50);

    return () => clearInterval(intervalId);
  });

  return (
    <KitchenSinkLayout>
      <TitleBar title='Progress Bar' description='' />

      <div className='m-10 grid w-[300px] grid-rows-4 gap-10'>
        <section className='grid grid-rows-4 gap-5'>
          <ProgressBar value={1} max={4} />
          <ProgressBar value={2} max={4} />
          <ProgressBar value={3} max={4} />
          <ProgressBar value={4} max={4} />
          <ProgressBar value={progress} max={100} />
        </section>
        <section className='grid grid-rows-4 gap-5'>
          <ProgressBar value={1} max={4} displayPercentage />
          <ProgressBar value={2} max={4} displayPercentage />
          <ProgressBar value={3} max={4} displayPercentage />
          <ProgressBar value={4} max={4} displayPercentage />
          <ProgressBar value={progress} max={100} displayPercentage />
        </section>
        <section className='grid grid-rows-4 gap-5'>
          <ProgressBar value={1} max={4} displayValue />
          <ProgressBar value={2} max={4} displayValue />
          <ProgressBar value={3} max={4} displayValue />
          <ProgressBar value={4} max={4} displayValue />
          <ProgressBar value={progress} max={100} displayValue />
        </section>
        <section className='grid grid-rows-4 gap-5'>
          <ProgressBar value={1} max={4} displayPercentage displayValue />
          <ProgressBar value={2} max={4} displayPercentage displayValue />
          <ProgressBar value={3} max={4} displayPercentage displayValue />
          <ProgressBar value={4} max={4} displayPercentage displayValue />
          <ProgressBar
            value={progress}
            max={100}
            displayPercentage
            displayValue
          />
        </section>
      </div>
    </KitchenSinkLayout>
  );
}
