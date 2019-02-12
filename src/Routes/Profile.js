import React from "react";
import ProfileRejectionContainer from "../Containers/ProfileRejectionsContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";
import Modal from 'react-modal';
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
    id:""
  };
  componentDidMount() {
    this.getProfile()
  }
  getProfile = () =>{
    console.log("rerenmdering")
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
        console.log(res.data.user)
        this.setState({
          user: res.data.user,
          id:res.data.user.id
        });
            })
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
        this.setState({
          rejection_url:result.info.secure_url,
          modalIsOpen:true
        })
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
  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    if(this.state.company.length===0 || this.state.stage_of_rejection.length===0){
      this.setState({
        errors:"Fields cannot be left blank"
      })
    }
    else{
      let copy={...this.state}
      delete copy["errors"]
      delete copy["display"]
      delete copy["user"]
      delete copy["modalIsOpen"]
      this.props.createRejection(copy)
      this.getProfile()
      this.setState({modalIsOpen:false})
    }
  }
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
        <Modal  className="rejectionModal" isOpen={this.state.modalIsOpen}>
          <form className="rejectionForm" onSubmit={(e)=>this.submitHandler(e)}>
            {this.state.errors ? <h1>{this.state.errors}</h1> :null}
            <input type="text" placeholder="Company Name" name="company" onChange={(e)=>this.changeHandler(e)} value={this.state.company}/>
            <input type="text" placeholder="Stage of rejection" name="stage_of_rejection" onChange={(e)=>this.changeHandler(e)} value={this.state.stage_of_rejection}/>
            <button>Submit</button>
          </form>
          <button onClick={()=>this.setState({modalIsOpen:false})}>Cancel</button>
        </Modal>
        <div className="rejectionsDiv">
          <h1>Rejections</h1>
          {this.state.user.rejections ? (
            <ProfileRejectionContainer
              rejections={this.state.user.rejections}
              OwnProfile={OwnProfile}
              reRender={this.getProfile}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <div>{ this.renderProfile()}</div>;
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
