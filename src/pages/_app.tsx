import type {AppProps} from 'next/app';
import {Global} from '@emotion/react';
import type {ReactElement} from 'react';
import {ReactRelayContext} from 'react-relay';
import {Suspense} from 'react';
import {ThemeProvider} from '@/providers/ThemeProvider';
import {globalStyles} from '../globalStyles';
import {useEnvironment} from '@/relay';

export default function App({Component, pageProps}: AppProps): ReactElement {
  const environment = useEnvironment();

  return (
    <ReactRelayContext.Provider value={{environment}}>
      <ThemeProvider initialThemeType="light">
        <Global styles={globalStyles} />
        <Suspense fallback={<div>loading...</div>}>
          <Component props={pageProps} />
        </Suspense>
      </ThemeProvider>
    </ReactRelayContext.Provider>
  );
}
