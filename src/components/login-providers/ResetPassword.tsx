import { ArrowRight } from '@carbon/icons-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import s from './reset-password.module.scss';

import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { InputField } from '@/components/Input/input';

type FormValues = {
  password: string;
  passwordConfirmation: string;
};

export const ResetPassword = () => {
  const router = useRouter();

  const [showDiv, setDiv] = useState('email');

  const requiredMessage = 'This field is required';

  const validation = yup.object().shape({
    password: yup
      .string()
      .required(requiredMessage)
      .min(8, 'Password is too short. Please enter more than 8 characters'),
    passwordConfirmation: yup
      .string()
      .required(requiredMessage)
      .min(8, 'Password is too short. Please enter more than 8 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validation),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('password::', data);
    console.log(
      'passwords match?',
      data.password === data.passwordConfirmation
    );
  };

  return (
    <div>
      {showDiv == 'email' ? (
        <div>
          <p className='mt-3 text-center'>
            {' '}
            In order to reset your password, a verification code will be sent to
            this email address:{' '}
            <span className='font-bold'>{router.query.email}</span>
          </p>
          <div className='mt-5 flex justify-center'>
            <Button style='outline' onClick={() => setDiv('verification-code')}>
              Send Verification Code &nbsp;
              <ArrowRight />
            </Button>
          </div>
        </div>
      ) : showDiv == 'verification-code' ? (
        <div className={s.inputs}>
          <Input
            label='Enter verification code'
            width='w-full'
            value={Math.random().toString(36).substring(2)}
          />
          <div className='mt-3 flex justify-end'>
            <Button style='outline' onClick={() => setDiv('new-password')}>
              Verify &nbsp;
              <ArrowRight />
            </Button>
          </div>
        </div>
      ) : (
        <div className={s.inputs}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className='mb-2'>
              {' '}
              Your account:{' '}
              <span className='font-bold'>{router.query.email}</span>
            </p>
            <InputField
              label='Enter new password'
              width='w-full'
              type='password'
              {...register('password')}
              messageType={errors.password && 'error'}
              messageText={errors.password && errors.password.message}
            />
            <br />
            <InputField
              label='Re-enter new password'
              width='w-full'
              type='password'
              {...register('passwordConfirmation')}
              messageType={errors.passwordConfirmation && 'error'}
              messageText={
                errors.passwordConfirmation &&
                errors.passwordConfirmation.message
              }
            />
            <div className='mt-3 flex justify-end'>
              <Button style='filled' type='submit'>
                Confirm
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
