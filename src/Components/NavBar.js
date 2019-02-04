import React from "react";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render() {
    return <h1>NavBar</h1>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(NavBar);
