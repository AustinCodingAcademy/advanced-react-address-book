import React from "react";

function UserDetail(props) {
  const firstName = (props.user.first_name);
  const lastName = (props.user.last_name);
  return (
    <ul>
      <li>{firstName} {lastName}</li>
    </ul>
  );
}

export default UserDetail;
