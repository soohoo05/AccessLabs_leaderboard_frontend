import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import myProfile from "./Routes/myProfile";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import Rejections from "./Routes/Rejections";
import AddCohort from "./Forms/AddCohort"
import { connect } from "react-redux";
import Footer from "./Components/Footer";

class App extends Component {
  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch("https://leaderboard-backend.herokuapp.com/api/v1/current_user", {
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
      console.log('%cSite made by Matt Dizon & Tyler Soo Hoo ', 'color:  #0084b2;  font-size: 40px;');
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/user/:Username" component={Profile} />
          <Route exact path="/profile/:Username" component={myProfile}/>
          <Route exact path="/AddCohort" component={AddCohort}/>
          <Route exact path="/Rejections" component={Rejections}/>
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
