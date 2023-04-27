import { NextApiRequest, NextApiResponse } from 'next';

import { getStripeInstance } from '@/lib/stripe/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const stripe = getStripeInstance();

      // Set default payment method for the customer
      await stripe.customers.update(req.body.customerId, {
        invoice_settings: {
          default_payment_method: req.body.paymentMethod,
        },
      });

      return res.status(200).end();
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  return res.status(404);
}
