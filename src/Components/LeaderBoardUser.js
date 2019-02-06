import React from 'react'
import { withRouter, Link} from "react-router-dom";

class LeaderBoardUser extends React.Component {
  changeHistory = () => {
    this.props.history.push(`/User/${this.props.user.username}`)
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

export default withRouter(LeaderBoardUser);
