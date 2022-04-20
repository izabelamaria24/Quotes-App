import React, { useState, useEffect } from 'react'

import { fetchData, changeProfilePicture } from '../actions'

const Profile = () => {
  const [data, setData] = useState({user: {}, isFetching: false})

  useEffect(() => {
    fetchData(data, setData)
  }, [data.user.username])

  return <>
    <section className="container">
      {data.user.username}
    </section>
  </>
}

export default Profile
