import { GetServerSideProps } from 'next';

import s from './page.module.scss';

import AccountTabs from '@/components/account/AccountTabs';
import AccountLayout from '@/components/layouts/AccountLayout';

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  try {
    const id = params?.id;
    // TODO: get current invoice Data on server before loading and store to redux using use next-redux-wrapper
    // const invoiceData = ....
    // By returning { props: invoiceData }, the InvoicePage component
    // will receive `invoiceData` as a prop at build time
    return { props: { id } };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

type Props = {
  id: number;
};

export default function InvoicePage({ id }: Props) {
  return (
    <AccountLayout className={s.Page}>
      <AccountTabs index={1}>
        <></>
      </AccountTabs>
    </AccountLayout>
  );
}
