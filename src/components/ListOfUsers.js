import React from "react";

function ListOfUsers(props) {
  const userList = props.users.map((user, index) => {
    return (
      <ul key={index}>
        <li>
          {user.first_name}
        </li>
      </ul>
    );
  });
  return (
    <div>
      {userList}
    </div>
  );
}

export default ListOfUsers;
