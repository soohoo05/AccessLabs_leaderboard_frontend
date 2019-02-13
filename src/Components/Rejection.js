import React from "react";
import { connect } from "react-redux";
import { destroyRejection } from "../Actions/UserActions";
import { withRouter, Link} from "react-router-dom";

class Rejection extends React.Component {
  deleteRej = () => {
    this.props.deleteRejection(this.props.aRejection)
    this.props.reRender()
  }
  render() {
    console.log(this.props.history.location.pathname.split('/')[1])
    let { aRejection } = this.props;
    return (
      <div>
        <h1>{aRejection.company}</h1>
        <p>{aRejection.stage_of_rejection}</p>
        <button onClick={() => window.open(aRejection.rejection_url)}>
          See Rejection
        </button>
    {this.props.history.location.pathname.split('/')[1] ==="profile" ? <button onClick={()=>this.deleteRej()}>Delete Rejection</button>: null}
      </div>
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
