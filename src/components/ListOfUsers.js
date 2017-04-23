import React from "react";
import Users from "../users";
import UserDetails from "./UserDetails";

function ListOfUsers(props) {

  const objectsOfUsers = Users.map((item) => {
    return (
      <UserDetails key={item.id} id={item.id} first_name={item.first_name}
        last_name={item.last_name} address={item.address}
        phone={item.phone} occupation={item.occupation} />
    );
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.content}
      </p>
      <ul>
        {objectsOfUsers[0]}
      </ul>
    </div>
  );
}

export default ListOfUsers;
