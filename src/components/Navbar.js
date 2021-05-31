import React from "react";
import {
  // Switch, Route,
  Link,
} from "react-router-dom";
// import App from "../App";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch> */}
    </div>
  );
}
