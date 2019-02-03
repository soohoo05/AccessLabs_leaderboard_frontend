import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Routes/Home'
import Profile from './Routes/Profile'
import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'
class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/SignIn' component={SignIn}/>
        <Route exact path='/SignUp' component={SignUp}/>
        <Route exact path='/User/:Username' component={Profile}/>

      </Switch>
    </React.Fragment>
    );
  }
}

export default App;
