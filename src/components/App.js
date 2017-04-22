import React from "react";
import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import Main from "./Main";
import Footer from "./Footer";
import ListOfUsers from "./ListOfUsers";
import UserDetail from "./UserDetail";
import users from "../users";

function App(props) {
  const firstUser = props.users[0];
  return (
    <div className="App">
      <Header />
      <Intro />
      <Main />
      <Footer />
      <ListOfUsers users={users} />
      <UserDetail user={firstUser} />
    </div>
  );
}

export default App;
