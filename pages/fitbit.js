import Link from 'next/link'

export default function Fitbit() {
  return (
    <>
      <Link
        href={
          'https://www.fitbit.com/oauth2/authorize?client_id=22BT48&expires_in=31536000&response_type=code&redirect_uri=http://localhost:3000/callback&scope=weight%20location%20settings%20profile%20nutrition%20activity%20sleep%20heartrate%20social'
        }>
        Sign in to Fitbit
      </Link>
    </>
  )
}
