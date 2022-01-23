import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals.style'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/theme/dark.theme'
import { lightTheme } from '../styles/theme/light.theme'

function App({ Component, pageProps }: AppProps) {
  return (<>
    <GlobalStyle />
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default App
