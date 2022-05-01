import React from 'react'

import { useGlobalContext } from '../context'

const DeleteAccount = () => {
  const { state: { isDeleteAccountModalOpen }, closeDeleteAccountModal } = useGlobalContext()

  return <section className={`${isDeleteAccountModalOpen ? "show flex-center modal-wrapper" : "modal-wrapper"}`}>
    <section className="modal-container flex-center flex-column">
      <h3 className="text-center">Are you sure do you want do delete your account?</h3>
      <button className="btn btn-lg btn-danger mt-4">Delete</button>
      <button onClick={closeDeleteAccountModal} className="modal-close-btn"><i className="fas fa-solid fa-arrow-left"></i></button>
    </section>
  </section>
}

export default DeleteAccount
