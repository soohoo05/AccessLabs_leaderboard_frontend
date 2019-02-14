import React from 'react'
import LeaderBoardUser from '../Components/LeaderBoardUser'
import * as actions from '../Actions/LeaderboardActions'
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class LeaderBoardContainer extends React.Component {

    state = {
        users:[]
    }

    componentDidMount(){
        this.props.loadLeaderboard()
        fetch('http://localhost:3000/api/v1/users')
        .then(resp => resp.json())
        .then(users => this.setState({users}))
    }

    renderLeaderboardRow = () =>{
        let i = 1
        return this.state.users.map(user => <LeaderBoardUser rank = {i++} user = {user} key={user.id}/>)
    }

  render () {
    return (

     <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <CustomTableCell>Rank</CustomTableCell>
                    <CustomTableCell>Username</CustomTableCell>
                    <CustomTableCell>Cohort</CustomTableCell>
                    <CustomTableCell>Points</CustomTableCell>
                    <CustomTableCell>Profile</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.users ? this.renderLeaderboardRow() : null}
            </TableBody>
        </Table>
        </Paper>


  )
}

}
const mapStateToProps = state => {
  return {
    user: state.currentUser,
    leaderboard: state.leaderboard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLeaderboard: () => dispatch(actions.loadLeaderboard())
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(LeaderBoardContainer);
