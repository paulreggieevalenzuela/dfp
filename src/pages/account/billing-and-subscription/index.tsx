import s from './page.module.scss';

import AccountTabs from '@/components/account/AccountTabs';
import BillingDetails from '@/components/billing-and-subscription/BillingDetails';
import Invoices from '@/components/billing-and-subscription/Invoices';
import SubscriptionPlan from '@/components/billing-and-subscription/SubscriptionPlan';
import AccountLayout from '@/components/layouts/AccountLayout';

import data from './billing-details.json';

export default function Page() {

  return (
    <AccountLayout className={s.Page}>
      <AccountTabs index={1}>
        <SubscriptionPlan details={data.subscriptionPlan} />
        <BillingDetails details={data.billingDetails} />
        <Invoices />
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

