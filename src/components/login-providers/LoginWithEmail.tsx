import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React, { FormEventHandler, useState } from 'react';

import s from './login-providers.module.scss';

import Button from '@/components/Button';

type Props = {
  isExpanded: boolean;
};

export const LoginWithEmail = ({ isExpanded = false }: Props) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    }
  };

  return (
    <form
      className={`${s.LoginWithEmail} ${isExpanded ? s.expanded : ''}`}
      onSubmit={handleSubmit}
    >
      <span className='or'>or</span>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          required
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          placeholder='Email'
        />
      </div>
      {userInfo.email && (
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            placeholder='Password'
          />
        </div>
      )}
      {error && userInfo.email && <span className='error'>{error}</span>}
      {userInfo.email && (
        <Link
          href={{
            pathname: '/reset-password',
            query: { email: userInfo.email },
          }}
        >
          <a className='forgot'>Forgot Password?</a>
        </Link>
      )}
      <Button style='outline' type='submit'>
        <span>Sign in</span>
      </Button>
    </form>
  );
};

export default LoginWithEmail;
