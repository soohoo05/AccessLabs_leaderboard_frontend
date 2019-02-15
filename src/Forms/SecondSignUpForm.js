import React from "react";
import CohortSelect from "./CohortSelect";
import { CloudinaryContext } from "cloudinary-react";
class SecondSignUpForm extends React.Component {
  render() {
    let {
      changeHandler,
      state,
      backHandler,
      submitHandler,
      imageSubmit
    } = this.props;
    return (
     <div className = "login-form">
        <input
          type="text"
          placeholder="First Name"
          value={state.f_name}
          name="f_name"
          onChange={e => changeHandler(e)}
        />
        <br/>
      <br/>
        <input
          type="text"
          placeholder="Last Name"
          value={state.l_name}
          name="l_name"
          onChange={e => changeHandler(e)}
        />
        <br/>
      <br/>
        <CohortSelect value={state.cohort_name} changeHandler={changeHandler} />
          <br/>
        <br/>
        <CloudinaryContext cloudName="dz1dbcszc" className="signupbuttons">
          <button
            className="fluid"
            color="black"
            id="upload_widget_opener"
            onClick={imageSubmit}
          >
            Upload a picture
          </button>
        </CloudinaryContext>
        <br/>
      <br/>
        <button onClick={() => backHandler()}>Back</button>
          <br/>
        <br/>
        <button onClick={() => submitHandler()}>Submit</button>
      </div>
    );
  }
}

export default SecondSignUpForm;
