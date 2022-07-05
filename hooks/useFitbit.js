import React, { useState, createContext, useContext } from 'react'

const Context = createContext([{}, () => {}])
const { Provider } = Context

const useFitbit = () => {
  const [state, setState] = useContext(Context)

  const parseCallback = (asPath) => {
    const hash = asPath.split('#')[1]

    const params = hash.split('&').reduce((acc, param) => {
      const [key, value] = param.split('=')
      acc[key] = value
      return acc
    }, {})

    setState((prevState) => ({
      ...prevState,
      ...params,
    }))
    return { params }
  }

  return { ...state, parseCallback }
}

const FitbitProvider = (props) => {
  const [state, setState] = useState({})

  return <Provider value={[state, setState]}>{props.children}</Provider>
}

export { useFitbit, FitbitProvider }

// http://localhost:3000/#access_token=[...]&user_id=2S8VXR&scope=sleep+settings+profile+social+activity+weight+heartrate+nutrition+location&token_type=Bearer&expires_in=86400
