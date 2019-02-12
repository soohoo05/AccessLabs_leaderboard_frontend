import React from 'react'
import { withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";

class LeaderBoardUser extends React.Component {
  changeHistory = () => {
    let OwnProfile =
      this.props.user.username===this.props.currentUser.username

    if(OwnProfile){
      this.props.history.push(`/profile/${this.props.currentUser.username}`)
    }
    else{
    this.props.history.push(`/User/${this.props.user.username}`)
  }
  }
  render () {
    return <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.cohort_name}</td>
                <td>{this.props.user.rejections.length}</td>
                <td><button onClick={()=>this.changeHistory()}>Profile</button></td>
            </tr>
      }
}
const mapStateToProps = state => {
  return {
    currentUser: state.user
  };
};
export default withRouter(connect(mapStateToProps)(LeaderBoardUser));
