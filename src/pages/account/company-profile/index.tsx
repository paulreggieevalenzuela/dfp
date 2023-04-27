import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import s from './page.module.scss';

import AccountTabs from '@/components/account/AccountTabs';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import { Input } from '@/components/Input';
import AccountLayout from '@/components/layouts/AccountLayout';

import data from './company-profile.json';

type FormValues = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

const InputRef = forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref}>
      <Input {...props} />
    </div>
  );
});

export default function CompanyProfile() {
  const requiredMessage = 'This field is required';
  const [isEditing, setEditing] = useState(false);

  const values = data.companyProfile;

  const validation = yup.object().shape({
    firstName: yup.string().required(requiredMessage),
    lastName: yup.string().required(requiredMessage),
    email: yup
      .string()
      .email('Enter a valid email')
      .required(requiredMessage),
    phone: yup.string().required(requiredMessage),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('submit data', data);
    setEditing(false);
  };

  return (
    <AccountLayout>
      <AccountTabs index={0}>
        <div className={s.Page}>
          <div className="w-[120px] h-[120px] z-0">
            <Avatar
              src='/images/mock/company-logo.png'
              alt='Company'
              size='medium'
            />
          </div>
          <div className={s.companyInfo}>
            <h3 className={s.companyTitle}>Company Information</h3>
            <div className={s.formGroup}>
              <div className={s.formContainer}>
                <label>Company Name
                  {isEditing && (
                    <span>
                      To rename your account,
                      <Button className={s.contactUs} style="link" size="sm" kind='primary' widthSizing='hug'>
                        contact us.
                      </Button>
                    </span>
                  )}
                </label>
                <p className={s.formText}>
                  Play Solutions®
                </p>
              </div>
            </div>

            <div className="flex justify-between item-center mt-[40px] mb-[30px]">
              <h3 className="text-[18px] font-light leading-[18px] flex items-center">Contact</h3>
              {!isEditing && (
                <Button style="link" size="lg" kind='primary' widthSizing='hug' onClick={() => setEditing(true)}>
                  Edit Details
                </Button>
              )}

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={s.formGroup}>
                {isEditing ? (
                  <>
                    <InputRef
                      width='w-[400px]'
                      label='First Name'
                      {...register('firstName')}
                      messageType={errors.firstName && 'error'}
                      messageText={errors.firstName && errors.firstName.message}
                    />
                    <InputRef
                      width='w-[400px]'
                      label='Last Name'
                      {...register('lastName')}
                      messageType={errors.lastName && 'error'}
                      messageText={errors.lastName && errors.lastName.message}
                    />
                  </>
                ) : (
                    <>
                      <div className={s.formContainer}>
                        <label>First Name</label>
                        <p className={s.formText}>
                          {values.firstName}
                        </p>
                      </div>
                      <div className={s.formContainer}>
                        <label>Last Name</label>
                        <p className={s.formText}>
                          {values.lastName}
                        </p>
                      </div>
                    </>
                  )}
              </div>

              <div className={s.formGroup}>
                {isEditing ? (
                  <>
                    <InputRef
                      width='w-[400px]'
                      label='Email'
                      {...register('email')}
                      messageType={errors.email && 'error'}
                      messageText={errors.email && errors.email.message}
                    />
                    <InputRef
                      width='w-[400px]'
                      label='Phone'
                      {...register('phone')}
                      messageType={errors.phone && 'error'}
                      messageText={errors.phone && errors.phone.message}
                    />
                  </>
                ) : (
                    <>
                      <div className={s.formContainer}>
                        <label>Email</label>
                        <p className={s.formText}>
                          {values.email}
                        </p>
                      </div>
                      <div className={s.formContainer}>
                        <label>Phone</label>
                        <p className={s.formText}>
                          <span className="form__text-prefix">(+1)</span>
                          {values.phone}
                        </p>
                      </div>
                    </>
                  )}
              </div>
              {isEditing && (
                <div className={s.cta}>
                  <Button className={s.ctaCancel} style="link" size="lg" kind='primary' widthSizing='hug' onClick={() => setEditing(false)}>
                    Cancel
                  </Button>
                  <Button className={s.ctaSubmit} style="outline" size="lg" kind='primary' widthSizing='hug' type='submit'>
                    Save
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </AccountTabs>
    </AccountLayout>
  );
}

/* TODO: after API auth have been finalized, move global page protections in middleware.ts,
for now just copy and paste this to protect a page
*/
// import { getSession } from 'next-auth/react'

// import { checkUserRoleName } from '@/utils/arrayUtils'

// export async function getServerSideProps(context: any) {
//   const session: any = await getSession({ req: context.req });

//   if (session &&
//     (
//       checkUserRoleName(session.user.roles, 'COMPANY_ADMIN') ||
//       checkUserRoleName(session.user.roles, 'SITE_ADMIN')
//     )) {
//     return {
//       props: { session }
//     }

//   } else {
//     return {
//       redirect: {
//         destination: `/login?callbackUrl=${context.resolvedUrl}`,
//         permanent: false,
//       }
//     }
//   }
// }