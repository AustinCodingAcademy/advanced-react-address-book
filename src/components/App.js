import React from "react";
import "../App.css";
import Header from "./Header";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="App">
      <Header />
      <ListOfUsers content={props.users} />
    </div>
  );
}

App.propTypes = {
  users: PropTypes.array.isRequired

};

export default App;
