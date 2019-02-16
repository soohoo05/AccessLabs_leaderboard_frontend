import React from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import {NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'
class NavBar extends React.Component {
  logout = () => {
    //to do: get rid of token
    console.log("a")
     localStorage.removeItem("token")
     this.props.deleteUser()
    this.props.history.replace('/')
  }

  render() {
    console.log(this.props.user)
    return (
        <nav className="navbar navbar-expand-lg navbar-default">
        <NavLink to ="/" className="navbar-brand"><h2>Access Labs Leaderboard</h2></NavLink>

          {this.props.user ?
               <div className = "top-right-buttons">

            <button
            className = "btn btn-outline-secondary"
            onClick={()=>this.logout()}>
            Sign Out
            </button>
            <button
              onClick={()=>this.props.history.replace(`/profile/${this.props.user.username}`)}
              className = "btn btn-outline-primary">
              Profile
          </button>
            </div>
            :   <div className = "top-right-buttons">
            <button
            className = "btn btn-outline-secondary"
            onClick={()=>this.props.history.replace('/Signup')}>
                Sign Up
            </button>
            <button className = "btn btn-outline-primary"
            onClick={()=>this.props.history.replace('/SignIn')}>
                Sign In
            </button>


            </div>
        }
        </nav>

    )

  }
}


const mapStateToProps = state => {
  return {    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch({ type: "DELETE_USER" })
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));
