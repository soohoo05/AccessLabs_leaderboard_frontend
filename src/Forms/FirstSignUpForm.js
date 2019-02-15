import React from "react";

class FirstSignUpForm extends React.Component {
  render() {
    let { state, changeHandler, nextHandler } = this.props;
    return (
      <div className = "login-form">
      <h2 className="text-center">Sign Up</h2>
      <div className = "form-group">
        <input
          type="text"
          placeholder="Username"
          value={state.username}
          name="username"
          onChange={e => changeHandler(e)}
        />
        </div>

        <div className = "form-group">
        <input
          type="text"
          placeholder="Email"
          value={state.email}
          name="email"
          onChange={e => changeHandler(e)}
        />
     </div>
     <div className = "form-group">
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          name="password"
          onChange={e => changeHandler(e)}
        />
        </div>
        <div className = "form-group">
        <input
          type="password"
          placeholder="Password Confirmation"
          value={state.passwordConfirmation}
          name="passwordConfirmation"
          onChange={e => changeHandler(e)}
        />
        </div>
        <button onClick={() => nextHandler()}>Next</button>
      </div>
    );
  }
}

export default FirstSignUpForm;
