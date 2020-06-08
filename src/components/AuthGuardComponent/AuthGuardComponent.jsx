import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { getJWT, getRole } from "../../helpers/JwtHelper";

class AuthGuardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: undefined };
  }

  componentDidMount() {
    this.listener = setInterval(() => this.loadUser(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.listener);
  }

  loadUser = () => {
    const { roles } = this.props;
    const jwt = getJWT();
    if (!jwt) {
      this.setState({ authenticated: false });
      return;
    }
    const role = getRole();
    if (role == this.state.role) return;
    if (roles.includes(role)) this.setState({ authenticated: true });
    else this.setState({ authenticated: "insufficent_permissions" });
  };

  render() {
    if (this.state.authenticated === undefined) return <h1>Loading...</h1>;
    else if (this.state.authenticated === true) return this.props.children;
    else if (this.state.authenticated === "insufficent_permissions")
      return <h1>Nie masz uprawnień do wyświetlenia tej strony</h1>;
    else return <Redirect to={"/login"} />;
  }
}

export default withRouter(AuthGuardComponent);
