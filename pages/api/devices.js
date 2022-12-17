// Request
/*
  [
    {
      "battery": "Low",
      "batteryLevel": 25,
      "deviceVersion": "Charge 5",
      "features": [],
      "id": "2165094738",
      "lastSyncTime": "2022-12-12T00:48:05.000",
      "mac": "224784E831D0",
      "type": "TRACKER"
    },
    {
      "battery": "Medium",
      "batteryLevel": 30,
      "deviceVersion": "Aria 2",
      "features": [],
      "id": "FX175180B8C824",
      "lastSyncTime": "2022-12-11T18:59:05.000",
      "type": "SCALE"
    },
    {
      "battery": "High",
      "batteryLevel": 100,
      "deviceVersion": "Aria Air",
      "features": [],
      "id": "F-31-A4C138B74024",
      "lastSyncTime": "2022-09-09T10:48:28.000",
      "type": "SCALE"
    }
  ]
*/

import { getCookie } from 'cookies-next'

export default async function handler(req, res) {
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
