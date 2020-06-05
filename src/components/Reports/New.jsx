import React, {Component} from "react";
import {InputGroup, Button, FormControl, Row, Col, Form, FormGroup, FormLabel, Container} from "react-bootstrap";

export default class Create extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} className={"border-bottom"}>
                        <h4>Złoszenie dot. "{this.props.title}"</h4>
                    </Col>
                </Row>

                <Row className="justify-content-center my-3">
                    <Col xs={10} >
                        <form action="#" method={"POST"}>
                            <FormGroup>
                                <FormLabel>Proszę opisać powód zgłoszenia </FormLabel>
                                <FormControl as="textarea" rows={7} name={"description"}/>

                            </FormGroup>

                        </form>
                    </Col>

                </Row>
                <Row className="justify-content-center my-3">
                    <Col xs={1}>
                        <Button variant={"secondary"} size={"lg"}>Wyślij</Button>

                    </Col>
                </Row>
            </Container>

        );
    }
}