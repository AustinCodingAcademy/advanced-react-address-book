import React from "react";
import PropTypes from "prop-types";
import HideButton from "./HideButton.js";


function UserDetail(props) {
  
  return (
    <div>
      <h3> {props.users.firstName} </h3>
      <h3> {props.users.lastName} </h3>
      <HideButton user={users} />
    </div>
  );

}

UserDetail.propTypes = {
  users: PropTypes.array,
  firstName: PropTypes.array,
  lastName: PropTypes.array,
  address: PropTypes.array,
  phone: PropTypes.array,
  occupation: PropTypes.array,
  item: PropTypes.array,
  toggled: PropTypes.array
};


export default UserDetail;
