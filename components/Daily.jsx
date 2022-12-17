import { useEffect, useRef, useState } from 'react'
import styles from './Daily.module.css'

const IconKeys = () => {
  return (
    <div className={styles.icons}>
      <div className={styles.iconContainer}>
        <svg width='40' height='40' id='footsteps' version='1.1' fill='#aa2b5d'>
          <g id='shoeprints'>
            <path
              id='original'
              d='M 13.01798,25.39451 C 12.77399,25.64089 7.253,23.65425 7.18568,23.16408 6.35644,17.1269 10.30763,12.32575 14.15474,12.10585 c 4.51136,-0.25788 3.02218,9.08888 -1.13676,13.28866 z m -6.24402,9.15377 c -1.75334,-0.64849 -2.22119,-3.43642 -1.02572,-7.0593 0.23575,-0.71443 6.23884,1.28298 6.15248,1.91291 -0.6586,4.80359 -3.37343,5.79488 -5.12676,5.14639 z'
            />
            <use
              xlinkHref='#original'
              id='copy'
              transform='matrix(-0.60808092,-0.79387506,-0.79387506,0.60808092,52.157707,10.212769)'
            />
          </g>
        </svg>
        <span>Steps</span>
      </div>
      <div className={styles.iconContainer}>
        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'>
          <path
            fill='#2baa78'
            d='M20.095 20.405l-8.095-8.095-8.095 8.095-1.061-1.061 9.155-9.155 9.155 9.155-1.061 1.061z'></path>
          <path
            fill='#2baa78'
            d='M20.095 12.905l-8.095-8.095-8.095 8.095-1.061-1.061 9.155-9.155 9.155 9.155-1.061 1.061z'></path>
        </svg>
        <span>Zone Points</span>
      </div>
      <div className={styles.iconContainer}>
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
          <path
            d='M5,20H35M12,12 4,20 12,28M28,12 36,20 28,28'
            stroke='#2b9daa'
            strokeWidth='2'
            strokeLinejoin='round'
            strokeLinecap='round'
            fill='none'
          />
        </svg>
        <span>Distance</span>
      </div>
    </div>
  )
}

const getSteps = (data) => data && data.summary.steps
const getZone = (data) => data && Number(data.summary.fairlyActiveMinutes) + Number(data.summary.veryActiveMinutes)
const getDistance = (data) =>
  data && data.summary.distances.find((distance) => distance.activity === 'tracker').distance

export const Daily = () => {
  const [data, setData] = useState(null)
  const circularProgressRef1 = useRef(null)
  const circularProgressRef2 = useRef(null)
  const circularProgressRef3 = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch('/api/activities')
      const data = await request.json()
      console.log({ data })
      setData(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!data) return

    const stepPercentage = (100 * getSteps(data)) / data.goals.steps
    const zonePercentage = (100 * getZone(data)) / data.goals.activeMinutes
    const distancePercentage = (100 * getDistance(data)) / data.goals.distance

    if (circularProgressRef1.current) {
      circularProgressRef1.current.style.background = `conic-gradient(#aa2b5d ${stepPercentage * 3.6}deg, #ededed 0deg)`
      circularProgressRef2.current.style.background = `conic-gradient(#2baa78 ${zonePercentage * 3.6}deg, #ededed 0deg)`
      circularProgressRef3.current.style.background = `conic-gradient(#2b9daa ${
        distancePercentage * 3.6
      }deg, #ededed 0deg)`
    }
  }, [data])

  return (
    <div>
      <div className={styles.container}>
        <div ref={circularProgressRef1} className={`${styles.circularProgress} ${styles.circle1}`}>
          <div ref={circularProgressRef2} className={`${styles.circularProgress} ${styles.circle2}`}>
            <div ref={circularProgressRef3} className={`${styles.circularProgress} ${styles.circle3}`}>
              <span className={styles.zone}>{getZone(data)}</span>
              <span className={styles.steps}>{getSteps(data)}</span>
              <span className={styles.distance}>
                {getDistance(data)} {data && 'km'}
              </span>
            </div>
          </div>
        </div>
        <IconKeys />
      </div>
    </div>
  )
}
