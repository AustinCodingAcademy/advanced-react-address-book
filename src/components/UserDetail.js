import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  const firstName = (props.user.firstName);
  const lastName = (props.user.lastName);
  return (
    <ul>
      <li>{firstName} {lastName}</li>
    </ul>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserDetail;
