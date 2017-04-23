import React from "react";
import UserDetail from './UserDetail.js';

function ListOfUsers(props) {
  const names = props.userItems;
  console.log(names);

  const address = props.userItems2.map((userItems2,index) =>
    <div key={index}>
      {userItems2} {index}
    </div>
);


  return (
    <div>
      <UserDetail address={address}/>
    </div>
  );  // end of return

}

export default ListOfUsers;
