import React from "react";
import "./App.css";
import users from "../users";

function Alphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetList = [];
  let i;
  let noEntry;

  function compareUsers(user) {
    if ((user.last_name).charAt(0) === alphabet[i]) {
      noEntry = false;
      alphabetList.push(
        <p>{user.last_name}, {user.first_name}</p>);
    } else {
      noEntry = true;
    }
  }

  for (i = 0; i <= 25; i++) {
    alphabetList.push(<h2>{alphabet[i]}</h2>);
    users.map(compareUsers);
    if (noEntry) {
      alphabetList.push(<p>(no entry..)</p>);
    }
  }

  return (
    <div>
      <p>{alphabetList}</p>
    </div>
  );
}

export default Alphabet;
