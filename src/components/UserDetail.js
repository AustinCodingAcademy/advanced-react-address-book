import React from "react";
import PropTypes from "prop-types";


function UserDetail({item, toggled}) {
  return (
    <div>
      <h3> {item.firstName} </h3>
      <h3> {item.lastName} </h3>
      {
        toggled ?
          <div>
            <h4> {item.address} </h4>
            <h4> {item.phone} </h4>
            <h4> {item.occupation} </h4>
            <h4> {item.avatar} </h4>
          </div> : null
    }
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
