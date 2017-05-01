import React from "react";
import logo from "./logo.svg";

function Header(props) {

  return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React   {props.name} </h2>
        <p>Test update Edits</p>
      </div>
    );

  }


export default  Header;
