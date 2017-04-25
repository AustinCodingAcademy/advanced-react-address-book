import React from "react";
import * as Helpers from "../constants";
import PropTypes from "prop-types";


function UserDetails(props) {
  const {firstName, lastName, phone, address, occupation, avatar} = Helpers.selectUser(props.arrayOfUsers, 0);
  return (
    <div>
      <img src={avatar} />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{phone}</p>
      <p>{address}</p>
      <p>{occupation}</p>
    </div>
  );
}

UserDetails.propTypes = {
  arrayOfUsers: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })
};

export default UserDetails;
