import React from 'react'
import { useSelector } from 'react-redux'

export default function Message() {
  const messageRendered = useSelector((state) => state.infoMessage)

  return <div id="message"> {messageRendered} </div>
}
