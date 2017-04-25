import React from "react";
import propTypes from "prop-types";

function Compsix(props) {
  return (
    <div className="App-header">

      <h3>{props.message} </h3>

    </div>

  );
}
Compsix.propTypes = {
  message: propTypes.string.isRequired
};


export default Compsix;
