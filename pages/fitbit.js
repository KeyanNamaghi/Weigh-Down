import { getAccessToken } from '../utils/getAccessToken'

export default function Fitbit() {
  return <>You should never see this page</>
}

export async function getServerSideProps({ req, res, query }) {
  const { code } = query

  if (!code) {
    console.log('Missing code when landing on /fitbit')
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  const { error } = await getAccessToken({ code, req, res })

  if (error) {
    console.log('threw error when getAccessToken on /fitbit')
    console.log(error)
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  return {
    redirect: {
      destination: '/home',
      permanent: true,
    },
  }
}
