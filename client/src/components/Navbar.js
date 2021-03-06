import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import navbrand from '../images/nav-brand.png'

import { useGlobalContext } from '../context'

const Navbar = ({userId}) => {

  const { setSearch } = useGlobalContext()

  return <>
    <nav className="nav navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src= {navbrand} alt="navbar-brand" className="navbar-brand" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={`/profile/${userId}`}>
                <i className="profile-icon fas fa-user-circle"></i>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input onChange={(e) => setSearch(e)} className="search-input form-control me-2" type="search" placeholder="&#xf002;   Search quote" aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>
    <div className="wave-1"></div>

  </>
}

export default Navbar
