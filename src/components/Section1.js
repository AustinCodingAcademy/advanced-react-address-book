import React from "react";
import ListOfUsers from "./ListOfUsers";

function Section1(props) {
  return (
    <div className="Section-content">
      <ListOfUsers users={props.users} />
    </div>
  );
}

export default Section1;
