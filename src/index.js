import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import Users from "./users";
// import users from "./users";


function render() {
  ReactDOM.render(
    <App users={Users} />,
    document.getElementById("root")
  );
}



render();
