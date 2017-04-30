import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import Alphabet from "Alphabet";

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
      hidden: !this.state.hidden,
      value: this.state.hidden ? "Hide" : "Show"
    });
  }
  render() {
    const userItems = this.props.users.map((user, index) => {
      function setUpper(word) {
        let firstLetter = word[0];
        firstLetter = firstLetter.toUpperCase();
        const secondPart = word.slice(1);
        const newWord = firstLetter + secondPart;
        return newWord;
      }
      /*
      # loop through each of the alphabet letters (a through z)
      # determine if there is user(s) for the leter (user.first_name)
      # if yes, return the name of the user
      # if no, return "no entry" (ternery operator)
      */
      const name = setUpper(user.first_name) + " " + setUpper(user.last_name);
      return (
        <div key={index}>
          <li>{name}
            <button onClick={() => this.handleButton()}>
              {this.state.value}
            </button>
          </li>
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
  users: PropTypes.arrayOf(Object)
};

export default UserDetail;
