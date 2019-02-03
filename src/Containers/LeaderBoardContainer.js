import React from 'react'
import LeaderBoardUser from '../Components/LeaderBoardUser'
class LeaderBoardContainer extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h1>LBContainer</h1>
      <LeaderBoardUser/>
      </React.Fragment>
    );
  }
}

export default LeaderBoardContainer;
