import { SessionProvider } from 'next-auth/react'
import { FitbitProvider } from '../hooks/useFitbit'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <FitbitProvider>
        <Component {...pageProps} />
      </FitbitProvider>
    </SessionProvider>
  )
}

export default MyApp
