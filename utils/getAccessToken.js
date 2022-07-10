import { setCookie } from 'cookies-next'

export const getAccessToken = async ({ code, req, res }) => {
  try {
    const response = await fetch(
      'https://api.fitbit.com/oauth2/token?' +
        new URLSearchParams({
          code,
          grant_type: 'authorization_code',
          client_id: process.env.FITBIT_CLIENT_ID,
          redirect_uri: process.env.REDIRECT_URL,
        }),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: process.env.FITBIT_AUTH_HEADER,
        },
      },
    )

    if (!response.ok) {
      // TODO: handle errors, use refresh tokens
      console.log('Failed to get access token')
      throw new Error(response.statusText)
    }

    const data = await response.json()

    for (const [key, value] of Object.entries(data)) {
      setCookie(`_wd_${key}`, value, { req, res, maxAge: 60 * 6 * 24 })
    }

    return { error: null }
  } catch (error) {
    console.error(error)
    return { error }
  }
}
