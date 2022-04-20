import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import { register } from '../actions'

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [ready, setReady] = useState(false)

  const handleClick = () => {
    register(username, password)
    setReady(true)
  }

  return <>
    <div>
      {ready && <Navigate to="/login" replace={true} />}
      <input placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleClick}>Register</button>
    </div>
  </>
}

export default Register
