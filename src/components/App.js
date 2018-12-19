import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main
        users={props.users}
        userSelect={props.userSelect}
        currentUser={props.currentUser}
      />
    </div>
  );
}

App.propTypes = {
  userSelect: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default App;
