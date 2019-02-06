import React from 'react'
import LeaderBoardUser from '../Components/LeaderBoardUser'
import * as actions from '../Actions/LeaderboardActions'
import { connect } from "react-redux";
class LeaderBoardContainer extends React.Component {

    state = {
        users:[]
    }

    componentDidMount(){
        this.props.loadLeaderboard()
        // fetch('http://localhost:3000/api/v1/users')
        // .then(resp => resp.json())
        // .then(users => this.setState({users}))
    }

    renderLeaderboardRow = () =>{
        let i = 1
        return this.state.users.map(user => <LeaderBoardUser rank = {i++} user = {user}/>)
    }
  render () {
      console.log(this.props)
    return (
      <React.Fragment>

        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Cohort</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {this.renderLeaderboardRow()}
            </tbody>
        </table>


      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    leaderboard: state.leaderboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLeaderboard: () => dispatch(actions.loadLeaderboard())
  };
};

export default connect (null, mapDispatchToProps)(LeaderBoardContainer);
