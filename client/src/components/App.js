import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import AddQuoteForm from './AddQuoteForm'

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
    <AddQuoteForm />
  </>
}

export default App
