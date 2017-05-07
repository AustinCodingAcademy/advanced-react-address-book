import React from "react";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";

function Section1(props) {
  return (
    <div className="Section-content">
      <ListOfUsers
        users={props.users}
        userSelect={props.userSelect}
        currentUser={props.currentUser}
      />
    </div>
  );
}

Section1.propTypes = {
  userSelect: PropTypes.func,
  users: PropTypes.array.isRequired
};

export default Section1;
