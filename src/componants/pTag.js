import React from "react";
import propTypes from "prop-types";

function Ptag(props) {
  return (
    <div className="App-header">
      <p>{props.message} </p>
    </div>
  );
}

Ptag.propTypes = {
  message: propTypes.string.isRequired
};

export default Ptag;
