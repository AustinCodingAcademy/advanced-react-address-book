import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Component8 from './Component8.js';

function Component1() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function Component2() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function Component3() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function Component4() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function Component5() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function Component6() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function Component7() {
  return (
    <h3>Experimental Added Component</h3>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
      </div>
      <p className="App-intro">
        <h2>Welcome!</h2>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />

        <Component8 />
      </p>
    </div>
  );
}

export default App;
