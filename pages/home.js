import { getCookie } from 'cookies-next'
import { XAxis, YAxis, ScatterChart, Scatter, ResponsiveContainer, Tooltip } from 'recharts'
import moment from 'moment'
import { getRefreshToken } from '../utils/getRefreshToken'
import { useEffect } from 'react'
import { Header, SideDrawer, Daily } from '../components'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  // const { weight = [] } = data

  // const chartData = weight.map(({ weight, date }) => ({
  //   value: weight,
  //   time: moment(date).valueOf(),
  // }))

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
      <Header title='Home' demo={data.isDemo} />
      <SideDrawer />
      <div className={styles.mainWrapper}>
        <Daily />
        {/* <div className={styles.main}>
          <ResponsiveContainer width='100%' height={500}>
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
        </div> */}
      </div>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  console.log('home.js')

  const isDemo = getCookie('_wd_demo', { req, res })
  if (isDemo) {
    // let weight = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/weight`, {
    //   headers: {
    //     cookie: `_wd_demo=true`,
    //   },
    // })
    // let json = await weight.json()

    return {
      props: {
        data: { isDemo },
      },
    }
  }

  const accessToken = getCookie('_wd_access_token', { req, res })

  if (!accessToken) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }

  // let weight = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/weight`, {
  //   headers: {
  //     cookie: `accessToken=${accessToken}`,
  //   },
  // })
  // let json = await weight.json()

  // if (json.errors) {
  //   console.log({ error: json.errors })
  //   const error = await getRefreshToken(req, res)

  //   console.log({ error })

  //   if ({ error }) {
  //     console.log('refresh failed')
  //     return {
  //       redirect: {
  //         destination: '/',
  //       },
  //     }
  //   }

  //   console.log('refetching with new access token')

  // weight = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/weight`, {
  //   headers: {
  //     cookie: `accessToken=${accessToken}`,
  //   },
  // })
  // json = await weight.json()
  // }

  return {
    props: {
      data: {},
    },
  }
}
