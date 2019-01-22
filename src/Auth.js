import React from "react";
import { connect } from "react-redux";
import { login, getUserData } from "./Auth.redux";
import { Redirect } from "react-router-dom";
// import Axios from "axios";
@connect(
  state => state.auth,
  { login, getUserData }
)
class Auth extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: {} };
  // }
  componentDidMount() {
    this.props.getUserData();
    // Axios.get("/data").then(res => {
    //   if (res.status === 200) {
    //     this.setState({ data: res.data });
    //   }
    // });
  }
  render() {
    return (
      <div>
        <h2>User: {this.props.user}</h2>
        {this.props.isAuth ? <Redirect to="dashboard" /> : null}
        <h2>You don't have permission, please login!</h2>
        <button onClick={this.props.login}>login</button>
      </div>
    );
  }
}

export default Auth;
