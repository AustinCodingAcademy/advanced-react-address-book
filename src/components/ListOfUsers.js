import React from "react";


function ListOfUsers(props) {
  return (
    <div>
      <hr />
        {props.arrayOfUsers.map(user => {
          return (
            <p> {user.first_name} </p>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
