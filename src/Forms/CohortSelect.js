import React from "react";
import axios from 'axios'
class CohortSelect extends React.Component {
  state={
    cohorts:[]
  }
  componentDidMount(){
    axios.get(`https://leaderboard-backend.herokuapp.com/api/v1/cohorts`)
    .then(res=>{
      this.setState({
        cohorts:res.data
      })
    })
  }
  render() {

    let { cohort, changeHandler } = this.props;
    let names=this.state.cohorts.map(cohort=> <option value={cohort.name} key={cohort.id}>{cohort.name}</option>)
    return (
      <select
        value={cohort}
        onChange={e => changeHandler(e)}
        name="cohort_name"
        className = "form-control"
      >
        <option value="---">---</option>
        {names}
      </select>
    );
  }
}

export default CohortSelect;
// <option value="Timbledore's Army">Timbledore's Army</option>
// <option value="Straight Outta Terminal">Straight Outta Terminal</option>
//
// <option value="<Slack>ers">&lt;Slack&gt;ers</option>
// <option value="Octothorpes">Octothorpes</option>
// <option value="class Class">class Class</option>
// <option value="Kiss My Hash">Kiss My Hash</option>
// <option value="Full Snack Devs">Full Snack Devs</option>
// <option value="Directory's Child">Directory's Child</option>
// <option value="Winter is Coding">Winter is Coding</option>
