import { NextApiRequest } from 'next';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface DFApiRequest extends NextApiRequest {
  api_access_token?: string;
}

export interface DFUser {
  id?: number;
  first_name: string;
  last_name: string;
  email?: string;
  last_login?: string;
  roles?: { name: string }[];
}

export interface DFSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } & DFUser;
}

export interface DFToken extends JWT {
  user: DFUser;
  access_token?: string;
}
