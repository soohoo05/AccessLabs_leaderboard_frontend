import React from 'react'
import { withRouter, Link} from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class LeaderBoardUser extends React.Component {
  changeHistory = () => {
    this.props.history.push(`/User/${this.props.user.username}`)
  }
  render () {
    return <tr>
                <CustomTableCell align="left">{this.props.rank}</CustomTableCell>
                <CustomTableCell align="left">{this.props.user.username}</CustomTableCell>
                <CustomTableCell align="left">{this.props.user.cohort_name}</CustomTableCell>
                <CustomTableCell align="left">{this.props.user.rejections.length}</CustomTableCell>
                <CustomTableCell align="left"><button onClick={()=>this.changeHistory()}>Profile</button></CustomTableCell>
            </tr>
      }
}

export default withRouter(LeaderBoardUser);
