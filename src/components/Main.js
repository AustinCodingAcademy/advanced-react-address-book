import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import PropTypes from "prop-types";

function Main(props) {
  return (
    <div className="Main-container">
      <Section1 users={props.users} />
      <Section2 users={props.users} />
      <Section3 user={props.user} />
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

export default Main;
