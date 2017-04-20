import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./componants/Header";
import Ptag from "./componants/pTag";
import Appintro from "./componants/appIntro";
import AnotherComp from "./componants/Another-comp";
import Pic from "./componants/picture";
import CompSix from "./componants/CompSix";
import Seven from "./componants/seven";
// add seven additional things to this ract app


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header message="This is a new header" />

      </div>
      <Appintro />
      <Ptag message="Paragaph tag test" />
      <AnotherComp />
      <Pic />
      <CompSix message="number six" />
      <Seven />
    </div>
  );
}

export default App;
