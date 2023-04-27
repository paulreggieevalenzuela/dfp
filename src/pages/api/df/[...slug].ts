import { createProxyMiddleware } from 'http-proxy-middleware';
import type { NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { DFApiRequest, DFToken } from '@/types/api';

const proxyMiddleware = createProxyMiddleware({
  target: process.env.API_URL,
  secure: false,
  pathRewrite: { '^/api/df': '' },
  onProxyReq: (proxyReq, req) => {
    const { api_access_token } = req as {
      api_access_token: string;
    };

    if (api_access_token) {
      proxyReq.setHeader('Authorization', `Bearer ${api_access_token}`);
    }
    proxyReq.setHeader('X-Forwarded-Prefix', '/api/df');
  },
}) as (
  req: DFApiRequest,
  res: NextApiResponse,
  resultCallback: (result: unknown) => void
) => void;

export default async function handler(req: DFApiRequest, res: NextApiResponse) {
  const token = (await getToken({
    req,
    secret: process.env.JWT_SECRET,
  })) as DFToken;

  req.api_access_token = token?.access_token;

  proxyMiddleware(req, res, (result: unknown) => {
    if (result instanceof Error) {
      throw result;
    }
  });
}

export const config = {
  api: { externalResolver: true, bodyParser: false },
};
