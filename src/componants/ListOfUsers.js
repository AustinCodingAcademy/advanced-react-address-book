/* Gathers list of users*/
import React from "react";

function ListOfUsers(props) {
  const UserList = props.users.map(function(user, index) {
    return (
      <li key={index}>
        {user.first_name}
      </li>

    );
  });
  return (
    <div>
      {UserList}
    </div>
  );
}

export default ListOfUsers;
