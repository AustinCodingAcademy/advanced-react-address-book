import React from "react";
import "./App.css";
import ListOfUsers from "./ListOfUsers";

function RightSidebar() {
  return (
    <div className="App-RightSidebar">
      <p>Available users:</p>
      <ListOfUsers />
    </div>
  );
}

export default RightSidebar;
