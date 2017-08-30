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
      <ListofUsers selectUser={props.selectUser}
      users={users}/>
      <UserDetail user={props.user}/>
      </div>
    </div>
  );
}

export default App;
