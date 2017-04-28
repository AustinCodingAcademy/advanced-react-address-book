import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail.js";



<<<<<<< HEAD
function AlphabetLetters() {
=======
function AlphabetLetters(props) {
>>>>>>> 98ed76d9e991a0c4d381d2845a7632b0d1487e7a
  const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  const AlphabetInsert = letters.map((letter) => {
    return (
      <ul key={letter.index}>{letter}</ul>
    );
  }
);
<<<<<<< HEAD


  return (
    <ul>
      {AlphabetInsert}
    </ul>  
  );
}

=======
  // const UserInfo = props.users.map((item) => {
  //   return (
  //     <UserDetail key={item.id} item={item.lastName} />
  //   );
  // }
  // );


  return (
    <AlphabetInsert />
  );
}








>>>>>>> 98ed76d9e991a0c4d381d2845a7632b0d1487e7a
export default AlphabetLetters;

AlphabetLetters.propTypes = {
  letters: PropTypes.array,
  users: PropTypes.array
};
