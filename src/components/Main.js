import React from "react";
import "./App.css";
import Alphabet from "./Alphabet";
import users from "../users";

function Main() {
  { // const allUsers = users.map(Alphabet);
  }
  return (
    <div className="App-intro">
      <p>THESE ARE ALL THE COOL USERS:</p>
      <Alphabet />
    </div>
  );
}

export default Main;
