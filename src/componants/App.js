import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Ptag from "./pTag";
import Appintro from "./appIntro";
import AnotherComp from "./Another-comp";
import Pic from "./picture";
import CompSix from "./CompSix";
import Seven from "./seven";
import Main from "./Main";

// add seven additional things to this ract app

function App(props) {
  const UserInfo = props.users[0];
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header message="React: header test" />

      </div>
      <Appintro />
      <Ptag message="React: paragraph tag test" />
      <Main users={props.users} user={UserInfo} />
      <AnotherComp />
      <Pic />
      <CompSix message="number six" />
      <Seven />
    </div>
  );
}

export default App;
