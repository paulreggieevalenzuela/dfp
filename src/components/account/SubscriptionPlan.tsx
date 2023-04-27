import Link from 'next/link';

import s from './styles.module.scss';

import Badge from '@/components/Badge';
import Elevations from '@/components/Elevations';
import ProgressBar from '@/components/ProgressBar';

import { useAppSelector } from '@/app/hooks';
import { selectSubscriptionPlan } from '@/features/subscriptionPlanSlice';

type SubscriptionPlanProps = {
  details: SubscriptionPlanDetails;
};

type SubscriptionPlanDetails = {
  title: string;
  status: string;
  availableHours: number;
  totalHours: number;
  date: string;
  price: string;
};

export default function SubscriptionPlan({ details }: SubscriptionPlanProps) {
  const subState = useAppSelector(selectSubscriptionPlan).value;

  return (
    <Elevations className={s.SubscriptionPlan}>
      <div className={s.subscriptionType}>
        <h5>{details.title}</h5>
        <Badge className={s.subscriptionPlanBadge} type="success" label={details.status} size="small" />
      </div>

      <p className={s.hoursTitle}>Available hours:</p>
      <div className={s.subscritionHours}>
        <h5>{subState.availableHours} / <span>{subState.totalHours} hours</span></h5>
      </div>
      <ProgressBar value={32} max={45} size="sm" isError />

      <div className={s.subscriptionPaymentDetails}>
        <div>
          <label>Next Payment</label>
          <p>{details.date}</p>
        </div>
      </div>

      <div className={s.manageSubscription}>
        <Link href='/account/edit-billing'> Manage Subscription </Link>
      </div>
    </Elevations>
  );
}
