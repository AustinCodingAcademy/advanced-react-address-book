import React from "react";
import PropTypes from "prop-types";


function AlphabetSideBar({item}) {

  return (
    <div>
      <h5> {item.firstName} </h5>
      <h5> {item.lastName} </h5>
      <h6> {item.address} </h6>
      <h6> {item.phone} </h6>
      <h6> {item.occupation} </h6>
      <h6> {item.avatar} </h6>

    </div>
  );
}



AlphabetSideBar.propTypes = {
  users: PropTypes.array,
  firstName: PropTypes.array,
  lastName: PropTypes.array,
  address: PropTypes.array,
  phone: PropTypes.array,
  occupation: PropTypes.array,
  avatar: PropTypes.array,
  item: PropTypes.object,
};

export default AlphabetSideBar;
