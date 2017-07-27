import React from "react";

function UserDetail(props) {
  let user = props.current;
  return (
    <div>
      <h3>User Detail</h3>
      <img src={user.avatar} alt={user.first_name} />
      <p>{user.id}. {user.first_name} {user.last_name} ({user.occupation})</p>
      <p>Phone:{user.phone}</p>
      <p>{user.address}</p>
    </div>
  );
}

export default UserDetail;
