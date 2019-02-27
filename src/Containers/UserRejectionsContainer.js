import React from "react";
import Rejection from "../Components/Rejection";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#1eb4e4",
    color: theme.palette.common.white,
    fontSize:20,
    fontFamily: 'Oswald, sans-serif;'
  },
  body: {
    fontSize: 14,
    textAlign:'left',
    paddingLeft:'4vw'
  },
}))(TableCell);


class UserRejectionsContainer extends React.Component {
  render() {

    let rejections
    if(this.props.rejections){
    rejections = this.props.rejections.map(rejection => (
      <Rejection
        aRejection={rejection}
        key={rejection.id}
        OwnProfile={this.props.OwnProfile}
        reRender={this.props.reRender}
      />
    ));
}
    return <div className="ProfileRejectionContainer">

        <Table >
            <TableHead>
                <TableRow>
                    <CustomTableCell>Company</CustomTableCell>
                    <CustomTableCell>Stage of Rejection</CustomTableCell>
                    <CustomTableCell>Image</CustomTableCell>
                </TableRow>
            </TableHead>
            </Table>
            <div style={{ overflow: 'auto', height: '50vh' }}>
            <Table>
            <TableBody>
                {rejections}
            </TableBody>
        </Table>
        </div>
    </div>;

  }

}

export default UserRejectionsContainer;
