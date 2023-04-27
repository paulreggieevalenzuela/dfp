import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import React, { useEffect } from 'react';

export const LoginWithGoogle = () => {
  const { query, push } = useRouter();

  const { token } = query;

  useEffect(() => {
    if (token) {
      (async () => {
        const res = await signIn('df-google', {
          token,
          redirect: false,
        });

        if (res?.ok) {
          push('/login');
        }
      })();
    }
  }, [token, push]);

  return <div className='m-auto text-center my-[40vh]'>Please Wait</div>;
};

export default LoginWithGoogle;
