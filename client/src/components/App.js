import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import AddQuoteForm from './AddQuoteForm'
import FirstPage from './FirstPage'
import MyQuotes from './MyQuotes'
import DeleteAccount from './DeleteAccount'
import LogOut from './LogOut'

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id/my-quotes" element={<MyQuotes />}/>
      <Route path="/firstpage" element={<FirstPage/>} />
    </Routes>
    <AddQuoteForm />
    <DeleteAccount />
    <LogOut />
  </>
}

export default App
