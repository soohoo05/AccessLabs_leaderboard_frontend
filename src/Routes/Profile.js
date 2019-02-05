import React from "react";
import ProfileRejectionContainer from "../Containers/ProfileRejectionsContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";

class Profile extends React.Component {
  state = {
    display: false,
    user: ""
  };
  componentDidMount() {
    let theUsername = this.props.history.location.pathname.split("/")[2];
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/profile", {
        headers: {
          Authorization: token
        },
        params: {
          username: theUsername
        }
      })
      .then(res => {
        this.setState({
          user: res.data.user
        });
      });
  }
  imageSubmit = () => {
    var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: "dz1dbcszc",
        uploadPreset: "igzkbflf"
      },
      (error, result) => {
        if (result.info.secure_url) {
          //work on adding a rejection
        }
      }
    );
  };
  renderCloudinary = () => {
    return (
      <CloudinaryContext cloudName="dz1dbcszc" className="signupbuttons">
        <button
          className="fluid"
          color="black"
          id="upload_widget_opener"
          onClick={() => this.imageSubmit()}
        >
          Upload a Rejection
        </button>
      </CloudinaryContext>
    );
  };
  renderProfile = () => {
    let OwnProfile =
      this.props.history.location.pathname ===
      `/User/${this.props.user.username}`;
    return (
      <React.Fragment>
        <img
          src={this.state.user.avatar}
          alt="avatar"
          className="avatarOnProfile"
        />
        <h1>
          Name: {this.state.user.f_name} {this.state.user.l_name}
        </h1>
        <h1>Username: {this.state.user.username}</h1>
        <h1>Email: {this.state.user.email}</h1>
        <h1>Cohort Name: {this.state.user.cohort_name}</h1>
        {OwnProfile ? this.renderCloudinary() : null}
        <div className="rejectionsDiv">
          <h1>Rejections</h1>
          {this.state.user.rejections ? (
            <ProfileRejectionContainer
              rejections={this.state.user.rejections}
              OwnProfile={OwnProfile}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <div>{this.state.user ? this.renderProfile() : null}</div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps)(Profile));
