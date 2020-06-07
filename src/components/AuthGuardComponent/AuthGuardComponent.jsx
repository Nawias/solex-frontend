import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { getJWT, getRole } from "../../helpers/JwtHelper";

class AuthGuardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: undefined };
  }

  componentDidMount() {
    const { roles } = this.props;
    const jwt = getJWT();
    if (!jwt) {
      this.setState({ authenticated: false });
      return;
    }
    const role = getRole();
    if (roles.includes(role)) this.setState({ authenticated: true });
    else this.setState({ authenticated: false });
  }

  render() {
    if (this.state.authenticated === undefined) return <h1>Loading...</h1>;
    else if (this.state.authenticated) return this.props.children;
    else return <Redirect to={"/login"} />;
  }
}

export default withRouter(AuthGuardComponent);
