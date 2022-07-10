import React, { useState, createContext, useContext } from 'react'

const Context = createContext(null)

const useFitbit = () => useContext(Context)

const FitbitProvider = ({ children }) => {
  const [state, setState] = useState()

  return <Context.Provider value={[state, setState]}>{children}</Context.Provider>
}

export { useFitbit, FitbitProvider }
