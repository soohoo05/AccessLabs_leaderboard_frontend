import React from "react";

class CohortSelect extends React.Component {
  render() {
    let { cohort, changeHandler } = this.props;
    return (
      <select
        value={cohort}
        onChange={e => changeHandler(e)}
        name="cohort_name"
        className = "form-control"
      >
        <option value="---">---</option>
        <option value="Timbledore's Army">Timbledore's Army</option>
        <option value="Straight Outta Terminal">Straight Outta Terminal</option>

        <option value="<Slack>ers">&lt;Slack&gt;ers</option>
        <option value="Octothorpes">Octothorpes</option>
        <option value="class Class">class Class</option>
        <option value="Kiss My Hash">Kiss My Hash</option>
        <option value="Full Snack Devs">Full Snack Devs</option>
        <option value="Directory's Child">Directory's Child</option>
        <option value="Winter is Coding">Winter is Coding</option>
      </select>
    );
  }
}

export default CohortSelect;
