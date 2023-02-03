import '@/styles/globals.css';

import type {AppProps} from 'next/app';
import {Global} from '@emotion/react';
import type {ReactElement} from 'react';
import {globalStyles} from '../globalStyles';

export default function App({Component, pageProps}: AppProps): ReactElement {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
