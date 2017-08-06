import React from "react";

function UserDetail(props) {

  return(
    <div>
      {props.user.first_name}
    </div>
  );
}

export default UserDetail;
