import React from "react";
import { connect } from "react-redux";
import { withRouter, Link} from "react-router-dom";
class NavBar extends React.Component {
  logout = () => {
    //to do: get rid of token
    this.props.history.replace('/')
  }

  render() {
    // console.log(this.props.user)
    return <div className="NavBar">
      <div className="NavDiv" onClick={()=>this.props.history.replace('/')}>Access Labs Leaderboard</div>
      {this.props.user ? <div className="NavDiv NavToProfile" onClick={()=>this.props.history.replace(`/profile/${this.props.user.username}`)}>Profile</div> : null}
      {this.props.user ? <div className="NavDiv NavLog" onClick={()=>this.logout()}>Logout</div> :<div className="NavLog" onClick={()=>this.props.history.replace('/SignIn')}>Login</div>}
    </div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps)(NavBar));
