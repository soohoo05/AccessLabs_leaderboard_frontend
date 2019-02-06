import React from 'react'

class LeaderBoardUser extends React.Component {
  render () {
    return <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.cohort_name}</td>
                <td>{this.props.user.rejections.length}</td>
            </tr>
      }
}

export default LeaderBoardUser;
