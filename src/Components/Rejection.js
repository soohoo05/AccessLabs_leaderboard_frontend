import React from "react";
import { connect } from "react-redux";
import { destroyRejection } from "../Actions/UserActions";
import { withRouter, Link} from "react-router-dom";


import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#1eb4e4",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class Rejection extends React.Component {
  deleteRej = () => {
    this.props.deleteRejection(this.props.aRejection)
    this.props.reRender()
  }
  render() {
    console.log(this.props.history.location.pathname.split('/')[1])
    let { aRejection } = this.props;
    return (
      <TableRow>
        <CustomTableCell>{aRejection.company}</CustomTableCell>
        <CustomTableCell>{aRejection.stage_of_rejection}</CustomTableCell>
        <CustomTableCell><button onClick={() => window.open(aRejection.rejection_url)}>
          See Rejection
        </button>
        </CustomTableCell>
    {this.props.history.location.pathname.split('/')[1] ==="profile" ?<CustomTableCell> <button onClick={()=>this.deleteRej()}>Delete Rejection</button></CustomTableCell>: null}
      </TableRow>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteRejection : (rejectionObj) => {
      dispatch(destroyRejection(rejectionObj))
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Rejection));
