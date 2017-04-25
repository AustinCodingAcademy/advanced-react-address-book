import React from "react";
import UserDetail from "./UserDetail";
import propTypes from "prop-types";

function DetailOutput(props) {
  const first = props.user;
  return (
    <div className="Section-content">
      <UserDetail user={first} />
    </div>
  );
}
DetailOutput.propTypes = {
  user: propTypes.string.isRequired
};



export default DetailOutput;
