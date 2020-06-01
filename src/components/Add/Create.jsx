import React, {Component} from "react";
import Select from "react-select";
import '@grafikart/drop-files-element';
import {InputGroup, Button, FormControl, Row, Col, Form, FormGroup, FormLabel} from "react-bootstrap";

const options = [
    {value: 1, label: 'test'},
    {value: 2, label: 'test 1'},
    {value: 3, label: 'test 3'},
];

export default class Create extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            {selectedOption},
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        const {selectedOption} = this.state;
        return (
            <Row className="justify-content-center">
                <Col xs={10}>
                    <h4>Nowe ogłoszenie</h4>
                    <hr/>
                </Col>
                <Col xs={9} className="">
                    <form action="#">
                        <Form.Group>
                            <Form.Label>Tytuł ogłoszenia</Form.Label>
                            <FormControl type="text" name="title"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kategoria</Form.Label>

                            <Select value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                            />

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Opis</Form.Label>
                            <FormControl as="textarea" rows={7}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Zdjęcia</Form.Label>


                            <input
                                type="file"
                                multiple
                                name="files[]"
                                label=" <span class='photos-plus'> + </span> <br /> Przeciągnij i upuść <br/> lub kliknij by wybrać."
                                help=""
                                is="drop-files"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Lokalizacja</Form.Label>
                            <FormControl type="text" name="location"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Telefon (opcjonalnie)</Form.Label>
                            <FormControl type="text" name="phone"/>
                        </Form.Group>

                        <Form.Group>

                            <FormControl type="submit" className="btn-secondary" value="Dodaj" />
                        </Form.Group>


                    </form>
                </Col>
            </Row>
        );
    }
}