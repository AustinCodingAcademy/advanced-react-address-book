import React from "react";
//import UserDetail from './UserDetail.js';

function ListOfUsers(props) {

  const Names=props.userNames.map(function(userNames,index){
    return (
      <div key={index}>
        {userNames.first_name} {userNames.last_name}
      </div>
    );
  });

  return (
    <div>
      {Names}
    </div>
  );  // end of return

}

export default ListOfUsers;
