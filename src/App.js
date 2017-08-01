import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import UserDetail from "./components/UserDetail"

function App(props) {
  return (
    <div className="App">
      <ListOfUsers users={props.users}/>
      <UserDetail user={props.users}/>
    </div>
  );
}

export default App;
