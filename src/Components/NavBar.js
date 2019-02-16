import React from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
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
    return <div className="NavBar">
      <div className="NavDiv" onClick={()=>this.props.history.replace('/')}>Access Labs Leaderboard</div>
      {this.props.user ? <img alt="profile" src={this.props.user.avatar} className="NavDiv NavToProfile" onClick={()=>this.props.history.replace(`/profile/${this.props.user.username}`)}/> : null}
      {this.props.user ? <button className="SIB" onClick={()=>this.logout()}>Logout</button> :<React.Fragment><button className="SIB" onClick={()=>this.props.history.replace('/SignIn')}>Login</button><button className="SIB SUB" onClick={()=>this.props.history.replace('/Signup')}>SignUp</button></React.Fragment>}
    </div>;
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
