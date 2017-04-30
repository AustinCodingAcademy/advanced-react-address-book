import React from "react";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import UserDetail from "./UserDetail";

function RightSidebar() {
  return (
    <div className="App-RightSidebar">
      <p>Some cool users:</p>
      <ListOfUsers />
    </div>
  );
}

export default RightSidebar;
