import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListofUsers from "./components/ListofUsers"
import UserDetail from "./components/UserDetail"


function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Address Book</h2>
      </div>
      <div>
      <br></br>
      <ListofUsers users={props.users}/>
      <UserDetail user={props.users[0]}/>
      </div>
    </div>
  );
}

export default App;
