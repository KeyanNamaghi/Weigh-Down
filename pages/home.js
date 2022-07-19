import { getCookie } from 'cookies-next'
import { XAxis, YAxis, ScatterChart, Scatter, ResponsiveContainer, Tooltip } from 'recharts'
import moment from 'moment'
import { getRefreshToken } from '../utils/getRefreshToken'

export default function Home({ data }) {
  const { weight } = data

  const chartData = weight.map(({ weight, date }) => ({
    value: weight,
    time: moment(date).valueOf(),
  }))

  return (
    <div>
      Welcome Home
      <button onClick={() => getRefreshToken()}>Refresh</button>
      <br />
      <ResponsiveContainer width='95%' height={500}>
        <ScatterChart>
          <XAxis
            dataKey='time'
            domain={['auto', 'auto']}
            name='Time'
            tickFormatter={(unixTime) => moment(unixTime).format('l')}
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
  const accessToken = getCookie('_wd_access_token', { req, res })

  const weight = await fetch(`${process.env.URL}/api/weight`, {
    headers: {
      cookie: `accessToken=${accessToken}`,
    },
  })
  const json = await weight.json()

  return {
    props: {
      data: json,
    },
  }
}
