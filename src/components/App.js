import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import PropTypes from "prop-types";

function App(props) {
  const firstUser = props.users[0];
  return (
    <div className="App">
      <Header />
      <Main users={props.users} user={firstUser} />
    </div>
  );
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
