import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import {
  faUser,
  faUserCog,
  faAd,
  faEnvelope,
  faDesktop,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

export default class Konto extends Component {
  state = {
    role: 1,
  };
  render() {
    return (
      <div className="row">
        <Dropdown alignRight>
          <Dropdown.Toggle variant="light" id="konto-dropdown">
            <FAIcon icon={faUser} size="2x" /> Konto
            {this.renderDropdownMenu()}
          </Dropdown.Toggle>
        </Dropdown>
      </div>
    );
  }
  renderDropdownMenu = () => {
    switch (this.state.role) {
      case 0: //not logged in
        return (
          <Dropdown.Menu>
            <Dropdown.Item>
              <FAIcon icon={faUserPlus} fixedWidth />
              Zarejestruj się
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.logIn}>
              <FAIcon icon={faSignInAlt} fixedWidth />
              Zaloguj się
            </Dropdown.Item>
          </Dropdown.Menu>
        );
      case 1: //user
        return (
          <Dropdown.Menu>
            <Dropdown.Header>Moje</Dropdown.Header>
            <Dropdown.Item>
              <FAIcon icon={faAd} fixedWidth />
              Ogłoszenia
            </Dropdown.Item>
            <Dropdown.Item>
              <FAIcon icon={faEnvelope} fixedWidth />
              Wiadomości
            </Dropdown.Item>
            <Dropdown.Item>
              <FAIcon icon={faUserCog} fixedWidth />
              Ustawienia
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as="button" onClick={this.logOut}>
              <FAIcon icon={faSignOutAlt} fixedWidth />
              Wyloguj się
            </Dropdown.Item>
          </Dropdown.Menu>
        );
      case 2: //admin
        return (
          <Dropdown.Menu>
            <Dropdown.Header>Moje</Dropdown.Header>
            <Dropdown.Item>
              <FAIcon icon={faAd} fixedWidth />
              Ogłoszenia
            </Dropdown.Item>
            <Dropdown.Item>
              <FAIcon icon={faEnvelope} fixedWidth />
              Wiadomości
            </Dropdown.Item>
            <Dropdown.Item>
              <FAIcon icon={faUserCog} fixedWidth />
              Ustawienia
            </Dropdown.Item>
            <Dropdown.Item>
              <FAIcon icon={faDesktop} fixedWidth />
              Panel Administracyjny
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={this.logOut}>
              <FAIcon icon={faSignOutAlt} fixedWidth />
              Wyloguj się
            </Dropdown.Item>
          </Dropdown.Menu>
        );
    }
  };
  logOut = () => {
    this.setState({ role: 0 });
  };
  logIn = () => {
    this.setState({ role: 2 });
  };
}
