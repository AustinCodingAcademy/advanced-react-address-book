import React from "react";
// import logo from "./logo.svg";   moved to Header.js
import "./App.css";
import Body from "./Body.js";
import Footer from "./footer.js";
import Header from "./Header.js";
import ListOfUsers from "./ListOfUsers.js";
import UserDetail from "./UserDetail.js";
import propTypes from "prop-types";


function App(props) {

  return (
    <div className="App">
      <Header name="Nick" />
      <Body />{/* className = App-intro */}
      {/*
         <ComponentX/>
         <UserDetail userDetail={props.usersDB} />
         */}

      <ListOfUsers userNames={props.usersDB} />


      <Footer /> {/* Footer location*/}
    </div>

  );
}

App.propTypes = {
  usersDB: propTypes.array
};


export default App;
