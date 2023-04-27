import { Link } from 'carbon-components-react';
import { useState } from 'react';

import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import { Snackbar } from '@/components/Snackbar';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const [snackbar, toggleSnackbar] = useState(false);
  const [showSeverity, toggleSeverity] = useState(false);

  const onClick = (type?: string) => {
    if (type == 'default') {
      toggleSnackbar(!snackbar);
    } else {
      toggleSeverity(!showSeverity);
    }
    clearTimeout(timeout);
  };

  const timeout = setTimeout(function () {
    toggleSnackbar(false);
  }, 5000);

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Snackbar' />

      <div className='flex flex-col gap-7'>
        <Snackbar message='Snack bar message' />

        <Snackbar
          message='Snack bar message'
          actionLabel='Action'
          onClickAction={() => onClick('default')}
        />

        <Link onClick={() => onClick('default')} className='cursor-pointer'>
          {' '}
          Click to show snackbar in action (will auto hide in a few seconds){' '}
        </Link>

        <Link onClick={() => onClick('severity')} className='cursor-pointer'>
          {' '}
          Click to show snackbar variants{' '}
        </Link>

        {snackbar ? (
          <div>
            <Snackbar
              message='Success snack bar'
              severity='success'
              position='bottom-left'
            />
          </div>
        ) : null}

        {showSeverity ? (
          <div className='flex flex-col gap-4'>
            <Snackbar message='Snack bar message' severity='error' />
            <Snackbar message='Snack bar message' severity='warning' />
            <Snackbar message='Snack bar message' severity='success' />
            <Snackbar message='Snack bar message' />
          </div>
        ) : null}
      </div>
    </KitchenSinkLayout>
  );
}
