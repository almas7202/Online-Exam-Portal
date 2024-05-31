import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import { json } from 'express'
function Register() {
    type user_type = {
        userName: string,
        userEmail: string,
        userPassword: string,
        userRole: string
    }
    const [userForm, setuserForm] = useState<user_type>({
        userName: "",
        userEmail: "",
        userPassword: "",
        userRole: ""
    })
    const handleSting = (e: any) => {
        const { name, value } = e.target
        setuserForm({ ...userForm, [name]: value })
    }
    const handlerole = (e: any) => {
        setuserForm({ ...userForm, userRole: e.target.value })
    }
    const validation = () => {
        let flag =0
        if (userForm.userName.length == 0 || userForm.userName.length <= 4) {
           document.getElementById('userError').innerHTML = 'Please Enter valid Username '
        } else {
            flag = flag + 1
            document.getElementById('userError').innerHTML = ''
        }
        if (userForm.userEmail.length == 0) {
             document.getElementById('userEmail').innerHTML = 'Please Enter Email'
        } else {
            flag = flag + 1
            document.getElementById('userEmail').innerHTML = ''
        }
        if (userForm.userPassword.length == 0 || userForm.userPassword.length <= 8) {
             document.getElementById('userPassword').innerHTML = 'Please Enter valid Password'
        } else {
            flag = flag + 1
            document.getElementById('userPassword').innerHTML = ''
        }
        if (userForm.userRole.length == 0) {
            document.getElementById('userRole').innerHTML = 'Please select Role'
        } else {
            flag = flag + 1
            document.getElementById('userRole').innerHTML = ''
        }
        return flag
    }

    const handlesubmit = (e: any) => {
        e.preventDefault()
       const valid = validation()
        if (valid == 4){
            axios.post('http://localhost:3000/user/newUser',{userForm})
            .then((res)=>console.log(res.data))
            .then(()=>{
                setuserForm({
                    userName:"",
                    userEmail:"",
                    userPassword:"",
                    userRole:""
                })
            })
            .catch((err)=>console.log(err))
        }

    }

console.log(userForm)
return (
    <div>
        <div className="container centered-form mt-2">
            <div className="row">
                <div className="col-md-6 offset-md-3 border mt-2">
                    <form onSubmit={(e) => handlesubmit(e)}>

                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" id="userName" name="userName" placeholder="Enter Username" onChange={(e) => handleSting(e)} />
                            <label id='userError' style={{ color: "red" }}></label>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email" name="userEmail" placeholder="name@example.com" onChange={(e) => handleSting(e)} />
                            <label id='userEmail' style={{ color: "red" }}></label>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" name="userPassword" placeholder="Password" onChange={(e) => handleSting(e)} />
                            <label id='userPassword' style={{ color: "red" }}></label>
                        </div>
                        <div className='form-group'>
                            <label>Role</label>
                            <select className="form-select" id='role' name="userRole" aria-label="select example" onChange={(e) => handlerole(e)}>
                                <option selected>select Role</option>
                                <option value="student">student</option>
                                <option value="professor">professor</option>
                            </select>
                            <label id='userRole' style={{ color: "red" }}></label>
                        </div>

                        <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Register
