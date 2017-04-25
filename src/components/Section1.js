import React from "react";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";

function Section1(props) {
  return (
    <div className="Section-content">
      <ListOfUsers users={props.users} />
    </div>
  );
}

Section1.propTypes = {
  users: PropTypes.array
};

export default Section1;
