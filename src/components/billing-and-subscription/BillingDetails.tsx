import Link from 'next/link';
import React from 'react';

import s from './styles.module.scss';

import Avatar from '@/components/Avatar';

type BillingDetailsProps = {
  details: BillingDetails;
};

type BillingDetails = {
  id: number | string;
  avatarSrc: string;
  name: NameProps;
  billingAddress: AddressProps;
  billingEmail: BillingEmailProps;
};

type NameProps = {
  firstName: string;
  lastName: string;
};

type AddressProps = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string | number;
};

type BillingEmailProps = {
  toRecipient: string;
  ccRecipient: string[];
};

export default function BillingDetails({ details }: BillingDetailsProps) {
  return (
    <div className={s.BillingDetailsContainer}>
      <div className={s.billingHeader}>
        <h6> Billing Details </h6>
        <Link href='/account/edit-billing'> Edit Details </Link>
      </div>

      <section className={s.displayDetails}>
        <div className='mb-6 flex flex-row'>
          <Avatar src={details.avatarSrc} />
          <div className='my-auto ml-3'>
            {details.name.firstName}&nbsp;{details.name.lastName}
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <span className={s.header}>Billing Email </span>
            <div className={s.contactContainer}>
              <div className={s.header}> To: </div>
              <div className='-mt-0.5'>{details.billingEmail.toRecipient}</div>
            </div>
            <div className={s.contactContainer}>
              <div className={s.header}> Cc:</div>
              <div className='-mt-0.5'>
                {details.billingEmail.ccRecipient.join('\n')}
              </div>
            </div>
          </div>

          <div>
            <span className={s.header}>Address</span>
            <div>
              {details.billingAddress.address1},&nbsp;
              {details.billingAddress.state}&nbsp;{details.billingAddress.zip}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
