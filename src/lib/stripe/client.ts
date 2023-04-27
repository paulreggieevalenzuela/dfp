import {loadStripe, Stripe} from '@stripe/stripe-js';

let stripePromise: null | Promise<Stripe | null> = null;

export const getStripePromise = (publicKey: string) => {
  if (stripePromise === null) {
    stripePromise = loadStripe(publicKey);
  }
  return stripePromise
}
  