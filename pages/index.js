import { getCookie } from 'cookies-next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  const [loading, setLoading] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>{'Cylch'}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='card'>
        <div className='logo-image'>
          <Image alt='logo' src='/logo.png' width={150} height={150} />
        </div>
        <h1>Cylch</h1>
        <p className='subheading'>Use your Fitbit data against your lizard brain and hack yourself to a healthy life</p>
        <div className={`${styles.loginButton} ${loading ? styles.loginButtonLoading : ''}`}>
          <a
            target='_self'
            onClick={() => setLoading(true)}
            href={`https://www.fitbit.com/oauth2/authorize?client_id=${process.env.FITBIT_CLIENT_ID}&expires_in=31536000&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_URL}/fitbit&scope=weight%20location%20settings%20profile%20nutrition%20activity%20sleep%20heartrate%20social`}>
            {loading ? '' : 'Log in with Fitbit'}
          </a>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  console.log('index.js')
  const accessToken = getCookie('_wd_access_token', { req, res })

  if (accessToken) {
    return {
      redirect: {
        destination: '/home',
      },
    }
  }

  return {
    props: {},
  }
}
