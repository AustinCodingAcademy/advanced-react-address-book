import React, {Component} from "react";
import PropTypes from "prop-types";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButtonWasClicked: false,
    };
  }

  handleClick() {
    this.setState({
      hideButtonWasClicked: !this.state.hideButtonWasClicked
    });
  }

  render() {
    const userList = this.props.users.map((user, index) => {
      if (!this.state.hideButtonWasClicked) {
        return (
          <ul key={index}>
            <li>
              {user.firstName} {user.lastName}
            </li>
          </ul>
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        {userList}
        <button
          onClick={this.handleClick.bind(this)}>
          {this.state.hideButtonWasClicked ? "Show" : "Hide"}
        </button>
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListOfUsers;
