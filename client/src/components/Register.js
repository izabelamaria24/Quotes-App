import React, { useState } from 'react'
import axios from 'axios'

import { register } from '../actions'

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return <>
    <div>
      <input placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => register(username, password)}>Register</button>
    </div>
  </>
}

export default Register
