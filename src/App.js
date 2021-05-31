import React from "react";
import "./styles/App.css";

import ParticleComp from "./components/particles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
            <ParticleComp />
          </Route>
          <Route path="/history">
            <HistoryPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
