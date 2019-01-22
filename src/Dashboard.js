import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import App from "./App";
import { logout } from "./Auth.redux";
import { Button } from "antd-mobile";
function Two() {
  return <h2>Two</h2>;
}
function Three() {
  return <h2>Three</h2>;
}
@connect(
  state => state.auth,
  { logout }
)
class Dashboard extends React.Component {
  render() {
    const matchUrl = this.props.match.url;
    const app = (
      <div>
        <h2>dashboard</h2>
        {this.props.isAuth ? (
          <Button type="primary" onClick={this.props.logout}>
            logout
          </Button>
        ) : null}
        <ul>
          <li>
            <Link to={`${matchUrl}/`}>ONE</Link>
          </li>
          <li>
            <Link to={`${matchUrl}/two`}>TWO</Link>
          </li>
          <li>
            <Link to={`${matchUrl}/three`}>THREE</Link>
          </li>
        </ul>
        <Route path={`${matchUrl}/`} exact component={App} />
        <Route path={`${matchUrl}/two`} component={Two} />
        <Route path={`${matchUrl}/three`} component={Three} />
      </div>
    );
    const redirectToLogin = <Redirect to="/login" />;
    return this.props.isAuth ? app : redirectToLogin;
  }
}

export default Dashboard;
