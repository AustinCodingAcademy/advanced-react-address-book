import React from "react";


function ListOfUsers(props) {
  return (
    <div>
      <ul>
        {props.arrayOfUsers.map(user => {
          return (
            <li> {user.first_name} </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfUsers;
