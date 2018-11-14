import React, { useContext } from 'react'
import AppContext from './app-context'
const Green = () => {
  const context = useContext(AppContext)
  return <div className="green">{context.number}</div>
}
const Blue = () => {
  const context = useContext(AppContext)
  return (
    <div className="blue">
      <button onClick={context.inc}>INC</button>
      <Green />
    </div>
  )
}
