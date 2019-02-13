import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import myProfile from "./Routes/myProfile";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        }
      })
        .then(resp => resp.json())
        .then(resp => {
          this.props.addUser(resp.user);
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/user/:Username" component={Profile} />
          <Route exact path="/profile/:Username" component={myProfile}/>

        </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch({ type: "SET_USER", payload: user })
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
