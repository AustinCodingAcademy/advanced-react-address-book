import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import users from "./users";

let currentUser;

function selectUser(user) {
  currentUser = user;
  return currentUser;
}

function render() {
  ReactDOM.render(
    <App
      users={users}
      userSelect={selectUser}
      currentUser={currentUser}
    />,
    document.getElementById("root")
  );
}
render();
