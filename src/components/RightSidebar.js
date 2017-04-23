import React from "react";
import "./App.css";
import ListOfUsers from "./ListOfUsers";

function RightSidebar() {
  return (
    <p className="App-RightSidebar">
      Some cool users:
      <ListOfUsers />
    </p>
  );
}

export default RightSidebar;
