import React from "./react";
import logo from "./logo.svg";

function Header(props) {
  const userItems = props.users.map(function(user){
    return (
      <p>
      {user.first_name};
      {user.last_name};
      </p>
    );
  });
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"
        <h2>Welcome to React</h2>
        {userItems}
      </div>
  );
}

export default Header;
