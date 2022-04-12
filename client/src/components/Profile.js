import React, { useState, useEffect } from 'react'

import { fetchData, changeProfilePicture } from '../actions'

const Profile = () => {
  const [data, setData] = useState({user: {}, isFetching: false})

  useEffect(() => {
    fetchData(data, setData)
  }, [data.user.username])

  return <>
    <section className="container">
      <section className="row">
        <div className="col-6">
          <img src={data.user.profilePicture} alt="profile-picture" />
          <input type="file" name="profilePicture" accept="image/*" onChange = {(e) => setData({...data, user: {...data.user, profilePicture: e.target.value}})}/>
          <button type="submit" onClick={() => changeProfilePicture(data.user.profilePicture)}>change profile picture</button>
          {data.user.username}
        </div>
        <div className="col-6">

        </div>
      </section>
    </section>
  </>
}

export default Profile
