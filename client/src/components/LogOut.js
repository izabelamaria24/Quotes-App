import React from 'react'

import { useGlobalContext } from '../context'

const LogOut = () => {
  const { state: { isLogOutModalOpen }, closeLogOutModal } = useGlobalContext()

  return <section className={`${isLogOutModalOpen ? "show flex-center modal-wrapper" : "modal-wrapper"}`}>
    <section className="modal-container flex-center flex-column">
      <h3 className="text-center">Are you sure do you want to log out?</h3>
      <button className="btn btn-lg btn-warning mt-4">Log Out</button>
      <button onClick={closeLogOutModal} className="modal-close-btn"><i className="fas fa-solid fa-arrow-left"></i></button>
    </section>
  </section>
}

export default LogOut
