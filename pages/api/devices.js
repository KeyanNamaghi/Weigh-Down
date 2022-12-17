import { getCookie } from 'cookies-next'

export default async function handler(req, res) {
  const inDemo = getCookie('_wd_demo', { req, res })

  if (inDemo) {
    const lastSyncTime = new Date().toISOString()
    return res.status(200).json({
      battery: 'Full',
      batteryLevel: 100,
      deviceVersion: 'Versa Demo',
      lastSyncTime,
      type: 'TRACKER',
    })
  }

  const accessToken = getCookie('_wd_access_token', { req, res })

  const data = await fetch('https://api.fitbit.com/1/user/-/devices.json', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const json = await data.json()

  const tracker = json
    .filter((device) => device.type === 'TRACKER')
    .map((device) => {
      return {
        battery: device.battery,
        batteryLevel: device.batteryLevel,
        deviceVersion: device.deviceVersion,
        type: device.type,
        lastSyncTime: device.lastSyncTime,
      }
    })[0]

  res.status(200).json(tracker)
}
