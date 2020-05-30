import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

export default class IndexCom extends Component {
  render() {
    return (
      <Jumbotron className=" jumbotron-fluid main-jumbo">
        <h1 className="display-5">SOLEX - Serwis Ogłoszeń Lokalnych</h1>
        <p className="lead"> Twoje miejsce w internecie</p>
      </Jumbotron>
    );
  }
}
