import { getCookie } from 'cookies-next'
import Head from 'next/head'
import Image from 'next/image'
import { clearCookies } from '../utils/clearCookies'
import styles from './Header.module.css'

export const Header = ({ title, demo }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Image className={styles.logo} src='/logo.png' alt='logo' height={30} width={30} />
      <div className={styles.cylch}>{demo ? 'Cylch Demo' : 'Cylch'}</div>
      <button className={styles.user} onClick={() => clearCookies()} />
    </div>
  )
}
