import React from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import UserDetail from "./components/UserDetail";


function App(props) {
	// console.log(props);
  return (
    <div className="App">
      <ListOfUsers users={props.users} />
      <UserDetail user={props.users[0]} />
    </div>
  );
}

export default App;
