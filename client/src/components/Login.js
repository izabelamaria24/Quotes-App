import React, { useState } from 'react'
import axios from 'axios'

import { login } from '../actions'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return <>
    <div>
      <input placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  </>
}

export default Login
