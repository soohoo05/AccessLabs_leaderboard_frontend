import React from 'react'
import { signIn } from "../Actions/UserActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
    state = {
        username : "",
        password: ""
    }
    changeHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    submitHandler = e => {
        e.preventDefault()
        this.props.signIn(this.state)
    }
  render () {
      console.log(this.props)
    return (
        <div className = "SignUp">
        <div className = "form-container">
            <div className="login-form">
            <form onChange = {this.changeHandler} onSubmit = {this.submitHandler}>
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
const mapDispatchToProps = dispatch => {
  return {
    signIn: (user) => {
      dispatch(signIn(user));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
)(SignIn)
);
