import React from "react";
import UserDetail from "./UserDetail";

function Section2(props) {
  const first = props.user;
  return (
    <div className="Section-content">
      <UserDetail user={first} />
    </div>
  );
}

export default Section2;
