import React from 'react';

function UserDetail(props) {
  return (
    <div>
        <h1>{props.user.first_name} {props.user.last_name}</h1>
        <div>{props.user.address}</div>
        <div>{props.user.phone}</div>
        <div>{props.user.occupation}</div>
        <div><img src={props.user.avatar} /></div>
    </div>);
}

export default UserDetail;
