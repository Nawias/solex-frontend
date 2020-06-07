import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Search extends Component {
  state = {
    searchResults: undefined,
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/api/public/szukaj" + this.props.location.search
      )
      .then((response) => {
        this.setState({
          isLoaded: true,
          searchResults: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { error, isLoaded, searchResults } = this.state;
    if (error) {
      return <h1>Error!</h1>;
    } else if (!isLoaded) return <h2>Loading...</h2>;
    else {
      return (
        <ul>
          {searchResults.map((ad) => (
            <li key={ad.title}>
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
              <p>Telefon: {ad.phone}</p>
            </li>
          ))}
        </ul>
      );
    }

    return <div></div>;
  }
}

export default withRouter(Search);
