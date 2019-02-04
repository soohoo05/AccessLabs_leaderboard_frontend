import React from 'react';

class CohortSelect extends React.Component {

  render() {
    let {cohort, changeHandler} = this.props
    return (
      <select value={cohort} onChange={(e)=>changeHandler(e)} name="cohort_name">
        <option value="---">---</option>
        <option value="Winter is Coding">Winter is Coding</option>
      </select>
    )
  }
}

export default CohortSelect;
