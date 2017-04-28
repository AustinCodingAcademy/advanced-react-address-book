import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddH3 from "./AddH3";
<<<<<<< HEAD
import AddFooter from "./AddFooter.js";
import ListOfUsers from "./ListOfUsers.js";
=======
import AddFooter from "./AddFooter";
import ListOfUsers from "./ListOfUsers";
>>>>>>> 98ed76d9e991a0c4d381d2845a7632b0d1487e7a
import PropTypes from "prop-types";
import AlphabetLetters from "./AlphabetLetters";
import NameList from "./NameList.js";

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <AddH3 />
      <ListOfUsers users={props.users} />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <NameList users={props.users} />
      <AlphabetLetters users={props.users} />
      <AddFooter />

    </div>
  );
}

App.propTypes = {
  users: PropTypes.array,
  alphabet: PropTypes.array
};

export default App;
