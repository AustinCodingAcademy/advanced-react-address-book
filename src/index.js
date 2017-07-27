import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

var currentUser = '';

function selectUser(user) {
  currentUser = user;
  render();
};

function render() {
  ReactDOM.render(
    <App
    users={users}
    selectUser={selectUser}
    selectedUser={currentUser} />,
    document.getElementById("root")
  );
}
render();

export default selectUser;
