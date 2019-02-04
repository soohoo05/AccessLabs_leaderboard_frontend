import React from 'react';

class FirstSignUpForm extends React.Component {
  render() {
     let {state , changeHandler, nextHandler} = this.props
    return(
      <React.Fragment>
      <input type="text" placeholder="Username" value={state.username} name="username" onChange={(e)=>changeHandler(e)}/>
      <input type="text" placeholder="Email" value={state.email} name="email" onChange={(e)=>changeHandler(e)}/>
      <input type="password" placeholder="Password" value={state.password} name="password" onChange={(e)=>changeHandler(e)}/>
      <input type="password" placeholder="Password Confirmation" value={state.passwordConfirmation} name="passwordConfirmation" onChange={(e)=>changeHandler(e)}/>
      <button onClick={()=>nextHandler()}>Next</button>
      </React.Fragment>
    )
  }
}

export default FirstSignUpForm;
