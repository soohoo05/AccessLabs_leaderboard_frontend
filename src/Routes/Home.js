import React from 'react'
import LeaderBoardContainer from '../Containers/LeaderBoardContainer'
class Home extends React.Component {
  render () {
    return (
      <div className = "home-container">
      <h1>Access Labs Leaderboard</h1>
      <LeaderBoardContainer/>
      </div>
    );
  }
}

export default Home;
