import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { fetchUser } from '../actions'
import Navbar from './Navbar'

const Main = () => {
  const [data, setData] = useState({user: {username: '', _id: ''}, isFetching: false})

  useEffect(() => {
    fetchUser(data, setData)
  }, [data.user.username])

  return <>
    <Navbar userId={data.user._id} />
  </>
}

export default Main
