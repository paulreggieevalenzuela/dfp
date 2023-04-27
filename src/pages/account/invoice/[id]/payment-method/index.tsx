import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import s from './page.module.scss';

import Button from '@/components/Button';
import Img from '@/components/Image';
import AccountTabs from '@/components/account/AccountTabs';
import AccountLayout from '@/components/layouts/AccountLayout';

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  try {
    const id = params?.id;
    // TODO: get current invoice Data on server before loading and store to redux using use next-redux-wrapper
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
        <div className={s.header}>
          <Button style='link' kind='tertiary' widthSizing='hug'>
            <ArrowLeft />
            &nbsp;&nbsp;
            <Link href='/account/billing-and-subscription'>Cancel</Link>
          </Button>
          <Button style='lite'> Add Payment Method </Button>
        </div>

        <div className={s.form}>
          <Img
            src='/images/mock/payment-form/payment-method.jpg'
            width={500}
            height={350}
          />
        </div>
      </AccountTabs>
    </AccountLayout>
  );
}
