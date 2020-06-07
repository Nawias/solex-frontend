import React from "react";
import Index from "./components/Index";
import Search from "./components/Search";
import Login from "./components/Login";
import Head from "./components/Head";
import Register from "./components/Register";
import Create from "./components/Add/Create";
import MyAdds from "./components/Add/MyAdds";
import ShowAdd from "./components/Add/ShowAdd";
import Panel from "./components/Admin/Panel";
import New from "./components/Reports/New";
import Check from "./components/Reports/Check";
import Conversation from "./components/Conversation";
import AuthGuardComponent from "./components/AuthGuardComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import NewAdds from "./components/Admin/NewAdds";

function App() {
  document.title = "Solex - System ogłoszeń lokalnych";

  return (
    <div>
      <Router>
        <Head />
        <Switch>
          {/*Public routes */}
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/ogłoszenie">
            <ShowAdd />
          </Route>

          <Route path="/szukaj">
            <Search />
          </Route>

          {/*User routes*/}
          <AuthGuardComponent roles={["ROLE_USER", "ROLE_ADMIN"]}>
            <Route path="/nowe-ogloszenie">
              <Create />
            </Route>

            <Route path="/moje-ogloszenia">
              <MyAdds />
            </Route>

            <Route path="/nowe-zgloszenie">
              <New title={"Laptop"} />
            </Route>
            <Route path="/konwersacja">
              <Conversation />
            </Route>
          </AuthGuardComponent>

          {/*Admin routes*/}
          <AuthGuardComponent roles={["ROLE_ADMIN"]}>
            <Route path="/sprawdz-zgloszenie">
              <Check title={"Laptop"} />
            </Route>

            <Route path="/admin-panel">
              <Panel active="new" content={NewAdds} />
            </Route>

            <Route path="/admin-panel-reports">
              <Panel active="reports" content={NewAdds} />
            </Route>
          </AuthGuardComponent>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
