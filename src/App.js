import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInfo from "./components/UserInfo";
import UserDetail from "./components/UserDetail";
import ListOfUsers from "./components/ListOfUsers";
import CreateUser from "./components/CreateUser";

function App(props) {
  console.log(props);
  console.log(props.users);
  return (
    <div className="App">
      <CreateUser />
      <ListOfUsers users={props.users} />
      <UserDetail user={props.users[0]} />
      <UserInfo test={props} />
    </div>
  );
}

export default App;
