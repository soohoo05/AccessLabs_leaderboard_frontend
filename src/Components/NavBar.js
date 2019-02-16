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
                onClick={()=>this.props.history.replace(`/profile/${this.props.user.username}`)}>
                Profile
            </button>
            <button className="SIB" onClick={()=>this.logout()}>
            Sign Out</button>
            </div>
            :   <div className = "top-right-buttons">
            <button className="SIB" onClick={()=>this.props.history.replace('/SignIn')}>
                Sign In
            </button>

            <button className="SIB SUB" onClick={()=>this.props.history.replace('/Signup')}>
                Sign Up
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
