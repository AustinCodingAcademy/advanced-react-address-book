import React, {Component} from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      searchText: "",
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    };
  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const renderLetters = (users, letters) => letters.map((letter, index) => {
      if (this.state.visible) {
        return (
          <ul key={index}>
            <h1>{letter}</h1>
            { users.map((user, index) => {
              return (user.lastName.substring(0, 1).toUpperCase() === letter) ?
                <UserDetail key={index} user={user} /> : null;
            })}
          </ul>
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <form>
          <input
            type="text"
            label="Search"
            value={this.state.searchText}
            onChange={(event) => {
              this.setState({
                searchText: event.target.value
              });
            }}
          />
        </form>
        {renderLetters && renderLetters(this.props.users, this.state.letters)}
        <button
          onClick={this.handleClick.bind(this)}>
          {this.state.visible ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListOfUsers;
