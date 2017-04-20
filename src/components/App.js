import React from "react";
// import logo from "./logo.svg";
import "../App.css";
// import apple from "./apple.svg";
// import france from "./france.svg";
import Header from "./Header";
import SmileyFace from "./Smiley";
import Main from "./Main";
import Insert from "./Insert";
// import users from "./users";
import Component5 from "./Component5";
import Component6 from "./Component6";
import ComponentX from "./Component7";


function App() {
  return (
    <div className="App">
      <Header />
      <Insert message="We got this." />
      <Main />
      <SmileyFace />
      <Component5 />
      <Component6 />
      <ComponentX />
    </div>

  );
}



export default App;
