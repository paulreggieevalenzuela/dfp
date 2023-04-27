import { NextApiRequest, NextApiResponse } from 'next';

import { getStripeInstance } from '@/lib/stripe/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const stripe = getStripeInstance();

      const customer = await stripe.customers.create({
        name: `${req.body.firstName} ${req.body.lastName}`,
        email: req.body.email,
      });

      // Create a setup intent for the customer
      // Customer ID is hardcoded for this example
      const setupIntent = await stripe.setupIntents.create({
        payment_method_types: ['card'],
        customer: customer.id,
      });

      return res.status(200).json({
        clientSecret: setupIntent.client_secret,
        customerId: customer.id,
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  return res.status(404);
}
