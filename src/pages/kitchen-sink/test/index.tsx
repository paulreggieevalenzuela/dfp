/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

import { useAppSelector } from '@/app/hooks';
import { selectInvoice, setInvoiceId, setInvoicePopUpMenu } from '@/features/invoiceSlice';
import { useGetClientInfoMutation } from '@/services/clientInfo';

const InvoiceIdPopUp = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const { invoiceId, invoicePopUpMenu } = useAppSelector(selectInvoice);

  const openInvoiceMenu = () => {
    dispatch(setInvoicePopUpMenu(`menu content for invoice ID ${id} here`));
    dispatch(setInvoiceId(id));
  }
  const closeInvoiceMenu = () => {
    dispatch(setInvoicePopUpMenu(null));
    dispatch(setInvoiceId(null));
  }

  return (
    <>
      {invoiceId !== id ?
        <button onClick={openInvoiceMenu}>Open PopUp for id {id}</button>
        :
        <>
          <span>{invoicePopUpMenu}</span><br />
          <button onClick={closeInvoiceMenu}>Close PopUp for id {id}</button>
        </>
      }
    </>
  )
}


function Page() {
  const [getClientInfo, { isLoading, data, error }] = useGetClientInfoMutation();

  useEffect(() => {
    getClientInfoSets();
  }, []);

  const getClientInfoSets = async () => {
    await getClientInfo(null);
  };

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Mock Client Uers' />

      <section>
        <h3>Test page showing random data from mock API server</h3>
        <hr />

        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (

          <table className='table-auto'>
            <thead>
              <tr>
                <th>id</th>
                <th>first_name+last_name</th>
                <th>email</th>
                <th>company_name</th>
                <th>contact_number</th>
                <th>billing_address</th>
                <th>subscription_type</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any) =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name} {item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.company_name}</td>
                  <td>{item.contact_number}</td>
                  <td>{item.billing_address}</td>
                  <td>{item.subscription_type}</td>
                  <td>
                    <InvoiceIdPopUp id={String(item.id)} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        ) : null}
      </section>
    </KitchenSinkLayout>
  );
}

export default Page;
