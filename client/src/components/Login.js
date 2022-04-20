import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import { login } from '../actions'
import loginsvg from '../images/Login.gif'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [ready, setReady] = useState(false)

  const handleClick = () => {
    login(username, password)
    setReady(true)
  }

  return <>
    {ready && <Navigate to="/firstpage" replace={true} />}
    <section className="login-register">
      <section className="flex-center full-w-h login-register-img"><img src={loginsvg}></img></section>
      <section className="flex-center full-w-h login-register-form">
        <h1 className="welcome-text">Welcome back!</h1>
        <label htmlFor="inp" className="inp">
          <input type="text" id="inp" placeholder="&nbsp;" onChange={(e) => setUsername(e.target.value)} />
          <span className="label">Username</span>
          <span className="focus-bg"></span>
        </label>
        <label htmlFor="inp" className="inp">
          <input type="text" id="inp" placeholder="&nbsp;" onChange={(e) => setPassword(e.target.value)} />
          <span className="label">Password</span>
          <span className="focus-bg"></span>
        </label>
        <button className="btn btn-outline-light" onClick={handleClick}>Login</button>
      </section>
    </section>
  </>
}

export default Login
