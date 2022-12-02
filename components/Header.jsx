import Image from 'next/image'
import { clearCookies } from '../utils/clearCookies'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src='/logo.png' alt='logo' height={30} width={30} />
      <div className={styles.cylch}>Cylch</div>
      <button className={styles.user} onClick={() => clearCookies()} />
    </div>
  )
}
