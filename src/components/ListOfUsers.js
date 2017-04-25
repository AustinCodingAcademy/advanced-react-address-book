import React from "react";

function ListOfUsers(props) {
	// console.log(props);
  const users = props.users;
  console.log("list users", users);
  const userDivs = users.map(function (users, index) {
    return <div key={users.id}>{users.firstName}</div>;
  });
  console.log(userDivs);
  return (
    <div>
      {userDivs}
      <button>Hide</button>
    </div>
  );
}

export default ListOfUsers;

