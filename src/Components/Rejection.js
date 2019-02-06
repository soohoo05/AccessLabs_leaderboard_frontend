import React from "react";

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
        {this.props.OwnProfile ? <button>Delete Rejection</button> : null}
      </div>
    );
  }
}

export default Rejection;
