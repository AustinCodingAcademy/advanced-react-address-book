import React from "react";
// import Users from "../Users";
import PropTypes from "prop-types";

function UserDetails(props) {

  return (
    <li>
      <h4>User Id: {props.inner.id.toString()}</h4>
      <h3>{props.inner.first_name.toUpperCase()}</h3>
      <h3>{props.inner.last_name.toUpperCase()}</h3>
      <h5>User Info</h5>
      <p>{props.inner.address}</p>
      <p>{props.inner.phone}</p>
      <p>{props.inner.occupation}</p>
    </li>
  );
}

UserDetails.propTypes = {
  inner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequred,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired
  })
};

export default UserDetails;
