import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import users from "./users";
import alphabet from "./Alphabet.js";



function render() {
  ReactDOM.render(
    <App users={users} alphabet={alphabet} />,
    document.getElementById("root")
  );
}
render();
