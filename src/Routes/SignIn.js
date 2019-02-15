import React from 'react'

class SignIn extends React.Component {
  render () {
    return (
        <div className = "SignUp">
        <div className = "form-container">
            <div className="login-form">
            <form>
                <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" name = "username"
                        placeholder="Username" required="required"/>
                    </div>
                    <div className="form-group">
                       <input type="password" className="form-control" name = "password"
                        placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                       <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                       <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                       <button className="pull-right">Forgot Password?</button>
                    </div>
            </form>
            <p className="text-center"><button>Create an Account</button></p>
        </div>
        </div>
        </div>
    )
  }
}

export default SignIn;
