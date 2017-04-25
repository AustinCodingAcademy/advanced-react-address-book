import React from "react";
import * as Helpers from "../constants";
import PropTypes from "prop-types";


function UserDetails(props) {
  const { first_name, last_name, phone, address, occupation} = Helpers.selectUser(props.arrayOfUsers, 0);
  return (
    <div>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p>{phone}</p>
      <p>{address}</p>
      <p>{occupation}</p>
    </div>
  );
}

UserDetails.propTypes = {
  arrayOfUsers: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  })
};

export default UserDetails;
