import { getCookie } from 'cookies-next'

const demoWeights = {
  weight: [
    {
      bmi: 30.34,
      date: '2022-07-01',
      logId: 1656672819000,
      source: 'API',
      time: '10:53:39',
      weight: 71.5,
    },
    {
      bmi: 30.25,
      date: '2022-07-02',
      logId: 1656769313000,
      source: 'AriaAir',
      time: '13:41:53',
      weight: 71.2,
    },
    {
      bmi: 30.46,
      date: '2022-07-03',
      logId: 1656855784000,
      source: 'AriaAir',
      time: '13:43:04',
      weight: 71.9,
    },
    {
      bmi: 30.22,
      date: '2022-07-04',
      logId: 1656940731000,
      source: 'AriaAir',
      time: '13:18:51',
      weight: 71.1,
    },
    {
      bmi: 30.31,
      date: '2022-07-05',
      logId: 1657020645000,
      source: 'AriaAir',
      time: '11:30:45',
      weight: 71.4,
    },
    {
      bmi: 30.1,
      date: '2022-07-06',
      fat: 22.579999923706055,
      logId: 1657151999000,
      source: 'API',
      time: '23:59:59',
      weight: 70.7,
    },
    {
      bmi: 29.8,
      date: '2022-07-08',
      fat: 22.579999923706055,
      logId: 1657324799000,
      source: 'API',
      time: '23:59:59',
      weight: 69.7,
    },
    {
      bmi: 29.98,
      date: '2022-07-11',
      logId: 1657538270000,
      source: 'AriaAir',
      time: '11:17:50',
      weight: 70.3,
    },
    {
      bmi: 30.1,
      date: '2022-07-12',
      logId: 1657618075000,
      source: 'AriaAir',
      time: '09:27:55',
      weight: 70.7,
    },
    {
      bmi: 29.92,
      date: '2022-07-15',
      logId: 1657880639000,
      source: 'AriaAir',
      time: '10:23:59',
      weight: 70.1,
    },
    {
      bmi: 29.47,
      date: '2022-07-16',
      logId: 1657969987000,
      source: 'API',
      time: '11:13:07',
      weight: 68.6,
    },
    {
      bmi: 29.68,
      date: '2022-07-18',
      logId: 1658140301000,
      source: 'API',
      time: '10:31:41',
      weight: 69.3,
    },
    {
      bmi: 29.62,
      date: '2022-07-19',
      logId: 1658222843000,
      source: 'AriaAir',
      time: '09:27:23',
      weight: 69.1,
    },
    {
      bmi: 29.86,
      date: '2022-07-20',
      logId: 1658312156000,
      source: 'API',
      time: '10:15:56',
      weight: 69.9,
    },
    {
      bmi: 29.65,
      date: '2022-07-21',
      logId: 1658408333000,
      source: 'AriaAir',
      time: '12:58:53',
      weight: 69.2,
    },
    {
      bmi: 29.68,
      date: '2022-07-22',
      logId: 1658498564000,
      source: 'AriaAir',
      time: '14:02:44',
      weight: 69.3,
    },
    {
      bmi: 29.5,
      date: '2022-07-23',
      logId: 1658583941000,
      source: 'API',
      time: '13:45:41',
      weight: 68.7,
    },
    {
      bmi: 29.83,
      date: '2022-07-25',
      logId: 1658747812000,
      source: 'AriaAir',
      time: '11:16:52',
      weight: 69.8,
    },
    {
      bmi: 29.5,
      date: '2022-07-26',
      logId: 1658836187000,
      source: 'API',
      time: '11:49:47',
      weight: 68.7,
    },
    {
      bmi: 29.59,
      date: '2022-07-27',
      logId: 1658921211000,
      source: 'API',
      time: '11:26:51',
      weight: 69,
    },
    {
      bmi: 29.74,
      date: '2022-07-28',
      fat: 22.579999923706055,
      logId: 1659052799000,
      source: 'API',
      time: '23:59:59',
      weight: 69.5,
    },
  ],
}

export default async function handler(req, res) {
  const inDemo = getCookie('_wd_demo', { req, res })

  if (inDemo) {
    res.status(200).json(demoWeights)
    return
  }

  const data = await fetch('https://api.fitbit.com/1/user/-/body/log/weight/date/2022-08-01/1m.json', {
    headers: {
      Authorization: `Bearer ${req.cookies.accessToken}`,
    },
  })

  const json = await data.json()
  res.status(200).json(json)
}
