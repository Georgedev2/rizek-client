import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../app/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Component {...pageProps} />
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
