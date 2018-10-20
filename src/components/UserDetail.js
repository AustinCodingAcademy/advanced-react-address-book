import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  const {user} = props;
  const {
				id,
				firstName, 
				lastName, 
				occupation, 
				phone, 
				address, 
				avatar
				} = user;
  return (
    <div key={id}>
      <h3>{firstName} {lastName}</h3>
      <h4>{occupation}</h4>
      <p>{phone}</p>
      <p>{address}</p>
      <img src={avatar} />
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired,
};

export default UserDetail;
