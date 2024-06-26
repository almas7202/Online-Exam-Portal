// import React from 'react'
import { useState } from 'react'
import './Navbar.css'
const Navbar = ({toggleRegister,toggleLogin,toggleQuestion}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light ">
    <a className="navbar-brand" href="#">Exam Portal</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item">Add Question</a>
            <a className="dropdown-item" href="#">get Question</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Create Exam</a>
          </div>
        </li>

      </ul>
      <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <button className="btn btn-outline-success mx-3" onClick={()=>toggleRegister()}>Register</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-outline-success me-3" onClick={()=>toggleLogin()}>Login</button>
                </li>
            </ul>


    </div>
   </nav>
 
  
  
  )
}

export default Navbar
