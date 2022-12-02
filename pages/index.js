import { getCookie } from 'cookies-next'
import { useState } from 'react'

export default function Landing() {
  const [loading, setLoading] = useState(false)
  return (
    <div className='card'>
      Heading
      <sub onClick={() => setLoading(true)}>subheading</sub>
      <div className={`login-button ${loading ? 'login-button--loading' : ''}`}>
        <a
          target='_self'
          onClick={() => setLoading(true)}
          href={`https://www.fitbit.com/oauth2/authorize?client_id=${process.env.FITBIT_CLIENT_ID}&expires_in=31536000&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_URL}/fitbit&scope=weight%20location%20settings%20profile%20nutrition%20activity%20sleep%20heartrate%20social`}>
          {loading ? '' : 'Log in with Fitbit'}
        </a>
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
