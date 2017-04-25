import React from "react";
import PropTypes from "prop-types";

function ListOfUsers(props) {
  return (
    <div>
      <hr />
      {props.arrayOfUsers.map(user => {
        return (
          <p> {user.firstName} </p>
        );
      })}
    </div>
  );
}

ListOfUsers.propTypes = {
  arrayOfUsers: PropTypes.array
};

export default ListOfUsers;
