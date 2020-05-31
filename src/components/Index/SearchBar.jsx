import React, { Component } from "react";
import { InputGroup, Button, FormControl, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <Row lg="3">
        <Col />
        <InputGroup md="auto">
          <FormControl
            placeholder="Szukaj ogłoszeń"
            aria-label="Szukaj ogłoszeń"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="secondary">
              <FAIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Col />
      </Row>
    );
  }
}

export default SearchBar;
