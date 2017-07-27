import React from 'react';

function UserDetail(props) {
  return <div>
    <h1>{props.selectedUser.first_name} {props.selectedUser.last_name}</h1>
    <div>{props.selectedUser.address}</div>
    <div>{props.selectedUser.phone}</div>
    <div>{props.selectedUser.occupation}</div>
    <div><img src={props.selectedUser.avatar} /></div>
  </div>
}

export default UserDetail;
