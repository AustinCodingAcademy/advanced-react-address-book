import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail";


function AlphabetLetters(props) {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  return (
    <div>
      {letters.map((letter, index) => {
        return (
          <div key={index}>
            <h4> {letter} </h4>
            <UserDetail users={props.users} />
          </div>
        );
      }
  )
}
    </div>

  );
}

AlphabetLetters.propTypes = {
  letters: PropTypes.array,
  users: PropTypes.array
};

export default AlphabetLetters;
