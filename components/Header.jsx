import Head from 'next/head'
import Image from 'next/image'
import { clearCookies } from '../utils/clearCookies'
import styles from './Header.module.css'

export const Header = ({ title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Image className={styles.logo} src='/logo.png' alt='logo' height={30} width={30} />
      <div className={styles.cylch}>Cylch</div>
      <button className={styles.user} onClick={() => clearCookies()} />
    </div>
  )
}
