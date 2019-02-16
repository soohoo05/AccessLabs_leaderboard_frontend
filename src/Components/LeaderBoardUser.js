import React from 'react'
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({

  body: {
    backgroundColor: theme.palette.common.white,
    fontSize: 20,
  },
}))(TableCell);


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
    return <TableRow>
                <CustomTableCell align="left">{this.props.rank}</CustomTableCell>
                <CustomTableCell align="left"><img alt="profile" src = {this.props.user.avatar} className = "leaderboard-avatar"/>{this.props.user.username}</CustomTableCell>
                <CustomTableCell align="left">{this.props.user.cohort_name}</CustomTableCell>
                <CustomTableCell align="left">{this.props.user.rejections.length}</CustomTableCell>
                <CustomTableCell align="left"><button onClick={()=>this.changeHistory()}>Profile</button></CustomTableCell>

            </TableRow>
      }
}
const mapStateToProps = state => {
  return {
    currentUser: state.user
  };
};
export default withRouter(connect(mapStateToProps)(LeaderBoardUser));
