import { setCookie, getCookie } from 'cookies-next'

// curl -i -X POST \
// https://api.fitbit.com/oauth2/token \
//  -H "Authorization: Basic ---"  \
//  -H "Content-Type: application/x-www-form-urlencoded"  \
//  --data "grant_type=refresh_token"  \
//  --data "refresh_token= ---"

// {"errors":[{"errorType":"invalid_client","message":"Invalid authorization header format.
// The header was not recognized to be a valid header for any of known implementations or a client_id was not specified in case of a public client Received header = undefined.
// Visit https://dev.fitbit.com/docs/oauth2 for more information on the Fitbit Web API authorization process."}],"success":false}

export const getRefreshToken = async () => {
  try {
    const refresh_token = getCookie('_wd_refresh_token')

    console.log({ refresh_token })

    const response = await fetch(
      'https://api.fitbit.com/oauth2/token?' +
        new URLSearchParams({
          grant_type: 'refresh_token',
          client_id: '22BT48', // process.env.FITBIT_CLIENT_ID,
          refresh_token,
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

    // for (const [key, value] of Object.entries(data)) {
    //   setCookie(`_wd_${key}`, value, { req, res, maxAge: 60 * 6 * 24 })
    // }

    return { error: null }
  } catch (error) {
    console.error(error)
    return { error }
  }
}
