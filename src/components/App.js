import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import UserDetails from "./UserDetails";



function App(props) {
  // const userDetail = props.users.map(function (user,index) {
  //   return (
  //     <div>
  //       <li>
  //         {user.first_name}
  //       </li>
  //       <li>
  //         {user.last_name}
  //       </li>
  //       <li>
  //         {user.phone}
  //       </li>
  //     </div>
  //   );
  // });

  // const listOfUsers = props.users.map(function (user,index) {
  //   return (
  //     <li>
  //       {user.first_name}
  //     </li>
  //   );
  // });
  console.log(props.arrayOfUsers[0]);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-intro">
        <h2>Welcome!</h2>
        <ListOfUsers arrayOfUsers={props.arrayOfUsers} />
        <UserDetails arrayOfUsers={props.arrayOfUsers} />
      </div>
    </div>
  );
}

export default App;
