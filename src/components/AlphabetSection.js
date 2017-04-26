import React from "react";
// import PropTypes from "propTypes";
import NameTitle from "./NameTitle";
import Users from "../users";

function AlphabetSection(props) {
    // for(i=0, i < content.length(), i++) {
  return (
    <div>
      <li>
        An alphabet section with {props.letter} and
      </li>
      {props.content.map((person) => {
        <NameTitle name={Users[1]} />
        }
      )}
    </div>
  );
}

export default AlphabetSection;
