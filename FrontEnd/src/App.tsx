import { useState } from "react"
import Navbar from "./compoents/Navbar/Navbar"
import Register from "./compoents/Register/Register"
import Login from "./compoents/Login/Login"


function App() {

  const [showRegister,setShowRegister] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const toggleRegister = () =>{
    setShowRegister(!showRegister)
    console.log(showRegister);
  }
  const toggleLogin = () =>{
    setShowLogin(!showLogin)
  }
  return (
    <>
      <Navbar toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
      {showRegister ? <Register /> : null}
      {showLogin ? <Login /> : null}
     
    </>
  )
}

export default App
