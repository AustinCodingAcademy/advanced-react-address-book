import React from "react";

function UserDetail(props) {
  return (
    <li>
      {props.first_name}
      &nbsp;
      {props.last_name}
    </li>
  );
}

export default UserDetail;
