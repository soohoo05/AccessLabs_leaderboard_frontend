import React from "react";
import ProfileRejectionContainer from "../Containers/ProfileRejectionsContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";
import Modal from 'react-modal';
import { makeRejection } from "../Actions/UserActions";
import Fade from 'react-reveal/Fade';

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
          id:res.data.user.id
        });
            })
  }
  imageSubmit = () => {
    var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: "drxxuymxa",
        uploadPreset: "o8bboijd"
      },
      (error, result) => {
        if (result.info.secure_url) {
        this.setState({
          rejection_url:result.info.secure_url,

        })
        }
        else{
        }
      }
    );
  };
  renderCloudinary = () => {
    return (
      <CloudinaryContext cloudName="dz1dbcszc" className="signupbuttons">
        <button
          className="btn"
          color="black"
          id="upload_widget_opener"
          onClick={() => this.imageSubmit()}
        >
          Upload a picture
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
      this.setState({
        modalIsOpen:false,
        company:"",
        stage_of_rejection:"",
        errors:""})
    }
  }

  renderProfile = () => {
    console.log(this.state.user.rejections)
    return (
      <React.Fragment>
        <Fade left duration={1000}>
        <div className="left-profile">
        <img
          src={this.state.user.avatar}
          alt="avatar"
          className="avatarOnProfile"
        />
        <h1>
          Name: {this.props.user.f_name} {this.props.user.l_name}
        </h1>
        <h1>Username: {this.props.user.username}</h1>
        <h1>Cohort Name: {this.props.user.cohort_name}</h1>
        <button
          className="rejectionButton"
          color="black"
          id="upload_widget_opener"
          onClick={() => this.setState({modalIsOpen:true})}
        >
          Upload a Rejection
        </button>
      </div>
    </Fade>

        <Modal  className="rejection-modal " isOpen={this.state.modalIsOpen} style={{overlay:{ backgroundColor: 'rgba(0, 0, 0, 0.9)'
    }}}>

    <h1 >Rejection</h1>
          <form className="rejection-form" onSubmit={(e)=>this.submitHandler(e)}>
        <div className = "form-group">
            <input className="form-control"
            type="text" placeholder="Company Name"
            name="company"
            onChange={(e)=>this.changeHandler(e)}
            value={this.state.company}
            required = "required"/>
        </div>
        <div className = "form-group">
            <input className="form-control"
            type="text"
            placeholder="Stage of rejection"
            name="stage_of_rejection"
            onChange={(e)=>this.changeHandler(e)} value={this.state.stage_of_rejection}
            required = "required"/>
            </div>
            <div className = "form-group">

            {this.renderCloudinary()}
          </div>

<div className = "form-group">
            <button className="btn submit">Submit</button>
            </div>
            <div className = "form-group">
            <button className="btn cancel" onClick={()=>this.setState({modalIsOpen:false})}>Cancel</button>
            </div>
          </form>
        </Modal>
        <Fade right duration={1000}>

        <div className="rejectionsDiv">
          <h1 className="rejection-header">Rejections</h1>
          {this.state.user ? (
            <ProfileRejectionContainer
              rejections={this.props.user.rejections}
              reRender={this.getProfile}
            />
          ) : null}
        </div>
      </Fade>
      </React.Fragment>
    );
  };
  render() {
    return <div className="profileDiv">{this.state.user ? this.renderProfile() : null}</div>;
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
