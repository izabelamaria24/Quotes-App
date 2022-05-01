import React, { useState, useEffect } from 'react'

import { fetchData, changeProfilePicture } from '../actions'

import profileInterface from '../images/profileInterface.gif'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../context'

const Profile = () => {
  const [data, setData] = useState({user: {}, isFetching: false})
  const { openLogOutModal, openDeleteAccountModal } = useGlobalContext()

  useEffect(() => {
    fetchData(data, setData)
  }, [data.user.username])

  return <>
    <section className="profile-section">
      <section className="profile-user-info full-w-h d-flex align-items-center justify-content-center flex-column">
        <h1>@{data.user.username}</h1>
        <Link to={`/profile/${data.user._id}/my-quotes`}><button className="btn btn-lg btn-dark profile-my-quotes">My Quotes</button></Link>
        <button onClick={openLogOutModal} className="btn btn-lg btn-dark profile-logout">Log Out</button>
        <button onClick={openDeleteAccountModal} className="btn btn-lg btn-dark profile-delete-acc">Delete Account</button>
      </section>
      <section className="profile-img full-w-h d-flex align-items-center justify-content-center">
        <img src={profileInterface} alt="profile-interface"></img>
      </section>
    </section>
  </>
}

export default Profile
