
import s from './page.module.scss';

import DatePicker from '@/components/DatePicker';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

import mockData from './mock-data.json';

export default function Page() {
  const sampleDates = mockData.highLightedDates.map((dateString) => {
    const dateObject = new Date(dateString);
    return dateObject;
  }
  );

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Date Picker' description='' />

      <div className='grid auto-cols-max grid-flow-col gap-8 '>
        <div className='col'>
          <h5>Default</h5>
          <div>
            <DatePicker label='Calendar pops up on focus' />
            <DatePicker
              label='No Text Field'
              noTextField
              highlightDates={sampleDates}
            />
          </div>
        </div>
        <div className='col'>
          <h5>With Calendar </h5>
          <div>
            <DatePicker open />
            <DatePicker open highlightDates={sampleDates} />
          </div>
        </div>
        <div className='col'>
          <h5>Selected</h5>
          <div>
            <DatePicker selected={new Date('June 8, 2022')} open />
            <DatePicker
              selected={new Date('June 8, 2022')}
              open
              highlightDates={sampleDates}
            />
          </div>
        </div>
        <div className='col'>
          <h5>Multi-select</h5>
          <div>
            <DatePicker isRange open />
            <DatePicker isRange open highlightDates={sampleDates} />
          </div>
        </div>
      </div>
    </KitchenSinkLayout>
  );
}
