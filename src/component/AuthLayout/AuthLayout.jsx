import React from 'react'
import { Outlet } from 'react-router-dom'
import image from '../../assets/images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        <img src={image} alt="logo" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link  ps-4" aria-current="page" to="/signin">Sign In</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  ps-4" aria-current="page" to="/signup">Sign Up</NavLink>
            
          </li>
          
        </ul>

      </div>
    </div>
      </nav>
     <Outlet/>
    </>
  )
}
