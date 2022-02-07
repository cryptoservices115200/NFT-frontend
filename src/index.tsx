import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import "./index.css";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import reportWebVitals from "./reportWebVitals";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/aboutus" component={About} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
