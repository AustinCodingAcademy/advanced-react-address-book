import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import PropTypes from "prop-types";

function Main(props) {
  return (
    <div className="Main-container">
      <Section1
        users={props.users}
        userSelect={props.userSelect}
        currentUser={props.currentUser}
      />
      <Section2
        users={props.users}
      />
    </div>
  );
}

Main.propTypes = {
  userSelect: PropTypes.func.isRequired,
  user: PropTypes.object,
  users: PropTypes.array.isRequired
};

export default Main;
