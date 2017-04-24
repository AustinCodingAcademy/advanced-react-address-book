import React from "react";
import ListOutput from "./ListOutput";
import DetailOutput from "./DetailOutput";


function Main(props) {
  const first = props.user;
  return (
    <div className="Main-container">
      <ListOutput users={props.users} />
      <DetailOutput user={first} />

    </div>
  );
}

export default Main;
