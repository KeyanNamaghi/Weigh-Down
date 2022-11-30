import { getCookie } from 'cookies-next'
import Link from 'next/link'

export default function Landing() {
  return (
    <>
      Not signed in <br />
      <Link
        href={
          'https://www.fitbit.com/oauth2/authorize?client_id=22BT48&expires_in=31536000&response_type=code&redirect_uri=http://localhost:3000/fitbit&scope=weight%20location%20settings%20profile%20nutrition%20activity%20sleep%20heartrate%20social'
        }>
        Sign in to Fitbit
      </Link>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  console.log('index.js')
  const accessToken = getCookie('_wd_access_token', { req, res })

  if (accessToken) {
    return {
      redirect: {
        destination: '/home',
        permanent: true,
      },
    }
  }

  return {
    props: {},
  }
}
