import React from "react";
import "./App.css";
import Alphabet from "./Alphabet";
import users from "../users";

function Main() {
  {// const allUsers = users.map(Alphabet);
  }
  return (
    <div className="App-intro">
      THESE ARE ALL THE COOL USERS:
      <Alphabet />
    </div>
  );
}

export default Main;
