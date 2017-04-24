import React from "react";


function UserDetail(props) {
console.log(props.userDetails[0])

const details=props.userDetails.map(function(userDetails,index){
return (
  <div key={index}>

    {userDetails.address} {userDetails.Phone}
  
    </div>
);
});



  return (
    <div>
      <h3>user detail users </h3>
       {details}
    </div>
  );

}

export default UserDetail;
