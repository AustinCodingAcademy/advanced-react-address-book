import React from "react";


function UserDetail(props) {

  const details=props.userDetails.map(function(userDetails,index){
    return (
      <div key={index}>
        {userDetails.address} {userDetails.Phone} {userDetails.occupation}
      </div>
    );
  });

  return (
    <div>
      {details}
    </div>
  );

}

export default UserDetail;
