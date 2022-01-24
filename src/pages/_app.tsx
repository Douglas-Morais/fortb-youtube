import type { AppProps } from 'next/app'
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals.style';
import { darkTheme } from '../styles/theme/dark.theme';
import { lightTheme } from '../styles/theme/light.theme';

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  function changeTheme() {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (<>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} onChangeTheme={changeTheme} />
    </ThemeProvider>
  </>)
}

export default App
