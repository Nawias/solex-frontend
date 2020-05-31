import React, {Component} from "react";
import {InputGroup, Button, FormControl, Row, Col, Form, FormGroup} from "react-bootstrap";

export default class Register extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                <Col xs={4} className="border p-3">
                    <h3>Zarejestruj się</h3>
                    <form action="#" method="POST">
                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            <FormControl type="text" placeholder="Login" name="login" required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <FormControl type="text" placeholder="E-mail" name="email" required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Hasło</Form.Label>
                            <FormControl type="password" placeholder="Hasło" name="password" required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Powtórz hasło</Form.Label>
                            <FormControl type="password" placeholder="Powtóz hasło" name="confirm_password" required/>
                        </Form.Group>
                        <Row className="flex-column-right mr-1">
                            <Form.Group>
                                <Button variant="secondary">Zarejestruj się</Button>
                            </Form.Group>
                        </Row>

                        Masz już konto? <a href="/login">Zaloguj się</a>
                    </form>
                </Col>
            </Row>
        );
    }
}
