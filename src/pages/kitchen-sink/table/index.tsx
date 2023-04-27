import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft';
import ArrowRight from '@carbon/icons-react/lib/ArrowRight';
import clsx from 'clsx';

import s from './page.module.scss';

import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import ComboButton from '@/components/Button/ComboButton';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Table from '@/components/Table';
import TitleBar from '@/components/TitleBar';

import {
  dataHasCheckboxAndIcon,
  dataHasIcon,
  dataWithTypeNumbers,
  defaultData,
  employeeDefinitions,
  stockDefition,
  tableHeaders,
  tableHeadersWithBadge,
  tableHeadersWithIcon,
  tableHeaderWithCheckbox,
  tableHeaderWithNumber,
  tableInvoiceDefinitions,
  tableProductsDefinitions,
  weighingDefinition,
} from '@/constants/tableConstants';

import mockData from './table-mock.json';

export default function PageTable() {
  const dataWithBadge = [
    {
      status: <Badge label='Badge text' type='secondary' size='small' />,
    },
    {
      status: <Badge label='Badge text' type='secondary' size='small' />,
    },
    {
      status: <Badge label='Badge text' type='secondary' size='small' />,
    },
    {
      status: <Badge label='Badge text' type='secondary' size='small' />,
    },
    {
      status: <Badge label='Badge text' type='secondary' size='small' />,
    },
  ];

  const invoiceDataWithBadge = mockData.invoiceData.map((d: any) => ({
    ...d,
    status:
      d.status === 'paid' ? (
        <Badge label='Paid' type='success' />
      ) : (
        <Badge label='Sent' type='warning' />
      ),
  }));

  const productsDataWithStatus = mockData.productsData.map((d: any) => ({
    ...d,
    status:
      d.status === 'instock' ? (
        <div className={s.statusCell}>
          <span className='--instock' />
          {d.status}
        </div>
      ) : d.status === 'low' ? (
        <div className={s.statusCell}>
          <span className='--low' />
          {d.status}
        </div>
      ) : (
        <div className={s.statusCell}>
          <span className='--out-of-stock' />
          {d.status}
        </div>
      ),
  }));

  const updatedEmployeeData = mockData.employeeData.map((d: any) => ({
    ...d,
    employee: (
      <div className='flex items-center'>
        <Avatar src='/images/mock/profile3.png' size='xxsmall' />
        <div className='ml-2'>
          <p className='font-bold'>{d.fullName}</p>
          <p className='text-sm '>{d.email}</p>
        </div>
      </div>
    ),
    lastLogin: (
      <div>
        <p className='text-[12px]'>{d.loginDate}</p>
        <p className='font-[350] text-gray-200'>{d.loginDateCount}</p>
      </div>
    ),
    status:
      d.status === 'active' ? (
        <div className={clsx(s.statusCell)}>
          <p className='--active font-bold text-green'>{d.status}</p>
        </div>
      ) : (
        <div className={clsx(s.statusCell)}>
          <p className='--in-active font-bold text-red-700'>{d.status}</p>
        </div>
      ),
  }));

  const updatedStockData = mockData.stockData.map((d: any) => ({
    ...d,
    name: (
      <div>
        <p className='text-[14px] font-normal'>{d.name}</p>
        <p className='text-[14px] font-normal'>{d.symbol}</p>
      </div>
    ),
    percentageChange: d.percentageChange.includes('+') ? (
      <div className={clsx(s.statusCell)}>
        <p className='--active font-bold text-green'>{d.percentageChange}</p>
      </div>
    ) : (
      <div className={clsx(s.statusCell)}>
        <p className='--in-active font-bold text-red-700'>
          {d.percentageChange}
        </p>
      </div>
    ),
  }));

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Data Tables'
        description='Tables display data and other information in a way that is easy to scan.'
      />
      <div className={s.ComponentContainer}>
        <Table
          minWidth
          data={defaultData}
          colDefs={tableHeaders}
          rowHeight='relaxed'
        />
        <Table
          minWidth
          data={defaultData}
          colDefs={tableHeaders}
          rowHeight='regular'
        />
        <Table
          minWidth
          data={defaultData}
          colDefs={tableHeaders}
          rowHeight='condensed'
        />
      </div>
      <div className={s.ComponentContainer}>
        <div className='mr-[10px]'>
          <h6 className='mt-[40px] mb-[20px]'>Left Icon/Checkbox</h6>
          <Table
            data={defaultData}
            colDefs={tableHeaderWithCheckbox}
            rowHeight='relaxed'
          />
        </div>
        <div className='mr-[10px]'>
          <h6 className='mt-[40px] mb-[20px]'>Right Icon</h6>
          <Table
            data={dataHasIcon}
            colDefs={tableHeaders.slice(0, 1)}
            rowHeight='relaxed'
          />
        </div>
        <div className='mr-[10px]'>
          <h6 className='mt-[40px] mb-[20px]'>Number</h6>
          <Table
            data={dataWithTypeNumbers}
            colDefs={tableHeaderWithNumber}
            rowHeight='relaxed'
          />
        </div>
        <div className='mr-[10px]'>
          <h6 className='mt-[40px] mb-[20px]'>Double Icon</h6>
          <Table
            data={dataHasCheckboxAndIcon}
            colDefs={tableHeaderWithCheckbox}
            rowHeight='relaxed'
          />
        </div>
        <div className='mr-[10px]'>
          <h6 className='mt-[40px] mb-[20px]'>Badge</h6>
          <Table
            data={dataWithBadge}
            colDefs={tableHeadersWithBadge}
            rowHeight='relaxed'
          />
        </div>
        <div className='mr-[10px]'>
          <h6 className='mt-[40px] mb-[20px]'>Sort: Default</h6>
          <Table
            data={defaultData}
            colDefs={tableHeadersWithIcon}
            rowHeight='relaxed'
          />
        </div>
        <div>
          <h6 className='mt-[40px] mb-[20px]'>Sort: Active</h6>
          <Table
            data={defaultData}
            colDefs={tableHeadersWithIcon}
            rowHeight='relaxed'
          />
        </div>
      </div>
      <div className={s.ComponentContainer}>
        <Table
          className='mt-[30px]'
          hasBorder
          fullWidth
          paginationType={1}
          data={invoiceDataWithBadge}
          colDefs={tableInvoiceDefinitions}
          rowHeight='relaxed'
          title='Invoices'
          customAction={
            <ComboButton
              size='sm'
              kind='primary'
              widthSizing='hug'
              iconelement={<ArrowRight />}
            >
              Actions
            </ComboButton>
          }
        />
      </div>
      <div className={s.ComponentContainer}>
        <Table
          hasBorder
          fullWidth
          className='mt-[30px]'
          rowTypeStyle='alternate'
          paginationType={2}
          data={productsDataWithStatus}
          colDefs={tableProductsDefinitions}
          rowHeight='relaxed'
          title='Products'
          customAction={
            <Button style='outline' size='sm' kind='tertiary' widthSizing='hug'>
              <ArrowLeft />
              &nbsp;&nbsp; Filter
            </Button>
          }
        />
      </div>
      <div className={s.ComponentContainer}>
        <Table
          className='mt-[30px]'
          width='800'
          hasBorder
          data={updatedEmployeeData}
          colDefs={employeeDefinitions}
          rowHeight='relaxed'
        />
      </div>
      <div className={s.ComponentContainer}>
        <Table
          className='mt-[30px]'
          width='800'
          hasBorder
          hasFullBorder
          headerStyle='plain'
          minWidth
          data={updatedStockData}
          colDefs={stockDefition}
          rowHeight='relaxed'
        />
      </div>
      <div className={s.ComponentContainer}>
        <Table
          className='mt-[30px]'
          width='400'
          hasBorder
          minWidth
          data={mockData.weightData}
          colDefs={weighingDefinition}
          rowHeight='relaxed'
        />
      </div>
    </KitchenSinkLayout>
  );
}
