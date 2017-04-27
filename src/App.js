import React from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";


function App(props) {
	// console.log(props);
  return (
    <div className="App">
      <ListOfUsers users={props.users} />
    </div>
  );
}

export default App;
