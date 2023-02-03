import type {AppProps} from 'next/app';
import {Global} from '@emotion/react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@/providers/ThemeProvider';
import {globalStyles} from '../globalStyles';

export default function App({Component, pageProps}: AppProps): ReactElement {
  return (
    <ThemeProvider initialThemeType="light">
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
