import React from "react";
import "./App.css";
import users from "../users";
import Alphabet from "./Alphabet";
import Button from "./Button";

function ListOfUsers() {
  function printUsers(user) {
    return (
      <div>
        <p>{user.last_name}, {user.first_name}</p>
        <Button />
      </div>
    );
  }
  const allUsers = users.map(printUsers);
  return (
    <div>{allUsers}</div>

  );
}

export default ListOfUsers;
