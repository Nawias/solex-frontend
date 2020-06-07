import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import AddLi from "./AddLi";
import {Row, Col} from "react-bootstrap";
class Search extends Component {
  state = {
    searchResults: undefined,
  };
  constructor(props) {
    super(props);
    fetch("http://localhost:8080/api/public/szukaj" + props.location.search, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            searchResults: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, searchResults } = this.state;
    if (error) {
      return <h1>Error!</h1>;
    } else if (!isLoaded) return <h2>Loading...</h2>;
    else {
      return (
          <Row className="justify-content-center">
            <Col xs={10}>

                {searchResults.map((ad) => (
                      <AddLi title={ad.title} phone={ad.phone} description={ad.description} href={ad.id} />

                  ))}

            </Col>
          </Row>

      );
    }

    return <div></div>;
  }
}

export default withRouter(Search);
