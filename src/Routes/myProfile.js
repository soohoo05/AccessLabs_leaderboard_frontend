import React from "react";
import ProfileRejectionContainer from "../Containers/ProfileRejectionsContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";
import Modal from 'react-modal';
import { makeRejection, DeleteUser } from "../Actions/UserActions";
import Fade from 'react-reveal/Fade';

class Profile extends React.Component {
    state = {
       display: false,
       user: "",
       rejectionModalIsOpen: false,
       deleteModalIsOpen: false,
       company: "",
       stage_of_rejection: "",
       rejection_url: "http://www.quickmeme.com/img/1b/1bdd483c84e47993b5d0c4b6ff0d07da2bf2234c17ff3966b0078b0af9606560.jpg",
       errors: "",
       id: ""
     };
  componentDidMount() {
    this.getProfile()
  }
  getProfile = () =>{
    let theUsername = this.props.history.location.pathname.split("/")[2];
    let token = localStorage.getItem("token");
    axios.get("https://leaderboard-backend.herokuapp.com/api/v1/profile", {
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
          onClick={(e)=>{
              e.preventDefault()
              this.imageSubmit()}
            }
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
      delete copy["rejectionModalIsOpen"]
      this.props.createRejection(copy)
      this.getProfile()
      this.setState({
        rejectionModalIsOpen:false,
        company:"",
        stage_of_rejection:"",
        errors:""})
    }
  }

  renderProfile = () => {

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
        <h2>Username: {this.props.user.username}</h2>
        <h2>Cohort: {this.props.user.cohort_name}</h2>
        <button
          className="rejectionButton"
          color="black"
          id="upload_widget_opener"
          onClick={() => this.setState({ rejectionModalIsOpen: true })}
        >
          Upload a Rejection
        </button>
        <br />
        <br />

        <button
          className="rejectionButton"
          color="black"
          onClick={() => this.setState({ deleteModalIsOpen: true })}
        >
          I got a Job!
        </button>
      </div>
    </Fade>
    <Modal
              className="rejection-modal"
              isOpen={this.state.deleteModalIsOpen}
              style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
            >
              <h1>Does that mean you would like to delete your profile?</h1>
              <button className="btn" onClick={()=>this.props.deleteUser(this.state.user.id,this.props.history)}>Yes!</button>
              <br />
              <br />

              <button className="btn" onClick={()=>this.setState({deleteModalIsOpen:false})}>No!</button>
            </Modal>
        <Modal  className="rejection-modal " isOpen={this.state.rejectionModalIsOpen} style={{overlay:{ backgroundColor: 'rgba(0, 0, 0, 0.9)'
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
              <p>Note: Do your best to submit a picture without the employers name.</p>
            {this.renderCloudinary()}
          </div>

<div className = "form-group">
            <button className="btn submit">Submit</button>
            </div>
            <div className = "form-group">
            <button className="btn cancel" onClick={()=>this.setState({rejectionModalIsOpen:false})}>Cancel</button>
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
    },
    deleteUser : (id,history) =>{
      dispatch(DeleteUser(id,history))
    }
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile));
