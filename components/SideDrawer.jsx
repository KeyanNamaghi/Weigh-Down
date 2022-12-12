import { useEffect, useState } from 'react'
import styles from './SideDrawer.module.css'

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

  return (
    <div className={styles.container}>
      {deviceData && (
        <div>
          {deviceData.deviceVersion} - {deviceData.batteryLevel}%
        </div>
      )}
    </div>
  )
}
