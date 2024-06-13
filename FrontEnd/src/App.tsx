import { useState } from "react"
import Navbar from "./compoents/Navbar/Navbar"
import Register from "./compoents/Register/Register"
import Login from "./compoents/Login/Login"
import AddQuestion from "./compoents/AddQuestion/AddQuestion"


function App() {

  const [showRegister,setShowRegister] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [setQuestion,setShowQuestion] = useState(true)
  const toggleRegister = () =>{
    setShowRegister(!showRegister)
    setShowLogin(false)
    console.log(showRegister);
  }
  const toggleLogin = () =>{
    setShowLogin(!showLogin)
    setShowRegister(false)
  }
  const toggleQuestion = () =>{
    setShowQuestion(!setQuestion)
  }
  return (
    <>
      <Navbar toggleRegister={toggleRegister} toggleLogin={toggleLogin} toggleQuestion={toggleQuestion} />
      {showRegister && <Register /> }
      {showLogin && <Login />}
      {setQuestion && <AddQuestion />}
    </>
  )
}

export default App
