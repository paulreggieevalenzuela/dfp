import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripeElements } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { getStripePromise } from '@/lib/stripe/client';

import Button from '@/components/Button';
import Container from '@/components/layouts/Container';

interface PaymentPageProps {
  stripe: StripeProps;
}

interface StripeProps {
  publicKey: string;
}

const PaymentSteps = {
  INITIAL: 'INITIAL',
  ENTER_DETAILS: 'ENTER_DETAILS',
  DONE: 'DONE',
};

const CheckoutForm = ({ data }: { data: any | null }) => {
  const elements = useElements();
  const stripe = useStripe();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const finalizePayment = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    stripe
      ?.confirmSetup({
        elements: elements as StripeElements,
        redirect: 'if_required',
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: `${data.firstName} ${data.lastName}`,
              email: data.email,
            },
          },
        },
      })
      .then(({ setupIntent }) => {
        fetch('/api/payment/set-default', {
          method: 'POST',
          body: JSON.stringify({
            paymentMethod: setupIntent?.payment_method,
            customerId: data.customerId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          if (response.status !== 200) {
            throw new Error('Failed to set default payment method');
          }
          router.push(`/poc/payment/subscribe?customer=${data.customerId}`);
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={finalizePayment}>
      <hr />
      <PaymentElement />
      <Button className='mt-2' type='submit' disabled={loading}>
        Submit
      </Button>
    </form>
  );
};

const PaymentPage = ({ stripe: { publicKey } }: PaymentPageProps) => {
  const stripePromise = getStripePromise(publicKey);
  const [paymentStep, setPaymentStep] = useState<{ step: string; data: any }>({
    step: PaymentSteps.INITIAL,
    data: null,
  });

  const setupPayment = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    fetch('/api/payment/initialize', {
      method: 'POST',
      body: JSON.stringify({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setPaymentStep({
          step: PaymentSteps.ENTER_DETAILS,
          data: {
            ...data,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
          },
        })
      );
  };

  return (
    <Container className='mt-10 flex flex-col items-center'>
      <h3 className='mb-2'>Payment</h3>
      <div className='mb-5'>
        This process will take you from creating a customer to subscription
      </div>
      <div>
        {paymentStep.step === PaymentSteps.INITIAL && (
          <form onSubmit={setupPayment} className="flex flex-col gap-2">
            <input
              id='firstName'
              name='firstName'
              placeholder='Enter first name'
              required
            />
            <input
              id='lastName'
              name='lastName'
              placeholder='Enter last name'
              required
            />
            <input
              id='email'
              name='email'
              placeholder='Enter email address'
              required
            />
            <Button type='submit' className='mt-3'>
              Setup Payment
            </Button>
          </form>
        )}
        {paymentStep.step === PaymentSteps.ENTER_DETAILS && (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret: paymentStep.data?.clientSecret }}
          >
            <CheckoutForm data={paymentStep.data} />
          </Elements>
        )}
      </div>
    </Container>
  );
};

export default PaymentPage;

export async function getServerSideProps() {
  return {
    props: {
      stripe: {
        publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
      },
    }, // will be passed to the page component as props
  };
}
