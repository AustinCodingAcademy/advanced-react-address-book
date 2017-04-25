import React from "react";
import UserDetail from "./UserDetail";
import PropTypes from "prop-types";

function Section2(props) {
  const first = props.user;
  return (
    <div className="Section-content">
      <UserDetail user={first} />
    </div>
  );
}

Section2.propTypes = {
  user: PropTypes.object
};

export default Section2;
