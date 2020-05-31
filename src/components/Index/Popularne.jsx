import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
class Popularne extends Component {
  state = { cards: [1, 2, 3, 4] };
  render() {
    return (
      <div>
        <h3>Popularne dzisiaj</h3>
        <Row md="5" style={{ alignItems: "center" }}>
          {this.state.cards.map((card) => (
            <Karta card={card} />
          ))}
          <Col>
            <FAIcon icon={faArrowCircleRight} size="5x" />
          </Col>
        </Row>
      </div>
    );
  }
}

class Karta extends Component {
  render = () => {
    return (
      <div style={{ padding: "5px" }}>
        <Card>
          <Card.Img variant="top" src="solex-192.png" />
          <Card.Body>
            <Card.Text>Samochód: {this.props.card}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };
}

export default Popularne;
