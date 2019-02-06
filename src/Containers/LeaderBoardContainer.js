import React from 'react'
import LeaderBoardUser from '../Components/LeaderBoardUser'
class LeaderBoardContainer extends React.Component {

    state = {
        users:[]
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/users')
        .then(resp => resp.json())
        .then(users => this.setState({users}))
    }

    renderLeaderboardRow = () =>{
        return this.state.users.map(user => <LeaderBoardUser user = {user}/>)
    }
  render () {
      console.log(this.state)
    return (
      <React.Fragment>

        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
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

export default LeaderBoardContainer;
