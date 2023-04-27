import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';

import s from './Signup.module.scss';

import Button from "@/components/Button";
import { InputField } from "@/components/Input/input";

type FormValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: number | string;
  address: string;
  companyName: string;
  companyRole: string;
}

export default function SignupForm() {

  const requiredMessage = 'This field is required';

  const validation = yup.object().shape({
    firstName: yup.string().required(requiredMessage),
    lastName: yup.string().required(requiredMessage),
    email: yup
      .string()
      .email('Enter a valid email')
      .required(requiredMessage),
    phone: yup.number()
      .typeError('Enter a valid phone number'),
    address: yup.string().required(requiredMessage),
    companyName: yup.string().required(requiredMessage),
    companyRole: yup.string().required(requiredMessage),
    password: yup.string()
      .required(requiredMessage)
      .min(8, 'Password is too short. Please enter more than 8 characters')
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validation),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='lg:mb-auto'>
      <div className={s.container}>
        <div className='flex flex-col 2xl:flex-row gap-4 p-3'>
          <InputField
            width='w-[320px]'
            label='First Name'
            {...register('firstName')}
            messageType={errors.firstName && 'error'}
            messageText={errors.firstName && errors.firstName.message}
          />
          <InputField
            width='w-[320px]'
            label='Last Name'
            {...register('lastName')}
            messageType={errors.lastName && 'error'}
            messageText={errors.lastName && errors.lastName.message}
          />
        </div>
        <div className='flex flex-col 2xl:flex-row gap-4 p-3'>
          <InputField
            width='w-[320px]'
            label='Phone Number'
            {...register('phone')}
            messageType={errors.phone && 'error'}
            messageText={errors.phone && errors.phone.message}
          />
          <InputField
            width='w-[320px]'
            label='Address'
            {...register('address')}
            messageType={errors.address && 'error'}
            messageText={errors.address && errors.address.message}
          />
        </div>
        <div className='flex flex-col 2xl:flex-row gap-4 p-3'>
          <InputField
            width='w-[320px]'
            label='Company Name'
            {...register('companyName')}
            messageType={errors.companyName && 'error'}
            messageText={errors.companyName && errors.companyName.message}
          />
          <InputField
            width='w-[320px]'
            label='Company Role'
            {...register('companyRole')}
            messageType={errors.companyRole && 'error'}
            messageText={errors.companyRole && errors.companyRole.message}
          />
        </div>
        <div className='flex flex-col 2xl:flex-row gap-4 p-3'>
          <InputField
            width='w-[320px]'
            label='Email'
            {...register('email')}
            messageType={errors.email && 'error'}
            messageText={errors.email && errors.email.message}
          />
          <InputField
            width='w-[320px]'
            label='Password'
            type='password'
            {...register('password')}
            messageType={errors.password && 'error'}
            messageText={errors.password && errors.password.message}
          />
        </div>
      </div>

      <div className={s.signupBtn}>
        <Button style='outline' type='submit'>
          {' '}
          Sign Up{' '}
        </Button>
      </div>
    </form>
  )
}