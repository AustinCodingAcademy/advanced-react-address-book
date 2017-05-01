import React from "react";
import "./App.css";
import PropTypes from "prop-types";

function setUpper(word) {
  let firstLetter = word[0];
  firstLetter = firstLetter.toUpperCase();
  const secondPart = word.slice(1);
  const newWord = firstLetter + secondPart;
  return newWord;
}

function SearchUser({letter, users}) {
  const filteredUsers = [];
  users.map((user) => {
    if (user.last_name[0] === letter) {
      const name = setUpper(user.first_name) + ", " + setUpper(user.last_name) + " ";
      filteredUsers.push(name);
    }
  });
  if (filteredUsers.length === 0) {
    filteredUsers.push("No Entry");
  }
  // for (let i = 0; i < filteredUsers.length; i++) {
  //   var string = " ";
  //   string +=
  // }
  return (
    <div>
      ## {letter.toUpperCase()}
      <br />
      {filteredUsers}
    </div>
  );
}

SearchUser.propTypes = {
  letter: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hide",
      hide: false
    };
  }
  handleButton() {
    this.setState({
      hide: !this.state.hide,
      value: this.state.hide ? "Hide" : "Show"
    });
  }
  render() {
    const Alphabet = ["a","b","c","d","e","f","g","h","i","j","k",
      "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const userItems = Alphabet.map((letter, index) => {
      return (
        <div key={index}>
          <SearchUser letter={letter} users={this.props.users} />
        </div>
      );
    });

    return (
      <div>
        {userItems}
      </div>
    );
  }
}

UserDetail.propTypes = {
  users: PropTypes.array
};

export default UserDetail;
