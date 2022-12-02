import { getCookie, deleteCookie } from 'cookies-next'
import { XAxis, YAxis, ScatterChart, Scatter, ResponsiveContainer, Tooltip } from 'recharts'
import moment from 'moment'
import { getRefreshToken } from '../utils/getRefreshToken'
import { clearCookies } from '../utils/clearCookies'
import { useEffect } from 'react'

export default function Home({ data }) {
  const { weight = [] } = data

  const chartData = weight.map(({ weight, date }) => ({
    value: weight,
    time: moment(date).valueOf(),
  }))

  useEffect(() => {
    if (window.location.hash === '#_=_') {
      history.replaceState
        ? history.replaceState(null, null, window.location.href.split('#')[0])
        : (window.location.hash = '')
    }
  }, [])

  return (
    <div>
      Welcome Home
      <button onClick={() => fetch('/api/refresh')}>Refresh</button>
      <button onClick={() => clearCookies()}>Sign out</button>
      <br />
      <ResponsiveContainer width='95%' height={500}>
        <ScatterChart>
          <XAxis
            dataKey='time'
            domain={['auto', 'auto']}
            name='Time'
            tickFormatter={(unixTime) => moment(unixTime).format('DD/MM/YY')}
            type='number'
          />
          <YAxis dataKey='value' name='Value' domain={[90, 'auto']} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />

          <Scatter
            data={chartData}
            line={{ stroke: '#aaa', strokeWidth: 1 }}
            lineJointType='monotoneX'
            lineType='joint'
            name='Values'
          />
        </ScatterChart>
      </ResponsiveContainer>
      <br />
      <div>
        {weight.map((reading, i) => {
          return <div key={i}>{JSON.stringify(reading, null, 2)}</div>
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  console.log('home.js')
  const accessToken = getCookie('_wd_access_token', { req, res })

  let weight = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/weight`, {
    headers: {
      cookie: `accessToken=${accessToken}`,
    },
  })
  let json = await weight.json()

  if (json.errors) {
    console.log({ error: json.errors })
    const error = await getRefreshToken(req, res)

    console.log({ error })

    if ({ error }) {
      console.log('refresh failed')
      return {
        redirect: {
          destination: '/',
        },
      }
    }

    console.log('refetching with new access token')

    weight = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/weight`, {
      headers: {
        cookie: `accessToken=${accessToken}`,
      },
    })
    json = await weight.json()
  }

  return {
    props: {
      data: json,
    },
  }
}
