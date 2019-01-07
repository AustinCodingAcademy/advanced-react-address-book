import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import UserDetails from "./UserDetails";
import PropTypes from "prop-types";



function App(props) {

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-intro">
        <h2>User List</h2>
        <ListOfUsers arrayOfUsers={props.arrayOfUsers} />
        <hr /><h2>User Details</h2><hr />
        <UserDetails arrayOfUsers={props.arrayOfUsers} />
      </div>
    </div>
  );
}

App.propTypes = {
  arrayOfUsers: PropTypes.array
};

export default App;
