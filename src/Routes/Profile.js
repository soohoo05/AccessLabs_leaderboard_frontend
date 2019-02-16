import React from "react";
import ProfileRejectionContainer from "../Containers/ProfileRejectionsContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { makeRejection } from "../Actions/UserActions";

class Profile extends React.Component {
  state = {
    display: false,
    user: "",
    ModalIsOpen:false,
    company:"",
    stage_of_rejection:"",
    rejection_url:"",
    errors:"",
    id:"",

  };
  componentDidMount() {

    this.getProfile()
  }
  getProfile = () =>{

    let theUsername = this.props.history.location.pathname.split("/")[2];
    let token = localStorage.getItem("token");
    axios.get("http://localhost:3000/api/v1/profile", {
        headers: {
          Authorization: token
        },
        params: {
          username: theUsername
        }
      })
      .then(res => {
        this.setState({
          user: res.data.user,
          id:res.data.user.id,
          rejectionsArr:res.data.user.rejections
        });
            })
  }


  renderProfile = () => {
    return (
      <React.Fragment>
        <div className="leftProfile">
        <img
          src={this.state.user.avatar}
          alt="avatar"
          className="avatarOnProfile"
        />
        <h1 className="profileH1">
          Name: {this.state.user.f_name} {this.state.user.l_name}
        </h1>
        <h1 className="profileH1">Username: {this.state.user.username}</h1>
        <h1 className="profileH1">Cohort Name: {this.state.user.cohort_name}</h1>
        </div>

        <div className="rejectionsDiv">
          <h1 className="rejectionHeader">Rejections</h1>
          {this.state.user.rejections ? (
            <ProfileRejectionContainer
              rejections={this.state.user.rejections}

              reRender={this.getProfile}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <div className="profileDiv">{ this.renderProfile()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createRejection : (rejectionObj) => {
      dispatch(makeRejection(rejectionObj))
    }
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile));
