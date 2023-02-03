import type {Colors, DoobooTheme, ThemeType} from '../utils/theme';
import {
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';
import type {ReactElement, ReactNode} from 'react';
import {colors, createTheme} from '../utils/theme';

import type {Theme as DefaultTheme} from '@emotion/react';
import createCtx from '../utils/createCtx';
import {useState} from 'react';

interface Context {
  themeType: ThemeType;
  theme: DefaultTheme & DoobooTheme;
  changeThemeType: (themeType?: ThemeType) => void;
  colors: Colors;
}

const [useCtx, Provider] = createCtx<Context>();

export const defaultThemeType: ThemeType = 'light';

interface Props {
  children: ReactNode;
  // using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
}: Props): ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);

  const changeThemeType = (): void => {
    const newThemeType = themeType === 'light' ? 'dark' : 'light';

    setThemeType(newThemeType);
  };

  const theme = createTheme(themeType) as DefaultTheme;

  return (
    <Provider
      value={{
        changeThemeType,
        themeType,
        theme,
        colors,
      }}
    >
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export {useCtx as useThemeContext, ThemeProvider, withTheme};
