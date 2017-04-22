import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Main(props) {
  const first = props.user;
  return (
    <div className="Main-container">
      <Section1 users={props.users} />
      <Section2 user={first} />
      <Section3 />
    </div>
  );
}

export default Main;
