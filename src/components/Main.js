import React from "react";
import "./App.css";
import UserDetail from "./UserDetail";

function Main() {
  return (
    <p className="App-intro">
      OMG THIS IS REACT.
      THESE ARE ALL THE COOL USERS:
      <UserDetail />
    </p>
  );
}

export default Main;
