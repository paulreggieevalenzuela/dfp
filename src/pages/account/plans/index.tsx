import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft';
import CheckmarkFilled from '@carbon/icons-react/lib/CheckmarkFilled';
import ChevronDown from '@carbon/icons-react/lib/ChevronDown';
import ChevronUp from '@carbon/icons-react/lib/ChevronUp';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import s from './page.module.scss';

import AccountTabs from '@/components/account/AccountTabs';
import Button from '@/components/Button';
import Elevations from '@/components/Elevations';
import AccountLayout from '@/components/layouts/AccountLayout';

export default function PageViewPlans() {
  const subscriptions = [
    {
      title: 'Marketing Force',
      type: 'marketing',
      hours: '45',
      price: '1,950',
      subTitle: 'MARKETING FORCE CAPABILITIES',
      capabilities: [
        'Digital Design',
        'Social Media',
        'Illustration Services',
        'Print',
      ],
      informations: [
        'Creative Director',
        'Dedicated Design Team (1-2 designers)',
        'Dedicated Design Manager',
        'Unlimited Revisions',
      ],
    },
    {
      title: 'Pro Force',
      type: 'pro',
      hours: '65',
      price: '2,750',
      subTitle: 'PRO FORCE CAPABILITIES',
      capabilities: [
        'Digital Design',
        'Social Media',
        'Illustration Services',
        'Print',
        'UI.UX Design',
        'Web Design',
        'App Design',
        'Brand Design',
        'Inforgraphic',
        'Packaging Design',
        'Video Animation Services',
      ],
      informations: [
        'Creative Director',
        'Dedicated Design Team (1-2 designers)',
        'Dedicated Design Manager',
        'Unlimited Revisions',
      ],
    },
    {
      title: 'Full Force',
      type: 'full',
      hours: '85',
      price: '3,450',
      subTitle: 'FULL FORCE CAPABILITIES',
      capabilities: [
        'All Marketing Force Capabilities',
        'All Pro Force Capabilities',
      ],
      informations: [
        'Creative Director',
        'Dedicated Design Team (1-2 designers)',
        'Dedicated Design Manager',
        'Unlimited Revisions',
      ],
    },
  ];

  const [showCapabilities, setCapabilities] = useState(true);

  const onClickCapabilities = () => {
    setCapabilities(!showCapabilities);
  };

  return (
    <AccountLayout className={s.Page}>
      <AccountTabs index={1}>
        <section>
          <div className={s.subscriptionHeader}>
            <Button style='link' kind='tertiary' widthSizing='hug'>
              <ArrowLeft />
              &nbsp;&nbsp;
              <Link href='/account/billing-and-subscription'>
                Go back to my subscription
              </Link>
            </Button>
            <h6> Upgrade Plan </h6>
          </div>
          <div className={s.subscriptionContainer}>
            {subscriptions.map((sub, subIndex) => {
              const subscriptionWrapperStyles = clsx(
                s.subscriptionWrapper,
                sub.type === 'marketing' && s.subscriptionWrapperActive
              );

              const subscriptionCTAStyle = clsx(
                sub.type === 'marketing' && s.subscriptionCta,
                sub.type === 'pro' && s.subscriptionCTAPro,
                sub.type === 'full' && s.subscriptionCTAFull
              );

              const subscriptionSubtitleStyle = clsx(
                s.subscriptionSubtitle,
                sub.type === 'pro' && s.subscriptionSubtitlePro,
                sub.type === 'full' && s.subscriptionSubtitleFull
              );
              return (
                <Elevations
                  key={subIndex}
                  className={subscriptionWrapperStyles}
                >
                  <div>
                    <div className='flex justify-between'>
                      <p className={s.subscriptionTitle}>{sub.title}</p>
                      <p className={s.subscriptionPrice}>
                        $ <span>{sub.price}</span> / month
                      </p>
                    </div>
                    <p className={s.subscriptionHours}>{sub.hours} hours</p>

                    <Button
                      className={subscriptionCTAStyle}
                      style='outline'
                      size='lg'
                      kind='primary'
                      widthSizing='hug'
                      disabled={sub.type === 'marketing' ? true : false}
                    >
                      {sub.type === 'marketing' ? 'Current Plan' : 'Subscribe'}
                    </Button>

                    {showCapabilities && (
                      <>
                        <p className={subscriptionSubtitleStyle}>
                          {sub.subTitle}
                        </p>

                        <ul className={s.planDetails}>
                          {sub.capabilities.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {showCapabilities && (
                    <>
                      <ul className={s.planInformation}>
                        <hr className={s.subscriptionDivider} />
                        {sub.informations.map((info, i) => (
                          <li key={i}>
                            <CheckmarkFilled size={20} />
                            <p>{info}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </Elevations>
              );
            })}
          </div>
          <div className={s.planCustomization}>
            <Button
              style='lite'
              kind='primary'
              widthSizing='hug'
              onClick={onClickCapabilities}
            >
              {showCapabilities ? (
                <>
                  Hide Plan Capabilities &nbsp;&nbsp;
                  <ChevronUp />
                </>
              ) : (
                <>
                  Show Plan Capabilities &nbsp;&nbsp;
                  <ChevronDown />
                </>
              )}
            </Button>
            <h6>Need a customized plan?</h6>
            <Button>Contact us today</Button>
          </div>
        </section>
      </AccountTabs>
    </AccountLayout>
  );
}

/* TODO: after API auth have been finalized, move global page protections in middleware.ts, 
for now just copy and paste this to protect a page
*/
import { getSession } from 'next-auth/react'

import { checkUserRoleName } from '@/utils/arrayUtils'

export async function getServerSideProps(context: any) {
  const session: any = await getSession({ req: context.req });

  if (session &&
    (
      checkUserRoleName(session.user.roles, 'COMPANY_ADMIN') ||
      checkUserRoleName(session.user.roles, 'SITE_ADMIN')
    )) {
    return {
      props: { session }
    }

  } else {
    return {
      redirect: {
        destination: `/login?callbackUrl=${context.resolvedUrl}`,
        permanent: false,
      }
    }
  }
}