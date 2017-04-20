import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Component8 from "./Component8.js";
import Component7 from "./Component7.js";
import Component6 from "./Component6.js";
import Component5 from "./Component5.js";
import Component4 from "./Component4.js";
import Component3 from "./Component3.js";
import Component2 from "./Component2.js";
import Component1 from "./Component1.js";




function App(props) {
  const userItems = props.users.map(function(user,index) {
    return (
      <li>
        {user.first_name}
        {user.last_name}
      </li>
    );
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p className="App-intro">
        <h2>Welcome!</h2>
        <Component1 message="Props Messsage Test"/>
        <Component2 />
        {userItems}
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
