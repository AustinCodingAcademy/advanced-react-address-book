import React from "react";



function UserDetails(props) {
  const address = props.arrayOfUsers[0].address;
  const occupation = props.arrayOfUsers[0].occupation;
  const phone = props.arrayOfUsers[0].phone;
  const avatar = props.arrayOfUsers[0].avatar;
  return (
    <div>
      <h2>User Details</h2>
      <p> {occupation} <br /> {address} <br /> {phone} <br /> <img src={avatar} /></p>
    </div>
  );
}

export default UserDetails;
