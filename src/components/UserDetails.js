import React from "react";
// import Users from "../Users";
import PropTypes from "prop-types";

function UserDetails({inner}) {
  const {id, first_name, last_name, address, phone, occupation} = inner;

  return (
    <li>
      <h4>User Id: {id.toString()}</h4>
      <h3>{first_name.toUpperCase()}</h3>
      <h3>{last_name.toUpperCase()}</h3>
      <h5>User Info</h5>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{occupation}</p>
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
