import React from "react";
import "./App.css";
import users from "../users";
import Button from "./Button";

function ListOfUsers() {
  const allUsers = users.map(printUsers);
  return (
    <div key={allUsers.id} >{allUsers}</div>
  );
}

function printUsers(user) {
  return (
    <div key={user.id} id={"container-" + user.id}>
      <p>{user.last_name}, {user.first_name}</p>
      <div id="showDetail">
        <Button user={user} />
      </div>
    </div>
  );
}

export default ListOfUsers;
