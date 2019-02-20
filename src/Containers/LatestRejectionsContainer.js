import React from "react";
import LatestRejection from "../Components/LatestRejection";
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
    fontSize:20
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class LatestRejectionContainer extends React.Component {
  render() {

    let rejections
    if(this.props.rejections){
    rejections = this.props.rejections.map(rejection => (
      <LatestRejection
        aRejection={rejection}
        key={rejection.id}
        OwnProfile={this.props.OwnProfile}
        reRender={this.props.reRender}
      />
    ));
}
    return <div className="ProfileRejectionContainer">
        <Table>
            <TableHead>
                <TableRow>
                    <CustomTableCell>Company</CustomTableCell>
                    <CustomTableCell>Stage of Rejection</CustomTableCell>
                    <CustomTableCell>Image</CustomTableCell>
                    <CustomTableCell>Date</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rejections}
            </TableBody>
        </Table>
    </div>;

  }

}

export default LatestRejectionContainer;
