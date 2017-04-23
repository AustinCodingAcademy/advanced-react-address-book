import React from "react";
import "./App.css";
import users from "../users";

function UserDetail() {
  function printUserDetail(user) {
    return (
      <div>
        <p>{user.first_name}</p>
        <p>{user.last_name}</p>y
        <p>{user.address}</p>
        <p>{user.phone}</p>
        <p>{user.occupation}</p>
      </div>
    );
  }
  const allUsers = users.map(printUserDetail);
  return (
    <p>{allUsers}</p>
  );
}

export default UserDetail;
