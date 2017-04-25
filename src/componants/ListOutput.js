import React from "react";
import ListOfUsers from "./ListOfUsers";
import propTypes from "prop-types";

function ListOutput(props) {
  return (
    <div className="Section-content">
      <ListOfUsers users={props.users} />
    </div>
  );
}

ListOutput.propTypes = {
  users: propTypes.string.isRequired
};

export default ListOutput;
