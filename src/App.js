import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import apple from "./apple.svg";
import france from "./france.svg";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={france} className="App-logo" alt="logo" />
        <h2>We're rockin NOW!!! </h2>
      </div>
      <p className="App-intro">
      Day 1 - Form Learning Teams<br />
      Day 3 - Team Charters are due<br />
      Day 5 - Learning Teams submit project proposals<br />
      Day 9 -  Learning Team Check-ins<br />
      Day 15 - Learning Team Check-ins<br />
      Day 20 - Learning Team Project Presentations.
      </p>
    </div>
  );
}

export default App;
