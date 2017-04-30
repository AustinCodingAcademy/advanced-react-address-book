import React from "react";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from "prop-types";
import Alphabet from "Alphabet";
=======
>>>>>>> parent of bb2bf1b... Homework Eins 2
=======
>>>>>>> parent of bb2bf1b... Homework Eins 2
=======
>>>>>>> parent of bb2bf1b... Homework Eins 2

const UserDetail = React.createClass({
  getInitialState: function () {
    return {
      value: "Hide",
      hide: true
    };
  },
  changeButtonText() {
    this.setState({
      hide: !this.state.hide
    });
    if (this.state.hide) {
      this.setState({
        value: "Hide"
      });
    } else {
      this.setState({
        value: "Show"
      });
    }
  },
  render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> parent of bb2bf1b... Homework Eins 2
=======
>>>>>>> parent of bb2bf1b... Homework Eins 2
=======
>>>>>>> parent of bb2bf1b... Homework Eins 2
    return (
      <div>
        <button onClick={() => this.changeButtonText()}>
          {this.state.value}
        </button>
      </div>
    );
  }
});

export default UserDetail;
