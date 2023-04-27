import Stripe from 'stripe';

let stripeInstance: Stripe | null = null;

export const getStripeInstance = () => {
  if (stripeInstance === null) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2022-08-01',
    });
  }
  return stripeInstance;
};
