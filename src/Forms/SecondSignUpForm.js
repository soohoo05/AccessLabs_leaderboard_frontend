import React from "react";
import CohortSelect from "./CohortSelect";
import { CloudinaryContext } from "cloudinary-react";
class SecondSignUpForm extends React.Component {
  cloud = (e) => {
    e.preventDefault()
    this.props.imageSubmit()
  }
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
     <form>
     <h2 className="text-center">Sign Up</h2>
     <div className = "form-group">
        <input
          type="text"
          placeholder="First Name"
          value={state.f_name}
          name="f_name"
          onChange={e => changeHandler(e)}
          className="form-control"
        />
        </div>
        <div className = "form-group">
        <input
          type="text"
          placeholder="Last Name"
          value={state.l_name}
          name="l_name"
          onChange={e => changeHandler(e)}
          className="form-control"
        />
        </div>
        <CohortSelect value={state.cohort_name} changeHandler={changeHandler} />
      </form>
        <div className = "form-group">
        <CloudinaryContext cloudName="dz1dbcszc" className="signupbuttons">
        <br/>
          <button
            className="fluid"
            color="black"
            id="upload_widget_opener"
            onClick={(e)=>this.cloud()}
            className="btn btn-primary btn-block"
          >

            Upload a picture
          </button>
        </CloudinaryContext>
    </div>
    <div className = "form-group">
        <button
        onClick={() => backHandler()}
        className="btn btn-primary btn-block"
        >
            Back
        </button>
    </div>
    <div className = "form-group">
        <button
        onClick={(e) => submitHandler(e)}
        className="btn btn-primary btn-block"
        >
        Submit</button>
        </div>
      </div>

    );
  }
}

export default SecondSignUpForm;
