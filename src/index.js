import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

var currentUser = '';

function SelectUser(user) {
  // console.log(user);
  currentUser = user;
};

console.log(currentUser);

function render() {
  ReactDOM.render(
    <App
    users={users}
    user={currentUser} />,
    document.getElementById("root")
  );
}
render();

export default SelectUser;
