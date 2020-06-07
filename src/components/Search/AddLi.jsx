import React, {Component} from "react";
import { Button,  Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {  faPencilAlt, faTimes  } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class MyAdds extends Component {

    render() {
        return (
            <Link to={"/ogłoszenie?id="+this.props.href}  style={{ textDecoration: 'none',color: 'black' }}>
                <Row className="my-3 border py-2">
                    <Col xs={2}>
                        <Image src="solex-192.png" thumbnail fluid className={"add-img"} />
                    </Col>

                    <Col xs={7} className=" align-items-center align-content-stretch">
                    <span className={"text-size-2x"}>
                  <b> {this.props.title}</b>
                    </span> <br/>
                        Telefon: {this.props.phone} <br/>
                        {(this.props.description).substr(0,100)}...
                    </Col>

                </Row>
            </Link>


        );
    }
}