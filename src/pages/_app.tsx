import 'bootstrap/scss/bootstrap.scss'
import 'styles/globals.scss'
import type { AppProps } from 'next/app'

function MainApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MainApp
