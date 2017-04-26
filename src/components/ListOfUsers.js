import React from "react";
import PropTypes from "prop-types";

function ListOfUsers(props) {
  const userList = props.users.map((user, index) => {
    return (
      <ul key={index}>
        <li>
          {user.first_name}
        </li>
      </ul>
    );
  });
  return (
    <div>
      {userList}
    </div>
  );
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListOfUsers;
