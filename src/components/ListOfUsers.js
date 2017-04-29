import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userList = this.props.users.map((user, index) => {
      return (
        <ul key={index}>
          <li>
            {user.firstName} {user.lastName}
          </li>
        </ul>
      );
    });
    return (
      <div>
        {userList}
        <Button />
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListOfUsers;
