import React, { Component } from "react";
import { Dropdown, Image } from "react-bootstrap";
import Konto from "./Konto";

export default class Head extends Component {
  render() {
    return (
      <div className="solex-head">
        <Image src="logo192.png" thumbnail></Image>
        <Konto />
      </div>
    );
  }
}
