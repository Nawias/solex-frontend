
import React, {Component} from "react";
import {Button, Row, Col, Image, Container, Carousel, Spinner} from "react-bootstrap";
import {FontAwesomeIcon as FAIcon} from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faEnvelope,
  faPhoneAlt,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

import { Link, withRouter } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";
import Loading from "../SimpleComponents/Loading";


class ShowAdd extends Component {
    state = {
        title: undefined,
        description: undefined,
        email: undefined,
        phone: undefined,
        category: undefined,
        photosUrl: [],
    };


    componentDidMount() {

        let photosurl = [];
        axiosInstance.get("/public/ogloszenie" + this.props.location.search)
            .then((response) => {
                console.log(response);
                photosurl = JSON.parse(response.data.photos);
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    phone: response.data.phone,
                    email: response.data.user.email,
                    category: response.data.category,
                    photosUrl: photosurl,

                });

            })
            .catch((error) => {
                console.log(error)

            });
    }

    renderPhotos = () => {
        if (this.state.photosUrl.length === 0) {
            return (
                <Carousel className={" image-in-add  my-2"} controls={false} indicators={false}>

                    <Carousel.Item>
                        <img className={" d-block mx-auto my-auto carusel-img"}
                             src={"solex-full.png"}/>
                    </Carousel.Item>


                </Carousel>)
        } else {
            return (
                <Carousel className={" image-in-add  my-2"} interval={10000}>
                    {this.state.photosUrl.map((item, index) => (
                        <Carousel.Item>
                            <img className={" d-block mx-auto my-auto carusel-img"}
                                 src={"http://localhost:8080/api/public/" + item}/>
                        </Carousel.Item>
                    ))}

                </Carousel>)
        }


    };

    categoryBar = () => {
        let link = [];
        let category = this.state.category;
        while (true) {
            if (category.parent === null) {

                link.push(<Link to={"/szukaj?query=&catId=" + category.id}>{category.name}</Link>);
                link.push(<Link to={"/"}>Solex</Link>);
                link.reverse();
                return <div>  {link.map((li,i) => (

                    <span>{li} {(link.length === (i+1)) ? '': '->' } </span>
                ))} </div>;
            } else {
                link.push(<Link to={"/szukaj?query=&catId=" + category.id}>{category.name}</Link>);
                category = category.parent;
            }
        }
    };

    render() {
        if (this.state.title === undefined) {
            return (
                <Loading/>
            );

        }

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} className={"border-bottom mb-2"}>
                        {this.categoryBar()}
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
                            <Link to={"/nowe-zgloszenie" + this.props.location.search}>
                                <Button variant={"secondary"}>
                                    {" "}
                                    <FAIcon icon={faExclamationTriangle}/> Zgłoś
                                </Button>
                            </Link>

                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={10}>
                        {" "}
                        {this.state.description}
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={10} className="flex-space-between border-top mt-2 pt-3 mb-5">
                        <div className={"h4"}>
                            <FAIcon icon={faAt}/> E-mail: {this.state.email} <br/>
                            <FAIcon icon={faPhoneAlt}/> Telefon: {this.state.phone}
                        </div>
                        <div>
                            <Button variant={"secondary"}>
                                {" "}
                                <FAIcon icon={faEnvelope}/> Napisz wiadomość
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(ShowAdd);
