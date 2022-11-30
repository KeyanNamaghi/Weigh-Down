import { getCookies, deleteCookie } from 'cookies-next'

export const clearCookies = () => {
  const cookies = getCookies()

  Object.keys(cookies).forEach((key) => {
    if (key.slice(0, 4) === '_wd_') {
      console.log(`deleting ${key}`)
      deleteCookie(key)
    }
  })

  window.location.reload()
}
