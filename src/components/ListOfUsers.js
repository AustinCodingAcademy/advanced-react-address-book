import React from "react";
import "./App.css";
import users from "../users";

function ListOfUsers() {
  function printUsers(user) {
    return (
      <p>{user.first_name}</p>
    );
  }
  const allUsers = users.map(printUsers);
  return (
    <p>{allUsers}</p>
  );
}

export default ListOfUsers;
