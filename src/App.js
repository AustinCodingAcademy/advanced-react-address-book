import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import PropTypes from "prop-types";

// This loops through the list of users and gathers info about them (first last)
// It creates a paragraph for each and returns that information to userItems
// Paragraph needs the key because it needs to know the same
// list is present even if it has been reordered.
// Since react monitors for changes, if I reorder the list
// in some way it would need to run through all users again.
// By giving it a key of the user ID, I ensure that
// even if the list changes order react has some anchor point for
// it to realize this is the same list as before, saving in performance.
// As long as this key has not changed, do not recalculate the list.

// Could have index as argument for userItems = function
// Changed App(props) to app({userArray}) to directly access userArray
// within the props object. (just shorthand)
function App({userArray}) {
  const userItems = userArray.map(function (user) {
    return (
      <p key={user.id}>
        First Name: {user.first_name + " "}
        <br />
        Last Name: {user.last_name}
        <br />
        Phone: {user.phone}
        <br />
      </p>
    );
  });

  return (
    <div className="App">
      <Header message="some message" />
      <Header message="some other message" />
      {
        // Display all the information I gathered from user items.
      }
      {userItems}
      <Intro />
    </div>
  );
}

// Note lowercase propTypes method
App.propTypes = {
  userArray: PropTypes.array.isRequired
};
export default App;
