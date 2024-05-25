// import React from 'react'
import Register from '../Register/Register'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light">
    <a className="navbar-brand" href="#">Exam Portal</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>

      </ul>

        <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={()=>{
          <Register />
        }}>Register</button>
        <button className="btn btn-outline-success my-2 my-sm-0" >Login </button>
      
    </div>
  </nav>
  )
}

export default Navbar
