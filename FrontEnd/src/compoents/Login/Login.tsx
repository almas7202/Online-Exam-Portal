import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container centered-form mt-2">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border mt-2">
                        <form>

                            <div className="form-group">
                                <label>UserName</label>
                                <input type="text" className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                                <button className="btn btn-primary" type="button">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
