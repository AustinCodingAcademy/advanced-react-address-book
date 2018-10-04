import React from "react";
import "./App.css";
import "./App.js";
import logo from "../logo.svg";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{props.headerMessage}</h2>
    </div>
  );
}
Header.propTypes = {
  headerMessage: PropTypes.string.isRequired
};
export default Header;

// proptypes.shape() -.isRequired
// which proptypes would you put in app.js, only prop types for the app component
