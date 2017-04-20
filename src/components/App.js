import React from "react";
import "./App.css";
import Eins from "./Eins";
import Zwei from "./Zwei";
import Drei from "./Drei";
import Vier from "./Vier";
import Funf from "./Funf";
import UserDetail from "./UserDetail";
import users from "../users";


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
      <UserDetail users={users} />
      {Menschen}
      <Vier />
      <Funf />
    </div>
  );
}

// App.propTypes = {
//   users: React.PropTypes.node,
// };

export default App;
