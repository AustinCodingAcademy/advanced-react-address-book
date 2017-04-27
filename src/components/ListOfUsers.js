import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail.js";

function ListOfUsers(props) {
  const userinfo = props.users.map((item) => {
    return (
      <UserDetail key={item.id} item={item} />
    );
  }
  );

  return (
    <div>
      <ul>
        {userinfo}
      </ul>
    </div>
  );

}

ListOfUsers.propTypes = {
  users: PropTypes.array
};

export default ListOfUsers;
