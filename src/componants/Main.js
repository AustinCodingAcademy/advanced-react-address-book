import React from "react";
import ListOutput from "./ListOutput";
import DetailOutput from "./DetailOutput";
import propTypes from "prop-types";

function Main(props) {
  const first = props.user;
  return (
    <div className="Main-container">
      <ListOutput users={props.user} />
      <DetailOutput user={first} />
    </div>
  );
}

Main.propTypes = {
  user: propTypes.string.isRequired
};

export default Main;
