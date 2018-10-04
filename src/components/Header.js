import React from "react";
import "./App.css";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>{props.Schild}</header>
  );
}

Header.propTypes = {
  Schild: PropTypes.string.isRequired
};

// Header.propTypes = {
//   Schild: React.PropTypes.node,
// };

export default Header;
