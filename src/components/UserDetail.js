import React from "react";

function UserDetail(props) {

  return(
    <div>
      <img src={props.currentUser.avatar} alt=""/>
      <div>{props.currentUser.first_name} {props.currentUser.last_name}</div>
      <div>{props.currentUser.address}</div>
      <div>{props.currentUser.phone}</div>
      <div>{props.currentUser.occupation}</div>
    </div>
  );
}

export default UserDetail;
