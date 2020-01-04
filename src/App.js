import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail";
import ListOfUsers from "./components/ListOfUsers";

function App(props) {
  return (
    <div className="App">
      <ListOfUsers
        users={props.users}
        selectUser={props.selectUser}
        currentUser={props.currentUser}
      />

      <UserDetail
        currentUser={props.currentUser}
      />
    </div>
  );
}

export default App;
