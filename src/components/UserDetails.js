import React from "react";


function UserDetails(props) {
  return (
    <div>
      <ol>
        {props.arrayOfUsers.map(user => {
          return (
            <li> {user.occupation} </li>
          );
        })}
      </ol>
    </div>
  );
}

export default UserDetails;
