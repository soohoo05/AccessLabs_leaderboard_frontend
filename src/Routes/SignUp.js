import React from "react";
import FirstSignUpForm from "../Forms/FirstSignUpForm";
import SecondSignUpForm from "../Forms/SecondSignUpForm";
import { signUp } from "../Actions/UserActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class SignUp extends React.Component {
  state = {
    f_name: "",
    l_name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    cohort_name: "---",
    next: false,
    errors: "",
    avatar:
      "https://banner2.kisspng.com/20180406/xxw/kisspng-user-profile-facebook-clip-art-passport-5ac82fb9a13376.6053831915230688576603.jpg"
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  nextHandler = () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({
        errors: "Password and Password Confirmation do not match!"
      });
    } else if (
      this.state.username.length === 0 ||
      this.state.email.length === 0 ||
      this.state.password.length === 0
    ) {
      this.setState({ errors: "Fields cannot be left Blank!" });
    } else {
      this.setState({
        next: true
      });
    }
  };
  backHandler = () => {
    this.setState({
      next: false
    });
  };
  submitHandler = () => {
    if (
      this.state.f_name.length === 0 ||
      this.state.l_name.length === 0 ||
      this.state.cohort_name === "---"
    ) {
      debugger;
      this.setState({
        errors: "Fields cannot be left blank!"
      });
    } else {
      let body = { ...this.state };
      delete body["next"];
      delete body["errors"];
      delete body["passwordConfirmation"];
      this.props.setUser(body, this.props.history);
    }
  };
  imageSubmit = () => {
    var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: "dz1dbcszc",
        uploadPreset: "igzkbflf"
      },
      (error, result) => {
        if (result.info.secure_url) {
          this.setState({ avatar: result.info.secure_url });
        }
      }
    );
  };
  render() {
    return (
      <div>
      <div>
        {this.state.errors ? <h1>{this.state.errors}</h1> : null}
        {!this.state.next ? (
          <FirstSignUpForm
            changeHandler={this.changeHandler}
            nextHandler={this.nextHandler}
            state={this.state}
          />
        ) : null}
        {this.state.next ? (
          <SecondSignUpForm
            changeHandler={this.changeHandler}
            backHandler={this.backHandler}
            imageSubmit={this.imageSubmit}
            state={this.state}
            submitHandler={this.submitHandler}
          />

        ) : null}
      </div>
    </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUser: (user, history) => {
      dispatch(signUp(user, history));
    }
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignUp)
);
