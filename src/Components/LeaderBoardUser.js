import React from 'react'

class LeaderBoardUser extends React.Component {
  render () {
    return <tr>
                <td>Rank Placeholder</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.rejections.length}</td>
            </tr>
      }
}

export default LeaderBoardUser;
