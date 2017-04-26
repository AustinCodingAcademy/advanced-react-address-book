import React from "react";
import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import Main from "./Main";
import Footer from "./Footer";
import PropTypes from "prop-types";

function App(props) {
  const firstUser = props.users[0];
  return (
    <div className="App">
      <Header />
      <Intro />
      <Main users={props.users} user={firstUser} />
      <Footer />
    </div>
  );
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
