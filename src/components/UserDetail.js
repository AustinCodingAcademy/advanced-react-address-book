import React from "react";
import "./App.css";

function UserDetail(props) {
  const UserEins = props.users[0].first_name;
  return (
    <p>
      {UserEins}
    </p>
  );
}



export default UserDetail;
