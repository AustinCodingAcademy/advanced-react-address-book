import React from "react";
// import Users from "../Users";

function UserDetails(props) {
  return (
    <li>
      <h4>User {props.id.toString()}</h4>
      <h3>{props.first_name.toUpperCase()}</h3>
      <h3>{props.last_name.toUpperCase()}</h3>
      <h5>User Info</h5>
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <p>{props.occupation}</p>
    </li>
  );
}

export default UserDetails;
