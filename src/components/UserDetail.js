import React from "react";


function UserDetail(props) {

  // const details=props.userDetails.map(function(userDetails,index){
  //   return (
  //     <div key={index}>
  //       {userDetails.address} {userDetails.Phone} {userDetails.occupation}
  //     </div>
  //   );
  // });

const address = props.userDetails[0].address;
const avatar = props.userDetails[0].avatar;
const occupation = props.userDetails[0].occupation;
const phone = props.userDetails[0].phone;

  return (
    <div>
      <h3> User Details</h3>
    <hr />
      {address}  {occupation}  {phone}  {avatar}
    </div>
  );

}

export default UserDetail;
