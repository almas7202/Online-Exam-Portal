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
                            <div className="d-flex justify-content-center mb-3">
                                <button className="btn btn-primary btn-block mx-auto" type="button">Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login
