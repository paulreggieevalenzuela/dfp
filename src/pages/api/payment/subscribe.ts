import { NextApiRequest, NextApiResponse } from 'next';

import { getStripeInstance } from '@/lib/stripe/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const stripe = getStripeInstance();

    // Subscribe user
    // Current POC has no way to set default credit card that is why paymentMethod is passed in body
    try {
      const subscription = await stripe.subscriptions.create({
        customer: req.body.customerId,
        items: [
          {
            price: req.body.priceId,
          },
        ],
      });

      return res.status(200).json(subscription);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  return res.status(404);
}
