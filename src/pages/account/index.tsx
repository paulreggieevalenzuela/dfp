
import s from './page.module.scss';

import BillingDetails from '@/components/account/BillingDetails';
import SubscriptionPlan from '@/components/account/SubscriptionPlan';
import Avatar from '@/components/Avatar';
import AccountLayout from '@/components/layouts/AccountLayout';

import data from './billing-and-subscription/billing-details.json';

type ProviderName = 'default' | 'email' | 'google';
export interface Provider {
  handleChangeProvider: (val: ProviderName) => void;
}

export default function Page() {
  return (
    <AccountLayout mainBGColor="white" className={s.Page} header={<header className="account__header" />}>
      <div className="plan-information">
        <div className="">
          <Avatar
            src='/images/mock/company-logo.png'
            alt='Company'
            size='medium'
          />
          <h5 className="text-[28px] my-[35px]">Play Solutions®</h5>
          <div className="user-info">
            <div className="user-info-wrapper">
              <Avatar src="/images/mock/user-settings.png" />
              <div>
                <p>Jenny Wilson</p>
                <p className="text-sm">jenny@playsolutions.com</p>
              </div>
            </div>
            <div className="user-info-wrapper">
              <Avatar src="/images/mock/phone.png" />
              <div>
                <p className="text-sm">(+1) 234 567 8910</p>
              </div>
            </div>
          </div>
        </div>
        <SubscriptionPlan details={data.subscriptionPlan} />
      </div>
      <BillingDetails details={data.billingDetails} />
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
//   console.log('session', session);
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