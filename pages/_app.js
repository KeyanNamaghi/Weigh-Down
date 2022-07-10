import { FitbitProvider } from '../hooks/useFitbit'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <FitbitProvider>
      <Component {...pageProps} />
    </FitbitProvider>
  )
}

export default MyApp
