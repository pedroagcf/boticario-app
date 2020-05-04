import React from "react";
import { render } from "react-dom";
import "../src/fonts/MyriadPro-Regular.ttf";
import "./index.css";
import App from "../src/Components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
