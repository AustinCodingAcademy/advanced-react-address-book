import React from "react";
import PropTypes from "prop-types";
import HideButton from "./HideButton.js";

function AlphabetLetters(props) {
  const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];



  const AlphabetInsert = letters.map((letter) => {
    const firstLetter = props.users.filter((user) => {
      return user.lastName[0] === letter;
    });
    return (
      <ul key={letter.index}>
        {letter}
        {firstLetter.map((user) => {
          return firstLetter.length ? <HideButton key={user.id} user={user} /> :
          <li> No Entries </li>;
        }
          )
        }
      </ul>
    );
  }
);

  return (
    <ul>
      {AlphabetInsert}
    </ul>
  );

}


export default AlphabetLetters;

AlphabetLetters.propTypes = {
  letters: PropTypes.array,
  users: PropTypes.array
};
