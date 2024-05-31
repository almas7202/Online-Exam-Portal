import { useState } from "react"
import Navbar from "./compoents/Navbar/Navbar"
import Register from "./compoents/Register/Register"
import Login from "./compoents/Login/Login"


function App() {

  const [showRegister,setShowRegister] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const toggleRegister = () =>{
    setShowRegister(!showRegister)
    setShowLogin(false)
    console.log(showRegister);
  }
  const toggleLogin = () =>{
    setShowLogin(!showLogin)
    setShowRegister(false)
  }
  return (
    <>
      <Navbar toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
      {showRegister && <Register /> }
      {showLogin && <Login />}
     
    </>
  )
}

export default App
