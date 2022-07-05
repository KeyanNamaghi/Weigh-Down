import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFitbit } from '../hooks/useFitbit'

export default function Callback() {
  const { parseCallback } = useFitbit()
  const { asPath } = useRouter()

  useEffect(() => {
    const parsedPath = parseCallback(asPath)
    console.log(parsedPath)
  }, [])

  return <>Callback</>
}

export async function getServerSideProps({ query }) {
  const { code } = query
  const post = await fetch(
    'https://api.fitbit.com/oauth2/token?' +
      new URLSearchParams({
        code,
        grant_type: 'authorization_code',
        client_id: '22BT48',
        redirect_uri: 'http://localhost:3000/callback',
      }),
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: `Basic MjJCVDQ4OjA1ODhlY2ZiYmM4Yjg1NTVlYWI2MmE4ZDMzYTdjN2Rm`,
      },
    },
  )
  const data = await post.json()

  console.log(post)
  console.log({ code })
  console.log({ data })
  console.log(data?.errors)
  return {
    props: { code },
  }
}
