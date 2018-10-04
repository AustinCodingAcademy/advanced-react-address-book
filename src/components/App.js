import React from "react";
import "./App.css";
import Eins from "./Eins";
import Zwei from "./Zwei";
import Drei from "./Drei";
import Vier from "./Vier";
import Funf from "./Funf";
import Oxford from "./Oxford";
import ListOfUsers from "./ListOfUsers";
import UserDetail from "./UserDetail";
import users from "../users";


function App(props) {
  return (
    <div className="App">
      <Eins />
      <Zwei />
      <Drei />
      <Oxford />
      <ListOfUsers />
      <UserDetail users={users} />
      <Vier />
      <Funf />
    </div>
  );
}

// App.propTypes = {
//   users: React.PropTypes.node,
// };

export default App;
