import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import axios from "axios";
import App from "./App";
axios.defaults.baseURL = "http://fut.az/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("fut.az");

ReactDOM.render(<App />, document.getElementById("root"));
