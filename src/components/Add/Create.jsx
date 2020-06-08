import React, { Component } from "react";
import Select from "react-select";
import "@grafikart/drop-files-element";
import {
  InputGroup,
  Button,
  FormControl,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import axiosInstance from "../../helpers/axiosInstance";
import { getJWT } from "../../helpers/JwtHelper";
import { Redirect } from "react-router-dom";

const options = [
  { value: 1, label: "test" },
  { value: 2, label: "test 1" },
  { value: 3, label: "test 3" },
];

export default class Create extends Component {
  state = {
    selectedOption: null,
    redirect: undefined,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log("{");
    for (let pair of data.entries()) {
      console.log(pair[0] + ": " + pair[1] + ",");
    }
    console.log("}");

    let model = {
      id: 0,
      title: data.get("title"),
      description: data.get("description"),
      phone: data.get("phone"),
    };
    let files = data.get("files");

    let formData = new FormData();
    formData.append("model", model);
    formData.append("files", files);

    axiosInstance
      .post("nowe-ogloszenie", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authentication: getJWT(),
        },
      })
      .then((response) => {
        this.setState({ redirect: true });
      });
  };

  render() {
    const { selectedOption, redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <Row className="justify-content-center">
        <Col xs={10}>
          <h4>Nowe ogłoszenie</h4>
          <hr />
        </Col>
        <Col xs={9} className="">
          <form action="#" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Tytuł ogłoszenia</Form.Label>
              <FormControl type="text" name="title" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Kategoria</Form.Label>

              <Select
                name="categoryId"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Opis</Form.Label>
              <FormControl as="textarea" name="description" rows={7} />
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
              <FormControl type="text" name="location" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Telefon (opcjonalnie)</Form.Label>
              <FormControl type="text" name="phone" />
            </Form.Group>

            <Form.Group>
              <FormControl
                type="submit"
                className="btn-secondary"
                value="Dodaj"
              />
            </Form.Group>
          </form>
        </Col>
      </Row>
    );
  }
}