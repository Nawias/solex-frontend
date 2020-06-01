import React, {Component} from "react";
import {Button, FormControl, Row, Col, Form, FormGroup} from "react-bootstrap";

export default class Login extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                <Col xs={4} className="border p-3">
                    <h3>Zaloguj się</h3>
                    <form action="#" method="POST">
                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            <FormControl type="text" placeholder="Login" name="login" required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Hasło</Form.Label>
                            <FormControl type="password" placeholder="Hasło" name="password" required/>
                        </Form.Group>

                        <Row className="flex-column-right mr-2">
                            <Form.Group>
                                <Form.Check type="checkbox" label="Zapamiętaj mnie"/> <br/>
                            </Form.Group>

                            <Form.Group>
                                <Button  variant="secondary">Zaloguj się</Button>
                            </Form.Group>
                        </Row>

                        Nie masz konta? <a href="/register">Zarejestruj się</a>
                    </form>
                </Col>
            </Row>
        );
    }
}
