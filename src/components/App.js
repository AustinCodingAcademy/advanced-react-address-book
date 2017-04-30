import React from "react";
import "./App.css";
import Eins from "./Eins";
import Zwei from "./Zwei";
import Drei from "./Drei";
import Vier from "./Vier";
import Funf from "./Funf";
import ListOfUsers from "./ListOfUsers";
import UserDetail from "./UserDetail";
import users from "../users";
import PropTypes from "prop-types";


function App(props) {
  const Menschen = props.users.map(function (user, index) {
    const name = user.first_name + " " + user.last_name;
    return (
      <li key={index}>
        {name}
      </li>
    );
  });
  return (
    <div className="App">
      <Eins />
      <Zwei />
      <Drei />
      <ListOfUsers />
      <UserDetail users={users} />
      <Vier />
      <Funf />
    </div>
  );
}

App.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
  })).isRequired,
};

export default App;
