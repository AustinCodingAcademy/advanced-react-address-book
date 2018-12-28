import React from "react";
import "../App.css";
import IndexList from "../components/IndexList";
import Header from "./Header";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";


function App({users}) {
  return (
    <div className="App">
      <Header />
      <IndexList />
      <ListOfUsers content={users} />
    </div>
  );
}

App.propTypes = {
  users: PropTypes.array.isRequired

};

export default App;
