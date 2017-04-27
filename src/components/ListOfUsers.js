import React from "react";
import UserDetail from "./UserDetail";

function ListOfUsers(props) {
  const Users = props.users.map((user, index) => (
    <UserDetail
      first_name={user.first_name}
      last_name={user.last_name}
      key={index}
    />
  ))
  return (
    Users[0]
  )
}
export default ListOfUsers;
