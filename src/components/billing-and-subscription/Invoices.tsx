
import { useRouter } from 'next/router';

import s from './styles.module.scss';

import Badge from '@/components/Badge';
import Table from '@/components/Table';

import data from './invoices.json';

export default function Invoices() {

  const router = useRouter();

  const onItemClick = (action: string, rowData: any) => {
    let url = '';
    if (action == "Pay invoices") {
      if (rowData.payment_method == 'unset') {
        url = `/account/invoice/${rowData.invoice_number.props.children}/payment-method`;
      } else {
        url = `/account/invoice/${rowData.invoice_number.props.children}/pay-with-card`;
      }
    } else {
      url = `/account/invoice/${rowData.invoice_number.props.children}/export`
    }
    return url;
  }

  const customData = data.data.map((values: any) => ({
    ...values,
    due: <span className='text-gray-400'>{values.due}</span>,
    created: <span className='text-gray-400'>{values.created}</span>,
    invoice_number: <span className='flex'>{values.invoice_number}</span>,
    amount: (
      <div className='my-auto flex gap-8 text-gray-400'>
        <div className='my-auto'>{values.amount}</div>
        <div className='my-auto'>{values.currency}</div>
        <div>
          <Badge
            label={values.status}
            type='neutral'
            className='h-[26px] w-[82px] justify-center'
          />
        </div>
      </div>
    ),
  }));

  const Title = () => {
    return <h6> Invoices </h6>;
  };

  return (
    <div className={s.InvoicesContainer}>
      <Table
        className={s.tableStyles}
        fullWidth
        paginationType={1}
        data={customData}
        colDefs={data.columns}
        rowHeight='relaxed'
        headerStyle='plain'
        headerCustomStyle={s.customHeader}
        title={<Title />}
        width='1000'
        extraRowActions={data.rowActions}
        actionRowClick={onItemClick}
      />
    </div>
  );
}
