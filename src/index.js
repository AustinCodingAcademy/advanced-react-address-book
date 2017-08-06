import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

let currentUser = "";

function selectUser(user) {
  return currentUser === user;

}

function render() {
  ReactDOM.render(
    <App
      users={users}
      selectUser={selectUser}
      currentUser={currentUser}
    />,
    document.getElementById("root")
  );
}
render();
