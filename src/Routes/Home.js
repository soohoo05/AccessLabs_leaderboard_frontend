import React from 'react'
import LeaderBoardContainer from '../Containers/LeaderBoardContainer'
import Fade from 'react-reveal/Fade';
class Home extends React.Component {
  render () {
    return (
      <div className = "home-container">
        <Fade top duration={1000}>
      <h1>Access Labs Leaderboard</h1>
      </Fade>
      <Fade duration={1500}>
      <LeaderBoardContainer/>
      </Fade>

      </div>
    );
  }
}

export default Home;
