import React from "react";
import propTypes from "prop-types";

function Header(props) {
  return (
    <div className="App-header">
      <h1>{props.message} </h1>
    </div>
  );
}

Header.propTypes = {
  message: propTypes.string.isRequired
};

export default Header;
