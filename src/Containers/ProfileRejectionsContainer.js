import React from "react";
import Rejection from "../Components/Rejection";
class ProfileRejectionContainer extends React.Component {
  render() {
    let rejections = this.props.rejections.map(rejection => (
      <Rejection
        aRejection={rejection}
        key={rejection.id}
        OwnProfile={this.props.OwnProfile}
        reRender={this.props.reRender}
      />
    ));
    return <div className="ProfileRejectionContainer">{rejections}</div>;
  }
}

export default ProfileRejectionContainer;
