/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';

import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Loading from '@/components/Loading';
import TitleBar from '@/components/TitleBar';

import { SubscriptionProps, useCompanySubscriptionsCompaniesQuery, useCompanySubscriptionsCompanyQuery } from '@/services/subscriptions';
import { useUpdateCompanyTotalHoursMutation } from '@/services/totalHours';
import { useDebounce } from '@/utils/customHooks';

function Page() {
  // TODO: set currentCompanyId to actual company ID based on clientInfo state
  const currentCompanyId = 2;

  const { data, isLoading, isError } = useCompanySubscriptionsCompaniesQuery(null);
  const { data: cData, isLoading: cIsLoading } = useCompanySubscriptionsCompanyQuery(currentCompanyId);
  const [updateCompanyTotalHours, { isLoading: isUpdating, isSuccess }] = useUpdateCompanyTotalHoursMutation();

  const [updateCount, setUpdateCount] = useState(0);
  const [value, setValue] = useState<number>(0);
  const debouncedValue = useDebounce<number>(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      updateCompanyTotalHours({ ...cData, consumed_hours: debouncedValue });
      setUpdateCount(updateCount + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    if (cData) {
      setValue(cData.consumed_hours);
    }
  }, [cData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Mock Client Uers' />
      {(cIsLoading) ?
        <Loading type='inline' />
        :
        <section className='mb-10 flex flex-col gap-2'>
          <h3>Test page for updating mock company subscriptions</h3>
          <hr />
          <div className="card flex flex-col gap-2">
            <span>Current Company ID: {cData.id}</span>
            <span>Current Company Name: {cData.company_name}</span>
            <span>Consumed Hours: {cData.consumed_hours}</span>
            <span>Subscription Name: {cData.subscription_name}</span>
          </div>

          <label>Update consumed hours to: &nbsp;
            <input type="number" value={value} onChange={handleChange} />
          </label>
          <label>Change Subscription to: &nbsp;
            <select name="subscription" id="">
              <option value="a">Full Force</option>å
              <option value="b">Pro Force</option>
              <option value="c">Marketing Force</option>
            </select>
          </label>
          {(isUpdating && (updateCount > 1)) && <span>updating...</span>}
          {(isSuccess && (updateCount > 1)) && <span className='text-green'>sucessfully updated...</span>}
        </section>
      }


      <section>
        <ul className='flex flex-col gap-2'>
          {(isLoading && !data) ?
            <Loading type='inline' /> :
            (data.map((item: SubscriptionProps) =>
              <li key={item.id}>{item.id} : {item.company_name} | {item.subscription_name} | {item.consumed_hours}/{item.subscription_hours}</li>
            ))
          }
        </ul>
        {isError && <h3>an error occured in loading data...</h3>}
      </section>
    </KitchenSinkLayout>
  );
}

export default Page;

