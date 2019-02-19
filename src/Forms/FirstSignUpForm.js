import React from "react";

class FirstSignUpForm extends React.Component {
  render() {
      console.log(this.props)
    let { state, changeHandler, nextHandler } = this.props;
    return (
      <div className = "login-form">

      <form>
      <h2 className="text-center">Sign Up</h2>
      <div className = "form-group">
        <input
          type="text"
          placeholder="Username"
          value={state.username}
          name="username"
          onChange={e => changeHandler(e)}
          className="form-control"
          required="required"
        />
        </div>

        <div className = "form-group">
        <input
          type="email"
          required="required"
          placeholder="Email"
          value={state.email}
          name="email"
          onChange={e => changeHandler(e)}
          className="form-control"

        />
     </div>
     <div className = "form-group">
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          name="password"
          onChange={e => changeHandler(e)}
          className="form-control"
          required="required"
        />
        </div>
        <div className = "form-group">
        <input
          type="password"
          placeholder="Password Confirmation"
          value={state.passwordConfirmation}
          name="passwordConfirmation"
          onChange={e => changeHandler(e)}
          className="form-control"
          required="required"
        />
        </div>
        <button
        onClick={() => nextHandler()}
        className="btn btn-primary btn-block"
        >
            Next
        </button>
        </form>
      </div>
    );
  }
}

export default FirstSignUpForm;
