import React, {Component} from "react";
import {Button, Row, Col, Image, Container} from "react-bootstrap";
import {FontAwesomeIcon as FAIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTimes, faExclamationTriangle, faEnvelope, faPhoneAlt,faAt} from "@fortawesome/free-solid-svg-icons";

export default class MyAdds extends Component {

    render() {
        return (
            <Container >
                <Row className="justify-content-center">
                    <Col xs={10} className={"border-bottom mb-2"}>
                        <h4>{this.props.title}Tytuł ogłoszenia</h4>

                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={10}>
                        <Image className={"border image-in-add"} src={"solex-full.png"}/>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={10} className="flex-space-between border-bottom mb-2">
                            <div className={"h4"}>Opis</div>
                            <div>
                                <Button variant={"secondary"}> <FAIcon icon={faExclamationTriangle}/> Zgłoś</Button>
                            </div>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={10} > {this.props.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum eleifend ipsum, eu pellentesque dui varius nec. In condimentum urna mi, vitae dignissim sem semper id. Praesent sed ipsum varius lacus ornare tempor in eu neque. Sed commodo felis id turpis pharetra placerat. Aliquam tincidunt maximus scelerisque. Duis placerat laoreet ipsum. Etiam non pretium libero. Proin ac dolor dui. Integer lacus ipsum, laoreet eu dui in, rhoncus tincidunt neque. Etiam sed elit dui.

                        Quisque pharetra commodo mi non consequat. Sed at fringilla lacus. Proin in purus quis risus malesuada pellentesque. Suspendisse diam lectus, elementum vitae tincidunt id, ornare sit amet sem. Vestibulum id massa eu lacus tempus commodo sed a quam. Etiam elit turpis, dapibus at tempor sed, accumsan a tortor. Quisque non tortor non ex sollicitudin dapibus sit amet sit amet ligula.</Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={10} className="flex-space-between border-top mt-2 pt-3 mb-5">
                        <div className={"h4"}> <FAIcon icon={faAt}/> E-mail: lorem@ipsum.com <br/>
                            <FAIcon icon={faPhoneAlt}/> Telefon: 123 456 789</div>
                        <div>
                            <Button variant={"secondary"}> <FAIcon icon={faEnvelope}/> Napisz wiadomość</Button>
                        </div>
                    </Col>
                </Row>
            </Container>


        );
    }
}