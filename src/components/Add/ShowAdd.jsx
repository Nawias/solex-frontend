import React, { Component } from "react";
import { Button, Row, Col, Image, Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faEnvelope,
  faPhoneAlt,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";

class ShowAdd extends Component {
  state = {
    title: undefined,
    description: undefined,
    email: undefined,
    phone: undefined,
    photosUrl: [],
  };

  componentDidMount() {
    let photosurl = [];
    axiosInstance
      .get("public/ogloszenie" + this.props.location.search)
      .then((response) => {
        photosurl = JSON.parse(response.data.photos);
        this.setState({
          title: response.data.title,
          description: response.data.description,
          phone: response.data.phone,
          email: response.data.user.email,
          photosUrl: photosurl,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderPhotos = () => {
    return (
      <Carousel className={" image-in-add bg-secondary my-2"}>
        {this.state.photosUrl.map((item, index) => (
          <Carousel.Item>
            <img
              className={" d-block mx-auto my-auto carusel-img"}
              src={"http://localhost:8080/api/public/" + item}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  render() {
    if (this.state.title === undefined) {
      return <h1>Ładowanie..</h1>;
    }

    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} className={"border-bottom mb-2"}>
            <h4>{this.state.title}</h4>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10} className="bg-secsondary">
            {this.renderPhotos()}
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10} className="flex-space-between border-bottom mb-2">
            <div className={"h4"}>Opis</div>
            <div className={this.props.hideReport ? "hide" : ""}>
              <Link
                to={{
                  pathname: "/nowe-zgloszenie" + this.props.location.search,
                  title: "test",
                }}
              >
                <Button variant={"secondary"}>
                  {" "}
                  <FAIcon icon={faExclamationTriangle} /> Zgłoś
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10}> {this.state.description}</Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10} className="flex-space-between border-top mt-2 pt-3 mb-5">
            <div className={"h4"}>
              <FAIcon icon={faAt} /> E-mail: {this.state.email} <br />
              <FAIcon icon={faPhoneAlt} /> Telefon: {this.state.phone}
            </div>
            <div>
              <Button variant={"secondary"}>
                {" "}
                <FAIcon icon={faEnvelope} /> Napisz wiadomość
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(ShowAdd);
