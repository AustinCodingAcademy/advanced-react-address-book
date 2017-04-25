import React from "react";
import logo from "./logo.svg";

function Header(props) {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Header;
