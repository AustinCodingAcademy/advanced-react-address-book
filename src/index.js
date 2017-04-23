import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import users from "./users";


function render() {
  ReactDOM.render(
    <App users={users}/>,  // send 'users' array to APP.js
    document.getElementById("root")
  );
}
render();
