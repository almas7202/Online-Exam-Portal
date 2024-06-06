import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    type user_login ={
        userName:string,
        userPassword:string
    }
    const [userlogin,setuserlogin] = useState<user_login>({
        userName:"",
        userPassword:""
    })
    const handleSting =(e:any) =>{
        const {name,value} = e.target
        setuserlogin({...userlogin,[name]:value})
    }
    
    console.log(userlogin)
    const validation = () =>{
        let flag =0 
        if(userlogin.userName.length == 0 || userlogin.userName.length <=4 ){
            document.getElementById('userNameErr').innerHTML = 'Please Enter Valid Username'
        }else{
            flag = flag + 1
            document.getElementById('userNameErr').innerHTML = ''
        }
        console.log(userlogin.userPassword.length)
        if(userlogin.userPassword,length == 0 && userlogin.userPassword.length <= 8){
            document.getElementById('userPasswordErr').innerHTML = 'Please Enter Valid password'
        }else{
            flag = flag + 1
            document.getElementById('userPasswordErr').innerHTML = ''
        }
        return flag
    }

    const handlesubmit = (e:any) =>{
        e.preventDefault()
        const valid = validation()
        console.log(valid);
        
        if(valid == 2){
            axios.post('http://localhost:3000/user/login',{...userlogin})
            .then((res)=>{
                const token = res.data
                localStorage.setItem('token', token);
            })
            .then(()=>{
                setuserlogin({
                    userName:"",
                    userPassword:""
                })
            })
            .catch((err)=>console.log(err))
        }
    }
    return (
        <div>
            <div className="container centered-form mt-2">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border mt-2">
                        <form onSubmit={(e)=>handlesubmit(e)}>

                            <div className="form-group">
                                <label>UserName</label>
                                <input type="text" name='userName' className="form-control" placeholder="Enter Username" onChange={(e)=>handleSting(e)} />
                                <label id='userNameErr' style={{color:"red"}}></label>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='userPassword' className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>handleSting(e)}/>
                                <label id='userPasswordErr' style={{color:"red"}}></label>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
