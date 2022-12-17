import { useEffect, useState } from 'react'
import styles from './SideDrawer.module.css'

const Tracker = ({ battery, batteryLevel, deviceVersion, lastSyncTime, type }) => {
  const syncedLast = new Date(lastSyncTime)
  const now = new Date()
  const hours = Math.floor((now - syncedLast) / (1000 * 60 * 60))
  const minutes = Math.floor((now - syncedLast) / (1000 * 60)) % 60

  const value = !!hours ? hours : minutes
  const unit = !!hours ? 'hour' : 'minute'

  const timeSince = value ? `${value} ${unit}${value > 1 ? 's' : ''} ago` : 'Just now'

  return (
    <div>
      <h3>{deviceVersion}</h3>

      <small>Battery:</small>
      <p>{battery}</p>

      <br />

      <small>Last sync:</small>
      <p>{timeSince}</p>
    </div>
  )
}

export const SideDrawer = () => {
  const [deviceData, setDeviceData] = useState(null)
  useEffect(() => {
    const fetchDevices = async () => {
      const request = await fetch('/api/devices')
      const data = await request.json()
      setDeviceData(data)

      if (data.battery && data.batteryLevel && data.deviceVersion) {
        setDeviceData(data)
      }
    }
    fetchDevices()
  }, [])

  return <div className={styles.container}>{deviceData && <Tracker {...deviceData} />}</div>
}
