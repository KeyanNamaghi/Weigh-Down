import { getCookie } from 'cookies-next'
import { XAxis, YAxis, ScatterChart, Scatter, ResponsiveContainer, Tooltip } from 'recharts'
import moment from 'moment'
import { getRefreshToken } from '../utils/getRefreshToken'
import { useEffect } from 'react'
import { Header, SideDrawer } from '../components'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  const { weight = [] } = data

  const chartData = weight.map(({ weight, date }) => ({
    value: weight,
    time: moment(date).valueOf(),
  }))

  // Remove the annoying #_=_ at the end of the url on redirect
  useEffect(() => {
    if (window.location.hash === '#_=_') {
      history.replaceState
        ? history.replaceState(null, null, window.location.href.split('#')[0])
        : (window.location.hash = '')
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header title='Home' />
      <SideDrawer />
      <div className={styles.mainWrapper}>
        <button onClick={() => fetch('/api/dailyActivity')}>Click</button>
        <div className={styles.main}>
          <ResponsiveContainer width='45%' height={500}>
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
