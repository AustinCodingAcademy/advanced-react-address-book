import React from "react";

function ListOfUsers(props) {

  const userDiv = props.users.map(user => <div key={user.id}>{user.first_name}</div>);
  return (
    <div>
      {userDiv}
    </div>
  );
}

export default ListOfUsers;
