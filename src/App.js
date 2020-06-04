import React from "react";
import Index from "./components/Index";
import Search from "./components/Search";
import Login from "./components/Login";
import Head from "./components/Head";
import Register from "./components/Register";
import Create from "./components/Add/Create";
import MyAdds from "./components/Add/MyAdds";
import ShowAdd from "./components/Add/ShowAdd";
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
  document.title = "Solex - System ogłoszeń lokalnych";

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

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/nowe-ogloszenie">
            <Create />
          </Route>

          <Route path="/moje-ogloszenia">
            <MyAdds />
          </Route>

          <Route path="/ogłoszenie">
            <ShowAdd />
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
