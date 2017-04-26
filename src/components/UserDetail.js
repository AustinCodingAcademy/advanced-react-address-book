import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  const firstName = (props.user.first_name);
  const lastName = (props.user.last_name);
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
