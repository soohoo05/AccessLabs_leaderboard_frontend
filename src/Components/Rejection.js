import React from "react";
import { connect } from "react-redux";
import { destroyRejection } from "../Actions/UserActions";

class Rejection extends React.Component {
  render() {
    let { aRejection } = this.props;
    return (
      <div>
        <h1>{aRejection.company}</h1>
        <p>{aRejection.stage_of_rejection}</p>
        <button onClick={() => window.open(aRejection.rejection_url)}>
          See Rejection
        </button>
        {this.props.OwnProfile ? <button onClick={()=>this.props.deleteRejection(aRejection)}>Delete Rejection</button> : null}
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
export default connect(null,mapDispatchToProps)(Rejection);
