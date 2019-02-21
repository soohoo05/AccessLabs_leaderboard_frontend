import React from 'react';
import axios from 'axios'
class AddCohort extends React.Component {
  state={
    name:""
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e =>{
    e.preventDefault()
    axios.post('https://leaderboard-backend.herokuapp.com/api/v1/cohorts',{
        name:this.state.name
    })
    .then(res =>{
      alert('Cohort Added')
    })
  }
  render() {
    return(
        <div className = "container">
      <div className = "login-form">
      <form>
      <h2 className="text-center">Add a Cohort</h2>
      <div className = "form-group">
         <input
           type="text"
           placeholder="Cohort Name"
           value={this.state.name}
           name="name"
           onChange={e => this.changeHandler(e)}
           className="form-control"
         />
         </div>
         <div className = "form-group">
             <button
             onClick={(e) => this.submitHandler(e)}
             className="btn btn-primary btn-block"
             >
             Submit</button>
             </div>
        </form>
      </div>
      </div>
    )
  }
}

export default AddCohort;
