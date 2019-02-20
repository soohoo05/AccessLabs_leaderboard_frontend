import React from "react";
import FirstSignUpForm from "../Forms/FirstSignUpForm";
import SecondSignUpForm from "../Forms/SecondSignUpForm";
import { signUp } from "../Actions/UserActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Fade from 'react-reveal/Fade';

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
  componentDidMount(){
    let token = localStorage.getItem("token");
    if(token){
      this.props.history.replace(`/`)
    }
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  changeHandlerPass = e => {
      let msg = e.target
    this.setState({
      [e.target.name]: e.target.value
  }, () =>{
      if (this.state.password !== this.state.passwordConfirmation) {
          msg.setCustomValidity("Passwords do not match")
          msg.reportValidity()
      }else if(this.state.password === this.state.passwordConfirmation) {
          msg.setCustomValidity("")
          msg.reportValidity()
      }
  })

  };
  nextHandler = () => {
    if (
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
  submitHandler = (e) => {
    e.preventDefault()
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
        cloudName: "drxxuymxa",
        uploadPreset: "o8bboijd"
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

        <div className = "container">
        <div className = "form-container">
          <Fade duration={900}>
        <div className="login-form">

        {!this.state.next ? (
          <FirstSignUpForm
            changeHandler={this.changeHandler}
            nextHandler={this.nextHandler}
            state={this.state}
            changeHandlerPass = {this.changeHandlerPass}
          />
        ) : null}
        {this.state.next ? (
          <Fade right duration={1000}>
          <SecondSignUpForm
            changeHandler={this.changeHandler}
            backHandler={this.backHandler}
            imageSubmit={this.imageSubmit}
            state={this.state}
            submitHandler={this.submitHandler}
          />
      </Fade>
        ) : null}
        </div>
      </Fade>
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
