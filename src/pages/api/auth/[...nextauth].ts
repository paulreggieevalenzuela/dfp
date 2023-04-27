import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { DFSession, DFToken } from '@/types/api';

const env = process.env.NODE_ENV;
let secretKey = process.env.JWT_SECRET;
if (env == 'production') {
  secretKey = process.env.SECRET;
}

export default NextAuth({
  // session: {
  //   strategy: 'jwt',
  // },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const response = await fetch(
            `${process.env.API_URL}/public/auth/sign-in`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

          const user = await response.json();

          if (response.ok && user) {
            const {
              user_data: { ...userData },
              user_data: _,
              access_token,
            } = user;

            // TODO: clear these logs after assigning page restrictions to all roles
            console.log('user_data: ', userData);
            console.log('access_token: ', access_token);

            return {
              ...userData,
              access_token,
            };
          }

          return null;
        } catch (e) {
          // console.log('caught error');
          // const errorMessage = e.response.data.message
          // Redirecting to the login page with error message          in the URL
          // throw new Error(errorMessage + '&email=' + credentials.email)
          throw new Error('Invalid credentials');
          // return null;
        }
      },
    }),
    CredentialsProvider({
      id: 'df-google',
      name: 'Google Token',
      credentials: {},
      async authorize(credentials) {
        const { token } = credentials as {
          token: string;
        };

        try {
          const response = await fetch(`${process.env.API_URL}/users/me`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          const userData = await response.json();

          // TODO: clear these logs after assigning page restrictions to all roles
          console.log('G user_data: ', userData);
          console.log('G access_token: ', token);

          if (response.ok && userData) {
            return {
              ...userData,
              access_token: token,
            };
          }

          return null;
        } catch (e) {
          // console.log('caught error');
          // const errorMessage = e.response.data.message
          // Redirecting to the login page with error message          in the URL
          // throw new Error(errorMessage + '&email=' + credentials.email)
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: secretKey,
  debug: true,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const { access_token, image_url, ...userData } = user;

        token.access_token = access_token;
        token.picture = (image_url as string) ?? undefined;
        token = { ...token, user: userData };
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      const {
        user,
        user: { first_name, last_name },
      } = token as DFToken;

      const mergedSession: DFSession = {
        ...session,
        user: {
          ...user,
          name: `${first_name ?? ''} ${last_name ?? ''}`.trim(),
        },
      };

      return Promise.resolve(mergedSession);
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
});
