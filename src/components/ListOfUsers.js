import React from "react";
import "./App.css";
import users from "../users";
import Button from "./Button";
import UserDetail from "./UserDetail";

function ListOfUsers() {
  const allUsers = users.map(printUsers);
  return (
    <div>{allUsers}</div>
  );
}

function printUsers(user) {
  const userDetail = UserDetail(user);
  return (
    <div>
      <p>{user.last_name}, {user.first_name}</p>
      <div>
        <Button />
        <userDetail key={user.id} />
      </div>
    </div>
  );
}

export default ListOfUsers;
