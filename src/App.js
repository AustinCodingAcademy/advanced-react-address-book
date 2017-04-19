import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Marquee() {
  return (
    <marquee> Welcome back Mr Messnier</marquee>
  );
}

function AddH3() {
  return (
    <h3> Enjoy your stay </h3>
  );
}

function AddH4() {
  return (
    <h4> Learn something when you are here <br />
     Ivo will be disappointed if you do not </h4>
  );
}

function AddFooter() {
  return (
    <footer className="foot"> This site was made by someone at ACA then
      editied by  Scott Foster </footer>
  );
}

function ZacMarquee() {
  return (
    <marquee className="zac"> Glad you are back Zac </marquee>
  );
}

function SidebarLeft() {
  return (
    <h6 className="sidebarleft"> This is a sidebar </h6>
  );
}

function SidebarRight() {
  return (
    <h6 className="sidebarright"> This is a sidebar </h6>
  );
}

function App() {
  return (

    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <Marquee />
      </div>
      <ZacMarquee />
      <AddH3 />
      <AddH4 />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <SidebarLeft />
      <SidebarRight />
      <AddFooter />
    </div>


  );
}

export default App;
