import React from 'react';

import Button from '@/components/Button';

import { Provider } from '@/pages/login';

export const LoginDefault = ({ handleChangeProvider }: Provider) => {
  return (
    <>
      <Button
        style='outline'
        onClick={() => handleChangeProvider('credentials')}
      >
        Sign in with email instead
      </Button>
    </>
  );
};

export default LoginDefault;
