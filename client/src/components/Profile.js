import React, { useState, useEffect } from 'react'

import { fetchUser } from '../actions'

const Profile = () => {
  const [data, setData] = useState({user: {username: '', _id: ''}, isFetching: false})

  useEffect(() => {
    fetchUser(data, setData)
  }, [data.user.username])

  return <>
    <h1>{data.user.username}</h1>
  </>
}

export default Profile
