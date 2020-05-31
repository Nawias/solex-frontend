import React from "react";
import Index from "./components/Index";
import Search from "./components/Search";
import Login from "./components/Login";
import Head from "./components/Head";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Head />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
