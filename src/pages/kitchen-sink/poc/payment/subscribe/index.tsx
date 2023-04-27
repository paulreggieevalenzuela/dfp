import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

import Button from '@/components/Button';
import Container from '@/components/layouts/Container';

// Hard coded subscriptions, should be fetched from API
const subscriptions = [
  {
    id: 'price_1Lg5VGCWYJ8t9613tE9eJpsc',
    name: 'Marketing Force',
    price: '$1,950.00',
  },
  {
    id: 'price_1Lg5VcCWYJ8t96135iFJh0pe',
    name: 'Pro Force',
    price: '$2,750.00',
  },
  {
    id: 'price_1Lg5VzCWYJ8t9613oVb1YkXc',
    name: 'Full Force',
    price: '$3,450.00',
  },
];

const SuccessPaymentPage = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const customerId = router.query?.customer;
  const subscriptionRef = useRef<{
    id: string;
    name: string;
    price: string;
  } | null>(null);

  const subscribe = (subscription: {
    id: string;
    name: string;
    price: string;
  }) => {
    setLoading(true);
    subscriptionRef.current = subscription;
    fetch('/api/payment/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        customerId,
        priceId: subscription.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to Subscribe');
        } else {
          setSubscribed(true);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };
  return (
    <Container className='mt-10 flex flex-col items-center'>
      <h3 className='mb-5'>Subscribe</h3>
      {!subscribed && (
        <>
          {subscriptions.map((subscription) => (
            <Button
              className='mb-3'
              key={subscription.id}
              onClick={() => subscribe(subscription)}
              disabled={loading}
            >
              {subscription.name} : {subscription.price}
            </Button>
          ))}
        </>
      )}
      {subscribed && (
        <div>
          Subscribed to {subscriptionRef.current?.name}. Check details{' '}
          <a
            href={`https://dashboard.stripe.com/test/customers/${customerId}`}
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            here
          </a>
        </div>
      )}
      {error && (
        <div>
          Failed to subscribe user. Does user have saved payment method?
        </div>
      )}
    </Container>
  );
};

export default SuccessPaymentPage;
