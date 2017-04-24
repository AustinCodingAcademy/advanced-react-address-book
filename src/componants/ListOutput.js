/*Outputs the list of users*/
import React from "react";
import ListOfUsers from "./ListOfUsers";

function ListOutput(props) {
  return (
    <div className="Section-content">
      <ListOfUsers users={props.users} />
    </div>
  );
}

export default ListOutput;
