import { getRefreshToken } from '../../utils/getRefreshToken'

export default async function handler(req, res) {
  console.log('refresh')
  //   console.log(req.cookies)
  const { error } = getRefreshToken(req, res)

  res.status(200).json({ message: 'Refresh token', error })
}
