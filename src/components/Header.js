import React from "react";
import "./App.css";

function Header(props) {
  return (
    <header>{props.Schild}</header>
  );
}

// Header.propTypes = {
//   Schild: React.PropTypes.node,
// };

export default Header;
