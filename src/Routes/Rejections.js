import React from 'react';
import LatestRejectionContainer from "../Containers/LatestRejectionsContainer";
import axios from 'axios'
class Rejections extends React.Component {
  state={
    rejections:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3000/api/v1/rejections')
    .then(res=>{
      this.setState({
        rejections:res.data
      })
    })
  }
  render() {
    return (
      <div className="LatestRejections">
        <LatestRejectionContainer rejections={this.state.rejections}/>
      </div>
    )
  }
}

export default Rejections;
