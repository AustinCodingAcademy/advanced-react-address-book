import React from "react";

function UserDetail(props) {

  return (
    <div>{props.user[0].first_name}</div>
  );
}

export default UserDetail;
