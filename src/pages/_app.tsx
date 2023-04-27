import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux'

import '@/styles/globals.scss';

import GlobalModalWrapper from '@/components/Modal/GlobalModalWrapper';

import { store } from '@/app/store'

function MyApp({ Component, pageProps }: AppProps) {
  // const modalContent = useAppSelector(selectModalContent);

  return (
    <SessionProvider session={pageProps.session}>

      <Provider store={store}>

        <Component {...pageProps} />

        <GlobalModalWrapper />

      </Provider>

    </SessionProvider>
  );
}

export default MyApp;