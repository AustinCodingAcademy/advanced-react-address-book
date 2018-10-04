import React from "react";
import "./App.css";
// import logo from "./logo.svg";
import Links from "./Links.png";
import Header from "./Header";

function Hund() {
  return (
    <div className="App-header">
      <Header Schild="LINKS" />
      <img src={Links} className="App-links" alt="Links" />
      <h2>Wie geht es ihnen?</h2>
    </div>
  );
}

export default Hund;
