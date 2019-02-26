/* Gathers list of users*/
import React from "react";
import propTypes from "prop-types";

function ListOfUsers(props) {
  const UserList = props.users.map(function (user, index) {
    return (
      <li key={index}>
        {user.first_name}
      </li>
    );
  });
  return (
    <div>
      {UserList}
    </div>
  );
}

ListOfUsers.propTypes = {
  users: propTypes.string.isRequired
};
export default ListOfUsers;
