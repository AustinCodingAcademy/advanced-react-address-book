import React from "react";
import "./App.css";

function UserDetail(user) {
  return (
    <div>
      <p>hello</p>
      <p>{user.address}</p>
      <p>{user.phone}</p>
      <p>{user.occupation}</p>
    </div>
  );
}

export default UserDetail;
