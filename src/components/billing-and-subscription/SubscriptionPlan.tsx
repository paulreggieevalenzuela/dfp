import Link from 'next/link';
import React, { useState } from 'react';
import { useAppSelector } from '@/app/hooks';
import { selectSubscriptionPlan } from '@/features/subscriptionPlanSlice';

import CheckmarkFilled from '@carbon/icons-react/lib/CheckmarkFilled';
import ChevronDown from '@carbon/icons-react/lib/ChevronDown';
import ChevronUp from '@carbon/icons-react/lib/CheckmarkFilled';
import PauseOutline from '@carbon/icons-react/lib/PauseOutline';

import s from './styles.module.scss';

import Alertbar from '@/components/AlertBar';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Elevations from '@/components/Elevations';
import Img from '@/components/Image';
import ProgressBar from '@/components/ProgressBar';

import EllipsisIcon from '~/images/mock/ellipsis.svg';

type SubscriptionPlanProps = {
  details: SubscriptionPlanDetails;
};

type SubscriptionPlanDetails = {
  title: string;
  subTitle: string;
  status: string;
  availableHours: number;
  totalHours: number;
  date: string;
  price: string;
  capabilities: string[];
  informations: string[];
};

export default function SubscriptionPlan({ details }: SubscriptionPlanProps) {
  const [showCapabilities, setCapabilities] = useState<boolean>(false);
  const state = useAppSelector(selectSubscriptionPlan).value;

  const badgeStatus = () => {
    if (state.status === 'paused') return 'warning';
    if (state.status === 'cancelled') return 'error';
    return 'success';
  };

  return (
    <section className={s.SubscriptionPlanWrapper}>
      <article>
        <div className={s.subscriptionPlanHeader}>
          <p className="text-[18px] font-medium text-black">Subscription Plan</p>
          <div className={s.subscriptionPlanCta}>
            <Button style="link" kind="tertiary" widthSizing="hug">
              <PauseOutline />&nbsp;&nbsp;
              Pause Subscription
            </Button>
            <Link href="/account/plans">
              <a className='inline-block p-4 text-blue leading-none'>View Plans</a>
            </Link>
          </div>
        </div>
        {state.status === 'paused' && (
          <Alertbar
            className='mb-5'
            title='You have consumed all hours within your subscription.'
            kind='error'
            subTitle={
              <span>
                Don’t worry! Your team can still continue working on your projects and
                we’ll send an invoice of the extra hours you’ve used. Have questions?{' '}
                <a className="cursor-pointer"> Contact us</a>.
              </span>
            }
          />
        )}
        <Elevations className={s.subscriptionPlan}>
          <div className={s.subscriptionType}>
            <h5>{state.title}</h5>
            <Badge className={s.subscriptionPlanBadge} type={badgeStatus()} label={state.status} size="small" />
          </div>

          <p className={s.hoursTitle}>Available hours:</p>
          <div className={s.subscritionHours}>
            <h5>{state.availableHours} / <span>{state.totalHours} hours</span></h5>
          </div>
          <ProgressBar value={32} max={45} size="sm" isError />

          <div className={s.subscriptionPaymentDetails}>
            <div>
              <label>Next Payment</label>
              <p>{state.date}</p>
            </div>
            <div>
              <label>Price</label>
              <p>$ {state.price} / <span>month</span></p>
            </div>
          </div>
          {showCapabilities && (
            <div className={s.subscriptionInformation}>
              <p className="text-[11px] text-dark-b font-bold">{state.subTitle}</p>

              <ul className={s.planDetails}>
                {details.capabilities.map((d, i) => (<li key={i}>{d}</li>))}
              </ul>
              <hr className={s.subscriptionDivider} />
              <ul className={s.planInformation}>
                {details.informations.map((info, i) => (
                  <li key={i}>
                    <CheckmarkFilled size={20} />
                    <p>{info}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Elevations>
        <div className={s.hideCapabilities}>
          <Button style="link" kind="tertiary" widthSizing="hug" onClick={() => setCapabilities(!showCapabilities)}>
            {showCapabilities ? "Hide" : "Show"} Plan Capabilies &nbsp;&nbsp;
            {showCapabilities ? <ChevronUp /> : <ChevronDown />}

          </Button>
        </div>
      </article>
      <article>
        <div className={s.subscriptionPlanHeader}>
          <p className="text-[18px] text-black">Payment Plan</p>
        </div>
        <Elevations className={s.CreditCardWrapper}>
          <div className={s.creditCard}>
            <Img
              src='/images/mock/mastercard.png'
              alt='Mastercard'
              width={39}
              height={30}
            />
            <EllipsisIcon className={s.ellipsis} />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-black">•••• •••• •••• 4295</p>
            <p className="text-sm text-black">04/29</p>
          </div>
        </Elevations>
      </article>
    </section>
  );
}
