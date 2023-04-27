import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { forwardRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import s from './styles.module.scss';

import Button from '@/components/Button';
import { Input } from '@/components/Input';
import MultiEmail from '@/components/MultiEmail';

type FormDetails = {
  values: FormValues;
};

type FormValues = {
  firstName?: string;
  lastName?: string;
  toRecipient?: string;
  ccRecipient?: string[];
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: number;
};

const InputRef = forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref}>
      <Input {...props} />
    </div>
  );
});

const MultiEmailRef = forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref}>
      <MultiEmail {...props} />
    </div>
  );
});

export default function EditBillingDetails({ values }: FormDetails) {
  const requiredMessage = 'This field is required';

  const validation = yup.object().shape({
    firstName: yup.string().required(requiredMessage),
    lastName: yup.string().required(requiredMessage),
    toRecipient: yup
      .string()
      .email('Enter a valid email')
      .required(requiredMessage),
    address1: yup.string().required(requiredMessage),
    address2: yup.string().required(requiredMessage),
    city: yup.string().required(requiredMessage),
    state: yup.string().required(requiredMessage),
    zip: yup
      .number()
      .typeError('This field is required. Specify a number')
      .required(requiredMessage),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      firstName: values.firstName,
      lastName: values.lastName,
      toRecipient: values.toRecipient,
      ccRecipient: values.ccRecipient,
      address1: values.address1,
      address2: values.address2,
      city: values.city,
      state: values.state,
      zip: values.zip,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <section className={s.EditDetailsContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.actions}>
          <h6> Billing Details </h6>
          <div>
            <Link href='/account/billing-and-subscription' className={s.cancel}>
              <a>Cancel</a>
            </Link>
            <Button style='outline' type='submit'>
              {' '}
              Save{' '}
            </Button>
          </div>
        </div>

        <section>
          <span>Contact</span>
          <div className={s.twoColField}>
            <div>
              <InputRef
                width='w-[466px]'
                label='First Name'
                {...register('firstName')}
                messageType={errors.firstName && 'error'}
                messageText={errors.firstName && errors.firstName.message}
              />
            </div>
            <InputRef
              width='w-[466px]'
              label='Last Name'
              {...register('lastName')}
              messageType={errors.lastName && 'error'}
              messageText={errors.lastName && errors.lastName.message}
            />
          </div>
        </section>

        <section>
          <span>Billing Email</span>
          <div className={s.twoColField}>
            <InputRef
              width='w-[466px]'
              label='Send to:'
              {...register('toRecipient')}
              messageType={errors.toRecipient && 'error'}
              messageText={errors.toRecipient && errors.toRecipient.message}
            />
            <Controller
              control={control}
              name='ccRecipient'
              defaultValue={values.ccRecipient}
              render={({ field }) => (
                <MultiEmailRef
                  {...field}
                  width='w-[466px]'
                  id='ccRecipient'
                  values={values.ccRecipient}
                  setValue={setValue}
                  hint='Emails separated by comma'
                  label='Send to:'
                />
              )}
            />
          </div>
        </section>

        <section>
          <span>Billing Address</span>
          <div className={s.twoColField}>
            <InputRef
              width='w-[466px]'
              label='Address 1'
              {...register('address1')}
              messageType={errors.address1 && 'error'}
              messageText={errors.address1 && errors.address1.message}
            />
            <InputRef
              width='w-[466px]'
              label='Address 2'
              {...register('address2')}
              messageType={errors.address2 && 'error'}
              messageText={errors.address2 && errors.address2.message}
            />
          </div>

          <div className={s.twoColField}>
            <InputRef
              width='w-[309px]'
              label='City'
              {...register('city')}
              messageType={errors.city && 'error'}
              messageText={errors.city && errors.city.message}
            />
            <InputRef
              width='w-[309px]'
              label='State'
              {...register('state')}
              messageType={errors.state && 'error'}
              messageText={errors.state && errors.state.message}
            />
            <InputRef
              width='w-[309px]'
              label='Zip'
              {...register('zip')}
              messageType={errors.zip && 'error'}
              messageText={errors.zip && errors.zip.message}
            />
          </div>
        </section>
      </form>
    </section>
  );
}
