import React from "react";
import PropTypes from "prop-types";

function Section2() {
  return (
    <div className="Section-content">
      stuff
    </div>
  );
}

Section2.propTypes = {
  users: PropTypes.array.isRequired
};

export default Section2;
