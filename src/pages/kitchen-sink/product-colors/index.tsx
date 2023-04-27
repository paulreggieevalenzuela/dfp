import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Product Colors'
        description='Branding colors for referenced products.'
      />

      <div className='m-10 grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-16'>
        <section>
          <span> Facebook </span>
          <div className='h-24 rounded-2xl bg-facebook'></div>
        </section>
        <section>
          <span> LinkedIn </span>
          <div className='h-24 rounded-2xl bg-linkedin'></div>
        </section>
        <section>
          <span> Mailchimp </span>
          <div className='h-24 rounded-2xl bg-mailchimp'></div>
        </section>
        <section>
          <span> Microsoft </span>
          <div className='h-24 rounded-2xl bg-microsoft'></div>
        </section>
        <section>
          <span> Twitter </span>
          <div className='h-24 rounded-2xl bg-twitter'></div>
        </section>
        <section>
          <span> Pinterest </span>
          <div className='h-24 rounded-2xl bg-pinterest'></div>
        </section>
        <section>
          <span> Paypal </span>
          <div className='h-24 rounded-2xl bg-paypal'></div>
        </section>
        <section>
          <span> Reddit </span>
          <div className='h-24 rounded-2xl bg-reddit'></div>
        </section>
        <section>
          <span> Google </span>
          <div className='h-24 rounded-2xl bg-google'></div>
        </section>
        <section>
          <span> Dropbox </span>
          <div className='h-24 rounded-2xl bg-dropbox'></div>
        </section>
        <section>
          <span> RSS </span>
          <div className='h-24 rounded-2xl bg-rss'></div>
        </section>
        <section>
          <span> Salesforce </span>
          <div className='h-24 rounded-2xl bg-salesforce'></div>
        </section>
        <section>
          <span> Dribble </span>
          <div className='h-24 rounded-2xl bg-dribble'></div>
        </section>
        <section>
          <span> Instagram </span>
          <div className='h-24 rounded-2xl bg-instagram'></div>
        </section>
        <section>
          <span> Slack </span>
          <div className='h-24 rounded-2xl bg-slack'></div>
        </section>
        <section>
          <span> Youtube </span>
          <div className='h-24 rounded-2xl bg-youtube'></div>
        </section>
      </div>
    </KitchenSinkLayout>
  );
}
